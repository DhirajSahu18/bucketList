import Image from "next/image";
import { founders } from "@/data/founders";
import { testimonials } from "@/data/testimonials";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

export function FounderStrip() {
  const featuredReviews = testimonials.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#faf7f2] border-b border-[#e6ded1] font-sans text-[#1c1917]">
      <div className="section-padding">
        <div className="container-wide space-y-16">
          {/* Editorial Section Header */}
          <div className="max-w-3xl space-y-3">
            <EditorialMarker label="WHO YOU'RE TRAVELLING WITH" />
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-extrabold leading-tight">
              Led on ground by founders. Driven by real joiners.
            </h2>
            <p className="text-[#4e473e] text-base md:text-lg font-normal leading-relaxed">
              Aryan and Kashshish design every route, handle on-ground safety, and travel with every community group.
            </p>
          </div>

          {/* Editorial Magazine Spread: 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Founders Feature */}
            <div className="lg:col-span-6 space-y-10">
              <div className="border-b border-[#e6ded1] pb-3">
                <span className="text-xs uppercase tracking-wider text-[#8c4a2f] font-extrabold block">
                  EXPEDITION LEADERSHIP
                </span>
              </div>

              <div className="space-y-8">
                {founders.map((founder) => (
                  <div key={founder.id} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="relative w-full sm:w-44 aspect-[4/5] rounded-xs overflow-hidden bg-gray-200 shrink-0 shadow-xs">
                      <Image
                        src={founder.photo}
                        alt={founder.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 176px"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/85 text-[#FACC15] text-[10px] font-extrabold rounded-xs uppercase">
                        {founder.experience} EXP
                      </div>
                    </div>

                    <div className="space-y-2 flex-1">
                      <div>
                        <h3 className="font-serif text-2xl font-extrabold text-[#1c1917]">
                          {founder.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#8c4a2f] mt-0.5">
                          {founder.role}
                        </p>
                        <p className="text-[11px] text-[#4e473e] font-medium">
                          {founder.region}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#4e473e] leading-relaxed font-normal pt-1">
                        {founder.bio}
                      </p>

                      <blockquote className="pt-1.5 text-xs text-[#1c1917] italic font-serif leading-relaxed border-l-2 border-[#FACC15] pl-3 py-0.5">
                        &ldquo;{founder.statement}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Verified Joiner Excerpts */}
            <div className="lg:col-span-6 space-y-8">
              <div className="border-b border-[#e6ded1] pb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#8c4a2f] font-extrabold block">
                  REAL TRAVELLER STORIES
                </span>
                <span className="text-xs font-extrabold text-[#1c1917]">5.0 ★ Community Rating</span>
              </div>

              <div className="space-y-6">
                {featuredReviews.map((item) => (
                  <div key={item.id} className="p-6 bg-white border-l-3 border-[#1c1917] rounded-r-xs space-y-3 shadow-xs">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-[#1c1917]">{item.name}</span>
                      <span className="text-xs font-semibold text-[#8c4a2f]">{item.destinationName}</span>
                    </div>

                    <p className="text-sm sm:text-base text-[#1c1917] leading-relaxed font-serif italic">
                      &ldquo;{item.review}&rdquo;
                    </p>

                    <div className="text-[11px] text-[#4e473e] font-medium flex items-center gap-2 pt-1 border-t border-[#e6ded1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                      <span>Verified Joiner &middot; {item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
