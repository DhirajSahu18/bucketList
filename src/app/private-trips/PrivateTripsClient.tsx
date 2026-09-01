"use client";

import { useState } from "react";
import Image from "next/image";
import { PrivateTripExample } from "@/types";
import { Button } from "@/components/ui/Button";
import { EditorialMarker } from "@/components/ui/EditorialMarker";
import { PrivateTripForm } from "./PrivateTripForm";

const DESTINATION_MAP: Record<string, string> = {
  "Himachal Pradesh": "Himachal & Manali",
  "Goa": "Goa Coastal",
  "Gokarna": "Gokarna Coast",
  "Kerala": "Kerala Backwaters",
  "Rajasthan": "Royal Rajasthan Forts & Desert",
};

interface PrivateTripsClientProps {
  privateTripExamples: PrivateTripExample[];
  whatsappUrl: string;
}

export function PrivateTripsClient({ privateTripExamples, whatsappUrl }: PrivateTripsClientProps) {
  const [selectedDestination, setSelectedDestination] = useState<string>("Himachal & Manali");
  const featuredRoute = privateTripExamples[0];
  const remainingRoutes = privateTripExamples.slice(1);

  const handleCardClick = (destinationName: string) => {
    const mappedVal = DESTINATION_MAP[destinationName] || "Himachal & Manali";
    setSelectedDestination(mappedVal);

    const formElem = document.getElementById("consultation-form");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#1c1917] min-h-screen font-sans">
      {/* 1. CINEMATIC HERO PANEL */}
      <section className="relative bg-[#1c1917] text-[#faf7f2] pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 inset-x-0 h-1 bg-[#FACC15] z-10" />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/branding/brand_group_mountains.jpg"
            alt="Custom private group trip travellers on a mountain road expedition"
            fill
            className="object-cover object-center brightness-[0.25] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/75 to-transparent" />
        </div>

        <div className="relative z-10 container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <EditorialMarker label="PRIVATE & CUSTOM TRIPS" className="text-[#FACC15]" />

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#faf7f2] leading-[1.1] tracking-tight">
                What are you planning?
              </h1>

              <p className="text-[#e6ded1] text-lg sm:text-xl max-w-2xl leading-relaxed font-normal">
                Tell us your dates, group size, and the kind of trip you want. We&apos;ll help you figure out the rest.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 font-sans">
                <Button
                  href="#consultation-form"
                  variant="primary"
                  size="lg"
                  className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-extrabold py-3.5 px-6 text-sm shadow-xl"
                  onClick={() => {
                    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Plan Your Private Trip
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#128c7e] hover:bg-[#0e6c61] text-white px-6 py-3.5 rounded-xs text-sm font-extrabold transition-all shadow-md"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#FACC15] font-semibold">
                <span>⚡ We reply on WhatsApp within 2 hours</span>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-4 relative aspect-[4/3] rounded-sm overflow-hidden border border-white/20 bg-[#1c1917] shadow-2xl">
              <Image
                src="/images/branding/brand_group_mountains.jpg"
                alt="TheBucketList.co private group expedition travellers"
                fill
                className="object-cover brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-sans">
                <span className="px-2.5 py-1 bg-[#1c1917]/90 text-[#FACC15] text-[10px] font-extrabold uppercase rounded-xs">
                  Private Group Expeditions
                </span>
                <span className="text-white/90 text-[10px] font-bold">4–30+ Joiners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SAMPLE PRIVATE ROUTES & INDICATIVE PRICES */}
      <section className="section-padding py-16 md:py-24 bg-white border-b border-[#e6ded1] text-[#1c1917]">
        <div className="container-wide space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#e6ded1] pb-6 gap-4">
            <div>
              <EditorialMarker label="SAMPLE ITINERARIES" />
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1c1917] font-extrabold leading-tight">
                Sample Private Routes & Indicative Prices
              </h2>
            </div>
            <p className="text-xs text-[#4e473e] font-semibold max-w-xs">
              Indicative pricing to help estimate your group budget before requesting a custom proposal
            </p>
          </div>

          {/* Featured Custom Route */}
          {featuredRoute && (
            <div className="mb-12">
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(featuredRoute.destination)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(featuredRoute.destination);
                  }
                }}
                aria-label={`Customize ${featuredRoute.title}`}
                className="group relative block bg-white border border-[#e6ded1] rounded-sm overflow-hidden hover:border-[#1c1917] hover:shadow-xl transition-all duration-300 cursor-pointer shadow-sm font-sans"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[340px] bg-[#1c1917]">
                    {featuredRoute.image.includes("himachal") ? (
                      <>
                        <Image
                          src="/images/himachal-new-year/cover_mobile.png"
                          alt={featuredRoute.title}
                          fill
                          className="lg:hidden object-cover object-[68%_85%] transition-transform duration-700 group-hover:scale-105"
                        />
                        <Image
                          src={featuredRoute.image}
                          alt={featuredRoute.title}
                          fill
                          className="hidden lg:block object-cover object-[center_78%] transition-transform duration-700 group-hover:scale-105"
                        />
                      </>
                    ) : (
                      <Image
                        src={featuredRoute.image}
                        alt={featuredRoute.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#1c1917] text-[#FACC15] text-xs font-sans font-extrabold uppercase rounded-xs shadow-md">
                      Featured Custom Route
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="text-xs text-[#8c4a2f] uppercase tracking-wider block font-extrabold">
                        {featuredRoute.destination} &middot; {featuredRoute.duration}
                      </span>

                      <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917] font-extrabold leading-tight group-hover:text-[#8c4a2f] transition-colors">
                        {featuredRoute.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                        {featuredRoute.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#e6ded1] space-y-4 font-sans">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#4e473e] font-semibold">
                          Ideal Group: <strong className="text-[#1c1917]">{featuredRoute.idealGroup}</strong>
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <span className="text-[10px] text-[#8c4a2f] uppercase block font-extrabold tracking-wider">
                            Indicative Rate
                          </span>
                          <span className="font-extrabold text-[#1c1917] font-mono text-sm sm:text-base">
                            {featuredRoute.indicativePrice}
                          </span>
                        </div>

                        <span className="px-5 py-2.5 bg-[#1c1917] text-white text-xs font-extrabold rounded-xs group-hover:bg-[#8c4a2f] transition-colors shrink-0 inline-flex items-center gap-1">
                          Customize Route &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Secondary Custom Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {remainingRoutes.map((item) => (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(item.destination)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(item.destination);
                  }
                }}
                aria-label={`Customize ${item.title}`}
                className="group bg-white border border-[#e6ded1] rounded-sm overflow-hidden shadow-xs hover:shadow-xl hover:border-[#1c1917] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-w-0 font-sans"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] bg-[#1c1917] w-full overflow-hidden shrink-0">
                    {item.image.includes("himachal") ? (
                      <>
                        <Image
                          src="/images/himachal-new-year/cover_mobile.png"
                          alt={item.title}
                          fill
                          className="md:hidden object-cover object-[68%_85%] transition-transform duration-700 group-hover:scale-105"
                        />
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="hidden md:block object-cover object-[center_78%] transition-transform duration-700 group-hover:scale-105"
                        />
                      </>
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute bottom-2 left-2 bg-[#1c1917]/90 text-[#FAF7F2] text-[11px] px-2.5 py-1 rounded-xs font-extrabold">
                      {item.duration} &middot; {item.idealGroup}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] uppercase text-[#8c4a2f] font-extrabold tracking-wider block">
                      {item.destination}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1c1917] font-extrabold leading-snug group-hover:text-[#8c4a2f] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 border-t border-[#e6ded1] flex items-center justify-between gap-2 text-xs font-sans mt-auto">
                  <div>
                    <span className="text-[#8c4a2f] font-extrabold uppercase tracking-wider block text-[10px]">Indicative</span>
                    <span className="font-extrabold text-[#1c1917] bg-[#faf7f2] px-2.5 py-1 rounded-xs border border-[#e6ded1] font-mono shrink-0">
                      {item.indicativePrice}
                    </span>
                  </div>

                  <span className="px-4 py-2 bg-[#1c1917] text-white text-xs font-extrabold rounded-xs group-hover:bg-[#8c4a2f] transition-colors shrink-0 inline-flex items-center gap-1">
                    Customize Route &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS + CONSULTATION FORM SECTION */}
      <section id="consultation-form" className="scroll-mt-28 section-padding py-16 md:py-24 bg-[#faf7f2] text-[#1c1917]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <EditorialMarker label="HOW IT WORKS" />
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-extrabold leading-tight">
                  Simple, transparent planning
                </h2>
                <p className="text-xs sm:text-sm text-[#4e473e] font-normal">
                  Three quick steps from your initial idea to a scouted, custom route proposal.
                </p>
              </div>

              <div className="space-y-6 font-sans">
                <div className="p-5 bg-white border border-[#e6ded1] rounded-sm space-y-1.5">
                  <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                    01 &mdash; Tell us your idea
                  </span>
                  <h3 className="font-sans text-base font-extrabold text-[#1c1917]">Dates, group size, &amp; destination</h3>
                  <p className="text-xs text-[#4e473e] leading-relaxed font-normal">
                    Share your preferred travel dates, approximate group size, and what kind of trip experience your crew wants.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#e6ded1] rounded-sm space-y-1.5">
                  <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                    02 &mdash; We understand your crew
                  </span>
                  <h3 className="font-sans text-base font-extrabold text-[#1c1917]">Direct team alignment</h3>
                  <p className="text-xs text-[#4e473e] leading-relaxed font-normal">
                    We connect on WhatsApp to understand your pace, stay preferences, celebratory plans, and route requirements.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#e6ded1] rounded-sm space-y-1.5">
                  <span className="text-xs font-extrabold text-[#8c4a2f] uppercase tracking-wider block">
                    03 &mdash; We build your journey
                  </span>
                  <h3 className="font-sans text-base font-extrabold text-[#1c1917]">Custom route &amp; cost estimate</h3>
                  <p className="text-xs text-[#4e473e] leading-relaxed font-normal">
                    You receive a transparent day-by-day itinerary proposal and fixed cost estimate before making any deposit.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#1c1917] text-white rounded-sm space-y-2 text-xs font-sans border-l-4 border-[#FACC15]">
                <span className="text-[#FACC15] font-extrabold block uppercase tracking-wider text-[11px]">
                  ⚡ QUICK RESPONSE
                </span>
                <h3 className="font-sans text-sm font-extrabold text-white">Planning a trip? Let&apos;s talk.</h3>
                <p className="text-[#e6ded1] font-medium leading-relaxed">
                  Tell us what you&apos;re planning and we&apos;ll help you shape the right trip. We usually reply on WhatsApp within 2 hours.
                </p>
                <span className="text-[11px] text-[#FACC15] block pt-1 font-semibold">
                  Founder-led team. Personal planning. No automated travel desks.
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <PrivateTripForm initialDestination={selectedDestination} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
