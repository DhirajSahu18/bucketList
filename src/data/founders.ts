import { Founder } from "@/types";

export const founders: Founder[] = [
  {
    id: "founder-1",
    name: "Aryan",
    role: "Co-Founder & Expedition Lead",
    photo: "/images/founders/aryan.jpg",
    bio: "Aryan has spent years working on the road and leading trips across India and Nepal. At Bucketlist, he focuses on mountain routes, convoy logistics, and making sure every expedition runs smoothly on ground.",
    shortBio: "Hands-on expedition lead specializing in mountain routes, convoy logistics, and on-ground safety.",
    experience: "5 years",
    groupsLedCount: 45,
    region: "India (Himachal, Uttarakhand, Kerala, Goa) · Nepal (Annapurna Circuit, Pokhara, Kathmandu Valley)",
    travelExperience: {
      india: ["Himachal Pradesh", "Uttarakhand", "Kerala", "Goa"],
      nepal: ["Annapurna Circuit", "Pokhara", "Kathmandu Valley"],
    },
    statement:
      "We've travelled these routes ourselves. We handle the planning on ground so you can focus on enjoying the trip.",
    socialLinks: {
      instagram: "https://instagram.com/thebucketlist.co",
    },
  },
  {
    id: "founder-2",
    name: "Kashshish",
    role: "Co-Founder & Experience Lead",
    photo: "/images/founders/kashshish.jpg",
    bio: "Kashshish worked with several travel companies and hospitality brands before building Bucketlist. She manages stay partnerships, group dynamics, and local experiences so every joiner feels at home from Day 1.",
    shortBio: "Experience lead managing boutique stay partnerships, group dynamics, and journey details.",
    experience: "4 years",
    groupsLedCount: 38,
    region: "India (Himachal, Uttarakhand, Goa) · International (Bali, Hong Kong, Vietnam, Singapore, Malaysia, Sri Lanka, Thailand)",
    travelExperience: {
      india: ["Himachal Pradesh", "Uttarakhand", "Goa"],
      international: ["Bali", "Hong Kong", "Vietnam", "Singapore", "Malaysia", "Sri Lanka", "Thailand"],
    },
    statement:
      "I make sure our stays, local food spots, and group coordination are sorted before you arrive.",
    socialLinks: {
      instagram: "https://instagram.com/thebucketlist.co",
    },
  },
];
