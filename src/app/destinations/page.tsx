import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

import { trips } from "@/data/trips";

export const metadata: Metadata = {
  title: "Destinations — Himachal, Goa, Gokarna, Kerala & Rajasthan | Bucketlist",
  description:
    "Explore our community travel destinations across India — Himachal, Goa, Gokarna, Kerala, and Rajasthan. Well-planned trips with zero on-ground hassle.",
};

export default function DestinationsPage() {
  const featured = destinations[0]; // Himachal Circuit
  const secondary = destinations.slice(1); // Goa, Gokarna, Kerala, Rajasthan

  const getPackageCount = (destId: string) => {
    return trips.filter((t) => t.destinationId === destId && t.status !== "completed").length;
  };

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-16 bg-[#faf7f2] min-h-screen text-[#1c1917] font-sans">
      <div className="section-padding">
        <div className="container-wide">
          {/* Editorial Intro Header */}
          <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
            <EditorialMarker label="DESTINATIONS" />
            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#1c1917] leading-[1.1] tracking-tight">
              Where we&apos;re headed.
            </h1>
            <p className="text-[#4e473e] text-base sm:text-xl font-normal leading-relaxed">
              Places we know, roads we&apos;ve driven, and trips we&apos;ve built from the ground up.
            </p>
          </div>

          {/* Featured Destination Hero Card */}
          {featured && (
            <div className="mb-12 md:mb-16">
              <Link
                href={`/destinations/${featured.slug}`}
                className="group relative block bg-white border border-[#e6ded1] rounded-sm overflow-hidden hover:border-[#1c1917] transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Photo Side */}
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[340px] bg-[#1c1917]">
                    <Image
                      src={featured.heroImage}
                      alt={featured.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#1c1917] text-[#FACC15] text-xs font-sans font-extrabold uppercase tracking-wider rounded-xs shadow-md">
                      Flagship Region
                    </div>
                  </div>

                  {/* Editorial Info Side */}
                  <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4 font-sans">
                      <span className="text-xs text-[#8c4a2f] uppercase tracking-wider block font-extrabold">
                        01 &middot; {featured.bestTime}
                      </span>

                      <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-extrabold group-hover:text-[#8c4a2f] transition-colors leading-tight">
                        {featured.name}
                      </h2>

                      <p className="text-sm sm:text-base text-[#4e473e] leading-relaxed font-normal">
                        {featured.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#e6ded1] space-y-4 font-sans">
                      <div className="flex flex-wrap gap-2 text-xs text-[#1c1917] font-extrabold">
                        <span className="px-2.5 py-1 bg-[#faf7f2] border border-[#e6ded1] rounded-xs">
                          Duration: {featured.duration}
                        </span>
                        <span className="px-2.5 py-1 bg-[#faf7f2] border border-[#e6ded1] rounded-xs text-[#8c4a2f]">
                          {getPackageCount(featured.id)} {getPackageCount(featured.id) === 1 ? "package available" : "packages available"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-[#4e473e] font-semibold">
                          Start: <strong className="text-[#1c1917]">{featured.startingPoint}</strong>
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#1c1917] text-[#FAF7F2] text-xs font-extrabold rounded-xs group-hover:bg-[#8c4a2f] transition-colors shrink-0">
                          <span>Explore Region</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Secondary Destination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {secondary.map((dest, idx) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="group flex flex-col justify-between h-full w-full max-w-full min-w-0 bg-white border border-[#e6ded1] rounded-sm overflow-hidden transition-all duration-300 hover:border-[#1c1917] hover:shadow-md font-sans"
              >
                {/* Photo Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1c1917] shrink-0">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 text-[#FACC15] text-[10px] font-sans font-extrabold uppercase rounded-xs">
                    0{idx + 2} &middot; {dest.difficulty}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase text-[#8c4a2f] font-extrabold tracking-wider block">
                      {dest.bestTime}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1c1917] font-extrabold group-hover:text-[#8c4a2f] transition-colors leading-snug">
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed line-clamp-3 font-normal">
                      {dest.description}
                    </p>
                  </div>

                  {/* Responsive Footer */}
                  <div className="pt-4 border-t border-[#e6ded1] flex items-center justify-between gap-2 text-xs font-sans mt-auto">
                    <span className="text-[#8c4a2f] font-extrabold">
                      {getPackageCount(dest.id)} {getPackageCount(dest.id) === 1 ? "package available" : "packages available"}
                    </span>

                    <span className="text-[#1c1917] group-hover:text-[#8c4a2f] transition-colors font-extrabold shrink-0 flex items-center gap-1">
                      <span>Explore</span>
                      <span>&rarr;</span>
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
