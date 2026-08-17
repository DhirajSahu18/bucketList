import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <div className="bg-brand-yellow inline-block px-4 py-2 rounded-sm mb-6">
          <span className="font-display text-6xl text-brand-black">404</span>
        </div>
        <h1 className="font-display text-display-sm text-brand-black mb-3">
          Wrong turn.
        </h1>
        <p className="text-gray-600 mb-8">
          This page doesn&apos;t exist — but there are plenty of real trips
          waiting for you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            Back to Home
          </Button>
          <Button href="/trips" variant="outline" size="md">
            Explore Trips
          </Button>
        </div>
      </div>
    </div>
  );
}
