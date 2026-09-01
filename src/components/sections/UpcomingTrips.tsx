import Link from "next/link";
import { trips } from "@/data/trips";
import { TripCard } from "@/components/ui/TripCard";
import { EditorialMarker } from "@/components/ui/EditorialMarker";
import { formatPrice, formatDateRange } from "@/lib/utils";

export function UpcomingTrips() {
  const featuredTrip = trips[0]; // Himachal Unplugged Flagship
  const remainingTrips = trips.slice(1);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#e6ded1]">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl space-y-1">
              <EditorialMarker label="OFFICIAL TRIPS & EXPEDITIONS" />
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-extrabold leading-tight">
                Featured Trips &amp; Custom Offerings
              </h2>
            </div>
            <Link
              href="/trips"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-extrabold text-[#1c1917] hover:text-[#8c4a2f] transition-colors"
            >
              <span>See all trips</span>
            </Link>
          </div>

          {/* Featured Departure Horizontal Card */}
          {featuredTrip && (
            <div className="mb-12">
              <Link
                href={`/trips/${featuredTrip.slug}`}
                className="group relative block bg-[#faf7f2] border border-[#e6ded1] rounded-sm overflow-hidden hover:border-[#1c1917] transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] bg-[#faf7f2]">
                    <div
                      className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${
                        featuredTrip.heroImage.includes("himachal-new-year/Cover")
                          ? "bg-[length:100%_auto] bg-[position:center_78%] bg-no-repeat lg:bg-cover lg:bg-[position:center_78%]"
                          : "bg-cover bg-center"
                      }`}
                      style={{
                        backgroundImage: `url('${featuredTrip.heroImage}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#1c1917] text-[#FACC15] text-xs font-sans font-extrabold uppercase tracking-wider rounded-xs">
                      Flagship Run
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      {/* Responsive Metadata Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans">
                        <span className="text-[#8c4a2f] font-extrabold uppercase tracking-wider">
                          {featuredTrip.destination.name} &middot; {featuredTrip.duration}
                        </span>
                        <span className="px-2.5 py-1 bg-[#FACC15] text-[#1c1917] font-extrabold text-xs rounded-xs shrink-0 self-start sm:self-auto shadow-xs">
                          ⚡ {featuredTrip.batchTag || "Flagship Expedition"}
                        </span>
                      </div>

                      <h3 className="font-sans text-2xl sm:text-3xl text-[#1c1917] font-extrabold group-hover:text-[#8c4a2f] transition-colors leading-tight">
                        {featuredTrip.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-sans line-clamp-3 font-normal">
                        {featuredTrip.summary}
                      </p>

                      {featuredTrip.includedHighlights && featuredTrip.includedHighlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {featuredTrip.includedHighlights.map((hl, i) => (
                            <span key={i} className="px-2.5 py-1 bg-white border border-[#e6ded1] text-xs font-bold text-[#1c1917] rounded-xs shadow-2xs">
                              ✓ {hl} Included
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-5 border-t border-[#e6ded1] space-y-4 font-sans">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#4e473e] font-semibold">
                        {featuredTrip.departureDates && featuredTrip.departureDates.length > 1 ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <span>Batches:</span>
                            {featuredTrip.departureDates.map((b, i) => (
                              <span key={i} className="bg-[#FAF7F2] border border-[#e6ded1] px-2 py-0.5 rounded-xs text-[#1c1917] font-bold">
                                {b.label ? `${b.label}: ` : ""}{formatDateRange(b.start, b.end)}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span>Dates: {formatDateRange(featuredTrip.dates.start, featuredTrip.dates.end)}</span>
                        )}
                        <span>
                          Leader:{" "}
                          <strong className="text-[#1c1917]">
                            {featuredTrip.foundersList && featuredTrip.foundersList.length > 1
                              ? featuredTrip.foundersList.map((f) => f.name.split(" ")[0]).join(" & ")
                              : featuredTrip.founder.name}
                          </strong>
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] text-[#8c4a2f] block uppercase font-bold tracking-wider">Fixed Price</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-extrabold text-[#1c1917] font-mono">
                              {formatPrice(featuredTrip.price)}
                            </span>
                            <span className="text-xs text-[#4e473e] font-medium"> / head</span>
                          </div>
                          {featuredTrip.priceNote && (
                            <span className="text-xs text-[#8c4a2f] font-extrabold block mt-0.5">
                              {featuredTrip.priceNote}
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1c1917] text-[#FAF7F2] text-xs font-extrabold rounded-xs group-hover:bg-[#8c4a2f] transition-colors shrink-0">
                          Explore Trip
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
