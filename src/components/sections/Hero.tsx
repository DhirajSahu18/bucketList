import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappUrl = getWhatsAppLink(
    "Hi Bucketlist team, I'm interested in booking upcoming trips!"
  );

  return (
    <section className="relative min-h-[88vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#1c1917] text-[#faf7f2]">
      {/* Autoplay Muted Loop Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/brand_group_mountains.jpg"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35] scale-105"
        >
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/55 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="container-wide">
          <div className="max-w-3xl space-y-6">
            {/* Flagship Campaign Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FACC15] text-[#1c1917] text-xs font-sans font-extrabold uppercase tracking-wider rounded-xs">
              <span className="w-2 h-2 rounded-full bg-[#1c1917] animate-pulse" />
              <span>Flagship Run &middot; Himachal Unplugged Expedition</span>
            </div>

            {/* Campaign Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#faf7f2] leading-[1.1]">
              Where dreams stop
              <br />
              <span className="text-[#FACC15]">staying on the lists.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-xl text-[#f0eae1] max-w-2xl leading-relaxed font-normal">
              Nine days across Kasol, Kullu river rafting, Manali snow trails, Dharamshala monasteries, and Amritsar Golden Temple. Authentic community travel planned properly.
            </p>

            {/* Single Restrained Travel Context Bar */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-xs text-xs font-sans text-[#FAF7F2] font-medium">
              <span>📅 04 Dec – 12 Dec & 20 Jan – 28 Jan</span>
              <span className="text-white/30 hidden sm:inline">&middot;</span>
              <span>📍 Kasol, Manali, Dharamshala & Amritsar</span>
              <span className="text-white/30 hidden sm:inline">&middot;</span>
              <span className="text-[#FACC15] font-extrabold">⚡ 8 of 25 Seats Left</span>
            </div>

            {/* Clean Single-Line CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/trips/himachal-unplugged-new-year"
                variant="primary"
                size="lg"
                className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-extrabold shadow-xl hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto text-center justify-center py-3.5 px-6 text-sm font-sans"
              >
                Explore Himachal Unplugged
              </Button>

              <Button
                href={whatsappUrl}
                external
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:border-[#FACC15] hover:text-[#FACC15] font-bold backdrop-blur-xs w-full sm:w-auto text-center justify-center py-3.5 px-6 text-sm font-sans"
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Coherent 3-Column Responsive Homepage Stats Grid */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-3 text-xs font-sans text-[#e6ded1]">
              <div className="space-y-0.5">
                <span className="text-lg sm:text-2xl font-extrabold text-[#FACC15] block font-mono">
                  {siteSettings.homepageStats.years} Years
                </span>
                <span className="text-[11px] text-[#e6ded1] font-semibold block leading-tight">
                  Years of Experience
                </span>
              </div>

              <div className="space-y-0.5 border-l border-white/15 pl-3">
                <span className="text-lg sm:text-2xl font-extrabold text-[#FACC15] block font-mono">
                  {siteSettings.homepageStats.trips}
                </span>
                <span className="text-[11px] text-[#e6ded1] font-semibold block leading-tight">
                  Journeys Led
                </span>
              </div>

              <div className="space-y-0.5 border-l border-white/15 pl-3">
                <span className="text-lg sm:text-2xl font-extrabold text-[#FACC15] block font-mono">
                  {siteSettings.homepageStats.travellers}
                </span>
                <span className="text-[11px] text-[#e6ded1] font-semibold block leading-tight">
                  Travellers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
