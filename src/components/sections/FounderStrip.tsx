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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-extrabold leading-tight">
              The people on the ground.
            </h2>
            <p className="text-[#4e473e] text-base md:text-lg font-normal">
              Aryan & Kashshish design the routes, direct on-ground safety, and travel with every community group.
            </p>
          </div>

          {/* Founder Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="bg-white border border-[#e6ded1] p-6 sm:p-8 rounded-sm shadow-xs flex flex-col md:flex-row gap-6 items-start hover:border-[#1c1917] transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full md:w-48 aspect-[4/5] rounded-sm overflow-hidden flex-shrink-0 bg-gray-100 shadow-xs">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-black/85 text-[#FACC15] text-[10px] font-extrabold rounded-xs uppercase tracking-wider shadow-md">
                    {founder.experience} EXPERIENCE
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-3">
                  <div>
                    <span className="text-xs text-[#8c4a2f] uppercase tracking-wider block mb-1 font-extrabold">
                      {founder.role}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1c1917] font-extrabold">
                      {founder.name}
                    </h3>
                  </div>

                  {/* Regional Focus Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#faf7f2] border border-[#d6ceb8] rounded-xs text-xs font-bold text-[#1c1917]">
                    <span className="w-2 h-2 rounded-full bg-[#FACC15] shrink-0" />
                    <span>{founder.region}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal">
                    {founder.bio}
                  </p>

                  {/* Founder Personal Quote */}
                  <blockquote className="p-3.5 bg-[#faf7f2] border-l-3 border-[#FACC15] text-xs text-[#1c1917] italic font-serif leading-relaxed rounded-r-xs">
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
