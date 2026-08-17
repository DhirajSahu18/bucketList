"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, getWhatsAppPrivateMessage } from "@/lib/utils";

// Set your Formspree form ID here (get one at https://formspree.io)
// Or set NEXT_PUBLIC_FORMSPREE_ID in your .env.local
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

export function PrivateTripForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        throw new Error(
          data?.errors?.map((err: any) => err.message).join(", ") ||
            "Something went wrong"
        );
      }
    } catch (err: any) {
      setError(
        err.message || "Something went wrong. Please try again or WhatsApp us."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-brand-offwhite p-8 rounded-sm text-center">
        <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-brand-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-brand-black mb-2">
          Got it!
        </h3>
        <p className="text-gray-600 mb-4">
          We&apos;ll get back to you shortly with ideas and a rough plan.
        </p>
        <p className="text-sm text-gray-500">
          Want a faster response?{" "}
          <a
            href={getWhatsAppLink(getWhatsAppPrivateMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] font-medium hover:underline"
          >
            WhatsApp us
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Formspree hidden fields */}
      <input type="hidden" name="_subject" value="New Private Trip Enquiry — TheBucketList.co" />
      <input type="hidden" name="_template" value="table" />

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-brand-black mb-1"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-brand-black mb-1"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand-black mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="destination"
          className="block text-sm font-medium text-brand-black mb-1"
        >
          Destination / Idea *
        </label>
        <input
          type="text"
          id="destination"
          name="destination"
          required
          className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
          placeholder="e.g., Spiti Valley, Kerala, anywhere in the mountains..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="dates"
            className="block text-sm font-medium text-brand-black mb-1"
          >
            Preferred Dates
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            placeholder="e.g., October 2026, flexible"
          />
        </div>
        <div>
          <label
            htmlFor="travellers"
            className="block text-sm font-medium text-brand-black mb-1"
          >
            Number of Travellers *
          </label>
          <input
            type="number"
            id="travellers"
            name="travellers"
            required
            min="1"
            className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            placeholder="e.g., 6"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-brand-black mb-1"
          >
            Approximate Budget (per person)
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
          >
            <option value="">Select range</option>
            <option value="under-10k">Under ₹10,000</option>
            <option value="10k-15k">₹10,000 – ₹15,000</option>
            <option value="15k-25k">₹15,000 – ₹25,000</option>
            <option value="25k-40k">₹25,000 – ₹40,000</option>
            <option value="40k-plus">₹40,000+</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="tripType"
            className="block text-sm font-medium text-brand-black mb-1"
          >
            Type of Trip
          </label>
          <select
            id="tripType"
            name="tripType"
            className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
          >
            <option value="">Select type</option>
            <option value="friends">Friends trip</option>
            <option value="family">Family trip</option>
            <option value="couple">Couple trip</option>
            <option value="corporate">Corporate/team outing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-brand-black mb-1"
        >
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full px-4 py-2.5 border border-brand-gray rounded-sm text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow resize-none"
          placeholder="Specific interests, constraints, past trips you've liked, anything that helps us plan better..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
      >
        {submitting ? "Sending..." : "Send Enquiry"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We&apos;ll reply within a few hours. No spam, no automated responses.
      </p>
    </form>
  );
}
