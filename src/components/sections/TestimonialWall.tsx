import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { EditorialMarker } from "@/components/ui/EditorialMarker";

export function TestimonialWall() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#e6ded1] font-sans text-[#1c1917]">
      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 space-y-2">
            <EditorialMarker number="04" label="PAST JOINERS" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              People who came with us.
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Real WhatsApp chats, Google reviews, and stories from our trip community.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-[#faf7f2] border border-[#e6ded1] p-6 rounded-sm space-y-4 hover:border-[#1c1917] transition-all duration-300"
              >
                {/* Source Badge Header */}
                <div className="flex items-center justify-between border-b border-[#e6ded1] pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    {item.source === "whatsapp" && (
                      <span className="px-2 py-0.5 bg-[#128c7e] text-white text-[10px] rounded font-bold">
                        WhatsApp Chat
                      </span>
                    )}
                    {item.source === "google" && (
                      <span className="px-2 py-0.5 bg-[#FACC15] text-[#1c1917] text-[10px] rounded font-bold">
                        5.0 ★ Google Review
                      </span>
                    )}
                    {item.source === "instagram" && (
                      <span className="px-2 py-0.5 bg-[#8c4a2f] text-white text-[10px] rounded font-bold">
                        Instagram Story
                      </span>
                    )}
                    <span className="text-[#6b6257] text-[11px] font-medium">{item.date}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#8c4a2f]">VERIFIED JOINER</span>
                </div>

                {/* Optional Image */}
                {item.image && (
                  <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                )}

                {/* Review Text */}
                <p className="text-sm text-[#1c1917] leading-relaxed font-serif italic">
                  &ldquo;{item.review}&rdquo;
                </p>

                {/* Author Info */}
                <div className="pt-3 border-t border-[#e6ded1] flex items-center justify-between text-xs font-sans">
                  <div>
                    <span className="font-bold text-[#1c1917] block">{item.name}</span>
                    {item.handle && <span className="text-[#8c4a2f] text-[11px] font-medium">{item.handle}</span>}
                  </div>
                  <span className="text-[#6b6257] text-[11px] font-medium">{item.destinationName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
