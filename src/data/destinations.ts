import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "dest-spiti",
    name: "Spiti Valley",
    slug: "spiti",
    heroImage: "/images/destinations/spiti/hero.jpg",
    description:
      "A cold desert valley at 12,500 feet. Spiti is one of the last places in India that genuinely feels remote — ancient monasteries, stark landscapes, and roads that test everything.",
    emotionalHook:
      "High roads. Empty valleys. A trip you'll still be talking about years later.",
    bestTime: "June to October",
    duration: "7–10 days",
    difficulty: "Challenging",
    idealFor: ["Adventure seekers", "Photography enthusiasts", "Experienced mountain travellers", "Road trip lovers"],
    startingPoint: "Manali / Shimla",
    guideContent: `## When to Visit Month by Month

May: The passes start clearing. Snow walls flank the road near Kunzum. Days are crisp, nights are freezing.

June to July: Peak summer season. Kunzum Pass is fully open. Rivers are full and green patches appear around Kaza and Tabo.

August: Monsoon phase across Lahaul and Kinnaur. High road slides happen; our founder leaders monitor pass clearances daily.

September: The golden month. Clear blue skies, turquoise Chandratal Lake, zero rain, and crisp 10°C daytime weather.

October: Autumn chills return. First fresh dustings of snow on Key Monastery. Perfect for travellers who love dramatic cold mountain light.

## What to Pack

Layered warmth is non-negotiable. Bring thermal base layers, a fleece jacket, a heavy windproof down jacket for evenings at Chandratal (where temperature dips below 0°C), UV-400 sunglasses, SPF 50+ sunscreen, lip balm, and an insulated water bottle.

Cash is critical — ATMs in Kaza frequently run out of cash or lose power. Bring at least ₹5,000–₹8,000 cash for personal purchases.

## What Most Operators Get Wrong

Most commercial operators pack 30 travellers into overloaded tempo travellers and rush from Manali to Kaza without proper acclimatization stops. They skip Sissu or attempt Batal in a single 14-hour drive.

At TheBucketList.co, we spend our first two nights acclimatizing in Sissu and Kaza before attempting high pass camps. We cap groups at 12 travellers per vehicle so everyone gets a window seat and breathing room.

## First-Timer Mistakes

1. Rushing altitude: Attempting Chandratal on Day 2 without spending a night below 10,000 feet first.
2. Expecting 5G network: Jio & BSNL work intermittently in Kaza town, but high passes have zero network. Inform your family before entering the valley.
3. Over-packing rigid hard suitcases: High-altitude Tempo Travellers fit soft duffle bags and rucksacks significantly better.

## How Many Days You Actually Need

7 days minimum for a Manali-to-Shimla circuit. 8 to 9 days is the sweet spot to visit Hikkim, Komic, Langza, Dhankar, Tabo, and Chandratal Lake without feeling like you lived inside a moving vehicle.`,
    faqs: [
      {
        question: "Is Spiti suitable for first-time mountain travellers?",
        answer:
          "We recommend at least one previous mountain trip (like Manali or Uttarakhand) before Spiti due to high altitude (12,500–15,000+ ft) and long road days. However, our gradual acclimatization itinerary makes it safe for motivated first-timers.",
      },
      {
        question: "How is phone connectivity in Spiti?",
        answer:
          "BSNL and Jio have patchy 3G/4G coverage in Kaza town. On high passes (Kunzum, Batal, Chandratal) there is zero connectivity. We carry satellite emergency communication protocols and brief families before departure.",
      },
      {
        question: "What happens if a road or pass closes?",
        answer:
          "Aryan and Kashshish monitor weather updates and Himachal road clearances 24/7. We maintain alternate homestay bookings and secondary circuit routes so safety is never compromised.",
      },
    ],
    images: [
      "/images/destinations/spiti/hero.jpg",
      "/images/brand_group_mountains.jpg",
      "/images/brand_hero_founders.jpg",
    ],
  },
  {
    id: "dest-manali",
    name: "Manali",
    slug: "manali",
    heroImage: "/images/destinations/manali/hero.jpg",
    description:
      "The gateway to the high Himalayas. Old Manali cafes, cedar pine forests, Sissu waterfall in Lahaul Valley, and quiet villages.",
    emotionalHook:
      "Where the plains end and the mountains begin to mean something.",
    bestTime: "March to June, September to November",
    duration: "4–6 days",
    difficulty: "Easy",
    idealFor: ["First-time mountain travellers", "Groups of friends", "Couples", "Solo female travellers"],
    startingPoint: "Delhi / Chandigarh",
    guideContent: `## When to Visit

Manali works across all non-monsoon months. Spring (March–May) offers apple blossoms and snow near Solang. Post-monsoon (September–November) brings golden pine forests and crystal-clear mountain views.

## How to Get There

Overnight Volvo or private Tempo Traveller from Delhi (~12 hours) brings you directly to Old Manali by morning.

## Founder Recommendations

Skip the commercial Mall Road. Spend your afternoons in Old Manali's artisan cafes, take an early morning walk through Hadimba Deodar forest, and cross Atal Tunnel to Sissu for riverfront trout lunch.`,
    faqs: [
      {
        question: "Is Manali safe for solo female travellers?",
        answer:
          "Extremely safe. Manali is a welcoming mountain town. Over 60% of our group joiners are solo travellers.",
      },
    ],
    images: [
      "/images/destinations/manali/hero.jpg",
      "/images/brand_hero_founders.jpg",
      "/images/brand_group_indoor.jpg",
    ],
  },
  {
    id: "dest-kedarnath",
    name: "Kedarnath",
    slug: "kedarnath",
    heroImage: "/images/destinations/kedarnath/hero.jpg",
    description:
      "One of the most powerful treks in India. 16 km through mountain valleys to a 1,200-year-old temple at 11,755 feet.",
    emotionalHook:
      "Sixteen kilometres to one of the oldest and most revered temples in the Himalayas.",
    bestTime: "May to June, September to October",
    duration: "5–6 days",
    difficulty: "Moderate",
    idealFor: ["Trekking enthusiasts", "Spiritual travellers", "Groups of friends"],
    startingPoint: "Rishikesh / Haridwar",
    guideContent: `## When to Visit

Kedarnath is open May to June and September to October. Monsoon (July–August) closes the trek route. Early May offers snow-lined trails while late September gives crystal clear skies.`,
    faqs: [
      {
        question: "How fit do I need to be for Kedarnath?",
        answer:
          "Regular walking or stair climbing for 3 weeks prior makes the 16 km uphill trek very manageable.",
      },
    ],
    images: [
      "/images/destinations/kedarnath/hero.jpg",
      "/images/brand_group_amritsar.jpg",
    ],
  },
  {
    id: "dest-kerala",
    name: "Kerala",
    slug: "kerala",
    heroImage: "/images/destinations/kerala/hero.jpg",
    description:
      "India's green coast. Backwaters, tea hill stations in Munnar, red cliffs of Varkala, and authentic coastal cuisine.",
    emotionalHook:
      "Backwaters. Hill stations. Food that makes you want to cancel your return ticket.",
    bestTime: "October to March",
    duration: "6–8 days",
    difficulty: "Easy",
    idealFor: ["Families", "Couples", "Food lovers", "First-time group joiners"],
    startingPoint: "Kochi",
    guideContent: `## When to Visit

October to March is ideal with comfortable coastal breezes, green post-monsoon backwaters, and cool Munnar tea hills.`,
    faqs: [
      {
        question: "What is the food like on the Kerala trip?",
        answer:
          "Exceptional local food — fresh coastal seafood curries, appam, puttu, and traditional banana leaf thalis.",
      },
    ],
    images: [
      "/images/destinations/kerala/hero.jpg",
      "/images/brand_group_stadium.jpg",
    ],
  },
];
