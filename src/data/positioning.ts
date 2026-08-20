export const primaryPositioning = "Good people. Great places. A trip that's planned properly.";

export const backupPositioningLines = [
  "Good people. Great places. Zero hassle.",
  "Planned by travellers who know the roads.",
  "Real community trips with people you'll actually like.",
] as const;

export type BackupPositioningLine = (typeof backupPositioningLines)[number];

export const bannedVocabulary = [
  "tribe",
  "vibe",
  "wanderlust",
  "squad",
  "once in a lifetime",
  "unforgettable",
  "seamless operational excellence",
  "curated experience",
] as const;

export const positioningCopy = {
  heroHeadline: "Come for the Mountains. Stay for the Memories.",
  heroSubhead:
    "Old Manali cedar trails, Solang snow excursions, Kasol river campfires, and live acoustic music — planned properly with people you'll actually like.",
  founderBlockHeadline: "Two founders who actually travel on ground.",
  founderBlockLead: "We've driven the routes before. We know what needs planning.",
  threeDifferences: [
    {
      title: "Founders On Ground",
      description:
        "Aryan or Kashshish is on every trip. We handle vehicle timing, stay check-ins, and local food spots so you can just enjoy the trip.",
    },
    {
      title: "Big Group? Still Well Organised.",
      description:
        "Rooms, buses, timing, meals, and the small details that usually get messy are worked out before you arrive.",
    },
    {
      title: "Driven & Scouted By Us",
      description:
        "We stay in every homestay first, eat at every local cafe, and drive every mountain highway ourselves. No resold packages.",
    },
  ],
  trustBadge: "Direct 1-on-1 WhatsApp reply within 2 hours",
};
