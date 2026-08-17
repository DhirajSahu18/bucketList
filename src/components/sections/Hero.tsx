"use client";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-32 md:pt-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-main.jpg')",
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/30 to-transparent" />
        {/* Fallback dark overlay if no image */}
        <div className="absolute inset-0 bg-brand-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-wide max-w-4xl">
          <div className="animate-fade-up">
            <h1 className="font-display text-display-xl text-white leading-[0.9] mb-6">
              Two founders.
              <br />
              Five years of trips.
              <br />
              <span className="text-brand-yellow">Zero outsourced groups.</span>
            </h1>
          </div>

          <div className="animate-fade-up animation-delay-200">
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8 leading-relaxed">
              We build and personally lead small-group journeys across India —
              from the Himalayas to the coast.
            </p>
          </div>

          <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-3">
            <Button href="/trips" variant="primary" size="lg">
              Explore Upcoming Trips
            </Button>
            <Button href="/private-trips" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-black">
              Plan a Private Trip
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
