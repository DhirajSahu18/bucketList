import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | TheBucketList.co",
  description:
    "Transparent cancellation and refund terms for founder-led group and private trips with TheBucketList.co.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20 bg-[#faf7f2] min-h-screen text-[#1c1917] font-sans">
      <div className="section-padding">
        <div className="container-narrow space-y-8 bg-white border border-[#e6ded1] p-8 md:p-12 rounded shadow-xs">
          <div className="border-b border-[#e6ded1] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c4a2f] block mb-1">
              Legal & Trust Infrastructure
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-bold">
              Cancellation & Refund Policy
            </h1>
            <p className="text-xs font-mono text-gray-500 mt-2">
              Effective Date: January 1, 2026 &middot; TheBucketList.co
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#1c1917]/90 leading-relaxed font-sans">
            <p>
              We believe in complete financial transparency before you commit to any trip. Because our trips are capped at 12–16 travellers and we pre-book small family homestays and private vehicles, our cancellation schedule is structured to protect both your deposit and our local host commitments.
            </p>

            <h3 className="font-serif text-xl text-[#1c1917] font-semibold pt-2">
              1. Group Trip Cancellation Schedule
            </h3>

            <div className="bg-[#faf7f2] border border-[#e6ded1] p-5 rounded space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-[#e6ded1] pb-2">
                <span className="font-semibold text-[#1c1917]">30+ Days Before Departure:</span>
                <span className="text-[#128c7e] font-bold">100% Refund or 100% Transfer Credit</span>
              </div>
              <div className="flex justify-between border-b border-[#e6ded1] pb-2">
                <span className="font-semibold text-[#1c1917]">15–29 Days Before Departure:</span>
                <span className="text-[#8c4a2f] font-bold">50% Deposit Refund or 100% Transfer Credit</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#1c1917]">Under 14 Days Before Departure:</span>
                <span className="text-gray-500">Non-Refundable (Transfer option subject to seat fill)</span>
              </div>
            </div>

            <h3 className="font-serif text-xl text-[#1c1917] font-semibold pt-2">
              2. Weather, Landslides & High-Altitude Pass Closures
            </h3>
            <p>
              Mountain weather is unpredictable. If a mountain pass (such as Kunzum Pass or Rohtang) is closed due to unexpected weather or landslides:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#6b6257]">
              <li>Our founder trip leaders maintain 24/7 route clearance updates and execute pre-mapped secondary circuits.</li>
              <li>There are zero additional leader or rerouting fees charged to travellers.</li>
              <li>If a trip must be aborted prior to departure due to official disaster warnings, 100% of funds are credited to a future trip.</li>
            </ul>

            <h3 className="font-serif text-xl text-[#1c1917] font-semibold pt-2">
              3. Private Trip Cancellations
            </h3>
            <p>
              Private trip deposits cover custom homestay locks and vehicle reservations. Transfers and cancellations for private trips follow custom agreements established during your WhatsApp consultation.
            </p>
          </div>

          <div className="pt-6 border-t border-[#e6ded1] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[#8c4a2f]">
              Questions? We reply on WhatsApp within 2 hours.
            </span>
            <Button href="/trips" variant="primary" size="md" className="bg-[#1c1917] text-white">
              Back to Group Trips
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
