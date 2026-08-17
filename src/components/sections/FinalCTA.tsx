import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-brand-yellow section-padding py-20 md:py-28">
      <div className="container-wide text-center">
        <h2 className="font-display text-display-lg text-brand-black mb-4">
          Where are you going next?
        </h2>
        <p className="text-brand-black/70 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Pick a trip, bring your people, or tell us what you&apos;ve been
          thinking about.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/trips" variant="secondary" size="lg">
            Explore Trips
          </Button>
          <Button href="/private-trips" variant="outline" size="lg">
            Plan a Private Trip
          </Button>
        </div>
      </div>
    </section>
  );
}
