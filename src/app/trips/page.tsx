import { Metadata } from "next";
import { TripsIndex } from "./TripsIndex";

export const metadata: Metadata = {
  title: "Upcoming Trips",
  description:
    "Browse our upcoming small-group trips across India. Carefully planned, led by experienced trip leaders, and always capped at a small group size.",
};

export default function TripsPage() {
  return <TripsIndex />;
}
