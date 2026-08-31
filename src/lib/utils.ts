import { Trip } from "@/types";
import { siteSettings } from "@/data/site-settings";

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number): string {
  if (!price || price === 0) {
    return "Pricing Pending Client Confirmation";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDateRange(startDateStr: string, endDateStr: string): string {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  const startDay = start.getDate();
  const endDay = end.getDate();
  const month = start.toLocaleString("default", { month: "short" });
  const year = start.getFullYear();

  return `${startDay}–${endDay} ${month} ${year}`;
}

export function getTripStatus(trip: Trip): "upcoming" | "filling" | "sold-out" | "past" {
  if (trip.status === "completed") {
    return "past";
  }
  const endDate = new Date(trip.dates.end);
  const now = new Date();
  if (endDate < now) {
    return "past";
  }
  if (trip.seatsRemaining <= 0) {
    return "sold-out";
  }
  if (trip.seatsRemaining <= 4) {
    return "filling";
  }
  return "upcoming";
}

export function getWhatsAppLink(message?: string): string {
  const cleanNumber = siteSettings.whatsappNumber.replace(/[^0-9]/g, "");
  const baseUrl = `https://wa.me/${cleanNumber}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message.trim())}`;
  }
  return baseUrl;
}

export function getPhoneLink(): string {
  const clean = (siteSettings.phone || siteSettings.whatsappNumber).replace(/[^0-9+]/g, "");
  return `tel:${clean}`;
}

export function getEmailLink(): string {
  return `mailto:${siteSettings.email}`;
}

export function getWhatsAppTripMessage(tripName: string, dates: string): string {
  return `Hi Bucketlist team, I'm interested in the ${tripName} trip (${dates}). I'd like to check seat availability!`;
}

export function getWhatsAppPrivateMessage(): string {
  return "Hi Bucketlist team, I'd like to discuss planning a private trip for our group.";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
