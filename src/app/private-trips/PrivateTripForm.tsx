"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${
  process.env.NEXT_PUBLIC_FORMSPREE_ID || "xkjwkoyv"
}`;

export function PrivateTripForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Spiti Valley",
    preferredDates: "",
    numberOfTravellers: "2-4",
    approximateBudget: "₹20,000 – ₹30,000 / person",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    trackEvent("submit_private_form", { destination: formData.destination, groupSize: formData.numberOfTravellers });

    // Keep the local JSON backup, but never let it block or fail the submission.
    fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, tripType: "private" }),
    }).catch((err) => console.error("Local enquiry backup failed:", err));

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Private trip enquiry — ${formData.name} (${formData.destination})`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          destination: formData.destination,
          preferredDates: formData.preferredDates || "Not specified",
          numberOfTravellers: formData.numberOfTravellers,
          approximateBudget: formData.approximateBudget,
          additionalNotes: formData.additionalNotes || "None",
          tripType: "private",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.errors?.map((x: { message: string }) => x.message).join(", ") ||
            "Submission failed"
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(
        "We couldn't send that through. Please try again, or message us on WhatsApp — we'll pick it up right away."
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = `Hi Aryan & Kashshish, I'd like to plan a private trip for ${formData.numberOfTravellers} travellers to ${formData.destination} around ${formData.preferredDates || "upcoming months"}. Budget band: ${formData.approximateBudget}.`;
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  if (submitted) {
    return (
      <div className="bg-white border border-[#e6ded1] p-8 sm:p-10 rounded-sm space-y-6 text-center text-[#1c1917]">
        <div className="w-12 h-12 rounded-full bg-[#FACC15] flex items-center justify-center mx-auto text-xl font-mono font-bold">
          &check;
        </div>
        <h3 className="font-serif text-2xl font-semibold">Consultation Request Received</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto font-sans leading-relaxed">
          Thanks {formData.name}! Aryan or Kashshish will review your preferences and send a custom route proposal to {formData.phone} on WhatsApp within 2 hours.
        </p>
        <div className="pt-4 border-t border-[#e6ded1]">
          <Button href={whatsappUrl} external variant="primary" size="md" className="bg-[#128c7e] text-white">
            Chat on WhatsApp Right Away &rarr;
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#e6ded1] p-6 sm:p-10 rounded-sm space-y-6 text-[#1c1917]">
      <div className="border-b border-[#e6ded1] pb-4">
        <span className="font-mono text-xs text-[#8c4a2f] uppercase block mb-1">
          Private Consultation Form
        </span>
        <h3 className="font-serif text-2xl font-semibold">Tell Us About Your Group</h3>
        <p className="text-xs text-gray-500 font-mono mt-1">
          We reply on WhatsApp within 2 hours &middot; No booking commitment
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-1">
          <label className="text-xs font-mono uppercase text-[#8c4a2f] block">Your Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded focus:outline-none focus:border-[#FACC15]"
          />
        </div>

        {/* WhatsApp Phone */}
        <div className="space-y-1">
          <label className="text-xs font-mono uppercase text-[#8c4a2f] block">WhatsApp Number *</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded focus:outline-none focus:border-[#FACC15]"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-xs font-mono uppercase text-[#8c4a2f] block">Email Address *</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded focus:outline-none focus:border-[#FACC15]"
          />
        </div>

        {/* Destination */}
        <div className="space-y-1">
          <label className="text-xs font-mono uppercase text-[#8c4a2f] block">Destination in Mind *</label>
          <select
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded focus:outline-none focus:border-[#FACC15]"
          >
            <option value="Spiti Valley">Spiti Valley Circuit</option>
            <option value="Manali & Lahaul">Manali & Lahaul Valley</option>
            <option value="Kedarnath Trek">Kedarnath Valley Trek</option>
            <option value="Kerala Backwaters">Kerala Backwaters & Hills</option>
            <option value="Custom Himachal">Custom Himalayan Journey</option>
          </select>
        </div>

        {/* Group Size */}
        <div className="space-y-1">
          <label className="text-xs font-mono uppercase text-[#8c4a2f] block">Group Size *</label>
          <select
            value={formData.numberOfTravellers}
            onChange={(e) => setFormData({ ...formData, numberOfTravellers: e.target.value })}
            className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded focus:outline-none focus:border-[#FACC15]"
          >
            <option value="2-4">2 to 4 people</option>
            <option value="5-8">5 to 8 people</option>
            <option value="9-14">9 to 14 people</option>
            <option value="15+">15+ (Alumni / Family reunion)</option>
          </select>
        </div>

        {/* Preferred Dates */}
        <div className="space-y-1">
          <label className="text-xs font-mono uppercase text-[#8c4a2f] block">Preferred Dates / Season</label>
          <input
            type="text"
            placeholder="e.g. October 2026 / Diwali week"
            value={formData.preferredDates}
            onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
            className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded focus:outline-none focus:border-[#FACC15]"
          />
        </div>

        {/* Budget Band */}
        <div className="space-y-1">
          <label className="text-xs font-mono uppercase text-[#8c4a2f] block">Approx Budget / Head</label>
          <select
            value={formData.approximateBudget}
            onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
            className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded focus:outline-none focus:border-[#FACC15]"
          >
            <option value="₹15,000 – ₹20,000 / person">₹15,000 – ₹20,000 / person</option>
            <option value="₹20,000 – ₹30,000 / person">₹20,000 – ₹30,000 / person</option>
            <option value="₹30,000+ / person">₹30,000+ / person</option>
          </select>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="space-y-1">
        <label className="text-xs font-mono uppercase text-[#8c4a2f] block">Specific Requests / Notes</label>
        <textarea
          rows={3}
          placeholder="Tell us about any elderly travellers, kids, specific homestays, or celebration plans..."
          value={formData.additionalNotes}
          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
          className="w-full bg-[#faf7f2] border border-[#e6ded1] p-3 text-sm rounded focus:outline-none focus:border-[#FACC15]"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="text-xs font-mono text-[#8c4a2f] bg-[#faf1e8] border border-[#e6ded1] p-3 rounded"
        >
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e6ded1]">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto bg-[#1c1917] text-[#FAF7F2] hover:bg-[#8c4a2f] font-mono text-xs px-8 py-3.5"
          disabled={loading}
        >
          {loading ? "Sending Consultation Request..." : "Request Private Itinerary Proposal &rarr;"}
        </Button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#128c7e] underline font-bold"
        >
          Or message Aryan & Kashshish on WhatsApp directly &rarr;
        </a>
      </div>
    </form>
  );
}
