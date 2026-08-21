import { EditorialMarker } from "@/components/ui/EditorialMarker";

export function WhyUs() {
  const pillars = [
    {
      num: "01",
      title: "Real People On Ground",
      text: "Aryan or Kashshish is on every trip. We handle vehicle timing, stay check-ins, and local food spots so you can focus on enjoying the journey.",
    },
    {
      num: "02",
      title: "Zero Group Chaos",
      text: "Whether it's a quiet mountain trek or an 80-person New Year departure, room allocations and bus seating run smoothly from Day 1.",
    },
    {
      num: "03",
      title: "Driven & Scouted By Us",
      text: "We stay in every homestay first, eat at every local cafe, and drive every mountain pass ourselves before bringing our joiners.",
    },
    {
      num: "04",
      title: "No Hidden Red Tape",
      text: "Transparent fixed pricing, simple deposit rules, and direct 1-on-1 WhatsApp answers within 2 hours.",
    },
  ];

  return (
    <section className="section-padding py-20 bg-white border-b border-[#e6ded1] font-sans text-[#1c1917]">
      <div className="container-wide space-y-12">
        <div className="max-w-2xl space-y-2">
          <EditorialMarker number="02" label="THE BUCKETLIST DIFFERENCE" />
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
            How we actually run trips differently.
          </h2>
          <p className="text-[#4e473e] text-base sm:text-lg font-normal">
            No corporate reseller packages. Just well-planned trips led by people who know the roads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div key={p.num} className="bg-[#faf7f2] p-6 sm:p-7 border border-[#e6ded1] rounded-sm space-y-3.5 hover:border-[#1c1917] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FACC15] shrink-0" />
                <span className="font-sans text-xs text-[#8c4a2f] font-extrabold uppercase tracking-wider">{p.num} &middot; BENEFIT</span>
              </div>
              <h3 className="font-serif text-xl font-extrabold text-[#1c1917]">{p.title}</h3>
              <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
