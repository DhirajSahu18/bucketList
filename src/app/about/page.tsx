import { Metadata } from "next";
import Image from "next/image";
import { founders } from "@/data/founders";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

export const metadata: Metadata = {
  title: "Our Story : Two Founders, Real Journeys | Bucketlist",
  description:
    "From school friends to co-founders: learn how Aryan & Kashshish built Bucketlist to help people turn travel dreams into experiences worth ticking off.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#1c1917] min-h-screen font-sans">
      {/* 1. HERO — Clean Dark Header with Punchy Title & Attendance Line */}
      <section className="relative bg-[#1c1917] text-[#faf7f2] pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 inset-x-0 h-1 bg-[#FACC15] z-10" />

        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <EditorialMarker label="OUR STORY" className="text-[#FACC15]" />
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#faf7f2] leading-[1.1]">
                How Bucketlist
                <br />
                <span className="text-[#FACC15]">came to life.</span>
              </h1>
              <p className="text-[#e6ded1] text-base sm:text-xl max-w-2xl leading-relaxed font-normal pt-1">
                From signing each other&apos;s attendance in school to signing a partnership deed, we&apos;ve definitely come a long way.
              </p>
            </div>

            {/* Visual Photography Feature */}
            <div className="lg:col-span-4 relative aspect-[4/3] rounded-sm overflow-hidden border border-white/15 bg-white/5 shadow-2xl">
              <Image
                src="/images/our-story.jpeg"
                alt="Bucketlist community travellers on an expedition"
                fill
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#1c1917]/90 text-[#FACC15] text-[10px] font-sans font-extrabold uppercase rounded-xs">
                Bucketlist &middot; On Ground
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY — Seamless Single Narrative Journey */}
      <section className="section-padding py-16 md:py-24 bg-white border-b border-[#e6ded1] text-[#1c1917]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Subtle Narrative Anchor */}
            <div className="lg:col-span-5 space-y-4">
              <EditorialMarker label="THE JOURNEY" />
              <blockquote className="font-serif text-2xl sm:text-4xl text-[#1c1917] font-extrabold border-l-4 border-[#FACC15] pl-5 leading-tight">
                &ldquo;We wanted to help people turn travel dreams into memories worth ticking off.&rdquo;
              </blockquote>
            </div>

            {/* Right Column: Flowing Narrative */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#4e473e] font-normal leading-relaxed">
              <p>
                After school, life took us in different directions. We chose different streams, worked with different companies, and explored completely different fields.
              </p>
              <p>
                Along the way, we both spent years working across the travel industry. We gained hands-on experience in almost every aspect of group trips, learning firsthand what works on ground and what truly makes a journey memorable.
              </p>
              <p>
                One day while catching up, we realized something: between the two of us, we had already ticked quite a few things off our own bucket lists. But so many people around us were still waiting to experience theirs.
              </p>

              {/* Standalone Emphasis Moment */}
              <div className="py-2">
                <p className="font-serif text-xl sm:text-2xl font-extrabold text-[#1c1917] italic">
                  &ldquo;Why not help them tick those off too?&rdquo;
                </p>
              </div>

              <p>
                With everything we had learned, experienced, and loved about travel, we decided to build something of our own : a simple, honest way to help people turn their travel dreams into experiences worth ticking off.
              </p>

              <p className="font-semibold text-[#1c1917] text-lg sm:text-xl pt-2">
                And that&apos;s how Bucketlist came to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE STAND FOR — Core Principles */}
      <section className="section-padding py-16 md:py-24 bg-[#faf7f2] border-b border-[#e6ded1] text-[#1c1917]">
        <div className="container-wide space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <EditorialMarker label="WHAT WE STAND FOR" className="justify-center" />
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1c1917] leading-tight">
              Good trips are simple when planned properly.
            </h2>
            <p className="text-[#4e473e] text-base sm:text-lg font-normal leading-relaxed">
              We focus on scouted stays, reliable transit, genuine local spots, and a group environment where solo joiners feel right at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="p-6 bg-white border border-[#e6ded1] rounded-sm space-y-2">
              <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                01 &mdash; COMMUNITY FIRST
              </span>
              <h3 className="font-sans text-xl font-extrabold text-[#1c1917]">Solo joiners feel welcome</h3>
              <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                Whether you join alone or with friends, everyone connects naturally on ground within the first few hours.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e6ded1] rounded-sm space-y-2">
              <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                02 &mdash; HANDS-ON PLANNING
              </span>
              <h3 className="font-sans text-xl font-extrabold text-[#1c1917]">Scouted routes &amp; stays</h3>
              <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                Routes, accommodations, timing, and local food spots are tested personally before taking our groups.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e6ded1] rounded-sm space-y-2">
              <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                03 &mdash; REAL EXPERIENCES
              </span>
              <h3 className="font-sans text-xl font-extrabold text-[#1c1917]">No rushed itineraries</h3>
              <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                We give you space to soak in places, enjoy long conversations, and experience destinations at a comfortable pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR COMMITMENT */}
      <section className="section-padding py-16 md:py-24 bg-[#1c1917] text-[#faf7f2] border-b border-white/10 font-sans">
        <div className="container-wide">
          <div className="max-w-3xl space-y-6">
            <EditorialMarker label="OUR COMMITMENT" className="text-[#FACC15]" />
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#faf7f2] leading-tight">
              You talk to the people who build and lead the trip.
            </h2>
            <p className="text-[#e6ded1] text-base sm:text-xl font-normal leading-relaxed">
              From your first query on WhatsApp to being on ground, you communicate directly with our team. Zero middlemen or outsourced call centers.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-[#FACC15] font-extrabold">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-xs">
                &bull; Personally scouted itineraries
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-xs">
                &bull; Verified boutique stays
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-xs">
                &bull; Direct founder support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PEOPLE BEHIND BUCKETLIST — Our Founders */}
      <section className="section-padding py-20 bg-white border-b border-[#e6ded1] text-[#1c1917]">
        <div className="container-wide space-y-12">
          <div className="max-w-2xl space-y-2">
            <EditorialMarker label="THE PEOPLE BEHIND BUCKETLIST" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1917]">
              Our Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="bg-[#faf7f2] border border-[#e6ded1] p-6 sm:p-8 rounded-sm flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="relative w-full sm:w-44 aspect-[4/5] bg-[#1c1917] rounded-xs overflow-hidden shrink-0 shadow-xs">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/85 text-[#FACC15] font-sans text-[10px] font-extrabold rounded-xs">
                    {founder.experience} EXP
                  </div>
                </div>

                <div className="space-y-3 flex-1 font-sans">
                  <div>
                    <h3 className="font-serif text-3xl text-[#1c1917] font-extrabold leading-tight">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#8c4a2f] mt-0.5">
                      {founder.role}
                    </p>
                    <p className="text-xs text-[#4e473e] font-medium">
                      {founder.region}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                    {founder.bio}
                  </p>

                  <blockquote className="pt-2 text-xs sm:text-sm text-[#1c1917] italic font-serif leading-relaxed border-l-2 border-[#FACC15] pl-3 py-1">
                    &ldquo;{founder.statement}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MILESTONE STATS STRIP */}
      <section className="section-padding py-14 md:py-16 bg-[#FACC15] text-[#1c1917]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-sans">
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-extrabold font-mono text-[#1c1917]">{siteSettings.homepageStats.years}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917]">Years of Experience</p>
            </div>
            <div className="space-y-1 border-l border-[#1c1917]/20 pl-4">
              <p className="text-4xl sm:text-5xl font-extrabold font-mono text-[#1c1917]">{siteSettings.homepageStats.trips}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917]">Trips Led</p>
            </div>
            <div className="space-y-1 border-l border-[#1c1917]/20 pl-4">
              <p className="text-4xl sm:text-5xl font-extrabold font-mono text-[#1c1917]">{siteSettings.homepageStats.travellers}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917]">Happy Joiners</p>
            </div>
            <div className="space-y-1 border-l border-[#1c1917]/20 pl-4">
              <p className="text-4xl sm:text-5xl font-extrabold font-mono text-[#1c1917]">{siteSettings.homepageStats.destinations}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917]">Focus Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="section-padding py-20 bg-[#faf7f2] text-center space-y-6 font-sans text-[#1c1917]">
        <div className="max-w-2xl mx-auto space-y-3">
          <EditorialMarker label="WHAT'S NEXT?" className="justify-center" />
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1c1917] font-extrabold leading-tight">
            Ready to tick off your next trip?
          </h2>
          <p className="text-[#4e473e] text-base sm:text-lg font-normal leading-relaxed">
            Explore upcoming community runs or talk to us about planning a private departure for your group.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button href="/trips" variant="primary" size="lg" className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-extrabold py-3.5 px-6">
            See Upcoming Trips
          </Button>
          <Button href="/private-trips" variant="outline" size="lg" className="border-[#1c1917] text-[#1c1917] font-extrabold py-3.5 px-6">
            Plan a Private Trip
          </Button>
        </div>
      </section>
    </div>
  );
}
