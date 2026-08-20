import Image from "next/image";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappUrl = getWhatsAppLink("Hi Aryan & Kashshish, I'm exploring trips on TheBucketList.co and want to check available seats!");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#1c1917] text-[#faf7f2]">
      {/* Background Image Overlay: Authentic Group Trip Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand_group_mountains.jpg"
          alt="TheBucketList.co travellers on a mountain group expedition"
          fill
          className="object-cover object-center brightness-[0.42] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/50 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="container-wide">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2]/10 border border-[#FACC15]/40 rounded-full text-xs font-mono text-[#FACC15] backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
              <span>Small-group trips across India &middot; Capped at 12&ndash;16</span>
            </div>

            {/* Trip-Led Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#faf7f2] leading-[1.1]">
              Raw mountain roads.
              <br />
              <span className="text-[#FACC15]">Real family homestays.</span>
              <br />
              Small groups only.
            </h1>

            {/* Evocative, High-Impact & Inspiring Supporting Copy */}
            <p className="font-sans text-lg sm:text-2xl text-[#e6ded1] max-w-2xl leading-relaxed font-light">
              The Spiti circuit over Kunzum Pass. Tea estates above Munnar. Late-night campfire stargazing at 14,000 ft. Every departure is capped at <span className="text-white font-semibold">12&ndash;16 travellers</span> and built from routes we&rsquo;ve <span className="text-[#FACC15] font-semibold">scouted and driven ourselves</span>.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/trips" variant="primary" size="lg" className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-bold">
                See Upcoming Group Trips &rarr;
              </Button>

              <Button
                href={whatsappUrl}
                external
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-[#FACC15] hover:text-[#FACC15]"
              >
                WhatsApp Us (&lt;2h reply)
              </Button>
            </div>

            {/* Micro Trust Line */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#e6ded1]/70 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <strong className="text-[#FACC15] font-semibold">{siteSettings.homepageStats.trips}</strong> Trips Run
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-[#FACC15] font-semibold">{siteSettings.homepageStats.travellers}</strong> Travellers
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-[#FACC15] font-semibold">12–16</strong> Group Cap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
