export interface CancellationScheduleItem {
  period: string;
  detail: string;
}

export interface CancellationPolicyData {
  title: string;
  schedule: CancellationScheduleItem[];
  important: string[];
  importantPoints: string[];
  faqAnswer: string;
}

export const CANONICAL_CANCELLATION_POLICY: CancellationPolicyData = {
  title: "Cancellation Policy",
  schedule: [
    {
      period: "Booking Confirmation",
      detail:
        "Your booking is confirmed only after the first payment. An advance of 30% of the trip cost or ₹5,000 is non-refundable.",
    },
    {
      period: "30+ Days Before Departure",
      detail:
        "50% of the total trip cost will be charged as a cancellation fee. The remaining eligible amount will be refunded.",
    },
    {
      period: "Within 15 Days of Departure",
      detail: "100% cancellation charges apply. No refund will be issued.",
    },
  ],
  important: [
    "Cancellation requests must be made via WhatsApp or email.",
    "Eligible refunds will be processed within 7–14 working days.",
    "Any non-refundable charges from airlines, hotels, or other vendors will be deducted.",
  ],
  importantPoints: [
    "The booking amount paid at the time of confirmation is strictly non-refundable.",
    "Cancellation requests will only be considered if shared through email or official communication channels.",
    "Any flight/train tickets, permits, visa charges, hotel bookings, or other non-refundable components will be charged additionally as per actuals.",
    "If the IRCTC 60-day window is closed, agent charges will be mutually agreed upon before booking. Booking can be prioritised, but ticket confirmation won’t be guaranteed during peak season.",
    "Refunds, wherever applicable, will be processed within 7–14 working days.",
    "Any request for rescheduling will be subject to availability and additional charges, if applicable.",
    "No refund will be provided for any unused services or if a traveler decides to leave the trip midway after the tour has commenced.",
    "We appreciate your understanding and cooperation.",
  ],
  faqAnswer:
    "Booking Confirmation: Your booking is confirmed only after the first payment. An advance of 30% of the trip cost or ₹5,000 is non-refundable. 30+ Days Before Departure: 50% of the total trip cost will be charged as a cancellation fee. The remaining eligible amount will be refunded. Within 15 Days of Departure: 100% cancellation charges apply. No refund will be issued. Eligible refunds are processed within 7–14 working days.",
};
