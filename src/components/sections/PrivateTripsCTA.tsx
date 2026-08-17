import { Button } from "@/components/ui/Button";
import { privateTripExamples } from "@/data/private-trips";
import { getWhatsAppLink, getWhatsAppPrivateMessage } from "@/lib/utils";

export function PrivateTripsCTA() {
  return (
    <section className="section-padding section-spacing bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Copy */}
          <div>
            <h2 className="font-display text-display-lg text-brand-black mb-6">
              Your trip. Your people.{" "}
              <span className="text-brand-yellow">Your pace.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Want to travel with your friends, family or team without fitting
              into someone else&apos;s schedule? We&apos;ll help you build the
              trip around you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/private-trips" variant="primary" size="md">
                Tell Us What You&apos;re Thinking
              </Button>
              <Button
                href={getWhatsAppLink(getWhatsAppPrivateMessage())}
                variant="whatsapp"
                size="md"
                external
              >
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Right — Example trips */}
          <div className="space-y-4">
            {privateTripExamples.slice(0, 4).map((example) => (
              <div
                key={example.id}
                className="flex items-center gap-4 p-4 bg-brand-offwhite rounded-sm border border-brand-gray/50 hover:border-brand-yellow/50 transition-colors"
              >
                <div className="w-16 h-16 shrink-0 bg-brand-gray rounded-sm overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${example.image}')` }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-brand-black text-sm">
                    {example.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {example.duration} &middot; {example.idealGroup}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-gray-500 text-sm mt-2">
              These are just examples. Tell us what you&apos;re thinking and
              we&apos;ll design around it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
