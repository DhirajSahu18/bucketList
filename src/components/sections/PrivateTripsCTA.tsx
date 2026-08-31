"use client";

import { Button } from "@/components/ui/Button";
import { EditorialMarker } from "@/components/ui/EditorialMarker";
import { trackEvent } from "@/lib/analytics";

export function PrivateTripsCTA() {
  const steps = [
    { num: "01", title: "Tell us what you're thinking", desc: "Your preferred dates, group size, and destination in mind." },
    { num: "02", title: "We ask a few quick questions", desc: "Pace, stay preferences, and celebration plans." },
    { num: "03", title: "We build the route & pricing", desc: "A customized day-by-day itinerary with transparent costs." },
    { num: "04", title: "We manage the entire trip", desc: "Vehicle drivers, stay locks, and on-ground coordination." },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf7f2] text-[#1c1917] border-b border-[#e6ded1] font-sans">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 space-y-2">
            <EditorialMarker number="05" label="PRIVATE TRIPS" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-extrabold leading-tight">
              Your dates. Your group. We&apos;ll help plan it.
            </h2>
            <p className="text-[#4e473e] text-base md:text-lg font-normal">
              Want to travel as a couple, with your friends, family, or alumni crew? Tell us where you&apos;re thinking of going and we&apos;ll build the trip.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((s) => (
              <div key={s.num} className="bg-white border border-[#e6ded1] p-6 rounded-sm space-y-3 hover:border-[#1c1917] transition-all duration-300">
                <span className="text-xs text-[#8c4a2f] font-extrabold block">{s.num} &mdash; HOW IT WORKS</span>
                <h3 className="font-serif text-lg text-[#1c1917] font-extrabold">{s.title}</h3>
                <p className="text-xs text-[#4e473e] leading-relaxed font-sans font-normal">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-[#e6ded1]">
            <div>
              <span className="text-xs text-[#8c4a2f] uppercase tracking-wider block mb-1 font-bold">Indicative Benchmarks</span>
              <span className="text-lg font-mono font-extrabold text-[#1c1917]">From ₹14,500 to ₹32,000 / person</span>
            </div>

            <Button
              href="/private-trips"
              variant="primary"
              size="lg"
              className="bg-[#1c1917] text-[#FAF7F2] hover:bg-[#8c4a2f] border-none font-extrabold px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider"
              onClick={() => trackEvent("click_private_trip", { source: "homepage_panel" })}
            >
              Plan a Private Trip
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
