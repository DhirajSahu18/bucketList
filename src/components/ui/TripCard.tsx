import Link from "next/image";
import NextLink from "next/link";
import { Trip } from "@/types";
import { formatPrice, formatDateRange } from "@/lib/utils";

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  const isFilling = trip.seatsRemaining <= 4 && trip.seatsRemaining > 0;

  return (
    <NextLink
      href={`/trips/${trip.slug}`}
      className="group block bg-white border border-[#e6ded1] rounded-sm overflow-hidden transition-all duration-300 hover:border-[#1c1917] hover:shadow-md"
    >
      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#faf7f2]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${trip.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/80 via-transparent to-transparent" />
        
        {/* Destination Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1c1917]/80 backdrop-blur-sm text-[#FAF7F2] font-mono text-[11px] uppercase tracking-wider rounded-xs border border-white/10">
          {trip.destination.name}
        </div>

        {/* Seat Availability Badge */}
        <div className="absolute top-3 right-3">
          {isFilling ? (
            <span className="px-2.5 py-1 bg-[#FACC15] text-[#1c1917] font-mono text-[11px] font-bold tracking-tight rounded-xs shadow-xs">
              {trip.seatsRemaining} of {trip.maxGroupSize} left
            </span>
          ) : (
            <span className="px-2.5 py-1 bg-[#faf7f2]/90 backdrop-blur-sm text-[#1c1917] font-mono text-[11px] rounded-xs border border-[#e6ded1]">
              Max {trip.maxGroupSize} group
            </span>
          )}
        </div>

        {/* Founder Badge Overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-xs border border-white/10 text-white text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
          <span className="font-mono text-[11px]">Led by {trip.founder.name.split(" ")[0]}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 space-y-3">
        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#1c1917] font-semibold group-hover:text-[#8c4a2f] transition-colors leading-snug">
          {trip.name}
        </h3>

        {/* Dates & Duration */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6b6257]">
          <span>{formatDateRange(trip.dates.start, trip.dates.end)}</span>
          <span>&middot;</span>
          <span className="font-semibold text-[#1c1917]">{trip.duration}</span>
        </div>

        <p className="text-xs text-[#6b6257] line-clamp-2 leading-relaxed font-sans">
          {trip.summary}
        </p>

        {/* Price & CTA Row */}
        <div className="pt-3 border-t border-[#e6ded1] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#6b6257] block">Fixed Price</span>
            <span className="font-mono text-lg font-bold text-[#1c1917]">
              {formatPrice(trip.price)}
            </span>
            <span className="text-xs text-[#6b6257] font-sans"> / head</span>
          </div>

          <span className="text-xs font-medium text-[#1c1917] group-hover:text-[#8c4a2f] inline-flex items-center gap-1">
            View trip <span className="text-[#FACC15] group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </div>
      </div>
    </NextLink>
  );
}
