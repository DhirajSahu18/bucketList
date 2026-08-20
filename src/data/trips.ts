import { Trip } from "@/types";
import { destinations } from "./destinations";
import { founders } from "./founders";

export const trips: Trip[] = [
  {
    id: "trip-1",
    name: "Himachal Unplugged — New Year Expedition",
    slug: "himachal-unplugged-new-year",
    destination: destinations[0], // Manali / Himachal Hub
    destinationId: "dest-manali",
    heroImage: "/images/trips/manali-escape.jpg",
    heroAssetMeta: {
      src: "/images/trips/manali-escape.jpg",
      type: "internet",
      source: "Unsplash Travel Archive",
      alt: "Himachal Unplugged Solang cedar forest road and mountain valley",
    },
    gallery: [
      "/images/trips/manali-escape.jpg",
      "/images/brand_group_mountains.jpg",
      "/images/brand_hero_founders.jpg",
      "/images/brand_group_stadium.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/manali-escape.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Solang Valley pine forests and mountain trails",
      },
      {
        src: "/images/brand_group_mountains.jpg",
        type: "brand",
        source: "TheBucketList.co Real Client Trip",
        alt: "Traveller community group on scenic Himachal road",
      },
      {
        src: "/images/brand_hero_founders.jpg",
        type: "brand",
        source: "TheBucketList.co Founders",
        alt: "Founders Aryan and Kashshish",
      },
      {
        src: "/images/brand_group_stadium.jpg",
        type: "brand",
        source: "TheBucketList.co Real Client Trip",
        alt: "Community group travellers celebrating at mountain viewpoint",
      },
    ],
    dates: { start: "2026-12-28", end: "2027-01-02" },
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 16500,
    bookingAmount: 3000,
    maxGroupSize: 80,
    seatsBooked: 52,
    seatsRemaining: 28,
    founder: founders[0], // Aryan
    founderId: "founder-1",
    founderNote: {
      author: "Aryan",
      text: "Himachal Unplugged is our biggest flagship run of the year. We combine Old Manali cafe walks, Solang snow excursions, Kasol riverside campfires, and live acoustic music with clear timing and group management.",
    },
    hardTruth: {
      headline: "Good to know before you book:",
      bullets: [
        "December and January nights in Manali drop below sub-zero. Pack proper thermals and a warm winter jacket!",
        "New Year road transit near Atal Tunnel can get busy; we schedule departures early so the route runs smoothly.",
        "Over 60% of people join solo — we facilitate group intros on Day 1 so everyone feels part of the crew quickly.",
      ],
    },
    summary:
      "6 days across Old Manali cafes, Solang snow trails, Sethan pine forests, and Kasol campfire music nights. Managed on ground by experienced travel leaders.",
    difficulty: "Easy",
    accommodationType: "Boutique Mountain Hotels & Riverside Campsites",
    startingPoint: "Delhi / Chandigarh",
    endingPoint: "Delhi / Chandigarh",
    itinerary: [
      {
        day: 1,
        title: "Overnight Highway Run from Delhi to Manali",
        location: "Delhi -> Manali Highway",
        description:
          "Board our AC Volvo bus from Majnu Ka Tilla by 6:00 PM. Meet your trip leaders and fellow joiners as we head up the Himalayan highway towards Kullu Valley.",
        stay: "Overnight Volvo Bus Transit",
        meals: "Self-sponsored dinner stop",
        activities: ["Trip briefing", "Leader introductions", "Highway icebreakers"],
      },
      {
        day: 2,
        title: "Old Manali Check-in & Cafe Trail",
        location: "Old Manali (6,700 ft)",
        description:
          "Wake up to mountain views in Kullu Valley. Check into our Old Manali hotel, freshen up, and head out for a café trail through cedar forests.",
        stay: "Boutique Mountain Hotel in Old Manali",
        meals: "Dinner",
        activities: ["Hadimba forest walk", "Old Manali cafe hop", "Campfire acoustic evening"],
      },
      {
        day: 3,
        title: "Solang Valley Snow Trail & Atal Tunnel Excursion",
        location: "Solang Valley & Sissu",
        description:
          "Morning drive to Solang Valley for snow views. Cross Atal Tunnel to experience Lahaul's winter landscape before returning to Manali.",
        stay: "Boutique Mountain Hotel in Old Manali",
        meals: "Breakfast & Dinner",
        activities: ["Atal Tunnel drive", "Solang snow walk", "Evening market exploration"],
      },
      {
        day: 4,
        title: "Kasol & Parvati Valley Campfire Celebration",
        location: "Kasol, Parvati Valley",
        description:
          "Drive to Kasol along the Parvati River. Check into our riverside campsite, explore Kasol market, and join our flagship acoustic music & campfire night.",
        stay: "Riverside Campsite in Kasol",
        meals: "Breakfast & Dinner",
        activities: ["Parvati river walk", "Kasol market exploration", "New Year Eve campfire event"],
      },
      {
        day: 5,
        title: "Manikaran Sahib Visit & Return Transit",
        location: "Manikaran & Highway",
        description:
          "Morning visit to Manikaran hot springs and Gurudwara. Post lunch, board our return Volvo bus towards Chandigarh and Delhi.",
        stay: "Overnight Volvo Bus Transit",
        meals: "Breakfast",
        activities: ["Manikaran hot springs", "Group photos", "Return highway run"],
      },
      {
        day: 6,
        title: "Morning Arrival in Delhi",
        location: "Delhi",
        description:
          "Arrive back in Delhi by 8:00 AM with lifelong memories, new friends, and a great start to the New Year!",
        stay: "Home",
        meals: "N/A",
        activities: ["Group farewell"],
      },
    ],
    included: [
      "AC Volvo bus transit from Delhi/Chandigarh to Manali & return",
      "2 nights in Old Manali hotel + 1 night riverside Kasol camping",
      "Daily hot breakfasts and dinners as specified",
      "All internal transfers to Solang Valley, Atal Tunnel, and Kasol",
      "On-ground founder leadership throughout (Aryan & Kashshish)",
      "Flagship campfire music event and group celebration",
    ],
    excluded: [
      "Lunches and personal cafe orders",
      "Snow sport gear rentals in Solang",
      "GST (5%) and personal shopping",
    ],
    whoItsFor: [
      "Anyone looking for a well-planned New Year mountain trip",
      "Solo joiners who want a friendly group dynamic",
      "Friends and college crews who love snow, cafes, and campfire music",
    ],
    whoItsNotFor: [
      "People looking for strict isolation or 5-star luxury resorts",
      "Those who prefer quiet private homestays over community energy",
    ],
    faqs: [
      {
        question: "Can I come solo?",
        answer:
          "Yes! Over 60% of people join solo. We pair up room allocations and bus seats so you'll feel at home with new friends on Day 1.",
      },
      {
        question: "Do I need to be super fit for this?",
        answer:
          "No heavy trekking is required. This trip is mostly easy walks through Old Manali cafes, Solang snow viewpoints, and Kasol market.",
      },
      {
        question: "Will my phone work there?",
        answer:
          "Jio and Airtel work reliably across Manali, Solang, and Kasol. Signal drops slightly inside mountain tunnels.",
      },
    ],
    status: "filling",
    featured: true,
  },
  {
    id: "trip-2",
    name: "Kerala Backwaters & Tea Hills",
    slug: "kerala-coast-hills-january-2027",
    destination: destinations[1], // Kerala
    destinationId: "dest-kerala",
    heroImage: "/images/trips/kerala-backwaters.jpg",
    heroAssetMeta: {
      src: "/images/trips/kerala-backwaters.jpg",
      type: "internet",
      source: "Unsplash Travel Archive",
      alt: "Alleppey backwaters luxury houseboat floating under palm trees",
    },
    gallery: [
      "/images/trips/kerala-backwaters.jpg",
      "/images/brand_group_amritsar.jpg",
      "/images/brand_hero_founders.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/kerala-backwaters.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Alleppey houseboat backwaters scenery",
      },
      {
        src: "/images/brand_group_amritsar.jpg",
        type: "brand",
        source: "TheBucketList.co Real Client Trip",
        alt: "Travellers enjoying cultural group moments",
      },
      {
        src: "/images/brand_hero_founders.jpg",
        type: "brand",
        source: "TheBucketList.co Founders",
        alt: "Founders Aryan and Kashshish",
      },
    ],
    dates: { start: "2027-01-15", end: "2027-01-22" },
    duration: "8 Days",
    durationDays: 8,
    price: 22500,
    bookingAmount: 5000,
    maxGroupSize: 30,
    seatsBooked: 18,
    seatsRemaining: 12,
    founder: founders[1], // Kashshish
    founderId: "founder-2",
    founderNote: {
      author: "Kashshish",
      text: "Kerala is our favourite winter tropical run. It's a balanced mix of Munnar tea estate morning walks, private houseboat floating in Alleppey, and sunset cliff views in Varkala.",
    },
    hardTruth: {
      headline: "Good to know before you book:",
      bullets: [
        "Munnar hill roads have winding turns — carry motion sickness tablets if you're sensitive.",
        "Houseboats dock by 5:30 PM per local maritime rules; evenings are spent stargazing on the water.",
      ],
    },
    summary:
      "8 days through Fort Kochi spice alleys, Munnar tea estates, private Alleppey houseboat floating, and Varkala red cliffs. Led on ground by Kashshish.",
    difficulty: "Easy",
    accommodationType: "Boutique Tea Stays & Luxury Houseboats",
    startingPoint: "Kochi",
    endingPoint: "Kochi",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Kochi & Fort Kochi Heritage Walk",
        location: "Fort Kochi",
        description:
          "Gather in Kochi by noon. Check into our heritage hotel and explore Chinese fishing nets, spice market alleys, and local seafood joints with Kashshish.",
        stay: "Heritage Boutique Hotel in Fort Kochi",
        meals: "Dinner",
        activities: ["Chinese fishing nets walk", "Spice market tour", "Welcome dinner"],
      },
      {
        day: 2,
        title: "Kochi to Munnar Tea Estates Drive",
        location: "Munnar (5,200 ft)",
        description:
          "Drive up the Western Ghats past Cheeyappara Waterfalls into rolling tea plantations. Evening walk through tea gardens.",
        stay: "Boutique Tea Estate Stay in Munnar",
        meals: "Breakfast & Dinner",
        activities: ["Waterfall stop", "Tea estate walk", "Hill sunset view"],
      },
      {
        day: 3,
        title: "Alleppey Houseboat Floating",
        location: "Alleppey Backwaters",
        description:
          "Board our private luxury houseboat. Cruise through narrow palm-lined canals, taste authentic Kerala Karimeen lunch on board, and anchor in backwaters.",
        stay: "Private Luxury Houseboat in Alleppey",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Canal cruising", "Authentic Kerala feast", "Stargazing on deck"],
      },
    ],
    included: [
      "Private AC traveller vehicle throughout",
      "Boutique hotel stays + 1 night private houseboat stay in Alleppey",
      "Daily breakfasts and dinners + full board on houseboat",
      "On-ground founder guidance throughout (Kashshish)",
    ],
    excluded: ["Flight/train fare to Kochi", "Personal shopping & lunch meals"],
    whoItsFor: ["Friends groups", "Solo joiners", "Nature and coast lovers"],
    whoItsNotFor: ["Those looking for high mountain snow trekking"],
    faqs: [
      {
        question: "Who leads the Kerala run?",
        answer: "Kashshish leads our Kerala journeys with dedicated local stay hosts.",
      },
      {
        question: "Will my phone work on the houseboat?",
        answer: "Yes, Jio and Airtel maintain strong 4G signals across Alleppey backwater routes.",
      },
    ],
    status: "upcoming",
    featured: true,
  },
  {
    id: "trip-3",
    name: "Kedarnath Temple & Valley Trek",
    slug: "kedarnath-trek-may-2027",
    destination: destinations[2], // Kedarnath
    destinationId: "dest-kedarnath",
    heroImage: "/images/trips/kedarnath-trek.jpg",
    heroAssetMeta: {
      src: "/images/trips/kedarnath-trek.jpg",
      type: "internet",
      source: "Unsplash Travel Archive",
      alt: "Kedarnath temple valley snow peaks landscape",
    },
    gallery: [
      "/images/trips/kedarnath-trek.jpg",
      "/images/brand_group_stadium.jpg",
      "/images/brand_hero_founders.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/kedarnath-trek.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Kedarnath temple Himalayan snow peak",
      },
    ],
    dates: { start: "2027-05-15", end: "2027-05-21" },
    duration: "7 Days",
    durationDays: 7,
    price: 14500,
    bookingAmount: 3000,
    maxGroupSize: 40,
    seatsBooked: 24,
    seatsRemaining: 16,
    founder: founders[0], // Aryan
    founderId: "founder-1",
    founderNote: {
      author: "Aryan",
      text: "We keep the Sonprayag to Gaurikund start disciplined and early so our trekking group reaches the temple by afternoon before mountain rain sets in.",
    },
    hardTruth: {
      headline: "Good to know before you book:",
      bullets: [
        "The 16 km trail from Gaurikund involves steady elevation gain; basic walking fitness is recommended.",
      ],
    },
    summary:
      "A 7-day Garhwal Himalayan trek from Rishikesh to Gaurikund and the ancient shrine of Kedarnath (11,755 ft). Led by Aryan.",
    difficulty: "Moderate",
    accommodationType: "River Guesthouses & Temple Camps",
    startingPoint: "Rishikesh",
    endingPoint: "Rishikesh",
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Sonprayag Drive",
        location: "Sonprayag",
        description: "Drive along the Mandakini river via Devprayag to Sonprayag. Evening trek briefing with Aryan.",
        stay: "Mountain guesthouse in Sonprayag",
        meals: "Dinner",
        activities: ["Devprayag sangam stop", "Trek briefing"],
      },
    ],
    included: ["Private transport from Rishikesh", "Guesthouse accommodation", "Meals during trek", "Trek leader (Aryan)"],
    excluded: ["Personal pony/mule expenses", "GST (5%)"],
    whoItsFor: ["Mountain trekkers and fitness enthusiasts"],
    whoItsNotFor: ["Those unable to walk long mountain distances"],
    faqs: [
      {
        question: "Do I need to be fit for the Kedarnath trek?",
        answer: "Basic walking endurance is helpful for the 16 km trail from Gaurikund. We maintain a steady group pace.",
      },
    ],
    status: "upcoming",
    featured: true,
  },
];
