"use client";

import { useState, useMemo } from "react";
import { trips } from "@/data/trips";
import { destinations } from "@/data/destinations";
import { TripCard } from "@/components/ui/TripCard";
import { cn } from "@/lib/utils";

type SortOption = "upcoming" | "price" | "duration" | "availability";

export function TripsIndex() {
  const [destinationFilter, setDestinationFilter] = useState<string>("all");
  const [durationFilter, setDurationFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("upcoming");

  const filteredTrips = useMemo(() => {
    let filtered = trips.filter((t) => t.status !== "completed");

    if (destinationFilter !== "all") {
      filtered = filtered.filter(
        (t) => t.destination.slug === destinationFilter
      );
    }

    if (durationFilter !== "all") {
      if (durationFilter === "short") {
        filtered = filtered.filter((t) => t.durationDays <= 5);
      } else if (durationFilter === "medium") {
        filtered = filtered.filter(
          (t) => t.durationDays > 5 && t.durationDays <= 7
        );
      } else if (durationFilter === "long") {
        filtered = filtered.filter((t) => t.durationDays > 7);
      }
    }

    // Sort
    switch (sortBy) {
      case "upcoming":
        filtered.sort(
          (a, b) =>
            new Date(a.dates.start).getTime() -
            new Date(b.dates.start).getTime()
        );
        break;
      case "price":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "duration":
        filtered.sort((a, b) => a.durationDays - b.durationDays);
        break;
      case "availability":
        filtered.sort((a, b) => a.seatsRemaining - b.seatsRemaining);
        break;
    }

    return filtered;
  }, [destinationFilter, durationFilter, sortBy]);

  return (
    <div className="pt-24 md:pt-32 pb-section">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-10 md:mb-14">
            <h1 className="font-display text-display-lg text-brand-black mb-4">
              Upcoming Trips
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              Small groups. Real destinations. Every trip led by someone who
              knows the road.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-brand-gray">
            {/* Destination */}
            <select
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
              className="px-4 py-2 bg-white border border-brand-gray rounded-sm text-sm text-brand-black focus:outline-none focus:border-brand-yellow"
              aria-label="Filter by destination"
            >
              <option value="all">All Destinations</option>
              {destinations.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </select>

            {/* Duration */}
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="px-4 py-2 bg-white border border-brand-gray rounded-sm text-sm text-brand-black focus:outline-none focus:border-brand-yellow"
              aria-label="Filter by duration"
            >
              <option value="all">Any Duration</option>
              <option value="short">Up to 5 days</option>
              <option value="medium">5–7 days</option>
              <option value="long">8+ days</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 bg-white border border-brand-gray rounded-sm text-sm text-brand-black focus:outline-none focus:border-brand-yellow ml-auto"
              aria-label="Sort trips"
            >
              <option value="upcoming">Sort: Upcoming</option>
              <option value="price">Sort: Price</option>
              <option value="duration">Sort: Duration</option>
              <option value="availability">Sort: Availability</option>
            </select>
          </div>

          {/* Results */}
          {filteredTrips.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No trips match your filters.
              </p>
              <button
                onClick={() => {
                  setDestinationFilter("all");
                  setDurationFilter("all");
                }}
                className="mt-4 text-brand-black underline text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
