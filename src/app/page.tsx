import { Hero } from "@/components/sections/Hero";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { UpcomingTrips } from "@/components/sections/UpcomingTrips";
import { WhyUs } from "@/components/sections/WhyUs";
import { TestimonialWall } from "@/components/sections/TestimonialWall";
import { PrivateTripsCTA } from "@/components/sections/PrivateTripsCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FounderStrip />
      <UpcomingTrips />
      <WhyUs />
      <TestimonialWall />
      <PrivateTripsCTA />
      <FinalCTA />
    </>
  );
}
