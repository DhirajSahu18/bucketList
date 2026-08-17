"use client";

import Script from "next/script";

// Configure these IDs through environment variables or site settings
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export function Analytics() {
  if (!GA_MEASUREMENT_ID && !META_PIXEL_ID) return null;

  return (
    <>
      {/* Google Analytics */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel */}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}

// Event tracking utility
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  // Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }

  // Meta Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, params);
  }
}

// Pre-defined events matching the spec
export const TrackingEvents = {
  viewTrip: (tripName: string) =>
    trackEvent("view_trip", { trip_name: tripName }),
  bookNowClicked: (tripName: string) =>
    trackEvent("book_now_clicked", { trip_name: tripName }),
  whatsappClicked: (context: string) =>
    trackEvent("whatsapp_clicked", { context }),
  privateTripEnquiry: () =>
    trackEvent("private_trip_enquiry_submitted"),
  bookingInitiated: (tripName: string, amount: number) =>
    trackEvent("booking_initiated", { trip_name: tripName, value: amount }),
  bookingCompleted: (tripName: string, amount: number) =>
    trackEvent("booking_completed", { trip_name: tripName, value: amount }),
  destinationViewed: (destination: string) =>
    trackEvent("destination_viewed", { destination }),
};
