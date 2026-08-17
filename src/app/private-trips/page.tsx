import { Metadata } from "next";
import Image from "next/image";
import { privateTripExamples } from "@/data/private-trips";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, getWhatsAppPrivateMessage } from "@/lib/utils";
import { PrivateTripForm } from "./PrivateTripForm";

export const metadata: Metadata = {
  title: "Private Trips Consultation | TheBucketList.co",
  description:
    "Consultative private trips designed around your dates, group, and budget. Pre-qualifying sample itineraries with indicative pricing.",
};

export default function PrivateTripsPage() {
  return (
    <div className="pt-20 md:pt-24 bg-[#faf7f2] min-h-screen text-[#1c1917]">
      {/* Consultative Hero Panel (Inverted Dark Aesthetic) */}
      <section className="relative bg-[#1c1917] text-[#faf7f2] section-padding py-20 md:py-28 overflow-hidden">
        <div className="relative container-wide">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FACC15] block font-bold">
              Consultative &middot; Not Transactional
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#faf7f2] font-bold leading-tight">
              Tell us what you&apos;re thinking.
              <br />
              <span className="text-[#FACC15]">We&apos;ll build the trip.</span>
            </h1>
            <p className="text-[#e6ded1]/90 text-lg sm:text-xl font-sans leading-relaxed">
              No off-the-shelf reseller packages. We talk through your dates, group size, and pacing, then design a customized itinerary with pre-qualifying indicative pricing.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#consultation-form" variant="primary" size="lg" className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-bold">
                Tell us what you&apos;re thinking &rarr;
              </Button>
              <a
                href={getWhatsAppLink(getWhatsAppPrivateMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#128c7e] text-white px-6 py-3.5 rounded text-sm font-medium hover:bg-[#0e6c61] transition-colors"
              >
                <span>WhatsApp Aryan & Kashshish</span>
              </a>
            </div>
            <p className="text-xs font-mono text-[#FACC15] pt-1">
              ⚡ We reply on WhatsApp within 2 hours
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Qualifying Sample Itineraries with Indicative Pricing */}
      <section className="section-padding py-16 md:py-24 border-b border-[#e6ded1]">
        <div className="container-wide space-y-10 font-sans">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#e6ded1] pb-6 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#8c4a2f] block mb-1">
                Indicative Benchmarks
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-bold">
                Sample Private Itineraries
              </h2>
            </div>
            <p className="text-xs font-mono text-[#6b6257]">
              Indicative pricing to pre-qualify your group budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privateTripExamples.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e6ded1] rounded overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] bg-[#e6ded1]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#1c1917]/80 text-[#faf7f2] font-mono text-xs px-2 py-0.5 rounded">
                      {item.duration} &middot; {item.idealGroup}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-xl text-[#1c1917] font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6b6257] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#e6ded1]/60 flex items-center justify-between font-mono text-xs mt-4">
                  <span className="text-gray-500">Indicative:</span>
                  <span className="font-semibold text-[#8c4a2f] bg-[#faf7f2] px-2.5 py-1 rounded border border-[#e6ded1]">
                    {item.indicativePrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Field Enquiry Form Section */}
      <section id="consultation-form" className="section-padding py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8c4a2f] block">
                Consultative Route
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-bold leading-tight">
                How our private trip consultation works
              </h2>
              <div className="space-y-4 text-sm text-[#6b6257] font-sans leading-relaxed">
                <p>
                  We don&apos;t ask for instant payments. You fill out the 4 quick fields on the form (dates, group size, destinations in mind, budget band).
                </p>
                <p>
                  Within 2 hours on WhatsApp, Aryan or Kashshish will share a customized route outline, recommended homestays, and a transparent pricing breakdown.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#e6ded1] rounded space-y-3 font-mono text-xs">
                <span className="text-[#8c4a2f] font-semibold block">
                  ⚡ Trust Signal
                </span>
                <p className="text-[#1c1917]">
                  &ldquo;We reply on WhatsApp within 2 hours&rdquo; — personally handled by Aryan & Kashshish.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <PrivateTripForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
