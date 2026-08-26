import { Metadata } from "next";
import { TripsIndex } from "./TripsIndex";

export const metadata: Metadata = {
  title: "Upcoming Trips | Bucketlist",
  description:
    "Browse upcoming community expeditions across Himachal, Uttarakhand, Kerala, Goa, and Gokarna — led on ground by experienced travel captains.",
};

export default function TripsPage() {
  return <TripsIndex />;
}
