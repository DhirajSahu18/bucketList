import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-[#FACC15] section-padding py-20 md:py-28 font-sans text-[#1c1917]">
      <div className="container-wide text-center space-y-4">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight">
          Where are you heading next?
        </h2>
        <p className="text-[#1c1917]/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Pick an upcoming community run, bring a friend, or message us about building a custom route.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button href="/trips" variant="primary" size="lg" className="bg-[#1c1917] text-white hover:bg-[#8c4a2f] border-none font-bold">
            See Upcoming Trips &rarr;
          </Button>
          <Button href="/private-trips" variant="outline" size="lg" className="border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-[#FACC15]">
            Plan a Private Trip
          </Button>
        </div>
      </div>
    </section>
  );
}
