import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-[#1c1917] border-t-2 border-[#FACC15] section-padding py-20 md:py-24 font-sans text-[#faf7f2]">
      <div className="container-wide text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40 text-xs font-sans font-extrabold uppercase tracking-wider rounded-full mx-auto">
          <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
          <span>Start Your Journey</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#faf7f2] tracking-tight">
          Where are you heading next?
        </h2>

        <p className="text-[#e6ded1] text-base sm:text-xl max-w-xl mx-auto leading-relaxed font-normal">
          Pick an upcoming community run, bring a friend, or message us about building a custom route.
        </p>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <Button
            href="/trips"
            variant="primary"
            size="lg"
            className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-extrabold shadow-xl px-8 py-4 text-xs sm:text-sm tracking-wider uppercase"
          >
            See Upcoming Trips
          </Button>

          <Button
            href="/private-trips"
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:border-[#FACC15] hover:text-[#FACC15] font-bold px-8 py-4 text-xs sm:text-sm tracking-wider uppercase"
          >
            Plan a Private Trip
          </Button>
        </div>
      </div>
    </section>
  );
}
