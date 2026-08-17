import { Metadata } from "next";
import Image from "next/image";
import { founders } from "@/data/founders";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

export const metadata: Metadata = {
  title: "Our Story — Two Founders, Five Years of Trips | TheBucketList.co",
  description:
    "First-person story of Aryan & Kashshish. Five years of founder-led trips across India, our origin moment in Himachal, and what we refuse to do.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 bg-[#faf7f2] min-h-screen text-[#1c1917]">
      {/* Hero Header */}
      <section className="relative bg-[#1c1917] text-[#faf7f2] section-padding py-20 md:py-28 overflow-hidden">
        {/* Ambient Top Yellow Bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#FACC15]" />

        <div className="container-wide">
          <div className="max-w-3xl space-y-4">
            <EditorialMarker number="01" label="OUR STORY" className="text-[#FACC15]" />
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#faf7f2]">
              Two founders.
              <br />
              <span className="text-[#FACC15]">Five years of trips.</span>
            </h1>
            <p className="font-sans text-[#e6ded1]/90 text-lg sm:text-xl leading-relaxed">
              We&apos;re Aryan and Kashshish. We run every group trip ourselves because we believe trust is carried by named humans, not corporate aggregators.
            </p>
          </div>
        </div>
      </section>

      {/* ~400 WORD FIRST-PERSON NARRATIVE WITH ORIGIN MOMENT & REFUSAL */}
      <section className="section-padding py-16 md:py-24 border-b border-[#e6ded1]">
        <div className="container-narrow space-y-8 font-sans">
          <div className="prose prose-lg max-w-none text-[#1c1917] space-y-6 leading-relaxed">
            <p className="font-serif text-2xl text-[#1c1917] font-semibold border-l-4 border-[#FACC15] pl-4">
              &ldquo;Before TheBucketList.co had a logo, a domain name, or a website — we were already driving group trips up mountain passes.&rdquo;
            </p>

            <p className="text-base text-[#1c1917]/90">
              We started back in 2021. It was just the two of us, a 12-seater tempo traveller, and a group of friends heading up toward Himachal. We didn&apos;t have an office or a glossy brochure. What we had was a deep obsession with route details, local dhabas, and making sure nobody felt like an outsider.
            </p>

            <EditorialMarker number="02" label="ORIGIN MOMENT" />
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1917] font-bold">
              A Rainy Midnight in Sissu
            </h2>
            <p className="text-base text-[#1c1917]/90">
              Our origin moment came on a rainy midnight in October 2021 near Sissu in Lahaul Valley. A hired third-party driver from a big aggregator agency backed out at the last minute because of road slush. The 10 travellers in our group were stranded. Aryan took the keys, got behind the wheel of the traveller, and drove the route himself while Kashshish organized warm blankets and fresh thalis at a local family homestay.
            </p>

            <p className="text-base text-[#1c1917]/90">
              That night made everything clear: travellers don&apos;t care about fancy branding or 40-person tour buses. They care about having experienced humans on the ground who take personal accountability when things change.
            </p>

            <EditorialMarker number="03" label="OUR LOAD-BEARING REFUSAL" />
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1917] font-bold">
              What We Refuse To Do
            </h2>
            
            <div className="bg-[#1c1917] text-[#faf7f2] p-6 rounded-sm border-l-4 border-[#FACC15] space-y-3 font-mono text-xs sm:text-sm shadow-md">
              <span className="text-[#FACC15] font-bold uppercase block">Core Founder Commitment:</span>
              <p className="leading-relaxed">
                We refuse to run 40-person crowded bus tours, white-label reseller itineraries, or hand off your group to an anonymous local agency who has never met you. Every group is capped at 12–16, and a founder is on the trip from day one to departure.
              </p>
            </div>

            <p className="text-base text-[#1c1917]/90">
              That is why our group chats stay active for years, why travellers return for their second and third trips, and why we reply on WhatsApp within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Named Founders Profile Cards */}
      <section className="section-padding py-16 bg-white border-b border-[#e6ded1]">
        <div className="container-wide space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <EditorialMarker number="04" label="THE FOUNDERS" />
            <h2 className="font-serif text-3xl font-bold text-[#1c1917]">
              Aryan & Kashshish
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.id} className="bg-[#faf7f2] border border-[#e6ded1] p-6 rounded-sm space-y-4 font-sans hover:border-[#1c1917] transition-all">
                <div className="relative aspect-[4/3] bg-[#e6ded1] rounded-sm overflow-hidden">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-[#1c1917] text-[#FACC15] font-mono text-[10px] font-bold rounded">
                    {founder.groupsLedCount} GROUPS LED
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#8c4a2f] uppercase block font-bold">{founder.role} &middot; {founder.region}</span>
                  <h3 className="font-serif text-2xl text-[#1c1917] font-semibold">{founder.name}</h3>
                  <p className="text-xs text-[#6b6257] leading-relaxed">
                    {founder.bio}
                  </p>
                  <blockquote className="p-3 bg-white border-l-2 border-[#FACC15] text-xs text-[#1c1917] italic font-serif leading-relaxed">
                    &ldquo;{founder.statement}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-padding py-12 bg-[#FACC15] text-[#1c1917]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-serif">
            <div>
              <p className="text-4xl sm:text-5xl font-bold">{siteSettings.homepageStats.years}</p>
              <p className="font-mono text-xs uppercase font-bold text-[#1c1917]/80 mt-1">Years Running Trips</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold">{siteSettings.homepageStats.trips}</p>
              <p className="font-mono text-xs uppercase font-bold text-[#1c1917]/80 mt-1">Trips Personally Led</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold">{siteSettings.homepageStats.travellers}</p>
              <p className="font-mono text-xs uppercase font-bold text-[#1c1917]/80 mt-1">Happy Travellers</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold">{siteSettings.homepageStats.destinations}</p>
              <p className="font-mono text-xs uppercase font-bold text-[#1c1917]/80 mt-1">Focus Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section-padding py-16 text-center space-y-6 bg-white">
        <h2 className="font-serif text-3xl text-[#1c1917] font-semibold">Ready to join our next run?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/trips" variant="primary" size="lg" className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-bold">
            See Upcoming Group Trips &rarr;
          </Button>
          <Button href="/private-trips" variant="outline" size="lg" className="border-[#1c1917] text-[#1c1917]">
            Plan a Private Trip
          </Button>
        </div>
      </section>
    </div>
  );
}
