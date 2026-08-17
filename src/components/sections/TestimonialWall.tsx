import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const sourceIcons: Record<string, string> = {
  google: "G",
  whatsapp: "W",
  instagram: "IG",
  direct: "★",
};

const sourceColors: Record<string, string> = {
  google: "bg-blue-50 text-blue-700",
  whatsapp: "bg-green-50 text-green-700",
  instagram: "bg-pink-50 text-pink-700",
  direct: "bg-yellow-50 text-yellow-800",
};

export function TestimonialWall() {
  const featured = testimonials.filter((t) => t.featured).slice(0, 8);

  return (
    <section className="section-padding section-spacing bg-brand-offwhite">
      <div className="container-wide">
        <h2 className="font-display text-display-lg text-brand-black mb-4">
          Don&apos;t take our word for it.
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-xl">
          Real reviews from real travellers who&apos;ve been on our trips.
        </p>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {featured.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "break-inside-avoid bg-white rounded-sm p-6 border border-brand-gray/50 hover:shadow-md transition-shadow",
                index === 0 && "md:p-8"
              )}
            >
              {/* Source badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={cn(
                    "text-xs font-semibold px-2 py-0.5 rounded-sm",
                    sourceColors[testimonial.source]
                  )}
                >
                  {sourceIcons[testimonial.source]}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-brand-yellow fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="text-brand-black/80 text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="border-t border-brand-gray/50 pt-3">
                <p className="font-medium text-brand-black text-sm">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-xs">
                  {testimonial.tripName} &middot; {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
