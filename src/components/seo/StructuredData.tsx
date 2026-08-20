import { Trip, Destination, FAQ } from "@/types";
import { formatDateRange } from "@/lib/utils";

interface JsonLdProps {
  data: Record<string, unknown>;
}

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "TheBucketList.co",
    url: "https://thebucketlist.co",
    description:
      "Group and private trips across India. Small groups of 12–16 travellers, run by experienced trip leaders.",
    foundingDate: "2021",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: ["https://instagram.com/thebucketlist.co"],
  };

  return <JsonLd data={data} />;
}

export function TripSchema({ trip }: { trip: Trip }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.name,
    description: trip.summary,
    touristType: trip.whoItsFor,
    itinerary: {
      "@type": "ItemList",
      numberOfItems: trip.itinerary.length,
      itemListElement: trip.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: day.title,
        description: day.description,
      })),
    },
    offers: {
      "@type": "Offer",
      price: trip.price > 0 ? trip.price : undefined,
      priceCurrency: "INR",
      availability:
        trip.seatsRemaining > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      validFrom: trip.dates.start,
    },
    provider: {
      "@type": "TravelAgency",
      name: "TheBucketList.co",
      url: "https://thebucketlist.co",
    },
  };

  return <JsonLd data={data} />;
}

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  if (faqs.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://thebucketlist.co${item.url}`,
    })),
  };

  return <JsonLd data={data} />;
}
