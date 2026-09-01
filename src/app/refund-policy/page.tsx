import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CANONICAL_CANCELLATION_POLICY } from "@/data/cancellationPolicy";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | TheBucketList.co",
  description:
    "Official cancellation and refund policy for community expeditions and private trips with TheBucketList.co.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20 bg-[#faf7f2] min-h-screen text-[#1c1917] font-sans">
      <div className="section-padding">
        <div className="container-narrow space-y-8 bg-white border border-[#e6ded1] p-8 md:p-12 rounded-sm shadow-xs">
          <div className="border-b border-[#e6ded1] pb-6">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8c4a2f] block mb-1 font-bold">
              Legal &amp; Trust Infrastructure
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-bold">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-xs font-sans text-gray-500 mt-2">
              Official Policy &middot; TheBucketList.co
            </p>
          </div>

          <div className="space-y-8 text-sm text-[#1c1917]/90 leading-relaxed font-sans">
            {/* Section 1: Canonical Cancellation Schedule */}
            <div className="space-y-4">
              <h2 className="font-sans text-lg sm:text-xl text-[#1c1917] font-extrabold uppercase tracking-tight">
                Cancellation Policy
              </h2>
              <div className="bg-[#faf7f2] border border-[#e6ded1] p-5 sm:p-6 rounded-sm space-y-4">
                {CANONICAL_CANCELLATION_POLICY.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="space-y-1 pb-3 border-b border-[#e6ded1] last:border-b-0 last:pb-0"
                  >
                    <span className="font-sans text-xs uppercase tracking-wider font-extrabold text-[#8c4a2f] block">
                      • {item.period}
                    </span>
                    <p className="text-xs sm:text-sm text-[#1c1917] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Important Notes */}
            <div className="space-y-3">
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#8c4a2f] font-extrabold block">
                IMPORTANT:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1c1917]">
                {CANONICAL_CANCELLATION_POLICY.important.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#FACC15] text-base leading-none select-none font-bold">
                      •
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Important Points */}
            <div className="space-y-3 pt-2">
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#8c4a2f] font-extrabold block">
                IMPORTANT POINTS:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1c1917]">
                {CANONICAL_CANCELLATION_POLICY.importantPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#FACC15] text-base leading-none select-none font-bold">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4: Operational Terms */}
            <div className="space-y-4 pt-4 border-t border-[#e6ded1]">
              <h3 className="font-sans text-base font-extrabold text-[#1c1917]">
                Weather, Landslides &amp; Operational Safety
              </h3>
              <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed">
                Mountain weather can change quickly. If a mountain pass or road is closed due to unexpected weather, natural calamities, or landslides, our on-ground team executes pre-mapped secondary routes. Alternative arrangements will be made wherever possible.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#e6ded1] flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
            <span className="text-[#8c4a2f] font-semibold">
              Questions? We reply on WhatsApp within 2 hours.
            </span>
            <Button href="/trips" variant="primary" size="md" className="bg-[#1c1917] text-white font-bold">
              Back to Community Trips
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
