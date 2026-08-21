import Image from "next/image";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappUrl = getWhatsAppLink(
    "Hi! I'm interested in Himachal Unplugged. Could you share the latest details and help me understand how to join?"
  );

  return (
    <section className="relative min-h-[88vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#1c1917] text-[#faf7f2]">
      {/* Background Image Overlay: Authentic Group Trip Photo */}
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

            {/* Streamlined Trip Context Bar */}
            <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs text-[#FAF7F2] pt-1">
              <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-xs font-bold">
                📅 Dec 28 – Jan 02
              </span>
              <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-xs font-bold">
                📍 Manali & Parvati Valley
              </span>
              <span className="px-3 py-1.5 bg-[#FACC15] text-[#1c1917] rounded-xs font-extrabold">
                ⚡ 28 of 80 Seats Left
              </span>
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

            {/* Micro Trust Line */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-sans text-[#e6ded1] border-t border-white/15">
              <span className="flex items-center gap-1.5 font-medium">
                <strong className="text-[#FACC15] font-extrabold">{siteSettings.homepageStats.years} Years</strong> Running Trips
              </span>
              <span className="text-white/30">&middot;</span>
              <span className="flex items-center gap-1.5 font-medium">
                <strong className="text-[#FACC15] font-extrabold">{siteSettings.homepageStats.trips}</strong> Journeys Led
              </span>
              <span className="text-white/30">&middot;</span>
              <span className="flex items-center gap-1.5 font-medium">
                <strong className="text-[#FACC15] font-extrabold">{siteSettings.homepageStats.travellers}</strong> Travellers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
