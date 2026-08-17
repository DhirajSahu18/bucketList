import Link from "next/link";
import { trips } from "@/data/trips";
import { TripCard } from "@/components/ui/TripCard";
import { EditorialMarker } from "@/components/ui/EditorialMarker";
import { formatPrice, formatDateRange } from "@/lib/utils";

export function UpcomingTrips() {
  const featuredTrip = trips[0]; // Spiti Valley
  const remainingTrips = trips.slice(1);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#e6ded1]">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <EditorialMarker number="03" label="WHERE WE'RE GOING NEXT" />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-semibold leading-tight">
                Upcoming Group Departures
              </h2>
            </div>
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 text-sm font-mono font-medium text-[#1c1917] hover:text-[#8c4a2f] transition-colors"
            >
              See all departures <span className="text-[#FACC15]">&rarr;</span>
            </Link>
          </div>

          {/* Featured Departure Horizontal Card */}
          {featuredTrip && (
            <div className="mb-12">
              <Link
                href={`/trips/${featuredTrip.slug}`}
                className="group relative block bg-[#faf7f2] border border-[#e6ded1] rounded-sm overflow-hidden hover:border-[#1c1917] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${featuredTrip.heroImage}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#1c1917] text-[#FACC15] text-xs font-mono font-bold uppercase tracking-wider rounded-xs">
                      Featured Expedition
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-[#8c4a2f]">
                        <span>{featuredTrip.destination.name.toUpperCase()} &middot; {featuredTrip.duration}</span>
                        <span className="px-2.5 py-0.5 bg-[#FACC15] text-[#1c1917] font-bold rounded">
                          {featuredTrip.seatsRemaining} of {featuredTrip.maxGroupSize} left
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1c1917] font-semibold group-hover:text-[#8c4a2f] transition-colors leading-tight">
                        {featuredTrip.name}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed font-sans line-clamp-3">
                        {featuredTrip.summary}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#e6ded1] space-y-4">
                      <div className="flex items-center justify-between font-mono text-xs text-[#6b6257]">
                        <span>Dates: {formatDateRange(featuredTrip.dates.start, featuredTrip.dates.end)}</span>
                        <span>Leader: <strong className="text-[#1c1917]">{featuredTrip.founder.name}</strong></span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#6b6257] block uppercase">Deposit ₹{featuredTrip.bookingAmount}</span>
                          <span className="font-mono text-xl font-bold text-[#1c1917]">
                            {formatPrice(featuredTrip.price)}
                          </span>
                          <span className="text-xs text-[#6b6257]"> / head</span>
                        </div>

                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1917] text-[#FAF7F2] text-xs font-mono rounded group-hover:bg-[#8c4a2f] transition-colors">
                          Explore Expedition &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Remaining Departures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {remainingTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
