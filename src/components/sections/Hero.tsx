import Image from "next/image";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappUrl = getWhatsAppLink(
    "Hi! I'm interested in Himachal Unplugged. Could you share the latest details and help me understand how to join?"
  );

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#1c1917] text-[#faf7f2]">
      {/* Background Image Overlay: Authentic Group Trip Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand_group_mountains.jpg"
          alt="TheBucketList.co community travellers on a mountain expedition"
          fill
          className="object-cover object-center brightness-[0.35] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/50 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="container-wide">
          <div className="max-w-3xl space-y-6">
            {/* Flagship Campaign Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FACC15] text-[#1c1917] rounded-full text-xs font-sans font-bold uppercase tracking-wider shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#1c1917] animate-pulse" />
              <span>Flagship Run &middot; Himachal Unplugged New Year</span>
            </div>

            {/* Campaign Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#faf7f2] leading-[1.1]">
              Come for the Mountains.
              <br />
              <span className="text-[#FACC15]">Stay for the Memories.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-xl text-[#e6ded1] max-w-2xl leading-relaxed font-normal">
              Six days across Manali, Kasol, mountain roads and the places worth slowing down for. Led on ground by founders <span className="text-white font-semibold">Aryan & Kashshish</span>.
            </p>

            {/* Fast Spec Pill Strip */}
            <div className="flex flex-wrap items-center gap-3 font-sans text-xs text-[#FAF7F2] pt-1">
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-xs font-semibold">
                📅 Dec 28 – Jan 02
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-xs font-semibold">
                📍 Manali & Parvati Valley
              </span>
              <span className="px-3 py-1 bg-[#FACC15]/20 border border-[#FACC15]/40 text-[#FACC15] rounded-xs font-bold">
                ⚡ 28 of 80 Seats Left
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button
                href="/trips/himachal-unplugged-new-year"
                variant="primary"
                size="lg"
                className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-bold shadow-lg"
              >
                Explore Himachal Unplugged &rarr;
              </Button>

              <Button
                href={whatsappUrl}
                external
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-[#FACC15] hover:text-[#FACC15]"
              >
                Chat on WhatsApp (&lt;2h reply)
              </Button>
            </div>

            {/* Micro Trust Line */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-sans text-[#e6ded1]/80 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <strong className="text-[#FACC15] font-bold">{siteSettings.homepageStats.years} Years</strong> Running Trips
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-[#FACC15] font-bold">{siteSettings.homepageStats.trips}</strong> Journeys Led
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-[#FACC15] font-bold">{siteSettings.homepageStats.travellers}</strong> Travellers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
