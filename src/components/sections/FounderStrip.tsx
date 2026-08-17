import Image from "next/image";
import { founders } from "@/data/founders";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

export function FounderStrip() {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f2] border-b border-[#e6ded1]">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Editorial Header */}
          <div className="max-w-2xl mb-12">
            <EditorialMarker number="02" label="YOU'RE TRAVELLING WITH US" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-semibold leading-tight mb-4">
              You won&apos;t be handed off to someone you&apos;ve never met.
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We design every itinerary, drive or lead every group, and stay with you from Day 1 to the final farewell chai.
            </p>
          </div>

          {/* Founder Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="bg-white border border-[#e6ded1] p-6 sm:p-8 rounded-sm shadow-xs flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Photo */}
                <div className="relative w-full md:w-48 aspect-[4/5] rounded-sm overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#1c1917] text-[#FACC15] text-[10px] font-mono rounded">
                    FOUNDER
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-3">
                  <div>
                    <span className="font-mono text-xs text-[#8c4a2f] uppercase tracking-wider block mb-1">
                      {founder.role} &middot; {founder.region}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1c1917] font-semibold">
                      {founder.name}
                    </h3>
                  </div>

                  {/* Groups Led Badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#faf7f2] border border-[#e6ded1] rounded text-xs font-mono text-[#1c1917]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                    <span className="font-semibold text-[#8c4a2f]">{founder.groupsLedCount} groups</span> personally led
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Founder Personal Statement */}
                  <blockquote className="p-3 bg-[#faf7f2] border-l-2 border-[#FACC15] text-xs text-[#1c1917] italic font-serif leading-relaxed">
                    &ldquo;{founder.statement}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
