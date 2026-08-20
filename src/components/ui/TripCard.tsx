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
      className="group block bg-white border border-[#e6ded1] rounded-sm overflow-hidden transition-all duration-300 hover:border-[#1c1917] hover:shadow-md font-sans"
    >
      {/* Editorial Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#faf7f2]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${trip.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/85 via-[#1c1917]/20 to-transparent" />
        
        {/* Destination Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1c1917]/80 backdrop-blur-sm text-[#FAF7F2] text-[11px] font-bold uppercase tracking-wider rounded-xs border border-white/10">
          {trip.destination.name}
        </div>

        {/* Dynamic Availability Badge */}
        <div className="absolute top-3 right-3">
          {status === "past" ? (
            <span className="px-2.5 py-1 bg-gray-800 text-gray-300 text-[11px] font-semibold rounded-xs border border-gray-700">
              Completed Run
            </span>
          ) : status === "sold-out" ? (
            <span className="px-2.5 py-1 bg-red-900 text-white text-[11px] font-bold rounded-xs">
              Sold Out
            </span>
          ) : status === "filling" ? (
            <span className="px-2.5 py-1 bg-[#FACC15] text-[#1c1917] text-[11px] font-bold tracking-tight rounded-xs shadow-xs">
              {trip.seatsRemaining} seats left
            </span>
          ) : (
            <span className="px-2.5 py-1 bg-[#faf7f2]/90 backdrop-blur-sm text-[#1c1917] text-[11px] font-bold rounded-xs border border-[#e6ded1]">
              Open Departure
            </span>
          )}
        </div>

        {/* Founder Badge Overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-xs border border-white/10 text-white text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
          <span className="text-[11px] font-semibold">Led by {trip.founder.name.split(" ")[0]}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 space-y-3">
        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#1c1917] font-bold group-hover:text-[#8c4a2f] transition-colors leading-snug">
          {trip.name}
        </h3>

        {/* Dates & Duration */}
        <div className="flex items-center gap-2 text-xs text-[#6b6257] font-medium">
          <span>{formatDateRange(trip.dates.start, trip.dates.end)}</span>
          <span>&middot;</span>
          <span className="font-bold text-[#1c1917]">{trip.duration}</span>
        </div>

        <p className="text-xs text-[#6b6257] line-clamp-2 leading-relaxed font-sans">
          {trip.summary}
        </p>

        {/* Price & CTA Row */}
        <div className="pt-3 border-t border-[#e6ded1] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-[#6b6257] block font-bold">Fixed Price</span>
            <span className="text-lg font-bold text-[#1c1917] font-mono">
              {formatPrice(trip.price)}
            </span>
            <span className="text-xs text-[#6b6257] font-medium"> / head</span>
          </div>

          <span className="text-xs font-bold text-[#1c1917] group-hover:text-[#8c4a2f] inline-flex items-center gap-1">
            {status === "sold-out" ? "Join Waitlist" : "Explore trip"}{" "}
            <span className="text-[#FACC15] group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
          </span>
        </div>
      </div>
    </NextLink>
  );
}
