import { Metadata } from "next";
import { TripsIndex } from "./TripsIndex";

export const metadata: Metadata = {
  title: "Upcoming Trips | TheBucketList.co",
  description:
    "Browse upcoming community expeditions across Himachal, Uttarakhand, and Kerala — led on ground by experienced travel captains.",
};

export default function TripsPage() {
  return <TripsIndex />;
}
