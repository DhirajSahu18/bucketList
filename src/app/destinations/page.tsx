import { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore our curated destinations across India — from the Himalayas to the coast. Manali, Spiti, Kedarnath, Kerala and more.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-section">
      <div className="section-padding">
        <div className="container-wide">
          <div className="mb-10 md:mb-14">
            <h1 className="font-display text-display-lg text-brand-black mb-4">
              Destinations
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              Places we know, roads we&apos;ve driven, and trips we&apos;ve
              built from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="group relative aspect-[16/10] overflow-hidden rounded-sm bg-brand-gray"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${dest.heroImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent" />
                <div className="absolute inset-0 bg-brand-black/30" />
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <h2 className="font-display text-display-md text-white mb-2">
                    {dest.name}
                  </h2>
                  <p className="text-white/80 text-sm max-w-md">
                    {dest.emotionalHook}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-sm backdrop-blur-sm">
                      {dest.bestTime}
                    </span>
                    <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-sm backdrop-blur-sm">
                      {dest.difficulty}
                    </span>
                    <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-sm backdrop-blur-sm">
                      {dest.duration}
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
