import { Metadata } from "next";
import { privateTripExamples } from "@/data/private-trips";
import { getWhatsAppLink, getWhatsAppPrivateMessage } from "@/lib/utils";
import { PrivateTripsClient } from "./PrivateTripsClient";

export const metadata: Metadata = {
  title: "Private Trips & Custom Groups | Bucketlist",
  description:
    "Custom private trips designed around your group, dates, and budget. Pre-qualifying sample itineraries with indicative pricing.",
};

export default function PrivateTripsPage() {
  const whatsappUrl = getWhatsAppLink(getWhatsAppPrivateMessage());

  return (
    <PrivateTripsClient
      privateTripExamples={privateTripExamples}
      whatsappUrl={whatsappUrl}
    />
  );
}
