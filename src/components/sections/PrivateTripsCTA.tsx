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
    <section className="py-16 md:py-24 bg-[#1c1917] text-[#faf7f2] font-sans">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 space-y-2">
            <EditorialMarker number="05" label="PRIVATE TRIPS" className="text-[#FACC15]" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf7f2] font-bold leading-tight">
              Your dates. Your group. We&apos;ll help plan it.
            </h2>
            <p className="text-[#e6ded1] text-base md:text-lg">
              Want to travel with just your friends, family, or alumni crew? Tell us where you&apos;re thinking of going and we&apos;ll build the trip.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((s) => (
              <div key={s.num} className="bg-white/5 border border-white/10 p-6 rounded-sm space-y-3">
                <span className="text-xs text-[#FACC15] font-bold block">{s.num} &mdash; HOW IT WORKS</span>
                <h3 className="font-serif text-lg text-white font-bold">{s.title}</h3>
                <p className="text-xs text-[#e6ded1]/80 leading-relaxed font-sans">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/15">
            <div>
              <span className="text-xs text-[#FACC15] uppercase tracking-wider block mb-1 font-bold">Indicative Benchmarks</span>
              <span className="text-lg font-mono font-bold text-white">From ₹14,500 to ₹32,000 / person</span>
            </div>

            <Button
              href="/private-trips"
              variant="primary"
              size="lg"
              className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-bold px-7 py-3.5"
              onClick={() => trackEvent("click_private_trip", { source: "homepage_panel" })}
            >
              Plan a private trip consultation &rarr;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
