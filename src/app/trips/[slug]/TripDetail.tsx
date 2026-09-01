"use client";

import { useState } from "react";
import Link from "next/link";
import { Trip } from "@/types";
import { formatPrice, formatDateRange, getWhatsAppLink, getTripStatus } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GallerySystem } from "@/components/ui/GallerySystem";
import { trackEvent } from "@/lib/analytics";
import { CANONICAL_CANCELLATION_POLICY } from "@/data/cancellationPolicy";

interface TripDetailProps {
  trip: Trip;
}

function parseItineraryDay(dayNumber: number, rawTitle: string) {
  // Strip "Day X — " or "DAY X — " or "Day X: "
  const text = rawTitle.replace(/^(?:Day|DAY)\s*\d+\s*(?:—|-|:)\s*/i, "").trim();

  let dateStr = "";
  let routeTitle = text;

  // Check for trailing parentheses date like "(4 DEC / 20 JAN)" or "(4 DEC)"
  const parenMatch = text.match(/\(([^)]*(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|JULY|AUG|AUGUST|SEP|SEPT|OCT|NOV|DEC)[^)]*)\)$/i);
  if (parenMatch) {
    dateStr = parenMatch[1].trim();
    routeTitle = text.slice(0, parenMatch.index).trim();
  } else {
    // Check for leading date with colon like "29th DEC: Mumbai..." or "13 JULY: MUMBAI..." or "5 OCT: MUMBAI..."
    const colonMatch = text.match(/^([^:]*(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|JULY|AUG|AUGUST|SEP|SEPT|OCT|NOV|DEC)[^:]*):(.*)$/i);
    if (colonMatch) {
      dateStr = colonMatch[1].trim();
      routeTitle = colonMatch[2].trim();
    }
  }

  const paddedDay = dayNumber < 10 ? `DAY 0${dayNumber}` : `DAY ${dayNumber}`;

  return {
    dayLabel: paddedDay,
    date: dateStr,
    title: routeTitle || text,
  };
}

function formatItineraryBullets(description: string): { type: "bullet" | "protip"; text: string }[] {
  const lines = description.split("\n").map((l) => l.trim()).filter(Boolean);
  const bullets: { type: "bullet" | "protip"; text: string }[] = [];

  for (const line of lines) {
    if (
      line.startsWith("PRO TIP:") ||
      line.startsWith("Pro Tip:") ||
      line.startsWith("NOTE:") ||
      line.startsWith("Note:")
    ) {
      bullets.push({ type: "protip", text: line });
      continue;
    }

    // Split sentences while protecting abbreviations like "approx.", "St.", "mins.", "hrs."
    const cleanedLine = line
      .replace(/\bapprox\./gi, "approx")
      .replace(/\bSt\./g, "St")
      .replace(/\bmins\./gi, "mins")
      .replace(/\bhrs\./gi, "hrs");

    const sentences = cleanedLine
      .split(/(?<=[.!?])\s+(?=[A-Z0-9"'([•])/g)
      .map((s) => s.trim())
      .filter(Boolean);

    for (const s of sentences) {
      const cleaned = s.replace(/^[•\-\*]\s*/, "");
      if (cleaned) {
        bullets.push({ type: "bullet", text: cleaned });
      }
    }
  }

  return bullets;
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

  const whatsappUrl =
    trip.tripType === "private"
      ? getWhatsAppLink(
          `Hi Bucketlist Team, I would like to plan a private trip for ${trip.name} for my group. Please share details and custom quotes!`
        )
      : getWhatsAppLink(
          `Hi Bucketlist Team, I am interested in joining the ${trip.name} (${trip.duration}) on ${formatDateRange(
            trip.dates.start,
            trip.dates.end
          )}. Please share booking details!`
        );

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
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c1917] leading-tight">
              {trip.name}
            </h1>

            <p className="text-base sm:text-lg text-[#4e473e] leading-relaxed font-sans max-w-3xl font-normal">
              {trip.summary}
            </p>
          </div>

          {/* 5 Quick Questions Spec Bar */}
          <div className="mb-10 p-5 bg-white border border-[#e6ded1] rounded-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs text-[#1c1917]">
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">WHERE</span>
              <span className="font-extrabold">{trip.destination.name}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold mb-1">WHEN</span>
              {trip.tripType === "private" ? (
                <span className="font-extrabold">Custom Dates</span>
              ) : trip.departureDates && trip.departureDates.length > 1 ? (
                <div className="space-y-1.5">
                  {trip.departureDates.map((b, i) => (
                    <div key={i} className="leading-tight">
                      {b.label && (
                        <span className="text-[9px] text-[#8c4a2f] font-extrabold uppercase tracking-wider block">
                          {b.label}
                        </span>
                      )}
                      <span className="font-extrabold text-[#1c1917] block">
                        {formatDateRange(b.start, b.end)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="font-extrabold">
                  {formatDateRange(trip.dates.start, trip.dates.end)}
                </span>
              )}
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">DURATION</span>
              <span className="font-extrabold">{trip.duration}</span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">LEADER</span>
              <span className="font-extrabold">
                {trip.foundersList && trip.foundersList.length > 1
                  ? trip.foundersList.map((f) => f.name.split(" ")[0]).join(" & ")
                  : trip.founder.name}
              </span>
            </div>
            <div>
              <span className="text-[#8c4a2f] block uppercase text-[10px] font-extrabold">PRICE</span>
              <span className="font-extrabold text-sm sm:text-base font-sans">
                {trip.tripType === "private" ? "Price on Request" : formatPrice(trip.price)}
              </span>
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-2 sm:pb-0 pr-2">
                    <span className="text-2xl font-bold text-[#FACC15] block font-mono">{trip.durationDays}</span>
                    <span className="text-[11px] text-[#e6ded1] font-bold uppercase">DAYS</span>
                  </div>
                  <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-2 sm:pb-0 pr-2">
                    <span className="text-2xl font-bold text-[#FACC15] block font-mono">₹{trip.bookingAmount}</span>
                    <span className="text-[11px] text-[#e6ded1] font-bold uppercase">HOLD DEPOSIT</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-[#FACC15] block font-sans uppercase">
                      {trip.tripType === "private" ? "Private" : "Community"}
                    </span>
                    <span className="text-[11px] text-[#e6ded1] font-bold uppercase">TRIP STYLE</span>
                  </div>
                </div>
              </div>

              {/* Confirmed Highlights Callout */}
              {trip.includedHighlights && trip.includedHighlights.length > 0 && (
                <div className="p-5 bg-[#FACC15]/15 border border-[#FACC15]/40 rounded-sm space-y-2">
                  <span className="text-xs font-sans font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                    ⚡ CONFIRMED PACKAGE INCLUSIONS
                  </span>
                  <div className="flex flex-wrap gap-3 text-xs font-extrabold text-[#1c1917]">
                    {trip.includedHighlights.map((hl, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-[#e6ded1] rounded-xs shadow-2xs flex items-center gap-1.5">
                        <span className="text-[#8c4a2f]">✓</span> {hl} Included
                      </span>
                    ))}
                  </div>
                </div>
              )}

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

                <div className="space-y-4">
                  {trip.itinerary.map((day) => {
                    const isOpen = openDays.includes(day.day);
                    const parsed = parseItineraryDay(day.day, day.title);

                    return (
                      <div
                        key={day.day}
                        className="bg-white border border-[#e6ded1] rounded-sm overflow-hidden transition-all duration-200 hover:border-[#1c1917] shadow-2xs"
                      >
                        <button
                          onClick={() => toggleDay(day.day)}
                          aria-expanded={isOpen}
                          aria-controls={`itinerary-day-${day.day}`}
                          className="w-full p-5 sm:p-6 text-left hover:bg-[#faf7f2]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] block"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-2.5 flex-1 min-w-0">
                              {/* Day Pointer & Date Milestone Header */}
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans">
                                <span className="text-xs sm:text-sm font-extrabold text-[#8c4a2f] uppercase tracking-wider font-mono">
                                  {parsed.dayLabel}
                                </span>
                                {parsed.date && (
                                  <>
                                    <span className="text-xs text-[#8c4a2f]/40 font-bold hidden sm:inline">&bull;</span>
                                    <span className="text-xs sm:text-sm font-extrabold text-[#1c1917] tracking-tight bg-[#FAF7F2] border border-[#e6ded1] px-2.5 py-0.5 rounded-xs shadow-2xs">
                                      {parsed.date}
                                    </span>
                                  </>
                                )}
                              </div>

                              {/* Yellow Accent Visual Pointer Divider */}
                              <div className="flex items-center gap-2">
                                <div className="h-0.5 w-12 sm:w-16 bg-[#FACC15]" />
                                <div className="h-1.5 w-1.5 rounded-full bg-[#1c1917]" />
                              </div>

                              {/* Prominent Route / Day Title */}
                              <div className="space-y-1 pt-0.5">
                                <h3 className="font-sans text-base sm:text-xl font-extrabold text-[#1c1917] leading-snug tracking-tight">
                                  {parsed.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-[#8c4a2f] font-semibold flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                                  <span>📍 {day.location}</span>
                                  {day.stay && (
                                    <>
                                      <span className="text-[#8c4a2f]/40 hidden sm:inline">&middot;</span>
                                      <span>🏨 Stay: <strong className="text-[#1c1917] font-bold">{day.stay}</strong></span>
                                    </>
                                  )}
                                  {day.meals && (
                                    <>
                                      <span className="text-[#8c4a2f]/40 hidden sm:inline">&middot;</span>
                                      <span>🍽️ Meals: <strong className="text-[#1c1917] font-bold">{day.meals}</strong></span>
                                    </>
                                  )}
                                </p>
                              </div>
                            </div>

                            {/* Expand / Collapse Indicator Button */}
                            <div className="shrink-0 pt-1">
                              <span
                                className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-sm font-bold transition-all duration-200 ${
                                  isOpen
                                    ? "bg-[#1c1917] text-[#FACC15] border-[#1c1917] shadow-xs"
                                    : "bg-[#FAF7F2] text-[#1c1917] border-[#e6ded1]"
                                }`}
                              >
                                {isOpen ? "−" : "+"}
                              </span>
                            </div>
                          </div>
                        </button>

                        {isOpen && (
                          <div
                            id={`itinerary-day-${day.day}`}
                            className="px-5 sm:px-6 pb-6 pt-4 border-t border-[#e6ded1] space-y-5 bg-[#faf7f2]/25"
                          >
                            {/* Detailed Itinerary Bullet Points */}
                            <div className="space-y-2.5">
                              <span className="text-[10px] uppercase text-[#8c4a2f] font-extrabold tracking-wider block">
                                SCHEDULE &amp; ROUTE DETAILS
                              </span>
                              <ul className="space-y-2 text-xs sm:text-sm text-[#1c1917]/90 font-sans">
                                {formatItineraryBullets(day.description).map((b, i) =>
                                  b.type === "protip" ? (
                                    <li
                                      key={i}
                                      className="p-3 bg-[#FACC15]/15 border-l-3 border-[#FACC15] text-[#1c1917] font-semibold rounded-r-xs text-xs sm:text-sm"
                                    >
                                      💡 {b.text}
                                    </li>
                                  ) : (
                                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                                      <span className="text-[#FACC15] text-base leading-none shrink-0 select-none font-bold">
                                        •
                                      </span>
                                      <span>{b.text}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            {/* Structured Day Highlights & Activities */}
                            {day.activities && day.activities.length > 0 && (
                              <div className="space-y-2 pt-2 border-t border-[#e6ded1]/70">
                                <span className="text-[10px] uppercase text-[#8c4a2f] font-extrabold tracking-wider block">
                                  KEY HIGHLIGHTS
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {day.activities.map((act, i) => (
                                    <span
                                      key={i}
                                      className="px-2.5 py-1 bg-white border border-[#e6ded1] rounded-xs text-xs font-sans text-[#1c1917] font-semibold shadow-2xs"
                                    >
                                      ✓ {act}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
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
                    {trip.tripType === "private" ? "Private Experience" : "Fixed Group Pricing"}
                  </span>
                  {trip.tripType === "private" ? (
                    <div className="space-y-1">
                      <span className="font-sans text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
                        Pricing on Request
                      </span>
                      <span className="text-xs font-sans text-[#e6ded1] block font-medium">
                        Plan this trip on your preferred dates for your group.
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-3xl font-bold text-[#FACC15]">
                          {formatPrice(trip.price)}
                        </span>
                        <span className="text-xs text-[#e6ded1] font-medium">/ person</span>
                      </div>
                      {trip.priceNote && (
                        <span className="text-xs font-sans text-[#FACC15] block mt-1 font-bold">
                          ⚡ {trip.priceNote}
                        </span>
                      )}
                      <span className="text-xs font-sans text-white/80 block mt-1 font-medium">
                        Hold seat deposit: ₹{trip.bookingAmount}
                      </span>
                    </>
                  )}
                </div>

                {/* Founder Leader Badge */}
                <div className="p-4 bg-white/10 border border-white/15 rounded-xs space-y-2">
                  <span className="text-[10px] font-sans uppercase text-[#FACC15] block font-extrabold">
                    {trip.foundersList && trip.foundersList.length > 1 ? "Expedition Leads" : "Expedition Leader"}
                  </span>
                  {trip.foundersList && trip.foundersList.length > 1 ? (
                    <div className="space-y-2">
                      {trip.foundersList.map((f) => (
                        <div key={f.id} className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#FACC15] shrink-0" />
                          <div>
                            <span className="font-sans font-extrabold text-sm text-white block">{f.name}</span>
                            <span className="text-xs text-white/70 font-medium">{f.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#FACC15] shrink-0" />
                      <div>
                        <span className="font-sans font-extrabold text-sm text-white block">{trip.founder.name}</span>
                        <span className="text-xs text-white/70 font-medium">{trip.founder.role}</span>
                      </div>
                    </div>
                  )}
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
                  {trip.tripType === "private"
                    ? "Plan This Trip for Your Group"
                    : status === "sold-out"
                    ? "Join Waitlist on WhatsApp"
                    : status === "past"
                    ? "Enquire for Next Run"
                    : "Book on WhatsApp"}
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
            {status === "sold-out" ? "Sold Out" : status === "past" ? "Completed" : `⚡ ${trip.batchTag || "Upcoming Departure"}`}
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
          <div className="bg-white border border-[#e6ded1] max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-sm space-y-5 text-[#1c1917]">
            <div className="flex items-center justify-between border-b border-[#e6ded1] pb-3">
              <h3 className="font-sans text-lg sm:text-xl font-extrabold">
                {CANONICAL_CANCELLATION_POLICY.title}
              </h3>
              <button
                onClick={() => setShowRefundModal(false)}
                aria-label="Close modal"
                className="text-xl font-sans p-1 hover:text-[#8c4a2f] font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
              >
                &times;
              </button>
            </div>

            {/* Canonical Schedule */}
            <div className="bg-[#faf7f2] border border-[#e6ded1] p-4 rounded-sm space-y-3">
              {CANONICAL_CANCELLATION_POLICY.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="space-y-0.5 pb-2.5 border-b border-[#e6ded1] last:border-b-0 last:pb-0"
                >
                  <span className="font-sans text-[11px] uppercase tracking-wider font-extrabold text-[#8c4a2f] block">
                    • {item.period}
                  </span>
                  <p className="text-xs text-[#1c1917] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Important Notes */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                IMPORTANT
              </span>
              <ul className="space-y-1.5 text-xs text-[#1c1917]">
                {CANONICAL_CANCELLATION_POLICY.important.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#FACC15] select-none font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Points */}
            <div className="space-y-2 pt-1 border-t border-[#e6ded1]/60">
              <span className="text-[10px] font-sans font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                IMPORTANT POINTS
              </span>
              <ul className="space-y-1.5 text-xs text-[#1c1917]/90">
                {CANONICAL_CANCELLATION_POLICY.importantPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#FACC15] select-none font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#e6ded1] flex items-center justify-between gap-3">
              <Link
                href="/cancellation-policy"
                target="_blank"
                className="text-xs font-sans text-[#8c4a2f] underline hover:text-[#1c1917] font-semibold"
              >
                Read Full Legal Policy &rarr;
              </Link>
              <Button
                onClick={() => setShowRefundModal(false)}
                variant="primary"
                size="sm"
                className="bg-[#1c1917] text-white font-bold"
              >
                Understood
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
