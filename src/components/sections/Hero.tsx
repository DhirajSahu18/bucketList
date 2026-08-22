import Image from "next/image";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappUrl = getWhatsAppLink(
    "Hi, I am interested in booking the Himachal Unplugged New Year Expedition"
  );

  return (
    <section className="relative min-h-[88vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#1c1917] text-[#faf7f2]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand_group_mountains.jpg"
          alt="TheBucketList.co community travellers on a mountain expedition"
          fill
          className="object-cover object-center brightness-[0.32] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/55 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="container-wide">
          <div className="max-w-3xl space-y-6">
            {/* Flagship Campaign Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FACC15] text-[#1c1917] text-xs font-sans font-extrabold uppercase tracking-wider rounded-xs">
              <span className="w-2 h-2 rounded-full bg-[#1c1917] animate-pulse" />
              <span>Flagship Run &middot; Himachal Unplugged New Year</span>
            </div>

            {/* Campaign Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#faf7f2] leading-[1.1]">
              Come for the Mountains.
              <br />
              <span className="text-[#FACC15]">Stay for the Memories.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-xl text-[#f0eae1] max-w-2xl leading-relaxed font-normal">
              Six days across Manali, Kasol, mountain roads and the places worth slowing down for. Led on ground by founders <span className="text-white font-bold">Aryan & Kashshish</span>.
            </p>

            {/* Single Restrained Travel Context Bar */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 py-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-xs text-xs font-sans text-[#FAF7F2] font-medium">
              <span>📅 Dec 28 – Jan 02</span>
              <span className="text-white/30 hidden sm:inline">&middot;</span>
              <span>📍 Manali & Parvati Valley</span>
              <span className="text-white/30 hidden sm:inline">&middot;</span>
              <span className="text-[#FACC15] font-extrabold">⚡ 28 of 80 Seats Left</span>
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
                  Running Trips
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
