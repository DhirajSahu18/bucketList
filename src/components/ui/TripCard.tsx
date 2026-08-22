import NextLink from "next/link";
import { Trip } from "@/types";
import { formatPrice, formatDateRange, getTripStatus } from "@/lib/utils";

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  const status = getTripStatus(trip);

  return (
    <NextLink
      href={`/trips/${trip.slug}`}
      className="group flex flex-col h-full w-full max-w-full min-w-0 bg-white border border-[#e6ded1] rounded-sm overflow-hidden transition-all duration-300 hover:border-[#1c1917] hover:shadow-md font-sans"
    >
      {/* Editorial Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#faf7f2] shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${trip.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/70 via-[#1c1917]/10 to-transparent" />
        
        {/* Restrained Availability Badge */}
        {status === "filling" && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#FACC15] text-[#1c1917] text-[11px] font-extrabold tracking-tight rounded-xs shadow-md">
            ⚡ {trip.seatsRemaining} seats left
          </div>
        )}
        {status === "sold-out" && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-red-900 text-white text-[11px] font-extrabold rounded-xs">
            Sold Out
          </div>
        )}
        {status === "past" && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-gray-900 text-gray-200 text-[11px] font-bold rounded-xs">
            Completed
          </div>
        )}
      </div>

      {/* Card Content & Footer (Flex-1 for uniform height) */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
        {/* Upper Card Info */}
        <div className="space-y-2.5">
          {/* Category & Duration */}
          <span className="text-[10px] uppercase text-[#8c4a2f] font-extrabold tracking-wider block">
            {trip.destination.name} &middot; {trip.duration}
          </span>

          {/* Title */}
          <h3 className="font-sans text-xl sm:text-2xl text-[#1c1917] font-extrabold group-hover:text-[#8c4a2f] transition-colors leading-snug">
            {trip.name}
          </h3>

          {/* Dates */}
          <p className="text-xs text-[#4e473e] font-semibold">
            📅 {formatDateRange(trip.dates.start, trip.dates.end)}
          </p>

          {/* Summary Description */}
          <p className="text-xs text-[#4e473e] line-clamp-2 leading-relaxed font-sans font-normal">
            {trip.summary}
          </p>
        </div>

        {/* Structured Responsive Price & Action Footer */}
        <div className="pt-3.5 border-t border-[#e6ded1] flex items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-[10px] uppercase text-[#8c4a2f] block font-extrabold tracking-wider">Fixed Price</span>
            <span className="text-lg sm:text-xl font-extrabold text-[#1c1917] font-mono">
              {formatPrice(trip.price)}
            </span>
            <span className="text-xs text-[#4e473e] font-medium"> / head</span>
          </div>

          <span className="inline-flex items-center px-3 py-1.5 bg-[#1c1917] text-[#FAF7F2] text-xs font-extrabold rounded-xs group-hover:bg-[#8c4a2f] transition-colors shrink-0">
            {status === "sold-out" ? "Join Waitlist" : "Explore trip"}
          </span>
        </div>
      </div>
    </NextLink>
  );
}
