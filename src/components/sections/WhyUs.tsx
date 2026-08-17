import { EditorialMarker } from "@/components/ui/EditorialMarker";

export function WhyUs() {
  const pillars = [
    {
      num: "01",
      title: "Named Founder On Ground",
      text: "Aryan or Kashshish is with you on every trip. We don't hand your itinerary off to an anonymous local agency who has never met you.",
    },
    {
      num: "02",
      title: "12–16 Group Cap",
      text: "Never 40-person crowded bus tours. Small groups mean faster starts, real conversations, and staying at boutique family homestays.",
    },
    {
      num: "03",
      title: "Zero Reseller Reselling",
      text: "We design every route, test every homestay mattress, and drive the mountain passes ourselves.",
    },
    {
      num: "04",
      title: "Direct WhatsApp Hand-off",
      text: "No complex checkouts or hidden fees. We reply on WhatsApp within 2 hours with real answers to your route questions.",
    },
  ];

  return (
    <section className="section-padding py-20 bg-white border-b border-[#e6ded1] font-sans text-[#1c1917]">
      <div className="container-wide space-y-12">
        <div className="max-w-2xl">
          <EditorialMarker number="02" label="OUR PRINCIPLES" />
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            How we actually run trips differently.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div key={p.num} className="bg-[#faf7f2] p-6 border border-[#e6ded1] rounded-sm space-y-3 hover:border-[#1c1917] transition-all">
              <span className="font-mono text-xs text-[#8c4a2f] font-bold block">{p.num} &middot; PRINCIPLE</span>
              <h3 className="font-serif text-xl font-bold text-[#1c1917]">{p.title}</h3>
              <p className="text-xs text-[#6b6257] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
