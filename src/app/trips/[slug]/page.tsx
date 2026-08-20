import { Metadata } from "next";
import { notFound } from "next/navigation";
import { trips } from "@/data/trips";
import { siteSettings } from "@/data/site-settings";
import { TripDetail } from "./TripDetail";
import { TripSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return trips.map((trip) => ({
    slug: trip.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const trip = trips.find((t) => t.slug === params.slug);
  if (!trip) return {};

  const siteUrl = siteSettings.siteUrl || "https://thebucketlist.co";
  const canonicalUrl = `${siteUrl}/trips/${trip.slug}`;

  return {
    title: `${trip.name} — ${trip.destination.name}`,
    description: trip.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${trip.name} | TheBucketList.co`,
      description: trip.summary,
      url: canonicalUrl,
      images: [trip.heroImage],
    },
  };
}

export default function TripPage({ params }: Props) {
  const trip = trips.find((t) => t.slug === params.slug);

  if (!trip) {
    notFound();
  }

  return (
    <>
      <TripSchema trip={trip} />
      <FAQSchema faqs={trip.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Trips", url: "/trips" },
          { name: trip.destination.name, url: `/destinations/${trip.destination.slug}` },
          { name: trip.name, url: `/trips/${trip.slug}` },
        ]}
      />
      <TripDetail trip={trip} />
    </>
  );
}
