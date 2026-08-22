import { Metadata } from "next";
import Image from "next/image";
import { founders } from "@/data/founders";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

export const metadata: Metadata = {
  title: "Our Story — Two Founders, Five Years of Trips | TheBucketList.co",
  description:
    "Learn about Aryan & Kashshish, our founders leading community expeditions across Himachal, Uttarakhand, Kerala, and Himalayan mountain circuits.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#1c1917] min-h-screen font-sans">
      {/* 1. HERO — Seamless Dark Transition (ZERO White Gap Below Navbar) */}
      <section className="relative bg-[#1c1917] text-[#faf7f2] pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 inset-x-0 h-1 bg-[#FACC15] z-10" />

        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <EditorialMarker label="OUR STORY" className="text-[#FACC15]" />
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#faf7f2] leading-[1.1]">
                Two founders.
                <br />
                <span className="text-[#FACC15]">Hundreds of mountain miles.</span>
              </h1>
              <p className="text-[#e6ded1] text-base sm:text-xl max-w-2xl leading-relaxed font-normal">
                We started by leading trips through the mountains we knew best. Five years later, we&apos;re still building the kind of journeys we&apos;d want to take ourselves.
              </p>
            </div>

            {/* Muted Travel Community Group Photography Feature */}
            <div className="lg:col-span-4 relative aspect-[4/3] rounded-sm overflow-hidden border border-white/15 bg-white/5 shadow-2xl">
              <Image
                src="/images/brand_group_mountains.jpg"
                alt="TheBucketList.co community joiners on a mountain road expedition"
                fill
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#1c1917]/90 text-[#FACC15] text-[10px] font-sans font-extrabold uppercase rounded-xs">
                Founded 2021 &middot; On Ground
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT STARTED — Editorial Two-Column Visual Storytelling */}
      <section className="section-padding py-16 md:py-24 bg-white border-b border-[#e6ded1] text-[#1c1917]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Large Editorial Quote */}
            <div className="lg:col-span-5 space-y-3">
              <EditorialMarker label="HOW IT STARTED" />
              <blockquote className="font-serif text-2xl sm:text-4xl text-[#1c1917] font-extrabold border-l-4 border-[#FACC15] pl-5 leading-tight">
                &ldquo;Before we had a website, we were already driving group trips up mountain passes.&rdquo;
              </blockquote>
            </div>

            {/* Right: Short Concise Story */}
            <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#4e473e] font-normal leading-relaxed">
              <p>
                Back in 2021, it started with one mountain vehicle and a few people who wanted to go further than the usual itinerary.
              </p>
              <p>
                The routes grew. The groups got bigger. And somewhere between Himalayan passes and Kerala backwaters, TheBucketList became more than a weekend plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY WE DO THIS — Brand Principles */}
      <section className="section-padding py-16 md:py-24 bg-[#faf7f2] border-b border-[#e6ded1] text-[#1c1917]">
        <div className="container-wide space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <EditorialMarker label="WHY WE DO THIS" className="justify-center" />
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1c1917] leading-tight">
              Good trips aren&apos;t just about where you go.
            </h2>
            <p className="text-[#4e473e] text-base sm:text-lg font-normal leading-relaxed">
              They&apos;re about who you travel with, how well everything is planned, and whether you come back with stories worth keeping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="p-6 bg-white border border-[#e6ded1] rounded-sm space-y-2">
              <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                01 &mdash; PEOPLE FIRST
              </span>
              <h3 className="font-sans text-xl font-extrabold text-[#1c1917]">Solo joiners feel welcome</h3>
              <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                Solo joiners should feel part of the crew quickly. Everyone connects within their first hour on ground.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e6ded1] rounded-sm space-y-2">
              <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                02 &mdash; PLANNED PROPERLY
              </span>
              <h3 className="font-sans text-xl font-extrabold text-[#1c1917]">Pre-tested logistics</h3>
              <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                Routes, stays, vehicle transit, and timing are tested personally by our founders before the trip begins.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e6ded1] rounded-sm space-y-2">
              <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                03 &mdash; GO FURTHER
              </span>
              <h3 className="font-sans text-xl font-extrabold text-[#1c1917]">Unforgettable experiences</h3>
              <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                We build journeys around authentic local experiences you can&apos;t get from a standard travel agency package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER COMMITMENT — Dark Full-Width Brand Promise */}
      <section className="section-padding py-16 md:py-24 bg-[#1c1917] text-[#faf7f2] border-b border-white/10 font-sans">
        <div className="container-wide">
          <div className="max-w-3xl space-y-6">
            <EditorialMarker label="FOUNDER COMMITMENT" className="text-[#FACC15]" />
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#faf7f2] leading-tight">
              We don&apos;t hand you off to a travel agency.
            </h2>
            <p className="text-[#e6ded1] text-base sm:text-xl font-normal leading-relaxed">
              From your first message to the last day of the trip, you stay connected with the people who actually build and lead these journeys.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-[#FACC15] font-extrabold">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-xs">
                &bull; Routes personally scouted
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-xs">
                &bull; Stays tested before the trip
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-xs">
                &bull; Direct founder contact
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PEOPLE BEHIND THE MILES — Founder Profiles */}
      <section className="section-padding py-20 bg-white border-b border-[#e6ded1] text-[#1c1917]">
        <div className="container-wide space-y-12">
          <div className="max-w-2xl space-y-2">
            <EditorialMarker label="THE PEOPLE BEHIND THE MILES" />
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1c1917]">
              Aryan &amp; Kashshish
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {founders.map((founder) => (
              <div key={founder.id} className="bg-[#faf7f2] border border-[#e6ded1] p-6 sm:p-8 rounded-sm flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative w-full sm:w-44 aspect-[4/5] bg-[#1c1917] rounded-xs overflow-hidden shrink-0 shadow-xs">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/85 text-[#FACC15] font-sans text-[10px] font-extrabold rounded-xs">
                    {founder.experience} EXP
                  </div>
                </div>

                <div className="space-y-3 flex-1 font-sans">
                  <div>
                    <span className="text-xs text-[#8c4a2f] uppercase block font-extrabold tracking-wider">
                      {founder.role} &middot; {founder.region}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1c1917] font-extrabold">{founder.name}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
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

      {/* 6. MILESTONE STATS STRIP — Gold Section */}
      <section className="section-padding py-14 md:py-16 bg-[#FACC15] text-[#1c1917]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-sans">
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-extrabold font-mono text-[#1c1917]">{siteSettings.homepageStats.years}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917]">Years Running Trips</p>
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

      {/* 7. FINAL CTA — WHAT'S NEXT */}
      <section className="section-padding py-20 bg-[#faf7f2] text-center space-y-6 font-sans text-[#1c1917]">
        <div className="max-w-2xl mx-auto space-y-3">
          <EditorialMarker label="WHAT'S NEXT?" className="justify-center" />
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1c1917] font-extrabold leading-tight">
            The next story could be yours.
          </h2>
          <p className="text-[#4e473e] text-base sm:text-lg font-normal leading-relaxed">
            Join an upcoming community trip or let us build something around your own crew.
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
