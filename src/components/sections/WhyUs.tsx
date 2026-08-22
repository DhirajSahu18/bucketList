import { EditorialMarker } from "@/components/ui/EditorialMarker";

export function WhyUs() {
  const pillars = [
    {
      title: "Real People On Ground",
      text: "Aryan or Kashshish is on every trip. We handle vehicle timing, stay check-ins, and local spots so you can focus on enjoying the journey.",
    },
    {
      title: "Scouted Routes & Homestays",
      text: "We stay in every homestay first, eat at every local cafe, and drive every mountain pass ourselves before bringing our joiners.",
    },
    {
      title: "Zero Group Chaos & Transparent Costs",
      text: "Room allocations and seating run smoothly from Day 1. Transparent fixed pricing with simple deposit rules and direct 1-on-1 support.",
    },
  ];

  return (
    <section className="section-padding py-20 md:py-28 bg-white border-b border-[#e6ded1] font-sans text-[#1c1917]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Statement */}
          <div className="lg:col-span-5 space-y-4">
            <EditorialMarker label="THE BUCKETLIST DIFFERENCE" />
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c1917] leading-tight">
              Trips planned properly, led by people who know the roads.
            </h2>
            <p className="text-[#4e473e] text-base sm:text-lg font-normal leading-relaxed">
              No corporate reseller packages or random local assignment. Just handpicked routes, authentic stays, and real on-ground management.
            </p>
          </div>

          {/* Right Column: Open Editorial Supporting List */}
          <div className="lg:col-span-7 space-y-8 divide-y divide-[#e6ded1]">
            {pillars.map((p, i) => (
              <div key={i} className={i === 0 ? "space-y-2.5" : "pt-8 space-y-2.5"}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FACC15] shrink-0" />
                  <h3 className="font-sans text-xl font-extrabold text-[#1c1917]">{p.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-[#4e473e] leading-relaxed font-normal pl-4 border-l-2 border-[#FACC15]/40">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
