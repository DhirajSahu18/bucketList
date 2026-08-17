import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { trips } from "@/data/trips";
import { testimonials } from "@/data/testimonials";
import { TripCard } from "@/components/ui/TripCard";
import { Button } from "@/components/ui/Button";
import { EditorialMarker } from "@/components/ui/EditorialMarker";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destination = destinations.find((d) => d.slug === params.slug);
  if (!destination) return {};

  return {
    title: `${destination.name} Founder Guide & Trips | TheBucketList.co`,
    description: `${destination.emotionalHook} — Founder-written guide, month-by-month weather, packing list, and upcoming small group trips to ${destination.name}.`,
    openGraph: {
      title: `${destination.name} | TheBucketList.co`,
      description: destination.emotionalHook,
      images: [destination.heroImage],
    },
  };
}

export default function DestinationPage({ params }: Props) {
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  const destinationTrips = trips.filter(
    (t) =>
      t.destinationId === destination.id &&
      t.status !== "completed"
  );

  const destinationReviews = testimonials.filter(
    (t) => t.destinationName.toLowerCase() === destination.name.toLowerCase() || t.tripSlug?.includes(destination.slug)
  );

  return (
    <>
      <FAQSchema faqs={destination.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: destination.name, url: `/destinations/${destination.slug}` },
        ]}
      />
      <div className="pt-20 md:pt-24 bg-[#faf7f2] min-h-screen text-[#1c1917]">
        {/* 1. HERO PHOTO + ONE-LINE HOOK */}
        <section className="relative min-h-[55vh] flex items-end pb-12 overflow-hidden bg-[#1c1917]">
          {/* Top Yellow Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#FACC15] z-10" />

          <div className="absolute inset-0 z-0">
            <Image
              src={destination.heroImage}
              alt={destination.name}
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/40 to-transparent" />
          </div>

          <div className="relative z-10 section-padding w-full">
            <div className="container-wide">
              <nav className="mb-3 text-xs font-mono text-[#e6ded1]/80 flex items-center gap-2">
                <Link href="/destinations" className="hover:text-white">
                  Destinations
                </Link>
                <span>/</span>
                <span className="text-[#FACC15] font-bold">{destination.name}</span>
              </nav>
              <h1 className="font-serif text-4xl sm:text-6xl text-[#faf7f2] font-bold tracking-tight mb-3">
                {destination.name}
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-[#FACC15] max-w-2xl">
                &ldquo;{destination.emotionalHook}&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* 2. QUICK FACTS */}
        <section className="section-padding py-8 bg-white border-b border-[#e6ded1]">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-mono text-xs">
              <div className="p-3.5 bg-[#faf7f2] rounded-sm border border-[#e6ded1]">
                <span className="text-[#8c4a2f] block text-[10px] uppercase font-bold">Best Time</span>
                <span className="font-semibold text-[#1c1917]">{destination.bestTime}</span>
              </div>
              <div className="p-3.5 bg-[#faf7f2] rounded-sm border border-[#e6ded1]">
                <span className="text-[#8c4a2f] block text-[10px] uppercase font-bold">Ideal Duration</span>
                <span className="font-semibold text-[#1c1917]">{destination.duration}</span>
              </div>
              <div className="p-3.5 bg-[#faf7f2] rounded-sm border border-[#e6ded1]">
                <span className="text-[#8c4a2f] block text-[10px] uppercase font-bold">Difficulty</span>
                <span className="font-semibold text-[#8c4a2f]">{destination.difficulty}</span>
              </div>
              <div className="p-3.5 bg-[#faf7f2] rounded-sm border border-[#e6ded1]">
                <span className="text-[#8c4a2f] block text-[10px] uppercase font-bold">Ideal For</span>
                <span className="font-semibold text-[#1c1917]">{destination.idealFor.slice(0, 2).join(", ")}</span>
              </div>
              <div className="p-3.5 bg-[#faf7f2] rounded-sm border border-[#e6ded1]">
                <span className="text-[#8c4a2f] block text-[10px] uppercase font-bold">Starting Point</span>
                <span className="font-semibold text-[#1c1917]">{destination.startingPoint}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. UPCOMING TRIPS TO THIS DESTINATION */}
        {destinationTrips.length > 0 && (
          <section className="section-padding py-16 bg-[#faf7f2] border-b border-[#e6ded1]">
            <div className="container-wide">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <EditorialMarker number="01" label="UPCOMING EXPEDITIONS" />
                  <h2 className="font-serif text-3xl text-[#1c1917] font-bold">
                    Upcoming Trips to {destination.name}
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#8c4a2f] font-bold">
                  Small group cap (12–16)
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinationTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 4. OR PLAN IT AS A PRIVATE TRIP */}
        <section className="section-padding py-12 bg-[#1c1917] text-[#faf7f2]">
          <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-[#FACC15] uppercase tracking-wider block mb-1 font-bold">
                Custom Dates & Group Sizes
              </span>
              <h3 className="font-serif text-2xl text-[#faf7f2]">
                Want to do {destination.name} with your own group of friends?
              </h3>
              <p className="text-[#e6ded1]/75 text-sm mt-1">
                We&apos;ll build the itinerary around your dates, pace, and homestay preferences.
              </p>
            </div>
            <Button href="/private-trips" variant="primary" size="md" className="bg-[#FACC15] text-[#1c1917] shrink-0 font-bold border-none">
              Plan a Private Trip &rarr;
            </Button>
          </div>
        </section>

        {/* 5. FOUNDER GUIDE WITH REAL ANCHOR SUBHEADS */}
        <section className="section-padding py-16 md:py-24 bg-white border-b border-[#e6ded1]">
          <div className="container-narrow space-y-8 font-sans">
            <div className="border-b border-[#e6ded1] pb-6">
              <EditorialMarker number="02" label="FOUNDER GUIDE" />
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-bold">
                Everything you actually need to know about {destination.name}
              </h2>
              <p className="text-xs font-mono text-gray-500 mt-2">
                By Aryan & Kashshish &middot; Updated 2026
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-[#1c1917] leading-relaxed space-y-6">
              {destination.guideContent.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h3
                      key={i}
                      id={paragraph.replace("## ", "").toLowerCase().replace(/\s+/g, "-")}
                      className="font-serif text-2xl sm:text-3xl text-[#1c1917] font-bold pt-6 border-t border-[#e6ded1]"
                    >
                      {paragraph.replace("## ", "")}
                    </h3>
                  );
                }
                return (
                  <p key={i} className="text-base text-[#1c1917]/90 leading-relaxed font-sans">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. FAQS */}
        {destination.faqs.length > 0 && (
          <section className="section-padding py-16 bg-[#faf7f2] border-b border-[#e6ded1]">
            <div className="container-narrow space-y-8 font-sans">
              <div>
                <EditorialMarker number="03" label="COMMON QUESTIONS" />
                <h2 className="font-serif text-3xl text-[#1c1917] font-bold">
                  {destination.name} FAQs
                </h2>
              </div>
              <div className="space-y-3">
                {destination.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white border border-[#e6ded1] rounded-sm"
                  >
                    <summary className="cursor-pointer p-4 sm:p-5 font-serif text-lg text-[#1c1917] list-none flex items-center justify-between">
                      {faq.question}
                      <span className="font-mono text-sm text-[#8c4a2f]">↓</span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 text-sm text-[#6b6257] leading-relaxed border-t border-[#e6ded1]/50 pt-3 font-sans">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. REVIEWS */}
        {destinationReviews.length > 0 && (
          <section className="section-padding py-16 bg-white font-sans">
            <div className="container-wide space-y-8">
              <div>
                <EditorialMarker number="04" label="VERIFIED FEEDBACK" />
                <h2 className="font-serif text-3xl text-[#1c1917] font-bold">
                  What travellers say about our {destination.name} runs
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destinationReviews.map((rev) => (
                  <div key={rev.id} className="bg-[#faf7f2] border border-[#e6ded1] p-5 rounded-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-[#1c1917]">{rev.name}</span>
                      <span className="text-[#FACC15] text-xs font-bold">★★★★★</span>
                    </div>
                    <p className="text-xs text-[#6b6257] leading-relaxed font-serif italic">
                      &ldquo;{rev.review}&rdquo;
                    </p>
                    <div className="pt-2 border-t border-[#e6ded1] flex items-center justify-between text-[10px] font-mono text-gray-500">
                      <span>{rev.tripName}</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
