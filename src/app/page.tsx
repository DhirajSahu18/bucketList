import { Hero } from "@/components/sections/Hero";
import { UpcomingTrips } from "@/components/sections/UpcomingTrips";
import { WhyUs } from "@/components/sections/WhyUs";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { TestimonialWall } from "@/components/sections/TestimonialWall";
import { PrivateTripsCTA } from "@/components/sections/PrivateTripsCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UpcomingTrips />
      <WhyUs />
      <FounderStrip />
      <TestimonialWall />
      <PrivateTripsCTA />
      <FinalCTA />
    </>
  );
}
