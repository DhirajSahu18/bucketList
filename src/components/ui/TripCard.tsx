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
        {trip.heroImage.includes("himachal-new-year") ? (
          <>
            {/* Mobile: 16:9 cover_mobile */}
            <div
              className="md:hidden absolute inset-0 bg-[length:100%_auto] bg-no-repeat bg-[position:center_85%] transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/images/himachal-new-year/cover_mobile.png')`,
              }}
            />
            {/* Desktop: Cover.jpg */}
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-[position:center_78%] transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${trip.heroImage}')`,
              }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('${trip.heroImage}')`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/70 via-[#1c1917]/10 to-transparent" />
        
        {/* Batch Tag / Priority Badge */}
        {trip.tripType === "private" ? (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#1c1917] text-[#FACC15] text-[11px] font-extrabold tracking-tight rounded-xs shadow-md border border-[#FACC15]/30">
            PRIVATE TRIP
          </div>
        ) : trip.batchTag ? (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#FACC15] text-[#1c1917] text-[11px] font-extrabold tracking-tight rounded-xs shadow-md">
            ⚡ {trip.batchTag}
          </div>
        ) : status === "sold-out" ? (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-red-900 text-white text-[11px] font-extrabold rounded-xs">
            Sold Out
          </div>
        ) : status === "past" ? (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-gray-900 text-gray-200 text-[11px] font-bold rounded-xs">
            Completed
          </div>
        ) : null}
      </div>

      {/* Card Content & Footer */}
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

          {/* Dates / Trip Type Indicator */}
          {trip.tripType === "private" ? (
            <p className="text-xs text-[#8c4a2f] font-extrabold">
              ✨ Custom Dates for Your Group
            </p>
          ) : trip.departureDates && trip.departureDates.length > 1 ? (
            <div className="space-y-1 text-xs text-[#4e473e]">
              {trip.departureDates.map((b, i) => (
                <p key={i} className="font-semibold flex items-center gap-1.5">
                  <span>📅</span>
                  <span>
                    <strong className="text-[#1c1917] font-extrabold">{b.label ? `${b.label}: ` : ""}</strong>
                    {formatDateRange(b.start, b.end)}
                  </span>
                </p>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#4e473e] font-semibold">
              📅 {formatDateRange(trip.dates.start, trip.dates.end)}
            </p>
          )}

          {/* Leaders Indicator */}
          <p className="text-[11px] text-[#4e473e] font-semibold flex items-center gap-1.5">
            <span>👤 Leaders:</span>
            <strong className="text-[#1c1917]">
              {trip.foundersList && trip.foundersList.length > 1
                ? trip.foundersList.map((f) => f.name.split(" ")[0]).join(" & ")
                : trip.founder.name}
            </strong>
          </p>

          {/* Summary Description */}
          <p className="text-xs text-[#4e473e] line-clamp-2 leading-relaxed font-sans font-normal">
            {trip.summary}
          </p>

          {/* Included Highlights */}
          {trip.includedHighlights && trip.includedHighlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {trip.includedHighlights.map((hl, i) => (
                <span key={i} className="px-2 py-0.5 bg-[#FAF7F2] border border-[#e6ded1] text-[10px] font-bold text-[#1c1917] rounded-xs">
                  ✓ {hl}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Structured Price & Action Footer */}
        <div className="pt-3.5 border-t border-[#e6ded1] flex items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-[10px] uppercase text-[#8c4a2f] block font-extrabold tracking-wider">
              {trip.tripType === "private" ? "Private Experience" : "Fixed Price"}
            </span>
            {trip.tripType === "private" ? (
              <span className="text-base sm:text-lg font-extrabold text-[#1c1917] font-sans">
                Pricing on Request
              </span>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-extrabold text-[#1c1917] font-mono">
                  {formatPrice(trip.price)}
                </span>
                <span className="text-xs text-[#4e473e] font-medium"> / head</span>
              </div>
            )}
          </div>

          <span className="inline-flex items-center px-3 py-1.5 bg-[#1c1917] text-[#FAF7F2] text-xs font-extrabold rounded-xs group-hover:bg-[#8c4a2f] transition-colors shrink-0">
            {trip.tripType === "private" ? "Plan This Trip" : status === "sold-out" ? "Join Waitlist" : "Explore trip"}
          </span>
        </div>
      </div>
    </NextLink>
  );
}
