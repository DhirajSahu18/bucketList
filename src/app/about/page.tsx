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
    <div className="pt-20 md:pt-24 bg-[#faf7f2] min-h-screen text-[#1c1917] font-sans">
      {/* Hero Header */}
      <section className="relative bg-[#1c1917] text-[#faf7f2] section-padding py-20 md:py-28 overflow-hidden">
        {/* Ambient Top Yellow Bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#FACC15]" />

        <div className="container-wide">
          <div className="max-w-3xl space-y-4">
            <EditorialMarker label="OUR STORY" className="text-[#FACC15]" />
            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-[#faf7f2]">
              Two founders.
              <br />
              <span className="text-[#FACC15]">Hundreds of mountain miles.</span>
            </h1>
            <p className="text-[#e6ded1] text-lg sm:text-xl leading-relaxed font-normal">
              We&apos;re Aryan and Kashshish. We started leading mountain runs in 2021 because we loved taking group road trips up Himalayan passes — and wanted to build trips where everything is planned properly.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding py-16 md:py-24 border-b border-[#e6ded1] bg-white">
        <div className="container-narrow space-y-8">
          <div className="space-y-6 leading-relaxed font-sans text-[#1c1917]">
            <blockquote className="font-serif text-xl sm:text-2xl text-[#1c1917] font-extrabold border-l-4 border-[#FACC15] pl-4 max-w-2xl leading-snug">
              &ldquo;Before we had a website — we were already driving group trips up mountain passes.&rdquo;
            </blockquote>

            <p className="text-base sm:text-lg text-[#4e473e] font-normal leading-relaxed">
              We started back in 2021 with a single mountain vehicle heading up toward Himachal. Over 5 years and 80+ trips later, we&apos;ve expanded from Himalayan pass road trips to flagship New Year runs like Himachal Unplugged and tropical coastal journeys in Kerala.
            </p>

            <EditorialMarker label="HOW WE WORK" />
            <h2 className="font-sans text-2xl sm:text-3xl text-[#1c1917] font-extrabold">
              Good People. Great Places.
            </h2>
            <p className="text-base sm:text-lg text-[#4e473e] font-normal leading-relaxed">
              Whether it&apos;s a small trek or an 80-person community trip, our goal stays simple: zero group chaos, clear timing, pre-tested homestays, and making sure solo joiners feel part of the crew within their first hour.
            </p>

            <EditorialMarker label="FOUNDER COMMITMENT" />
            <h2 className="font-sans text-2xl sm:text-3xl text-[#1c1917] font-extrabold">
              What We Guarantee
            </h2>
            
            <div className="bg-[#1c1917] text-[#faf7f2] p-6 sm:p-8 rounded-sm border-l-4 border-[#FACC15] space-y-3 text-xs sm:text-sm shadow-md">
              <span className="text-[#FACC15] font-extrabold uppercase block tracking-wider">Direct Founder Promise:</span>
              <p className="leading-relaxed font-medium">
                We scout every route, stay in every homestay first, and travel on ground with our groups. You will never be handed off to an anonymous line-item reseller agency. We maintain direct WhatsApp contact from your first inquiry through post-trip reunions.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#4e473e] font-normal leading-relaxed">
              That&apos;s why our trip group chats stay active for years, why joiners return for their second and third trips, and why we reply on WhatsApp within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Open Editorial Founder Profiles (Zero Profile Card Box Borders) */}
      <section className="section-padding py-20 bg-[#faf7f2] border-b border-[#e6ded1]">
        <div className="container-wide space-y-12">
          <div className="max-w-xl space-y-2">
            <EditorialMarker label="THE FOUNDERS" />
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#1c1917]">
              Aryan & Kashshish
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
            {founders.map((founder) => (
              <div key={founder.id} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative w-full sm:w-48 aspect-[4/5] bg-[#1c1917] rounded-xs overflow-hidden shrink-0 shadow-xs">
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
                    <h3 className="font-sans text-2xl text-[#1c1917] font-extrabold">{founder.name}</h3>
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

      {/* Stats Bar */}
      <section className="section-padding py-12 bg-[#FACC15] text-[#1c1917]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-sans">
            <div>
              <p className="text-4xl sm:text-5xl font-bold font-mono">{siteSettings.homepageStats.years}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917] mt-1">Years Running Trips</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold font-mono">{siteSettings.homepageStats.trips}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917] mt-1">Trips Led</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold font-mono">{siteSettings.homepageStats.travellers}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917] mt-1">Happy Joiners</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold font-mono">{siteSettings.homepageStats.destinations}</p>
              <p className="text-xs uppercase font-extrabold text-[#1c1917] mt-1">Focus Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section-padding py-16 text-center space-y-6 bg-white">
        <h2 className="font-sans text-3xl text-[#1c1917] font-extrabold">Ready to join our next community run?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/trips" variant="primary" size="lg" className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-extrabold">
            See Upcoming Trips
          </Button>
          <Button href="/private-trips" variant="outline" size="lg" className="border-[#1c1917] text-[#1c1917] font-bold">
            Plan a Private Trip
          </Button>
        </div>
      </section>
    </div>
  );
}
