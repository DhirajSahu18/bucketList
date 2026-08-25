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
  const [openDays, setOpenDays] = useState<number[]>([1]);
  const [showRefundModal, setShowRefundModal] = useState(false);

  const status = getTripStatus(trip);

  const toggleDay = (dayNum: number) => {
    if (openDays.includes(dayNum)) {
      setOpenDays(openDays.filter((d) => d !== dayNum));
    } else {
      setOpenDays([...openDays, dayNum]);
      trackEvent("open_itinerary", { tripSlug: trip.slug, day: dayNum });
    }
  };

  const expandAll = () => {
    setOpenDays(trip.itinerary.map((d) => d.day));
    trackEvent("open_itinerary", { tripSlug: trip.slug, mode: "expand_all" });
  };

  const collapseAll = () => {
    setOpenDays([]);
    trackEvent("open_itinerary", { tripSlug: trip.slug, mode: "collapse_all" });
  };

  const isAllExpanded = openDays.length === trip.itinerary.length;

  const whatsappMessage = status === "sold-out"
    ? `Hi! I see that ${trip.name} (${formatDateRange(trip.dates.start, trip.dates.end)}) is sold out. Could you add me to the waitlist or let me know about the next run?`
    : status === "past"
    ? `Hi! I'd like to enquire about future departures for ${trip.name}!`
    : `Hi! I want to check details for ${trip.name} (${formatDateRange(trip.dates.start, trip.dates.end)}). Could you help me hold a seat deposit?`;

  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#faf7f2] min-h-screen text-[#1c1917] font-sans">
      {/* Top Breadcrumb Nav */}
      <nav aria-label="Breadcrumb" className="section-padding mb-6">
        <div className="container-wide">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-[#6b6257] font-medium">
            <li>
              <Link href="/" className="hover:text-[#1c1917] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FACC15]">Home</Link>
            </li>
            <li aria-hidden="true">&frasl;</li>
            <li>
              <Link href="/trips" className="hover:text-[#1c1917] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FACC15]">Trips</Link>
            </li>
            <li aria-hidden="true">&frasl;</li>
            <li className="text-[#1c1917] font-extrabold truncate max-w-[220px] sm:max-w-none">{trip.name}</li>
          </ol>
        </div>
      </nav>

      <div className="section-padding">
        <div className="container-wide">
          {/* Header Title Section with Compact Eyebrow Metadata */}
          <div className="max-w-4xl mb-8 space-y-3">
            <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#8c4a2f] font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FACC15] shrink-0" />
              <span>{trip.destination.name} Circuit</span>
              <span className="text-[#1c1917]/30">&middot;</span>
              <span>Max {trip.maxGroupSize} Group</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c1917] leading-tight">
              {trip.name}
            </h1>

            <p className="text-base sm:text-lg text-[#4e473e] leading-relaxed font-sans max-w-3xl font-normal">
              {trip.summary}
            </p>
          </div>

          {/* 6 Quick Questions Spec Bar */}
          <div className="mb-10 p-5 bg-white border border-[#e6ded1] rounded-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs text-[#1c1917]">
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">WHERE</span>
              <span className="font-extrabold">{trip.destination.name}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">WHEN</span>
              <span className="font-extrabold">{formatDateRange(trip.dates.start, trip.dates.end)}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">DURATION</span>
              <span className="font-extrabold">{trip.duration}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">LEADER</span>
              <span className="font-extrabold">{trip.founder.name}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">SEATS</span>
              <span className="font-extrabold text-[#8c4a2f]">
                {status === "sold-out" ? "Sold Out" : status === "past" ? "Completed" : `${trip.seatsRemaining} of ${trip.maxGroupSize} left`}
              </span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">PRICE</span>
              <span className="font-extrabold text-base font-mono">{formatPrice(trip.price)}</span>
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
                  THE TRIP IN NUMBERS
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

              {/* Day by Day Itinerary Accordion with Expand/Collapse All Control */}
              <div className="space-y-6">
                <div className="border-b border-[#e6ded1] pb-4 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#8c4a2f] uppercase tracking-widest block mb-1 font-bold">
                      DAY BY DAY ROUTE
                    </span>
                    <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1c1917]">
                      Detailed Expedition Itinerary
                    </h2>
                  </div>
                  <button
                    onClick={isAllExpanded ? collapseAll : expandAll}
                    className="text-xs font-sans font-extrabold text-[#1c1917] hover:text-[#8c4a2f] underline decoration-[#FACC15] underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] shrink-0"
                    aria-label={isAllExpanded ? "Collapse all itinerary days" : "Expand all itinerary days"}
                  >
                    {isAllExpanded ? "Collapse All [−]" : "Expand All [+]"}
                  </button>
                </div>

                <div className="space-y-3">
                  {trip.itinerary.map((day) => {
                    const isOpen = openDays.includes(day.day);
                    return (
                      <div
                        key={day.day}
                        className="bg-white border border-[#e6ded1] rounded-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggleDay(day.day)}
                          aria-expanded={isOpen}
                          aria-controls={`itinerary-day-${day.day}`}
                          className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#faf7f2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded bg-[#1c1917] text-[#FACC15] font-sans text-xs font-bold flex items-center justify-center shrink-0">
                              D{day.day}
                            </span>
                            <div>
                              <h3 className="font-sans text-base sm:text-lg font-extrabold text-[#1c1917]">
                                {day.title}
                              </h3>
                              <span className="text-xs text-[#8c4a2f] font-semibold">
                                {day.location} &middot; Stay: {day.stay}
                              </span>
                            </div>
                          </div>
                          <span className="text-lg text-[#1c1917] font-bold">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            id={`itinerary-day-${day.day}`}
                            className="px-5 pb-5 pt-2 border-t border-[#e6ded1] space-y-3 text-sm text-[#1c1917]"
                          >
                            <p className="leading-relaxed text-[#4e473e] font-sans font-normal">
                              {day.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {day.activities.map((act, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 bg-[#faf7f2] border border-[#e6ded1] rounded-xs text-xs font-sans text-[#1c1917] font-medium"
                                >
                                  &bull; {act}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hard Truth Callout */}
              {trip.hardTruth && (
                <div className="p-6 bg-amber-50/60 border border-amber-200 rounded-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#8c4a2f] text-white text-[10px] font-sans font-bold uppercase rounded-xs">
                      BEFORE YOU BOOK
                    </span>
                    <h3 className="font-sans text-lg font-extrabold text-[#1c1917]">
                      {trip.hardTruth.headline}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs text-[#4e473e] font-sans list-disc pl-5">
                    {trip.hardTruth.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Included / Excluded Two-Up */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#e6ded1]">
                <div className="bg-white border border-[#e6ded1] p-6 rounded-sm space-y-3">
                  <h3 className="font-sans text-lg font-extrabold text-[#128c7e] flex items-center gap-2">
                    <span>✓</span> What&apos;s Included
                  </h3>
                  <ul className="space-y-2 text-xs text-[#4e473e] font-sans">
                    {trip.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#128c7e] font-extrabold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-[#e6ded1] p-6 rounded-sm space-y-3">
                  <h3 className="font-sans text-lg font-extrabold text-[#8c4a2f] flex items-center gap-2">
                    <span>✕</span> What&apos;s Excluded
                  </h3>
                  <ul className="space-y-2 text-xs text-[#4e473e] font-sans">
                    {trip.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8c4a2f] font-extrabold shrink-0">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar High-Contrast Pricing & Booking Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 bg-[#1c1917] text-white p-6 sm:p-7 rounded-sm space-y-6 shadow-md border-t-2 border-[#FACC15]">
                <div>
                  <span className="text-xs text-[#FACC15] uppercase tracking-wider block mb-1 font-extrabold">
                    Fixed Group Pricing
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold text-[#FACC15]">
                      {formatPrice(trip.price)}
                    </span>
                    <span className="text-xs text-[#e6ded1] font-medium">/ person</span>
                  </div>
                  <span className="text-xs font-sans text-[#FACC15] block mt-1 font-extrabold">
                    Hold seat deposit: ₹{trip.bookingAmount}
                  </span>
                </div>

                {/* Founder Leader Badge */}
                <div className="p-4 bg-white/10 border border-white/15 rounded-xs space-y-1.5">
                  <span className="text-[10px] font-sans uppercase text-[#FACC15] block font-extrabold">
                    Expedition Leader
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#FACC15] shrink-0" />
                    <div>
                      <span className="font-sans font-extrabold text-sm text-white block">{trip.founder.name}</span>
                      <span className="text-xs text-white/70 font-medium">{trip.founder.role}</span>
                    </div>
                  </div>
                </div>

                {/* Primary High-Contrast Yellow WhatsApp CTA */}
                <Button
                  href={whatsappUrl}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full justify-center bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] font-extrabold py-3.5 border-none shadow-md"
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
                    className="text-xs font-sans text-[#FACC15] underline hover:text-white font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FACC15]"
                  >
                    View Refund & Cancellation Terms
                  </button>
                </div>

                <div className="pt-4 border-t border-white/15 text-center text-xs font-sans text-white/75 font-medium">
                  ⚡ Direct WhatsApp reply within 2 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Sticky Mobile Booking Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#1c1917] text-white p-3 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-[#FACC15]/30 flex items-center justify-between shadow-lg">
        <div className="space-y-0.5">
          <span className="text-[10px] font-sans text-[#FACC15] block uppercase font-extrabold">
            {status === "sold-out" ? "Sold Out" : status === "past" ? "Completed" : `⚡ ${trip.seatsRemaining} seats left`}
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
          className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] font-extrabold text-xs px-4 py-2 border-none shrink-0"
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
              <h3 className="font-sans text-xl font-extrabold">Cancellation & Refund Policy</h3>
              <button
                onClick={() => setShowRefundModal(false)}
                aria-label="Close modal"
                className="text-xl font-sans p-1 hover:text-[#8c4a2f] font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
              >
                &times;
              </button>
            </div>
            <div className="space-y-3 text-xs font-sans text-[#4e473e] leading-relaxed">
              <p><strong>30+ Days Before Departure:</strong> 100% deposit refund or 100% transfer credit to any future trip.</p>
              <p><strong>15–29 Days Before Departure:</strong> 50% deposit refund or 100% transfer credit.</p>
              <p><strong>Under 14 Days:</strong> Deposit non-refundable unless seat is filled by replacement joiner.</p>
              <p><strong>Mountain Pass Closures:</strong> If passes are closed due to severe weather, founder leaders re-route with zero extra leader fees.</p>
            </div>
            <div className="pt-4 border-t border-[#e6ded1] flex justify-end">
              <Button onClick={() => setShowRefundModal(false)} variant="primary" size="sm" className="bg-[#1c1917] text-white font-bold">
                Understood
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
