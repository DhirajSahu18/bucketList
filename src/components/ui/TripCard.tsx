import Link from "next/link";
import { Trip } from "@/types";
import { formatDateRange, formatPrice, cn } from "@/lib/utils";

interface TripCardProps {
  trip: Trip;
  featured?: boolean;
}

export function TripCard({ trip, featured }: TripCardProps) {
  const statusColors = {
    upcoming: "bg-brand-yellow text-brand-black",
    filling: "bg-orange-100 text-orange-800",
    "almost-full": "bg-red-100 text-red-800",
    full: "bg-gray-200 text-gray-600",
    completed: "bg-gray-200 text-gray-500",
  };

  const statusLabels = {
    upcoming: "Open",
    filling: "Filling Fast",
    "almost-full": "Almost Full",
    full: "Sold Out",
    completed: "Completed",
  };

  return (
    <Link
      href={`/trips/${trip.slug}`}
      className={cn(
        "group block bg-white rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        featured && "ring-2 ring-brand-yellow"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${trip.heroImage}')` }}
        />
        {/* Fallback */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "px-2.5 py-1 text-xs font-semibold rounded-sm",
              statusColors[trip.status]
            )}
          >
            {statusLabels[trip.status]}
          </span>
        </div>

        {/* Destination Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="text-white font-display text-2xl tracking-tight drop-shadow-lg">
            {trip.destination.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-brand-black text-lg mb-2 group-hover:text-gray-700 transition-colors">
          {trip.name}
        </h3>

        <div className="space-y-1.5 text-sm text-gray-600 mb-4">
          <p className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDateRange(trip.dates.start, trip.dates.end)}
          </p>
          <p className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {trip.duration}
          </p>
          <p className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Max {trip.maxGroupSize} people &middot;{" "}
            <span className="font-medium text-brand-black">
              {trip.seatsRemaining} seats left
            </span>
          </p>
        </div>

        {/* Price & Leader */}
        <div className="flex items-end justify-between pt-3 border-t border-brand-gray">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">From</p>
            <p className="font-display text-2xl text-brand-black">
              {formatPrice(trip.price)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Led by</p>
            <p className="text-sm font-medium text-brand-black">
              {trip.founder.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
