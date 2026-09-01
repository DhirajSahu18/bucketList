import Image from "next/image";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappUrl = getWhatsAppLink(
    "Hi Bucketlist team, I'm interested in booking upcoming trips!"
  );

  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#1c1917] text-[#faf7f2]">
      {/* Mobile Static Background Image (<768px): Fast, zero-lag, no video download */}
      <div className="md:hidden absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/branding/hero-mobile.jpg"
          alt="Himalayan mountain sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%] brightness-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/55 to-transparent" />
      </div>

      {/* Desktop Autoplay Muted Loop Background Video (>=768px) */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/branding/brand_group_mountains.jpg"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35] scale-105"
        >
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/55 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="container-wide">
          <div className="max-w-3xl space-y-8">
            {/* Campaign Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#faf7f2] leading-[1.1]">
              Where dreams stop
              <br />
              <span className="text-[#FACC15]">staying on the lists.</span>
            </h1>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4">
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
