export type EventName =
  | "view_trip"
  | "click_trip_whatsapp"
  | "click_private_trip"
  | "submit_private_form"
  | "filter_trips"
  | "open_gallery"
  | "open_itinerary"
  | "open_refund_policy"
  | "click_founder"
  | "click_sticky_whatsapp";

export function trackEvent(eventName: EventName, payload?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // Log for development and ready for Google Analytics / Plausible / PostHog
    console.log(`[Analytics Event] ${eventName}:`, payload || {});
    if ((window as any).gtag) {
      (window as any).gtag("event", eventName, payload);
    }
  }
}
