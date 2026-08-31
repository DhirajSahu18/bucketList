"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function PrivateTripForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Himachal & Manali",
    preferredDates: "",
    numberOfTravellers: "5-8",
    approximateBudget: "₹15,000 – ₹25,000 / person",
    additionalNotes: "",
    honeypot: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const whatsappMessage = `Hi BucketList team, I'd like to plan a private trip!
Name: ${formData.name || "Traveller"}
Phone: ${formData.phone || "N/A"}
Destination: ${formData.destination}
Group Size: ${formData.numberOfTravellers}
Preferred Dates: ${formData.preferredDates || "Flexible"}
Budget: ${formData.approximateBudget}
Notes: ${formData.additionalNotes || "None"}`;

  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    trackEvent("submit_private_form", { destination: formData.destination, groupSize: formData.numberOfTravellers });

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          destination: formData.destination,
          preferredDates: formData.preferredDates,
          numberOfTravellers: formData.numberOfTravellers,
          approximateBudget: formData.approximateBudget,
          additionalNotes: formData.additionalNotes,
          honeypot: formData.honeypot,
          tripType: "private",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.error || "Submission encountered an issue. You can continue on WhatsApp directly.");
      }
    } catch (err) {
      console.error("[FORM ERROR]", err);
      setErrorMessage("Network connection error. Please send your details directly via WhatsApp below.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#e6ded1] p-8 sm:p-10 rounded-sm space-y-6 text-center text-[#1c1917]">
        <div className="w-12 h-12 rounded-full bg-[#FACC15] flex items-center justify-center mx-auto text-xl font-sans font-bold">
          &check;
        </div>
        <h3 className="font-sans text-2xl font-extrabold">Consultation Request Received</h3>
        <p className="text-sm text-[#4e473e] max-w-md mx-auto font-sans leading-relaxed">
          Thanks {formData.name}! Our team will review your preferences and message your WhatsApp at {formData.phone} within 2 hours.
        </p>
        <div className="pt-4 border-t border-[#e6ded1] flex flex-col items-center gap-3 font-sans">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#128c7e] hover:bg-[#0e6c61] text-white text-xs font-extrabold rounded-xs shadow-sm transition-all"
          >
            <span>Start Planning on WhatsApp</span>
          </a>
          <span className="text-[11px] text-[#4e473e] font-medium">
            ⚡ Direct chat pre-filled with your details
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#e6ded1] p-6 sm:p-10 rounded-sm space-y-8 text-[#1c1917] font-sans">
      <div className="border-b border-[#e6ded1] pb-4">
        <span className="text-xs text-[#8c4a2f] uppercase block mb-1 font-extrabold">
          Private Consultation Form
        </span>
        <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1c1917]">Tell Us About Your Group</h3>
        <p className="text-xs text-[#4e473e] mt-1 font-medium">
          We reply on WhatsApp within 2 hours &middot; No booking commitment
        </p>
      </div>

      {/* Hidden Honeypot Input for Bot Spam Protection */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Form Error Banner with Instant WhatsApp Fallback */}
      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xs text-xs text-red-800 space-y-3 font-sans">
          <p className="font-semibold">{errorMessage}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#128c7e] text-white text-xs font-extrabold rounded-xs"
          >
            Send Details via WhatsApp Instead
          </a>
        </div>
      )}

      {/* Step 1: Contact Details */}
      <div className="space-y-4">
        <span className="text-xs text-[#8c4a2f] uppercase tracking-wider font-extrabold block">
          Step 1 &middot; Contact Information
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase text-[#1c1917] block">Your Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
          </div>

          {/* WhatsApp Phone */}
          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase text-[#1c1917] block">WhatsApp Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
          </div>
        </div>
      </div>

      {/* Step 2: Trip Preferences */}
      <div className="space-y-4 pt-4 border-t border-[#e6ded1]">
        <span className="text-xs text-[#8c4a2f] uppercase tracking-wider font-extrabold block">
          Step 2 &middot; Expedition Preferences
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Destination */}
          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase text-[#1c1917] block">Destination in Mind *</label>
            <select
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            >
              <option value="Himachal & Manali">Himachal & Manali Circuit</option>
              <option value="Goa Coastal">Goa Villa & Beach Expedition</option>
              <option value="Gokarna Coast">Gokarna & Honnavar Coast</option>
              <option value="Kerala Backwaters">Kerala Backwaters & Hills</option>
              <option value="Rajasthan Circuit">Royal Rajasthan Forts & Desert</option>
            </select>
          </div>

          {/* Group Size */}
          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase text-[#1c1917] block">Group Size *</label>
            <select
              value={formData.numberOfTravellers}
              onChange={(e) => setFormData({ ...formData, numberOfTravellers: e.target.value })}
              className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            >
              <option value="2 (Couple / Duo)">Couple / Duo (2 joiners)</option>
              <option value="3-4">Small Group (3 to 4 people)</option>
              <option value="5-8">5 to 8 people</option>
              <option value="9-15">9 to 15 people</option>
              <option value="16-30">16 to 30 people (Friends / Crew)</option>
              <option value="30+">30+ (Alumni / Large Departure)</option>
            </select>
          </div>

          {/* Preferred Dates */}
          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase text-[#1c1917] block">Preferred Dates / Season</label>
            <input
              type="text"
              placeholder="e.g. New Year / December 2026"
              value={formData.preferredDates}
              onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
              className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
          </div>

          {/* Budget Band */}
          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase text-[#1c1917] block">Approx Budget / Head</label>
            <select
              value={formData.approximateBudget}
              onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
              className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            >
              <option value="₹15,000 – ₹20,000 / person">₹15,000 – ₹20,000 / person</option>
              <option value="₹20,000 – ₹30,000 / person">₹20,000 – ₹30,000 / person</option>
              <option value="₹30,000+ / person">₹30,000+ / person</option>
            </select>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="space-y-1 pt-2">
          <label className="text-xs font-extrabold uppercase text-[#1c1917] block">Specific Requests / Notes</label>
          <textarea
            rows={3}
            placeholder="Tell us about your group, celebration plans, or specific stays..."
            value={formData.additionalNotes}
            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e6ded1]">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto bg-[#1c1917] text-[#FAF7F2] hover:bg-[#8c4a2f] text-xs px-8 py-3.5 font-extrabold"
          disabled={loading}
        >
          {loading ? "Sending Request..." : "Plan My Private Trip →"}
        </Button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-extrabold text-[#128c7e] underline hover:text-[#0e6c61] transition-colors"
        >
          Prefer WhatsApp? Chat with us directly &rarr;
        </a>
      </div>
    </form>
  );
}
