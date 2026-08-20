import Image from "next/image";
import { founders } from "@/data/founders";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

export function FounderStrip() {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f2] border-b border-[#e6ded1] font-sans text-[#1c1917]">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Editorial Header */}
          <div className="max-w-2xl mb-12 space-y-2">
            <EditorialMarker number="03" label="WHO YOU'RE TRAVELLING WITH" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-semibold leading-tight">
              The people on the ground.
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Aryan & Kashshish design the routes, direct on-ground safety, and travel with every community group.
            </p>
          </div>

          {/* Founder Layout */}
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
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-[#1c1917] text-[#FACC15] text-[10px] font-bold rounded-xs">
                    {founder.experience} EXPERIENCE
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-3">
                  <div>
                    <span className="text-xs text-[#8c4a2f] uppercase tracking-wider block mb-1 font-bold">
                      {founder.role}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1c1917] font-bold">
                      {founder.name}
                    </h3>
                  </div>

                  {/* Regional Focus Badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#faf7f2] border border-[#e6ded1] rounded-xs text-xs font-semibold text-[#8c4a2f]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                    <span>{founder.region}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Founder Personal Quote */}
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
