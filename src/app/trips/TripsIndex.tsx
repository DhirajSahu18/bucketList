"use client";

import { useState } from "react";
import Link from "next/link";
import { trips } from "@/data/trips";
import { destinations } from "@/data/destinations";
import { TripCard } from "@/components/ui/TripCard";
import { EditorialMarker } from "@/components/ui/EditorialMarker";
import { formatPrice, formatDateRange } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function TripsIndex() {
  const [selectedDestination, setSelectedDestination] = useState<string>("all");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");

  const filteredTrips = trips.filter((trip) => {
    if (selectedDestination !== "all" && trip.destinationId !== selectedDestination) return false;
    
    if (selectedMonth !== "all") {
      const monthIndex = new Date(trip.dates.start).getMonth();
      if (selectedMonth === "may" && monthIndex !== 4) return false;
      if (selectedMonth === "oct" && monthIndex !== 9) return false;
      if (selectedMonth === "nov" && monthIndex !== 10) return false;
      if (selectedMonth === "jan" && monthIndex !== 0) return false;
      if (selectedMonth === "dec" && monthIndex !== 11) return false;
    }

    if (selectedDuration !== "all") {
      if (selectedDuration === "short" && trip.durationDays > 5) return false;
      if (selectedDuration === "medium" && (trip.durationDays < 6 || trip.durationDays > 7)) return false;
      if (selectedDuration === "long" && trip.durationDays < 8) return false;
    }

    return true;
  });

  const featuredTrip = filteredTrips[0];
  const remainingTrips = filteredTrips.slice(1);

  const resetFilters = () => {
    setSelectedDestination("all");
    setSelectedMonth("all");
    setSelectedDuration("all");
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#faf7f2] min-h-screen text-[#1c1917]">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="max-w-3xl mb-10 space-y-2">
            <EditorialMarker label="OFFICIAL EXPEDITIONS" />
            <h1 className="font-sans text-3xl sm:text-5xl text-[#1c1917] font-extrabold leading-tight">
              Official Departures &amp; Private Expeditions
            </h1>
            <p className="text-[#4e473e] text-base sm:text-lg font-sans font-normal">
              Fixed community group departures and custom private group offerings across India.
            </p>
          </div>

          {/* Lightweight Filter Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#e6ded1] font-sans text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => {
                  setSelectedDestination("all");
                  trackEvent("filter_trips", { filter: "destination", value: "all" });
                }}
                className={`px-4 py-2 rounded-xs font-extrabold transition-all ${
                  selectedDestination === "all"
                    ? "bg-[#1c1917] text-[#FACC15]"
                    : "bg-white text-[#1c1917] hover:bg-[#FAF7F2] border border-[#e6ded1]"
                }`}
              >
                All Regions
              </button>
              {destinations.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    setSelectedDestination(d.id);
                    trackEvent("filter_trips", { filter: "destination", value: d.id });
                  }}
                  className={`px-4 py-2 rounded-xs font-extrabold transition-all ${
                    selectedDestination === d.id
                      ? "bg-[#1c1917] text-[#FACC15]"
                      : "bg-white text-[#1c1917] hover:bg-[#FAF7F2] border border-[#e6ded1]"
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs font-sans text-[#4e473e] font-semibold">
              <span>{filteredTrips.length} departures found</span>
              {selectedDestination !== "all" && (
                <button onClick={resetFilters} className="text-[#8c4a2f] underline font-bold">
                  Reset filter
                </button>
              )}
            </div>
          </div>

          {/* Featured Horizontal Departure Card */}
          {featuredTrip && (
            <div className="mb-12">
              <Link
                href={`/trips/${featuredTrip.slug}`}
                className="group relative block bg-white border border-[#e6ded1] rounded-sm overflow-hidden hover:border-[#1c1917] transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative aspect-[3/4] sm:aspect-[16/10] lg:aspect-auto min-h-[300px] bg-[#faf7f2]">
                    <div
                      className={`absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105 ${
                        featuredTrip.heroImage.includes("himachal-new-year/Cover")
                          ? "bg-center lg:bg-[position:center_78%]"
                          : "bg-center"
                      }`}
                      style={{
                        backgroundImage: `url('${featuredTrip.heroImage}')`,
                      }}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#1c1917] text-[#FACC15] text-xs font-sans font-extrabold uppercase rounded-xs">
                      Flagship Expedition
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3 font-sans">
                      {/* Responsive Metadata Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans">
                        <span className="text-[#8c4a2f] font-extrabold uppercase tracking-wider">
                          {featuredTrip.destination.name} &middot; {featuredTrip.duration}
                        </span>
                        <span className="px-2.5 py-1 bg-[#FACC15] text-[#1c1917] font-extrabold rounded-xs shrink-0 self-start sm:self-auto shadow-xs">
                          ⚡ {featuredTrip.batchTag || "Flagship Expedition"}
                        </span>
                      </div>

                      <h2 className="font-sans text-2xl sm:text-3xl text-[#1c1917] font-extrabold group-hover:text-[#8c4a2f] transition-colors leading-tight">
                        {featuredTrip.name}
                      </h2>

                      {/* Leaders Indicator */}
                      <p className="text-[11px] text-[#4e473e] font-semibold flex items-center gap-1.5">
                        <span>👤 Leaders:</span>
                        <strong className="text-[#1c1917]">
                          {featuredTrip.foundersList && featuredTrip.foundersList.length > 1
                            ? featuredTrip.foundersList.map((f) => f.name.split(" ")[0]).join(" & ")
                            : featuredTrip.founder.name}
                        </strong>
                      </p>

                      <p className="text-xs text-[#4e473e] leading-relaxed line-clamp-3 font-normal">
                        {featuredTrip.summary}
                      </p>

                      {featuredTrip.includedHighlights && featuredTrip.includedHighlights.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {featuredTrip.includedHighlights.map((hl, i) => (
                            <span key={i} className="px-2 py-0.5 bg-[#FAF7F2] border border-[#e6ded1] text-[10px] font-bold text-[#1c1917] rounded-xs">
                              ✓ {hl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#e6ded1] flex items-center justify-between gap-3 font-sans">
                      <div>
                        <span className="text-[10px] uppercase text-[#8c4a2f] block font-extrabold tracking-wider">
                          {featuredTrip.tripType === "private" ? "Private Experience" : "Fixed Price"}
                        </span>
                        {featuredTrip.tripType === "private" ? (
                          <span className="text-base font-extrabold text-[#1c1917] font-sans">
                            Pricing on Request
                          </span>
                        ) : (
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-extrabold text-[#1c1917] font-mono">
                              {formatPrice(featuredTrip.price)}
                            </span>
                          </div>
                        )}
                        {featuredTrip.priceNote && (
                          <span className="text-[10px] text-[#8c4a2f] font-bold block">
                            {featuredTrip.priceNote}
                          </span>
                        )}
                      </div>

                      <span className="px-4 py-2 bg-[#1c1917] text-white text-xs font-extrabold rounded-xs group-hover:bg-[#8c4a2f] transition-colors shrink-0">
                        {featuredTrip.tripType === "private" ? "Plan This Trip" : "Explore Trip"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Remaining Grid */}
          {remainingTrips.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {remainingTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          )}

          {/* Empty State Fallback */}
          {filteredTrips.length === 0 && (
            <div className="p-12 bg-white border border-[#e6ded1] text-center rounded-sm space-y-4">
              <h3 className="font-sans text-2xl font-extrabold text-[#1c1917]">No fixed departures match your search</h3>
              <p className="text-sm text-[#4e473e] max-w-md mx-auto font-sans">
                We design custom private trips for groups of friends and families around your preferred dates and budget.
              </p>
              <Link
                href="/private-trips"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FACC15] text-[#1c1917] font-sans text-xs font-extrabold rounded-xs"
              >
                Plan a private trip consultation
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
