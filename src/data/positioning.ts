export const primaryPositioning = "Two founders. Five years of trips. Zero outsourced groups.";

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
  heroHeadline: "Two founders. Five years of trips. Zero outsourced groups.",
  heroSubhead:
    "We build and personally lead small-group journeys across India — from the high Himalayas to the coast.",
  founderBlockHeadline: "Two founders. Five years of trips.",
  founderBlockLead: "A founder leads every group",
  threeDifferences: [
    {
      title: "Capped size",
      description:
        "Every group is strictly capped at 12–16 travellers. Never a 40-person tour bus, never an unwieldy crowd.",
    },
    {
      title: "Founder-led",
      description:
        "A founder leads every group. No junior freelance guides, no line-item handoffs, no anonymous trip captains.",
    },
    {
      title: "Built, not resold",
      description:
        "We scout every route, test every homestay, and manage every detail ourselves. Zero white-label reseller packages.",
    },
  ],
  trustBadge: "We reply on WhatsApp within 2 hours",
};
