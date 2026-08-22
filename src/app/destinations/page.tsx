import { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

export const metadata: Metadata = {
  title: "Destinations — Manali, Kedarnath, Kerala | TheBucketList.co",
  description:
    "Explore our curated destinations across India — from the Himalayas to the coast. Manali, Kedarnath, Kerala and more.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-20 md:pb-28 bg-[#faf7f2] min-h-screen text-[#1c1917] font-sans">
      <div className="section-padding">
        <div className="container-wide">
          {/* Mobile-First Page Header */}
          <div className="max-w-2xl mb-10 md:mb-14 space-y-2">
            <EditorialMarker label="DESTINATIONS" />
            <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#1c1917] leading-tight">
              Where we&apos;re headed.
            </h1>
            <p className="text-[#4e473e] text-base sm:text-lg font-normal leading-relaxed">
              Places we know, roads we&apos;ve driven, and trips we&apos;ve built from the ground up.
            </p>
          </div>

          {/* Reconstructed Mobile Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="group flex flex-col justify-between h-full w-full max-w-full min-w-0 bg-white border border-[#e6ded1] rounded-sm overflow-hidden transition-all duration-300 hover:border-[#1c1917] hover:shadow-md font-sans"
              >
                {/* Photo Cover (Aspect 16/10) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#faf7f2] shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${dest.heroImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/60 via-transparent to-transparent" />
                </div>

                {/* Card Content Below Photo */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-2">
                    <h2 className="font-sans text-xl sm:text-2xl text-[#1c1917] font-extrabold group-hover:text-[#8c4a2f] transition-colors leading-snug">
                      {dest.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed line-clamp-2 font-normal">
                      {dest.emotionalHook}
                    </p>
                  </div>

                  {/* Responsive Wrap-Safe Footer */}
                  <div className="pt-3.5 border-t border-[#e6ded1] flex flex-wrap items-center justify-between gap-2 text-xs font-sans font-extrabold mt-auto">
                    <span className="text-[#8c4a2f] leading-snug font-semibold">
                      {dest.bestTime} &middot; {dest.difficulty} &middot; {dest.duration}
                    </span>
                    <span className="text-[#1c1917] group-hover:text-[#8c4a2f] transition-colors font-extrabold shrink-0">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
