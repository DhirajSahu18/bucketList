import { Metadata } from "next";
import { privateTripExamples } from "@/data/private-trips";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, getWhatsAppPrivateMessage } from "@/lib/utils";
import { PrivateTripForm } from "./PrivateTripForm";

export const metadata: Metadata = {
  title: "Private Trips",
  description:
    "Plan a private trip with your friends, family, or team. We'll design the itinerary around your dates, group, and priorities.",
};

export default function PrivateTripsPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative bg-brand-black section-padding py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/private-hero.jpg')" }}
        />
        <div className="relative container-wide">
          <div className="max-w-2xl">
            <h1 className="font-display text-display-xl text-white mb-4">
              You bring the people.
              <br />
              <span className="text-brand-yellow">
                We&apos;ll build the trip.
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Private trips designed around your dates, group, pace and
              priorities. No fitting into someone else&apos;s schedule.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#enquiry" variant="primary" size="lg">
                Tell Us What You&apos;re Thinking
              </Button>
              <Button
                href={getWhatsAppLink(getWhatsAppPrivateMessage())}
                variant="whatsapp"
                size="lg"
                external
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Example Trips */}
      <section className="section-padding section-spacing bg-brand-offwhite">
        <div className="container-wide">
          <h2 className="font-display text-display-md text-brand-black mb-4">
            Examples of what we can build
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            These are just starting points. Every private trip is designed from
            scratch around your group.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privateTripExamples.map((example) => (
              <div
                key={example.id}
                className="bg-white rounded-sm overflow-hidden border border-brand-gray/50 hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] bg-brand-gray overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${example.image}')` }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-brand-black text-lg mb-1">
                    {example.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {example.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-brand-offwhite text-gray-700 px-2.5 py-1 rounded-sm">
                      {example.duration}
                    </span>
                    <span className="bg-brand-offwhite text-gray-700 px-2.5 py-1 rounded-sm">
                      {example.idealGroup}
                    </span>
                    <span className="bg-brand-yellow/30 text-brand-black px-2.5 py-1 rounded-sm font-medium">
                      {example.indicativePrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-6 text-center">
            Pricing shown is indicative and varies based on group size, dates,
            and customization.
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <section
        id="enquiry"
        className="section-padding section-spacing bg-white"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Copy */}
            <div>
              <h2 className="font-display text-display-md text-brand-black mb-4">
                Tell us what you&apos;re thinking.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Fill in what you know. We&apos;ll get back to you with ideas,
                options, and a rough plan — usually within a few hours.
              </p>
              <div className="bg-brand-offwhite p-5 rounded-sm">
                <h4 className="font-semibold text-brand-black mb-3">
                  How it works
                </h4>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-display text-xl text-brand-yellow bg-brand-black w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                      1
                    </span>
                    <span>
                      Tell us your destination idea, dates, and group size
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-xl text-brand-yellow bg-brand-black w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                      2
                    </span>
                    <span>
                      We&apos;ll send you a custom itinerary and quote
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-xl text-brand-yellow bg-brand-black w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                      3
                    </span>
                    <span>
                      Tweak until it&apos;s exactly right, then confirm
                    </span>
                  </li>
                </ol>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Prefer to just chat?{" "}
                  <a
                    href={getWhatsAppLink(getWhatsAppPrivateMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-medium hover:underline"
                  >
                    WhatsApp us directly
                  </a>
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <PrivateTripForm />
          </div>
        </div>
      </section>
    </div>
  );
}
