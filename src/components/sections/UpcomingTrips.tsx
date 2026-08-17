"use client";

import { trips } from "@/data/trips";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TripCard } from "@/components/ui/TripCard";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function UpcomingTrips() {
  const featuredTrips = trips
    .filter((t) => t.featured && t.status !== "completed" && t.status !== "full")
    .slice(0, 4);

  return (
    <section className="section-padding section-spacing bg-brand-offwhite">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="Trips worth taking."
            subtitle="Small groups. Real places. Personally led."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {featuredTrips.map((trip, index) => (
            <ScrollReveal key={trip.id} delay={index * 100}>
              <TripCard trip={trip} featured />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10 text-center">
            <Button href="/trips" variant="outline" size="md">
              View All Trips →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
