import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "dest-manali",
    name: "Himachal & Manali Circuit",
    slug: "manali",
    heroImage: "/images/destinations/manali/hero.jpg",
    description:
      "A flagship 9-day Himalayan journey from Kasol, Manikaran, and river rafting in Kullu to Manali, Solang Valley, Dalai Lama Temple in Dharamshala, and the Golden Temple in Amritsar.",
    emotionalHook:
      "Pine-scented mountain air, Kullu river rafting, Solang snow trails, McLeod Ganj monasteries, and golden evening lights in Amritsar.",
    bestTime: "Year-Round (Dec & Jan Flagship Batches)",
    duration: "9 days",
    difficulty: "Easy",
    idealFor: ["Friends groups", "Solo travellers", "Community travel joiners", "Winter expedioners"],
    startingPoint: "Mumbai LTT / Ambala / Kasol",
    guideContent: `## When to Visit Month by Month

December to January: Official Himachal Unplugged departure batches! Snowfall across Solang Valley, river rafting in Kullu, McLeod Ganj town walks, and Wagah Border ceremony energy.

February to April: Sun-lit Himalayan peaks, Atal Tunnel road drives, blooming apple orchards in Kullu Valley, and pleasant Dharamshala spring weather.

May to November: Green summer mountain escapes, Parvati Valley cafe hopping, and cultural exploration in Amritsar.

## What to Pack

Heavy woolens, thermal base layers, a fleece hoodie, waterproof winter jacket, comfortable walking boots, beanie, gloves, sunglasses, and a change of dry clothes for river rafting in Kullu.

## Essential Himachal Travel Tips

1. Dress in warm layers: Mountain temperatures in Kasol, Manali, and Dharamshala drop rapidly after sunset.
2. Pro Tip for Kullu Rafting: Keep a small backpack with dry clothes handy in the bus, as your main luggage stays onboard until Manali check-in.
3. Carry valid Govt Photo ID: Required for hotel check-ins and Rohtang/Solang transit.`,
    faqs: [
      {
        question: "Is Himachal Unplugged suitable for solo travellers?",
        answer:
          "Over 60% of our joiners come solo. Our team facilitates group introductions and icebreakers from Day 1 so everyone feels part of the crew within hours.",
      },
      {
        question: "What is included in the Himachal Unplugged package?",
        answer:
          "Mumbai-Mumbai train tickets, 3-star hotel & riverside campsite stays (MAP plan daily breakfasts & dinners), Tempo Traveller transport, complimentary Kullu river rafting, and Manali bike ride.",
      },
    ],
    images: [
      "/images/destinations/manali/hero.jpg",
      "/images/trips/himachal-solang-snow.jpg",
      "/images/trips/himachal-dharamshala.jpg",
      "/images/trips/himachal-amritsar.jpg",
      "/images/trips/himachal-group-snow.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/destinations/manali/hero.jpg",
        type: "brand",
        source: "Official Himachal PDF Itinerary Cover",
        alt: "Himalayan snow peaks and pine valley landscape",
      },
      {
        src: "/images/trips/himachal-solang-snow.jpg",
        type: "brand",
        source: "Official Himachal PDF Itinerary",
        alt: "Solang Valley snow trails and pine forest",
      },
      {
        src: "/images/trips/himachal-dharamshala.jpg",
        type: "brand",
        source: "Official Himachal PDF Itinerary",
        alt: "Dalai Lama Temple & monastery in Dharamshala McLeod Ganj",
      },
      {
        src: "/images/trips/himachal-amritsar.jpg",
        type: "brand",
        source: "Official Himachal PDF Itinerary",
        alt: "Golden Temple illuminated at evening in Amritsar",
      },
      {
        src: "/images/trips/himachal-group-snow.jpg",
        type: "brand",
        source: "Bucketlist Real Client Trip",
        alt: "Bucketlist community group joiners posing in Solang snow",
      },
    ],
  },
  {
    id: "dest-goa",
    name: "Goa Coastal Circuit",
    slug: "goa",
    heroImage: "/images/destinations/goa.jpg",
    description:
      "From North Goa's beach parties, Chapora Fort views, and Vagator sunsets to South Goa's historic Latin Quarter, Se Cathedral, and quiet palm beaches.",
    emotionalHook:
      "Salty sea breeze, Portuguese heritage alleys, sunset beach vibes, and late-night community music under the stars.",
    bestTime: "Year-Round (July Monsoon & Oct–Feb Peak)",
    duration: "4–5 days",
    difficulty: "Easy",
    idealFor: ["Friends groups", "Solo joiners", "Villa getaway lovers", "Nightlife explorers"],
    startingPoint: "Goa / Thivim / Mumbai",
    guideContent: `## When to Visit Month by Month

July to September: Lush monsoon magic! Green coconut palm groves, dramatic rain clouds over Chapora Fort, and cozy villa gatherings.

October to February: Peak sunshine and vibrant beach nightlife season. Clear blue waters at Anjuna, Vagator, and Colva.

March to May: Relaxed spring coastal vibes, quiet heritage walks in Fontainhas, and sunset beach cafes.

## What to Pack

Light cotton casual wear, swimwear, sunblock, sunglasses, comfortable sandals, beach slippers, and rain gear for monsoon runs.

## Essential Goa Travel Tips

1. Carry valid Govt Photo ID (Aadhar / Driving License) for scooty rentals and hotel check-in.
2. Keep hydrated and practice sun protection during afternoon beach exploring.`,
    faqs: [
      {
        question: "Is Goa Unfiltered suitable for solo travellers?",
        answer:
          "Yes! Our villa setup and group scooty/traveller tours make it easy for solo travellers to connect with the crew from Day 1.",
      },
      {
        question: "What accommodation is provided?",
        answer:
          "3 nights stay in a private villa on a group-sharing basis with swimming pool access.",
      },
    ],
    images: [
      "/images/destinations/goa.jpg",
      "/images/trips/goa-street.jpg",
      "/images/trips/goa-villa-pool.jpg",
      "/images/trips/goa-nightlife.jpg",
      "/images/trips/goa-church.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/destinations/goa.jpg",
        type: "internet",
        source: "Unsplash Location Archive",
        alt: "Chapora Fort and Vagator Beach coastline in North Goa",
      },
      {
        src: "/images/trips/goa-street.jpg",
        type: "internet",
        source: "Unsplash Location Archive",
        alt: "Fontainhas heritage street walk in Panaji with colorful Portuguese architecture",
      },
      {
        src: "/images/trips/goa-villa-pool.jpg",
        type: "brand",
        source: "Official Goa PDF Itinerary",
        alt: "Private villa swimming pool stay",
      },
      {
        src: "/images/trips/goa-nightlife.jpg",
        type: "brand",
        source: "Official Goa PDF Itinerary",
        alt: "Anjuna and Vagator beach party & nightlife",
      },
      {
        src: "/images/trips/goa-church.jpg",
        type: "brand",
        source: "Official Goa PDF Itinerary",
        alt: "Basilica of Bom Jesus in Old Goa",
      },
    ],
  },
  {
    id: "dest-gokarna",
    name: "Gokarna & Honnavar Coast",
    slug: "gokarna",
    heroImage: "/images/destinations/gokarna.jpg",
    description:
      "Pristine coastal cliff trekking along Om Beach and Kudle Beach, Mahabaleshwar sacred shrine, ancient Yana limestone caves, and serene Honnavar backwater boat rides.",
    emotionalHook:
      "Trekking cliff trails above the ocean, floating down quiet mangrove backwaters, and watching golden Arabian Sea sunsets.",
    bestTime: "August to March",
    duration: "5 days",
    difficulty: "Easy",
    idealFor: ["Beach trekkers", "Nature lovers", "Spiritual explorers", "Friends groups"],
    startingPoint: "Thane / Gokarna",
    guideContent: `## When to Visit Month by Month

August to October: Post-monsoon coastal freshness! Lush green cliff trails, full backwaters in Honnavar, and pleasant beach weather.

November to February: Sunny coastal trek days, cool ocean breeze, and clear sunset skies across Om Beach & Kudle Beach.

March to April: Relaxed beach cafe season and quiet temple visits.

## What to Pack

Comfortable trekking shoes with good grip, lightweight breathable clothes, rainwear/poncho for monsoon runs, sun cap, sunglasses, and personal water bottle.`,
    faqs: [
      {
        question: "What is included in the Gokarna trip?",
        answer:
          "3 AC train tickets (Matsyagandha Express), 3 nights hotel accommodation in Gokarna, daily breakfasts & dinners, station transfers, and private vehicle for all sightseeing.",
      },
      {
        question: "Is the beach trek difficult?",
        answer:
          "The Gokarna beach trek is an easy-to-moderate coastal walk along cliff trails with scenic ocean views.",
      },
    ],
    images: [
      "/images/destinations/gokarna.jpg",
      "/images/trips/gokarna-cliff-trail.jpg",
      "/images/trips/gokarna-yana-caves.jpg",
      "/images/trips/gokarna-murudeshwar.jpg",
      "/images/trips/gokarna-honnavar.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/destinations/gokarna.jpg",
        type: "brand",
        source: "Official Gokarna PDF Itinerary",
        alt: "Gokarna cliffside beach trek trail overlooking ocean",
      },
      {
        src: "/images/trips/gokarna-cliff-trail.jpg",
        type: "brand",
        source: "Official Gokarna PDF Itinerary",
        alt: "Gokarna cliffside beach trek trail overlooking ocean",
      },
      {
        src: "/images/trips/gokarna-yana-caves.jpg",
        type: "brand",
        source: "Official Gokarna PDF Itinerary",
        alt: "Yana Caves black limestone rock monoliths",
      },
      {
        src: "/images/trips/gokarna-murudeshwar.jpg",
        type: "brand",
        source: "Official Gokarna PDF Itinerary",
        alt: "Murudeshwar Temple giant Shiva statue overlooking Arabian Sea",
      },
      {
        src: "/images/trips/gokarna-honnavar.jpg",
        type: "brand",
        source: "Official Gokarna PDF Itinerary",
        alt: "Honnavar backwater boat ride through mangroves",
      },
    ],
  },
  {
    id: "dest-kerala",
    name: "Kerala Backwaters & Hills",
    slug: "kerala",
    heroImage: "/images/destinations/kerala/hero.jpg",
    description:
      "A lush coastal tropical journey from Fort Kochi's heritage streets to Munnar's rolling tea estates and Alleppey's serene houseboat backwaters.",
    emotionalHook:
      "Floating past coconut palms on private houseboats and smelling fresh tea leaves in Munnar.",
    bestTime: "September to March",
    duration: "7 days",
    difficulty: "Easy",
    idealFor: ["Couples", "Friends groups", "Relaxed travellers", "Nature lovers"],
    startingPoint: "Kochi",
    guideContent: `## When to Visit Month by Month

September to November: Post-monsoon lush green hills in Munnar. Waterfalls are cascading and backwaters are crystal clear.

December to February: Peak tropical weather. Pleasant 24°C days in Fort Kochi and cool 15°C evenings in Munnar tea estates.

March to May: Warm coastal season ideal for Varkala beach cliff sunsets and backwater breezes.

## What to Pack

Light breathable cotton clothes, sunglasses, sun hat, swimwear, light cardigan for Munnar hill evenings, and camera gear.`,
    faqs: [
      {
        question: "What type of accommodation is provided in Kerala?",
        answer:
          "Boutique tea estate stays in Munnar, heritage boutique hotels in Kochi, and private luxury houseboats in Alleppey.",
      },
      {
        question: "Is Kerala suitable for friends and community groups?",
        answer:
          "Yes! Our Kerala runs combine relaxed backwater floating, tea estate walks, and vibrant beach sunsets.",
      },
    ],
    images: [
      "/images/destinations/kerala/hero.jpg",
      "/images/trips/kerala-backwaters.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/destinations/kerala/hero.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Alleppey backwaters houseboat floating under palms",
      },
      {
        src: "/images/trips/kerala-backwaters.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Munnar rolling tea plantations landscape",
      },
    ],
  },
  {
    id: "dest-kedarnath",
    name: "Kedarnath Valley",
    slug: "kedarnath",
    heroImage: "/images/destinations/kedarnath/hero.jpg",
    description:
      "An inspiring Himalayan trek to the ancient shrine of Kedarnath (11,755 ft), surrounded by snow-capped peaks and Garhwal mountain wilderness.",
    emotionalHook:
      "Walking through Garhwal valleys under towering snow peaks to reach one of India's most sacred mountain temples.",
    bestTime: "May to June & September to October",
    duration: "6 days",
    difficulty: "Moderate",
    idealFor: ["Trekkers", "Mountain lovers", "Spiritual explorers"],
    startingPoint: "Rishikesh / Haridwar",
    guideContent: `## Trekking Kedarnath Responsibly

Kedarnath requires fitness and pace discipline. Our Garhwal mountain trekking teams maintain steady acclimatization steps from Rishikesh to Sonprayag and Gaurikund.`,
    faqs: [
      {
        question: "How difficult is the Kedarnath trek?",
        answer:
          "The 16 km trail from Gaurikund is paved but steep. A basic level of walking fitness is recommended.",
      },
    ],
    images: [
      "/images/destinations/kedarnath/hero.jpg",
      "/images/trips/kedarnath-trek.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/destinations/kedarnath/hero.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Kedarnath temple behind snow peaks",
      },
    ],
  },
];
