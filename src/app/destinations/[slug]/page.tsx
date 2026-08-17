import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { trips } from "@/data/trips";
import { TripCard } from "@/components/ui/TripCard";
import { Button } from "@/components/ui/Button";
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
    title: `${destination.name} — Trips & Travel Guide`,
    description: `${destination.emotionalHook} — Plan your trip to ${destination.name} with TheBucketList.co. Small groups, personally led.`,
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
      t.status !== "completed" &&
      t.status !== "full"
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
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${destination.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent" />
        <div className="absolute inset-0 bg-brand-black/40" />
        <div className="relative h-full flex items-end section-padding pb-10 md:pb-14">
          <div className="container-wide">
            <nav className="mb-4 text-sm text-white/70">
              <Link href="/destinations" className="hover:text-white">
                Destinations
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{destination.name}</span>
            </nav>
            <h1 className="font-display text-display-xl text-white mb-3">
              {destination.name}
            </h1>
            <p className="text-white/90 text-xl max-w-xl">
              {destination.emotionalHook}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-padding py-8 bg-white border-b border-brand-gray">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Best Time", value: destination.bestTime },
              { label: "Duration", value: destination.duration },
              { label: "Difficulty", value: destination.difficulty },
              {
                label: "Ideal For",
                value: destination.idealFor.slice(0, 2).join(", "),
              },
              { label: "Starting Point", value: destination.startingPoint },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                  {fact.label}
                </p>
                <p className="text-sm font-medium text-brand-black">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trips */}
      {destinationTrips.length > 0 && (
        <section className="section-padding section-spacing bg-brand-offwhite">
          <div className="container-wide">
            <h2 className="font-display text-display-md text-brand-black mb-8">
              Upcoming Trips to {destination.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destinationTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Private Trip CTA */}
      <section className="section-padding py-12 bg-brand-yellow">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-brand-black">
              Prefer to go with your own people?
            </h3>
            <p className="text-brand-black/70 mt-1">
              We&apos;ll build a {destination.name} trip around your group.
            </p>
          </div>
          <Button href="/private-trips" variant="secondary" size="md">
            Plan a Private Trip
          </Button>
        </div>
      </section>

      {/* Guide Content */}
      <section className="section-padding section-spacing">
        <div className="container-narrow">
          <h2 className="font-display text-display-md text-brand-black mb-8">
            {destination.name} Travel Guide
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {destination.guideContent.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h3
                    key={i}
                    className="font-display text-display-sm text-brand-black mt-10 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h3>
                );
              }
              return (
                <p key={i} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {destination.faqs.length > 0 && (
        <section className="section-padding section-spacing bg-brand-offwhite">
          <div className="container-narrow">
            <h2 className="font-display text-display-md text-brand-black mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {destination.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white border border-brand-gray rounded-sm"
                >
                  <summary className="cursor-pointer p-5 font-medium text-brand-black list-none flex items-center justify-between">
                    {faq.question}
                    <svg
                      className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}
