export const primaryPositioning = "Small groups. Real places. Zero outsourced tours.";

export const backupPositioningLines = [
  "Small by design.",
  "Planned by people who've actually been there.",
  "The trip you'd plan for your best friend.",
] as const;

export type BackupPositioningLine = (typeof backupPositioningLines)[number];

export const bannedVocabulary = [
  "tribe",
  "vibe",
  "wanderlust",
  "captain",
  "squad",
] as const;

export const positioningCopy = {
  heroHeadline: "Small groups. Real places. Zero outsourced tours.",
  heroSubhead:
    "Small-group journeys across India — from the high Himalayas to the coast, scouted route by route.",
  founderBlockHeadline: "Five years of building these trips.",
  founderBlockLead: "The people who scout the routes",
  threeDifferences: [
    {
      title: "Capped size",
      description:
        "Every group is strictly capped at 12–16 travellers. Never a 40-person tour bus, never an unwieldy crowd.",
    },
    {
      title: "Experienced leaders",
      description:
        "Every group runs with an experienced trip leader who knows the route first-hand. No line-item handoffs to an agency that has never driven it.",
    },
    {
      title: "Built, not resold",
      description:
        "We scout every route, test every homestay, and manage every detail ourselves. Zero white-label reseller packages.",
    },
  ],
  trustBadge: "We reply on WhatsApp within 2 hours",
};
