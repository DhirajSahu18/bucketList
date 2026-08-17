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
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const filteredTrips = trips.filter((trip) => {
    if (selectedDestination !== "all" && trip.destinationId !== selectedDestination) return false;
    
    if (selectedMonth !== "all") {
      const monthIndex = new Date(trip.dates.start).getMonth();
      if (selectedMonth === "may" && monthIndex !== 4) return false;
      if (selectedMonth === "oct" && monthIndex !== 9) return false;
      if (selectedMonth === "nov" && monthIndex !== 10) return false;
      if (selectedMonth === "jan" && monthIndex !== 0) return false;
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
          <div className="max-w-3xl mb-10">
            <EditorialMarker number="01" label="THE DEPARTURES" />
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1c1917] font-semibold leading-tight mb-4">
              Upcoming Small-Group Expeditions
            </h1>
            <p className="text-gray-600 text-base sm:text-lg font-sans">
              Every group capped at 12–16 travellers. Driven and led personally by Aryan or Kashshish. Zero white-label reseller itineraries.
            </p>
          </div>

          {/* Desktop Filter Bar (Single Row) */}
          <div className="hidden lg:flex items-center justify-between p-4 bg-white border border-[#e6ded1] rounded-sm mb-10 text-xs font-mono">
            <div className="flex items-center gap-6">
              {/* Destination Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[#8c4a2f] uppercase font-bold">Region:</span>
                <select
                  value={selectedDestination}
                  onChange={(e) => {
                    setSelectedDestination(e.target.value);
                    trackEvent("filter_trips", { filter: "destination", value: e.target.value });
                  }}
                  className="bg-[#faf7f2] border border-[#e6ded1] px-3 py-1.5 rounded text-[#1c1917] focus:outline-none focus:border-[#FACC15]"
                >
                  <option value="all">All Regions</option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              {/* Month Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[#8c4a2f] uppercase font-bold">Month:</span>
                <select
                  value={selectedMonth}
                  onChange={(e) => {
                    setSelectedMonth(e.target.value);
                    trackEvent("filter_trips", { filter: "month", value: e.target.value });
                  }}
                  className="bg-[#faf7f2] border border-[#e6ded1] px-3 py-1.5 rounded text-[#1c1917] focus:outline-none focus:border-[#FACC15]"
                >
                  <option value="all">All Months</option>
                  <option value="may">May 2027</option>
                  <option value="oct">October 2026</option>
                  <option value="nov">November 2026</option>
                  <option value="jan">January 2027</option>
                </select>
              </div>

              {/* Duration Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[#8c4a2f] uppercase font-bold">Duration:</span>
                <select
                  value={selectedDuration}
                  onChange={(e) => {
                    setSelectedDuration(e.target.value);
                    trackEvent("filter_trips", { filter: "duration", value: e.target.value });
                  }}
                  className="bg-[#faf7f2] border border-[#e6ded1] px-3 py-1.5 rounded text-[#1c1917] focus:outline-none focus:border-[#FACC15]"
                >
                  <option value="all">All Durations</option>
                  <option value="short">Up to 5 Days</option>
                  <option value="medium">6 to 7 Days</option>
                  <option value="long">8+ Days</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-500">{filteredTrips.length} departures found</span>
              {(selectedDestination !== "all" || selectedMonth !== "all" || selectedDuration !== "all") && (
                <button onClick={resetFilters} className="text-[#8c4a2f] underline">
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="flex lg:hidden items-center justify-between mb-8">
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="px-4 py-2.5 bg-[#1c1917] text-[#FACC15] font-mono text-xs rounded font-bold flex items-center gap-2"
            >
              <span>Filter Expeditions</span>
              <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
            </button>
            <span className="font-mono text-xs text-gray-500">{filteredTrips.length} trips</span>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterDrawerOpen && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
              <div className="w-[85%] max-w-sm bg-white h-full p-6 space-y-6 text-[#1c1917]">
                <div className="flex items-center justify-between border-b border-[#e6ded1] pb-4">
                  <h3 className="font-serif text-lg font-bold">Filter Departures</h3>
                  <button onClick={() => setIsFilterDrawerOpen(false)} className="font-mono text-xl">&times;</button>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="text-[#8c4a2f] block uppercase mb-1">Region</label>
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full bg-[#faf7f2] border border-[#e6ded1] p-2 rounded"
                    >
                      <option value="all">All Regions</option>
                      {destinations.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[#8c4a2f] block uppercase mb-1">Month</label>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="w-full bg-[#faf7f2] border border-[#e6ded1] p-2 rounded"
                    >
                      <option value="all">All Months</option>
                      <option value="may">May 2027</option>
                      <option value="oct">October 2026</option>
                      <option value="nov">November 2026</option>
                      <option value="jan">January 2027</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#e6ded1] flex items-center justify-between">
                  <button onClick={resetFilters} className="text-xs font-mono text-gray-500 underline">Reset</button>
                  <button
                    onClick={() => setIsFilterDrawerOpen(false)}
                    className="px-5 py-2.5 bg-[#1c1917] text-[#FACC15] font-mono text-xs rounded font-bold"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Featured Horizontal Card */}
          {featuredTrip && (
            <div className="mb-12">
              <Link
                href={`/trips/${featuredTrip.slug}`}
                className="group relative block bg-white border border-[#e6ded1] rounded-sm overflow-hidden hover:border-[#1c1917] transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${featuredTrip.heroImage}')` }}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#1c1917] text-[#FACC15] text-xs font-mono font-bold uppercase rounded-xs">
                      Featured Expedition
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-[#8c4a2f]">
                        <span>{featuredTrip.destination.name.toUpperCase()} &middot; {featuredTrip.duration}</span>
                        <span className="px-2 py-0.5 bg-[#FACC15] text-[#1c1917] font-bold rounded">
                          {featuredTrip.seatsRemaining} seats left
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1917] font-semibold group-hover:text-[#8c4a2f] transition-colors">
                        {featuredTrip.name}
                      </h2>

                      <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                        {featuredTrip.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#e6ded1] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-gray-500 block">Fixed Price</span>
                        <span className="font-mono text-xl font-bold text-[#1c1917]">
                          {formatPrice(featuredTrip.price)}
                        </span>
                      </div>

                      <span className="px-4 py-2 bg-[#1c1917] text-white text-xs font-mono rounded group-hover:bg-[#8c4a2f] transition-colors">
                        View Trip &rarr;
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
              <h3 className="font-serif text-2xl font-semibold text-[#1c1917]">No fixed departures match your search</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto font-sans">
                We design custom private trips for groups of friends and families around your preferred dates and budget.
              </p>
              <Link
                href="/private-trips"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FACC15] text-[#1c1917] font-mono text-xs font-bold rounded"
              >
                Plan a private trip consultation &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
