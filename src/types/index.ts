export type AssetType = "brand" | "internet" | "ai" | "placeholder";

export interface AssetMeta {
  src: string;
  type: AssetType;
  source?: string;
  credit?: string;
  alt: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  shortBio: string;
  experience: string;
  groupsLedCount: number;
  region: string;
  statement: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  heroImage: string;
  description: string;
  emotionalHook: string;
  bestTime: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Difficult";
  idealFor: string[];
  startingPoint: string;
  guideContent: string;
  faqs: FAQ[];
  images: string[];
  galleryMeta?: AssetMeta[];
}

export interface Trip {
  id: string;
  name: string;
  slug: string;
  destination: Destination;
  destinationId: string;
  heroImage: string;
  heroAssetMeta?: AssetMeta;
  gallery: string[];
  galleryMeta?: AssetMeta[];
  dates: {
    start: string;
    end: string;
  };
  duration: string;
  durationDays: number;
  price: number;
  bookingAmount: number;
  maxGroupSize: number;
  seatsBooked: number;
  seatsRemaining: number;
  founder: Founder;
  founderId: string;
  founderNote?: {
    author: string;
    text: string;
  };
  hardTruth?: {
    headline: string;
    bullets: string[];
  };
  summary: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Difficult";
  accommodationType: string;
  startingPoint: string;
  endingPoint: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  whoItsFor: string[];
  whoItsNotFor: string[];
  faqs: FAQ[];
  status: "upcoming" | "filling" | "almost-full" | "full" | "completed";
  featured: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  stay: string;
  meals: string;
  activities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  handle?: string;
  tripName: string;
  tripSlug?: string;
  destinationName: string;
  date: string;
  review: string;
  rating: number;
  profilePhoto?: string;
  travellerImage?: string;
  source: "google" | "whatsapp" | "instagram" | "direct";
  sourceLabel?: string;
  featured: boolean;
  type?: "whatsapp_chat" | "google_review" | "instagram_story" | "photo_post" | "short_quote";
  image?: string;
  time?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PrivateTripExample {
  id: string;
  destination: string;
  title: string;
  duration: string;
  idealGroup: string;
  indicativePrice: string;
  description: string;
  image: string;
  assetMeta?: AssetMeta;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  destination: string;
  preferredDates: string;
  numberOfTravellers: number;
  approximateBudget: string;
  tripType: string;
  additionalNotes: string;
  createdAt: string;
  status: "new" | "contacted" | "planning" | "confirmed" | "closed";
}

export interface SiteSettings {
  whatsappNumber: string;
  email: string;
  instagram: string;
  responseTime: string;
  footerDescription: string;
  homepageStats: {
    years: string;
    trips: string;
    travellers: string;
    destinations: string;
  };
  brandCopy: {
    primaryPositioning: string;
    secondaryPositioning: string[];
  };
}
