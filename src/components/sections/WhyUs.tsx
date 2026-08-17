"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyUs() {
  const differentiators = [
    {
      number: "01",
      title: "Small groups",
      description:
        "We cap our groups so the trip still feels like a trip, not a convoy.",
    },
    {
      number: "02",
      title: "Personally led",
      description:
        "Every group has an experienced trip leader who knows the destination and is accountable for your experience.",
    },
    {
      number: "03",
      title: "Built, not resold",
      description:
        "We don't simply put a logo on someone else's package. We plan, evaluate and build the experience ourselves.",
    },
    {
      number: "04",
      title: "Real experience",
      description:
        "Our founders have spent years actually running trips — not just writing itineraries for them.",
    },
  ];

  return (
    <section className="section-padding section-spacing bg-brand-black">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-display-lg text-white mb-14 max-w-3xl">
            We&apos;re deliberately not trying to be the{" "}
            <span className="text-brand-yellow">biggest.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {differentiators.map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 100}>
              <div className="group">
                <div className="flex gap-4">
                  <span className="font-display text-4xl text-brand-yellow/40 leading-none shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-white mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
