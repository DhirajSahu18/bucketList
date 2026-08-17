"use client";

import { founders } from "@/data/founders";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FounderStrip() {
  return (
    <section className="bg-brand-yellow section-padding py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-display text-display-md text-brand-black mb-6">
                Hi, we&apos;re the people behind your trip.
              </h2>
              <p className="text-brand-black/80 text-lg leading-relaxed mb-6">
                We&apos;ve been running trips for over five years — long before
                TheBucketList.co had a name. We&apos;ve driven the roads, dealt
                with the unexpected, found the stays, fixed the plans and learned
                what actually makes a trip worth remembering.
              </p>
              <div className="flex flex-wrap gap-6">
                {founders.map((founder) => (
                  <div key={founder.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-black/10 overflow-hidden flex items-center justify-center">
                      <span className="font-display text-lg text-brand-black">
                        {founder.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-black text-sm">
                        {founder.name}
                      </p>
                      <p className="text-brand-black/60 text-xs">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 inline-block bg-brand-black text-brand-yellow px-4 py-2 rounded-sm">
                <span className="font-display text-lg tracking-wide">
                  5+ years of trip experience
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Founder Images */}
          <ScrollReveal direction="right" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {founders.map((founder) => (
                <div
                  key={founder.id}
                  className="aspect-[3/4] bg-brand-black/10 rounded-sm overflow-hidden relative group hover:shadow-lg transition-shadow"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${founder.photo}')` }}
                  />
                  <div className="absolute inset-0 bg-brand-black/10 flex items-center justify-center">
                    <span className="font-display text-4xl text-brand-black/20">
                      {founder.name.split(" ")[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
