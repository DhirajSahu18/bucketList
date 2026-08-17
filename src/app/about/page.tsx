import { Metadata } from "next";
import { founders } from "@/data/founders";
import { siteSettings } from "@/data/site-settings";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet the founders behind TheBucketList.co. Two people, five years of running trips, and a commitment to never outsourcing your experience.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[55vh] overflow-hidden bg-brand-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
        />
        <div className="relative h-full flex items-end section-padding pb-12 md:pb-16">
          <div className="container-wide">
            <h1 className="font-display text-display-xl text-white">
              The people behind
              <br />
              <span className="text-brand-yellow">your trip.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding py-14 md:py-20">
        <div className="container-narrow">
          <p className="text-xl md:text-2xl text-brand-black leading-relaxed font-medium">
            We&apos;re {founders[0].name} and {founders[1].name}. And we&apos;ve
            been doing this for years.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            Before TheBucketList.co had a website, a logo, or even a name — we
            were running trips. Friends first, then friends-of-friends, then
            people who found us through word of mouth. The trips kept growing
            because people kept coming back. And that&apos;s still the only
            metric we actually care about.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding pb-section bg-brand-offwhite">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {founders.map((founder) => (
              <div key={founder.id}>
                <div className="aspect-[3/4] bg-brand-gray rounded-sm overflow-hidden mb-6 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${founder.photo}')` }}
                  />
                  <div className="absolute inset-0 bg-brand-black/20 flex items-center justify-center">
                    <span className="font-display text-6xl text-white/30">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-display-sm text-brand-black mb-1">
                  {founder.name}
                </h3>
                <p className="text-brand-yellow bg-brand-black inline-block px-2 py-0.5 text-xs font-semibold rounded-sm mb-4">
                  {founder.role}
                </p>
                <p className="text-gray-700 leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it started */}
      <section className="section-padding section-spacing">
        <div className="container-narrow">
          <h2 className="font-display text-display-md text-brand-black mb-8">
            How it started
          </h2>
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              The first trip was a disaster by most standards. Wrong turn on a
              mountain road, accommodation that looked nothing like the photos,
              and a plan that fell apart by Day 2. But somehow, everyone still
              talks about it like it was the best trip they&apos;ve ever taken.
            </p>
            <p>
              That taught us something important: a great trip isn&apos;t about
              everything going perfectly. It&apos;s about someone knowing what to
              do when things don&apos;t. It&apos;s about having a person who&apos;s
              been on the road before, who knows the backup plan, who can make a
              decision at midnight when the weather changes.
            </p>
            <p>
              We kept doing trips because people kept asking. And every time, we
              got a little better at the logistics, a little more honest about
              what works and what doesn&apos;t, and a little more committed to
              keeping things small.
            </p>
            <p>
              Five years later, TheBucketList.co is still built on the same
              idea: people travel better when someone they trust is leading.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-14 bg-brand-yellow">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: siteSettings.homepageStats.years, label: "Years" },
              { value: siteSettings.homepageStats.trips, label: "Trips" },
              {
                value: siteSettings.homepageStats.travellers,
                label: "Travellers",
              },
              {
                value: siteSettings.homepageStats.destinations,
                label: "Destinations",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-display-lg text-brand-black">
                  {stat.value}
                </p>
                <p className="text-brand-black/60 text-sm font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we refuse to do */}
      <section className="section-padding section-spacing bg-brand-black">
        <div className="container-narrow">
          <h2 className="font-display text-display-md text-white mb-10">
            Things we <span className="text-brand-yellow">don&apos;t</span> do.
          </h2>
          <ul className="space-y-5">
            {[
              "We don't run trips we haven't personally scouted.",
              "We don't promise experiences we can't deliver.",
              "We don't hide group sizes.",
              "We don't pretend to be bigger than we are.",
              "We don't outsource the entire experience and call it ours.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 text-gray-300 text-lg"
              >
                <span className="text-brand-yellow text-xl leading-tight shrink-0">
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 md:py-20 bg-brand-offwhite text-center">
        <div className="container-narrow">
          <h2 className="font-display text-display-md text-brand-black mb-4">
            Ready to travel with us?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Check our upcoming trips or tell us what you&apos;re thinking about.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/trips" variant="primary" size="lg">
              See Upcoming Trips
            </Button>
            <Button href="/private-trips" variant="outline" size="lg">
              Plan a Private Trip
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
