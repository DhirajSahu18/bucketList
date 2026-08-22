import { Metadata } from "next";
import Image from "next/image";
import { privateTripExamples } from "@/data/private-trips";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, getWhatsAppPrivateMessage } from "@/lib/utils";
import { PrivateTripForm } from "./PrivateTripForm";

export const metadata: Metadata = {
  title: "Private Trips & Custom Groups | TheBucketList.co",
  description:
    "Custom private trips designed around your group, dates, and budget. Pre-qualifying sample itineraries with indicative pricing.",
};

export default function PrivateTripsPage() {
  return (
    <div className="pt-20 md:pt-24 bg-[#faf7f2] min-h-screen text-[#1c1917] font-sans">
      {/* Consultative Hero Panel */}
      <section className="relative bg-[#1c1917] text-[#faf7f2] section-padding py-20 md:py-28 overflow-hidden">
        <div className="relative container-wide">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#FACC15] block font-extrabold">
              PRIVATE & CUSTOM TRIPS
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#faf7f2] font-extrabold leading-tight">
              What are you planning?
            </h1>
            <p className="text-[#e6ded1] text-lg sm:text-xl leading-relaxed font-normal">
              Tell us your dates, group size, and the kind of trip you want. We&apos;ll help you figure out the rest.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#consultation-form" variant="primary" size="lg" className="bg-[#FACC15] text-[#1c1917] hover:bg-[#eab308] border-none font-extrabold">
                Tell us about your group
              </Button>
              <a
                href={getWhatsAppLink(getWhatsAppPrivateMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#128c7e] text-white px-6 py-3.5 rounded-xs text-sm font-extrabold hover:bg-[#0e6c61] transition-colors shadow-sm"
              >
                <span>WhatsApp Aryan & Kashshish</span>
              </a>
            </div>
            <p className="text-xs text-[#FACC15] pt-1 font-semibold">
              ⚡ We reply on WhatsApp within 2 hours
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Qualifying Sample Itineraries with Indicative Pricing */}
      <section className="section-padding py-16 md:py-24 border-b border-[#e6ded1] bg-white">
        <div className="container-wide space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#e6ded1] pb-6 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8c4a2f] block mb-1 font-extrabold">
                SAMPLE ITINERARIES
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl text-[#1c1917] font-extrabold">
                Sample Private Routes & Indicative Prices
              </h2>
            </div>
            <p className="text-xs text-[#4e473e] font-semibold">
              Indicative pricing to help estimate your group budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privateTripExamples.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e6ded1] rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full min-w-0"
              >
                {/* Upper Content */}
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] bg-[#faf7f2] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#1c1917]/90 text-[#faf7f2] text-[11px] px-2.5 py-1 rounded-xs font-extrabold">
                      {item.duration} &middot; {item.idealGroup}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-sans text-xl text-[#1c1917] font-extrabold">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4e473e] leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Shared Indicative Price Footer Component */}
                <div className="p-4 sm:p-5 border-t border-[#e6ded1] flex flex-wrap items-center justify-between gap-2 text-xs font-sans mt-auto">
                  <span className="text-[#8c4a2f] font-extrabold uppercase tracking-wider">Indicative:</span>
                  <span className="font-extrabold text-[#1c1917] bg-[#faf7f2] px-2.5 py-1 rounded-xs border border-[#e6ded1] font-mono shrink-0">
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
              <span className="text-xs uppercase tracking-widest text-[#8c4a2f] block font-extrabold">
                HOW IT WORKS
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl text-[#1c1917] font-extrabold leading-tight">
                Simple, transparent planning
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#4e473e] leading-relaxed">
                <p>
                  <strong>1. Tell us what you have in mind:</strong> Fill out the quick form with your preferred dates, group size, and destination.
                </p>
                <p>
                  <strong>2. We ask a few quick questions:</strong> We get in touch on WhatsApp to understand your pace, stay preferences, and celebration plans.
                </p>
                <p>
                  <strong>3. We build the route:</strong> You get a customized day-by-day route with transparent costs before committing.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#e6ded1] rounded-sm space-y-2 text-xs">
                <span className="text-[#8c4a2f] font-extrabold block uppercase">
                  ⚡ Direct Founder Contact
                </span>
                <p className="text-[#1c1917] font-medium">
                  We reply on WhatsApp within 2 hours — personally handled by Aryan & Kashshish.
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
