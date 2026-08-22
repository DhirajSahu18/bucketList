import { Hero } from "@/components/sections/Hero";
import { UpcomingTrips } from "@/components/sections/UpcomingTrips";
import { WhyUs } from "@/components/sections/WhyUs";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { PrivateTripsCTA } from "@/components/sections/PrivateTripsCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UpcomingTrips />
      <WhyUs />
      <FounderStrip />
      <PrivateTripsCTA />
      <FinalCTA />
    </>
  );
}
