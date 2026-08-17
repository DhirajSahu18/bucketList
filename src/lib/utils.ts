import { siteSettings } from "@/data/site-settings";

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatDateRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startMonth = startDate.toLocaleDateString("en-IN", { month: "short" });
  const endMonth = endDate.toLocaleDateString("en-IN", { month: "short" });

  if (startMonth === endMonth) {
    return `${startDate.getDate()}–${endDate.getDate()} ${startMonth} ${endDate.getFullYear()}`;
  }
  return `${startDate.getDate()} ${startMonth} – ${endDate.getDate()} ${endMonth} ${endDate.getFullYear()}`;
}

export function formatPrice(price: number): string {
  if (price === 0) return "₹XX,XXX";
  return `₹${price.toLocaleString("en-IN")}`;
}

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${siteSettings.whatsappNumber}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getWhatsAppTripMessage(tripName: string, dates: string): string {
  return `Hi, I'm interested in the ${tripName} trip (${dates}). I'd like to know more.`;
}

export function getWhatsAppPrivateMessage(): string {
  return "Hi, I'd like to discuss planning a private trip.";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
