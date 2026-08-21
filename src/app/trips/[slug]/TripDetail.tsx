"use client";

import { useState } from "react";
import Link from "next/link";
import { Trip } from "@/types";
import { formatPrice, formatDateRange, getWhatsAppLink, getTripStatus } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GallerySystem } from "@/components/ui/GallerySystem";
import { trackEvent } from "@/lib/analytics";

interface TripDetailProps {
  trip: Trip;
}

export function TripDetail({ trip }: TripDetailProps) {
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [showRefundModal, setShowRefundModal] = useState(false);

  const status = getTripStatus(trip);

  const toggleDay = (dayNum: number) => {
    const nextState = openDay === dayNum ? null : dayNum;
    setOpenDay(nextState);
    if (nextState !== null) {
      trackEvent("open_itinerary", { tripSlug: trip.slug, day: dayNum });
    }
  };

  const whatsappMessage = status === "sold-out"
    ? `Hi! I see that ${trip.name} (${formatDateRange(trip.dates.start, trip.dates.end)}) is sold out. Could you add me to the waitlist or let me know about the next run?`
    : status === "past"
    ? `Hi! I'd like to enquire about future departures for ${trip.name}!`
    : `Hi! I want to check details for ${trip.name} (${formatDateRange(trip.dates.start, trip.dates.end)}). Could you help me hold a seat deposit?`;

  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#faf7f2] min-h-screen text-[#1c1917] font-sans">
      {/* Top Breadcrumb Nav */}
      <div className="section-padding mb-6">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-xs text-[#6b6257] font-medium">
            <Link href="/" className="hover:text-[#1c1917] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FACC15]">Home</Link>
            <span>/</span>
            <Link href="/trips" className="hover:text-[#1c1917] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FACC15]">Trips</Link>
            <span>/</span>
            <span className="text-[#1c1917] font-semibold">{trip.name}</span>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-wide">
          {/* Header Title Section */}
          <div className="max-w-4xl mb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1c1917] text-[#FACC15] text-xs font-sans font-bold uppercase tracking-wider rounded-xs">
              {trip.destination.name} Expedition &middot; Max {trip.maxGroupSize} Group
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1c1917] leading-tight">
              {trip.name}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans max-w-3xl">
              {trip.summary}
            </p>
          </div>

          {/* 6 Quick Questions Spec Bar */}
          <div className="mb-10 p-5 bg-white border border-[#e6ded1] rounded-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs text-[#1c1917]">
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-bold">01 — WHERE</span>
              <span className="font-bold">{trip.destination.name}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-bold">02 — WHEN</span>
              <span className="font-bold">{formatDateRange(trip.dates.start, trip.dates.end)}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-bold">03 — DURATION</span>
              <span className="font-bold">{trip.duration}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-bold">04 — LEADER</span>
              <span className="font-bold">{trip.founder.name}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-bold">05 — SEATS</span>
              <span className="font-bold text-[#8c4a2f]">
                {status === "sold-out" ? "Sold Out" : status === "past" ? "Completed" : `${trip.seatsRemaining} of ${trip.maxGroupSize} left`}
              </span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-bold">06 — PRICE</span>
              <span className="font-bold text-base font-mono">{formatPrice(trip.price)}</span>
            </div>
          </div>

          {/* Real Gallery System */}
          <div className="mb-14">
            <GallerySystem images={trip.gallery} metadata={trip.galleryMeta} tripName={trip.name} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Founder Note Callout Block */}
              {trip.founderNote && (
                <div className="p-6 bg-white border-l-4 border-[#FACC15] border-y border-r border-[#e6ded1] rounded-r-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#8c4a2f] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                    <span>A NOTE FROM {trip.founderNote.author.toUpperCase()}</span>
                  </div>
                  <p className="text-sm text-[#1c1917] italic font-serif leading-relaxed">
                    &ldquo;{trip.founderNote.text}&rdquo;
                  </p>
                </div>
              )}

              {/* The Trip in Numbers Stat Grid */}
              <div className="p-6 bg-[#1c1917] text-white rounded-sm space-y-4 font-sans">
                <span className="text-xs text-[#FACC15] uppercase tracking-widest block font-bold">
                  02 &mdash; THE TRIP IN NUMBERS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="border-r border-white/10 pr-2">
                    <span className="text-2xl font-bold text-[#FACC15] block font-mono">{trip.durationDays}</span>
                    <span className="text-[11px] text-[#e6ded1] font-bold uppercase">DAYS</span>
                  </div>
                  <div className="border-r border-white/10 pr-2">
                    <span className="text-2xl font-bold text-[#FACC15] block font-mono">{trip.maxGroupSize}</span>
                    <span className="text-[11px] text-[#e6ded1] font-bold uppercase">MAX CAP</span>
                  </div>
                  <div className="border-r border-white/10 pr-2">
                    <span className="text-2xl font-bold text-[#FACC15] block font-mono">₹{trip.bookingAmount}</span>
                    <span className="text-[11px] text-[#e6ded1] font-bold uppercase">DEPOSIT</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-[#FACC15] block font-mono">
                      {status === "sold-out" ? "0" : status === "past" ? "0" : trip.seatsRemaining}
                    </span>
                    <span className="text-[11px] text-[#e6ded1] font-bold uppercase">SEATS LEFT</span>
                  </div>
                </div>
              </div>

              {/* Day by Day Itinerary */}
              <div className="space-y-6">
                <div className="border-b border-[#e6ded1] pb-4">
                  <span className="text-xs text-[#8c4a2f] uppercase tracking-widest block mb-1 font-bold">
                    03 &mdash; DAY BY DAY ROUTE
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1c1917]">
                    Detailed Expedition Itinerary
                  </h2>
                </div>

                <div className="space-y-3">
                  {trip.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="bg-white border border-[#e6ded1] rounded-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleDay(day.day)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#faf7f2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded bg-[#1c1917] text-[#FACC15] font-sans text-xs font-bold flex items-center justify-center shrink-0">
                            D{day.day}
                          </span>
                          <div>
                            <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1c1917]">
                              {day.title}
                            </h3>
                            <span className="text-xs text-[#8c4a2f] font-semibold">
                              {day.location} &middot; Stay: {day.stay}
                            </span>
                          </div>
                        </div>
                        <span className="text-lg text-[#1c1917] font-bold">
                          {openDay === day.day ? "−" : "+"}
                        </span>
                      </button>

                      {openDay === day.day && (
                        <div className="px-5 pb-5 pt-2 border-t border-[#e6ded1] space-y-3 text-sm text-[#1c1917]">
                          <p className="leading-relaxed text-gray-700 font-sans">
                            {day.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {day.activities.map((act, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 bg-[#faf7f2] border border-[#e6ded1] rounded text-xs font-sans text-[#1c1917] font-medium"
                              >
                                &bull; {act}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hard Truth Callout */}
              {trip.hardTruth && (
                <div className="p-6 bg-amber-50/60 border border-amber-200 rounded-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#8c4a2f] text-white text-[10px] font-sans font-bold uppercase rounded">
                      BEFORE YOU BOOK
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#1c1917]">
                      {trip.hardTruth.headline}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-700 font-sans list-disc pl-5">
                    {trip.hardTruth.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Included / Excluded Two-Up */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#e6ded1]">
                <div className="bg-white border border-[#e6ded1] p-6 rounded-sm space-y-3">
                  <h3 className="font-serif text-lg font-semibold text-[#128c7e] flex items-center gap-2">
                    <span>&check;</span> What&apos;s Included
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-700 font-sans">
                    {trip.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#128c7e] font-bold">&check;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-[#e6ded1] p-6 rounded-sm space-y-3">
                  <h3 className="font-serif text-lg font-semibold text-[#8c4a2f] flex items-center gap-2">
                    <span>&times;</span> What&apos;s Excluded
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-700 font-sans">
                    {trip.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8c4a2f] font-bold">&times;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Pricing & Leader Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 bg-white border border-[#e6ded1] p-6 rounded-sm space-y-6 shadow-sm">
                <div>
                  <span className="text-xs text-[#8c4a2f] uppercase block mb-1 font-bold">
                    Fixed Group Pricing
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold text-[#1c1917]">
                      {formatPrice(trip.price)}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">/ person</span>
                  </div>
                  <span className="text-xs font-sans text-[#128c7e] block mt-1 font-bold">
                    Hold seat deposit: ₹{trip.bookingAmount}
                  </span>
                </div>

                {/* Founder Badge */}
                <div className="p-4 bg-[#faf7f2] border border-[#e6ded1] rounded space-y-2">
                  <span className="text-[10px] font-sans uppercase text-[#8c4a2f] block font-bold">
                    Expedition Leader
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                    <div>
                      <span className="font-serif font-bold text-sm text-[#1c1917] block">{trip.founder.name}</span>
                      <span className="text-xs text-gray-500 font-medium">{trip.founder.role}</span>
                    </div>
                  </div>
                </div>

                {/* Primary WhatsApp CTA */}
                <Button
                  href={whatsappUrl}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full justify-center bg-[#128c7e] hover:bg-[#0e6c61] text-white font-bold py-3.5"
                  onClick={() => trackEvent("click_trip_whatsapp", { tripSlug: trip.slug })}
                >
                  {status === "sold-out"
                    ? "Join Waitlist on WhatsApp"
                    : status === "past"
                    ? "Enquire for Next Run"
                    : `Book on WhatsApp (${trip.seatsRemaining} seats left)`}
                </Button>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setShowRefundModal(true);
                      trackEvent("open_refund_policy", { tripSlug: trip.slug });
                    }}
                    className="text-xs font-sans text-[#8c4a2f] underline hover:text-[#1c1917] font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FACC15]"
                  >
                    View Refund & Cancellation Terms
                  </button>
                </div>

                <div className="pt-4 border-t border-[#e6ded1] text-center text-xs font-sans text-gray-500 font-medium">
                  ⚡ We reply on WhatsApp within 2 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA with Safe-Area Padding */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#1c1917] text-white p-3 pb-safe pb-4 border-t border-[#FACC15]/30 flex items-center justify-between shadow-lg">
        <div>
          <span className="text-[10px] font-sans text-[#FACC15] block uppercase font-bold">
            {status === "sold-out" ? "Sold Out" : status === "past" ? "Completed" : `${trip.seatsRemaining} of ${trip.maxGroupSize} left`}
          </span>
          <span className="font-mono text-sm font-bold text-white">
            {formatPrice(trip.price)}
          </span>
        </div>

        <Button
          href={whatsappUrl}
          external
          variant="primary"
          size="sm"
          className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] font-bold text-xs px-4 py-2 border-none"
          onClick={() => trackEvent("click_trip_whatsapp", { tripSlug: trip.slug, mobile: true })}
        >
          {status === "sold-out" ? "Join Waitlist" : "Book on WhatsApp"}
        </Button>
      </div>

      {/* Accessible Refund Terms Modal */}
      {showRefundModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cancellation and Refund Policy Modal"
          tabIndex={-1}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 focus:outline-none"
        >
          <div className="bg-white border border-[#e6ded1] max-w-lg w-full p-6 sm:p-8 rounded-sm space-y-6 text-[#1c1917]">
            <div className="flex items-center justify-between border-b border-[#e6ded1] pb-4">
              <h3 className="font-serif text-xl font-bold">Cancellation & Refund Policy</h3>
              <button
                onClick={() => setShowRefundModal(false)}
                aria-label="Close modal"
                className="text-xl font-sans p-1 hover:text-[#8c4a2f] font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
              >
                &times;
              </button>
            </div>
            <div className="space-y-3 text-xs font-sans text-gray-700 leading-relaxed">
              <p><strong>30+ Days Before Departure:</strong> 100% deposit refund or 100% transfer credit to any future trip.</p>
              <p><strong>15–29 Days Before Departure:</strong> 50% deposit refund or 100% transfer credit.</p>
              <p><strong>Under 14 Days:</strong> Deposit non-refundable unless seat is filled by replacement joiner.</p>
              <p><strong>Mountain Pass Closures:</strong> If passes are closed due to severe weather, founder leaders re-route with zero extra leader fees.</p>
            </div>
            <div className="pt-4 border-t border-[#e6ded1] flex justify-end">
              <Button onClick={() => setShowRefundModal(false)} variant="primary" size="sm" className="bg-[#1c1917] text-white">
                Understood
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
