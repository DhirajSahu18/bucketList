import { Trip } from "@/types";
import { destinations } from "./destinations";
import { founders } from "./founders";

export const trips: Trip[] = [
  {
    id: "trip-1",
    name: "Spiti Valley Circuit",
    slug: "spiti-valley-october-2026",
    destination: destinations[0], // Spiti
    destinationId: "dest-spiti",
    heroImage: "/images/trips/spiti-circuit.jpg",
    heroAssetMeta: {
      src: "/images/trips/spiti-circuit.jpg",
      type: "internet",
      source: "Unsplash Travel Archive",
      alt: "Spiti Valley mountain pass road and high altitude scenery",
    },
    gallery: [
      "/images/trips/spiti-circuit.jpg",
      "/images/brand_group_mountains.jpg",
      "/images/brand_hero_founders.jpg",
      "/images/brand_group_stadium.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/spiti-circuit.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Spiti Valley circuit mountain pass landscape",
      },
      {
        src: "/images/brand_group_mountains.jpg",
        type: "brand",
        source: "TheBucketList.co Real Client Trip",
        alt: "Group travellers on the roadside in Lahaul Valley",
      },
      {
        src: "/images/brand_hero_founders.jpg",
        type: "brand",
        source: "TheBucketList.co Founders",
        alt: "Founders Aryan and Kashshish on trip",
      },
      {
        src: "/images/brand_group_stadium.jpg",
        type: "brand",
        source: "TheBucketList.co Real Client Trip",
        alt: "Group trip travellers at stadium view point",
      },
    ],
    dates: { start: "2026-10-10", end: "2026-10-17" },
    duration: "8 Days",
    durationDays: 8,
    price: 24500,
    bookingAmount: 5000,
    maxGroupSize: 12,
    seatsBooked: 8,
    seatsRemaining: 4,
    founder: founders[0], // Aryan
    founderId: "founder-1",
    founderNote: {
      author: "Aryan",
      text: "We keep the second acclimatisation day in Sissu and Kaza even though it makes the trip longer. We've seen what happens when commercial operators remove it to save hotel nights.",
    },
    hardTruth: {
      headline: "One thing we'd rather tell you now:",
      bullets: [
        "The drive over Kunzum Pass can take up to 8–10 hours on unpaved high-altitude mountain roads.",
        "Homestays in Kaza and Tabo have solar hot water which can be limited on cloudy mornings.",
        "Mobile network drops completely past Sissu until you reach Kaza. At Chandratal camp there is zero phone connectivity.",
        "Weather at 14,000 feet can shift quickly; if Kunzum is closed, safety comes first and we execute our pre-mapped secondary route.",
      ],
    },
    summary:
      "A complete 8-day Spiti circuit from Manali to Shimla — crossing Kunzum Pass (15,060 ft), exploring Kaza, Key Monastery, Hikkim, and camping under star-filled skies at Chandratal Lake. Personally driven and led by Aryan.",
    difficulty: "Challenging",
    accommodationType: "Traditional Homestays & Camps",
    startingPoint: "Manali",
    endingPoint: "Shimla",
    itinerary: [
      {
        day: 1,
        title: "Manali to Sissu via Atal Tunnel",
        location: "Sissu, Lahaul Valley",
        description:
          "We gather in Manali by 8:00 AM, cross the engineering marvel Atal Tunnel, and enter the stark landscape of Lahaul. We stay in Sissu village to begin high-altitude acclimatization beside the Chandra River.",
        stay: "Riverside family homestay in Sissu",
        meals: "Lunch & Dinner",
        activities: ["Atal Tunnel drive", "Sissu waterfall walk", "Acclimatization briefing"],
      },
      {
        day: 2,
        title: "Sissu over Kunzum Pass to Kaza",
        location: "Kaza (12,500 ft)",
        description:
          "The epic high-altitude drive over Kunzum Pass (15,060 ft) with prayer flags snapping in the wind. Descend into the moonscapes of Spiti Valley and reach Kaza by late afternoon.",
        stay: "Traditional guesthouse in Kaza",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Kunzum Pass stupa walk", "Spiti river basin drive", "Kaza market walk"],
      },
      {
        day: 3,
        title: "Key Monastery & Kibber High Village",
        location: "Key & Kibber",
        description:
          "Morning visit to Key Monastery — perched precariously on a conical hill. Meet the monks and drink butter tea. Drive up to Kibber (14,200 ft), one of the highest inhabited villages connected by motor road.",
        stay: "Traditional guesthouse in Kaza",
        meals: "Breakfast & Dinner",
        activities: ["Key Monastery prayer hall", "Chicham Bridge crossing", "Kibber village walk"],
      },
      {
        day: 4,
        title: "Hikkim, Komic & Langza Fossil Hunt",
        location: "Hikkim / Komic / Langza",
        description:
          "Post letters from Hikkim — home to the world's highest post office. Visit Komic Monastery at 15,020 ft, then hunt for 500-million-year-old marine fossils in Langza beneath the Buddha statue.",
        stay: "Traditional guesthouse in Kaza",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Postcard sending at Hikkim", "World's highest motorable village Komic", "Fossil hunting in Langza"],
      },
      {
        day: 5,
        title: "Dhankar Monastery & Tabo Monastic Complex",
        location: "Dhankar & Tabo",
        description:
          "Explore 1,000-year-old Dhankar Monastery clinging to a cliff high above the Spiti and Pin rivers. Hike to Dhankar Lake before continuing to Tabo's ancient mud-plastered meditation caves.",
        stay: "Homestay in Tabo",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Dhankar cliff Monastery", "Dhankar Lake hike", "Tabo 1000-yr old frescoes"],
      },
      {
        day: 6,
        title: "Tabo to Chandratal Moon Lake Camp",
        location: "Chandratal Lake (14,100 ft)",
        description:
          "Drive back toward Batal and up to Chandratal — the crescent-shaped Moon Lake. Walk around the turquoise waters as evening turns the surrounding peaks pink. Camp under the Milky Way.",
        stay: "High-altitude dome tents at Chandratal camp site",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Chandratal lake circuit walk", "High altitude stargazing", "Campfire stories"],
      },
      {
        day: 7,
        title: "Chandratal over Rohtang/Atal to Manali",
        location: "Manali",
        description:
          "Early breakfast at Batal dhaba with Chacha & Chachi. Cross the rugged stretch to Manali, arriving in Old Manali by evening for a celebratory group thali dinner.",
        stay: "Boutique stay in Old Manali",
        meals: "Breakfast & Celebration Dinner",
        activities: ["Scenic mountain drive", "Batal dhaba stop", "Celebratory farewell dinner"],
      },
      {
        day: 8,
        title: "Old Manali Morning & Departure",
        location: "Manali",
        description:
          "Relaxed morning in Old Manali for cafe breakfasts and souvenir shopping. The group trip officially concludes after lunch; evening Volvo departure to Delhi.",
        stay: "Departure day",
        meals: "Breakfast",
        activities: ["Old Manali cafes", "Group photos", "Departure"],
      },
    ],
    included: [
      "All accommodation (clean twin/triple sharing homestays & tents)",
      "All meals as specified in itinerary",
      "Private Tempo Traveller / SUV transport throughout",
      "Expedition leader (Aryan) present 24/7",
      "Inner Line Permits and environmental green passes",
      "Oxygen cylinder, pulse oximeter, and emergency medical kit",
    ],
    excluded: [
      "Travel to Manali and return from Manali/Delhi",
      "Personal expenses (shopping, personal snacks, laundry)",
      "Travel insurance (mandatory before joining)",
      "Unforeseen costs due to landslips or road blocks",
    ],
    whoItsFor: [
      "Road trip lovers comfortable with long mountain drives",
      "People wanting to experience high-altitude remote landscapes",
      "Travellers seeking authentic local homestays and regional food",
      "Solo travellers and small friend groups looking for small-group camaraderie",
    ],
    whoItsNotFor: [
      "Travellers expecting luxury room service or 5-star hotel amenities",
      "Anyone who gets severe anxiety without 5G/Wi-Fi phone connectivity",
      "People looking for a fast-paced tourist checklist without acclimatization stops",
    ],
    faqs: [
      {
        question: "How do you handle altitude sickness (AMS)?",
        answer:
          "Our itinerary spends the first two nights acclimatizing gradually in Sissu (10,200 ft) and Kaza before heading higher. We carry an oxygen cylinder, pulse oximeter, and first-aid kit. Aryan is trained in high-altitude first aid.",
      },
      {
        question: "Will my mobile network work in Spiti?",
        answer:
          "Mobile network is non-existent past Sissu until you reach Kaza, where only BSNL and Jio work intermittently. We advise informing your family before entering the valley.",
      },
      {
        question: "What is the group deposit and refund policy?",
        answer:
          "A deposit of ₹5,000 holds your seat. Balance is payable 14 days before departure. If you cancel 30+ days prior, 100% deposit is refundable or transferable to any future trip.",
      },
    ],
    status: "filling",
    featured: true,
  },
  {
    id: "trip-2",
    name: "Manali & Solang Valley Escape",
    slug: "manali-explorer-november-2026",
    destination: destinations[1], // Manali
    destinationId: "dest-manali",
    heroImage: "/images/trips/manali-escape.jpg",
    heroAssetMeta: {
      src: "/images/trips/manali-escape.jpg",
      type: "internet",
      source: "Unsplash Travel Archive",
      alt: "Old Manali deodar cedar pine forest and valley view",
    },
    gallery: [
      "/images/trips/manali-escape.jpg",
      "/images/brand_hero_founders.jpg",
      "/images/brand_group_indoor.jpg",
      "/images/brand_group_mountains.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/manali-escape.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Manali cedar forest and mountain valley landscape",
      },
      {
        src: "/images/brand_hero_founders.jpg",
        type: "brand",
        source: "TheBucketList.co Founders",
        alt: "Founders Aryan and Kashshish smiling at mountain stadium viewpoint",
      },
      {
        src: "/images/brand_group_indoor.jpg",
        type: "brand",
        source: "TheBucketList.co Real Client Trip",
        alt: "Group travellers celebrating inside Old Manali stay",
      },
    ],
    dates: { start: "2026-11-05", end: "2026-11-09" },
    duration: "5 Days",
    durationDays: 5,
    price: 14500,
    bookingAmount: 4000,
    maxGroupSize: 14,
    seatsBooked: 12,
    seatsRemaining: 2,
    founder: founders[1], // Kashshish
    founderId: "founder-2",
    founderNote: {
      author: "Kashshish",
      text: "Old Manali is about slowing down. We pick small heritage stays near Hadimba forest so you can walk to artisan cafes without needing auto-rickshaws every 10 minutes.",
    },
    hardTruth: {
      headline: "One thing we'd rather tell you now:",
      bullets: [
        "Old Manali streets are cobbled and narrow; tempo travellers park at the bridge, requiring a 5-minute walk to our stay.",
        "Solang Valley can have morning tourist traffic; we leave by 7:30 AM to hit the view points before crowds arrive.",
      ],
    },
    summary:
      "Five relaxed days exploring Old Manali cafes, pine forests, Sissu waterfall in Lahaul Valley, and hidden trails in Sethan village. Led by Kashshish with focus on stays, food, and cozy mountain vibes.",
    difficulty: "Easy",
    accommodationType: "Boutique Heritage Hotel",
    startingPoint: "Delhi",
    endingPoint: "Delhi",
    itinerary: [
      {
        day: 1,
        title: "Overnight Drive from Delhi to Old Manali",
        location: "Delhi to Manali",
        description:
          "Board our private Volvo/Tempo in Delhi by 7:00 PM. Travel overnight through Punjab and the Beas River Valley, waking up to crisp mountain air in Manali.",
        stay: "Boutique Stay in Old Manali",
        meals: "Dinner",
        activities: ["Overnight bus journey", "Check-in & rest", "Old Manali evening walk"],
      },
      {
        day: 2,
        title: "Old Manali Cafes & Hadimba Forest Walk",
        location: "Old Manali",
        description:
          "Slow morning with artisan coffee in Old Manali. Walk through the cedar forest around Hadimba Temple and explore local wood-and-stone architecture with Kashshish.",
        stay: "Boutique Stay in Old Manali",
        meals: "Breakfast & Dinner",
        activities: ["Hadimba Deodar forest walk", "Old Manali cafe crawl", "Group introduction dinner"],
      },
      {
        day: 3,
        title: "Sissu Village & Atal Tunnel Day Excursion",
        location: "Sissu, Lahaul",
        description:
          "Drive through the 9.02 km Atal Tunnel to Sissu in Lahaul. The landscape transforms from lush green to dramatic mountain faces. Enjoy roadside siddu and trout lunch by Sissu waterfall.",
        stay: "Boutique Stay in Old Manali",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Atal Tunnel crossing", "Sissu waterfall picnic", "Local Siddu tasting"],
      },
      {
        day: 4,
        title: "Sethan Igloo Village Hike & Sunset Viewpoint",
        location: "Sethan Village",
        description:
          "Drive up the 35 hairpin turns to Sethan, a quiet Buddhist village overlooking the Dhauladhar range. Easy pine forest hike and sunset tea with mountain views.",
        stay: "Boutique Stay in Old Manali",
        meals: "Breakfast & Dinner",
        activities: ["Sethan village hike", "Dhauladhar sunset view", "Bonfire evening"],
      },
      {
        day: 5,
        title: "Shopping & Return Journey to Delhi",
        location: "Manali to Delhi",
        description:
          "Morning free for picking up Himachal shawls, apples, and honey. Depart by 4:00 PM for the overnight return drive to Delhi.",
        stay: "Overnight return travel",
        meals: "Breakfast",
        activities: ["Local market shopping", "Farewell chai", "Return drive"],
      },
    ],
    included: [
      "Delhi to Manali & return Volvo transport",
      "4 nights boutique accommodation in Old Manali",
      "Breakfast and dinner daily + special Lahauli lunch",
      "All local transfers to Sissu & Sethan",
      "Trip leader (Kashshish) present throughout",
    ],
    excluded: [
      "Personal expenses and optional adventure sports (paragliding, zipline)",
      "Lunch on non-included days",
      "GST 5%",
    ],
    whoItsFor: [
      "First-time mountain travellers looking for a relaxed getaway",
      "Solo female travellers looking for a safe, friendly small group",
      "Friends and couples who want great stays, great food, and zero planning hassle",
    ],
    whoItsNotFor: [
      "High-altitude hard trekkers looking for extreme 15,000-foot summits",
      "Party crowds looking for loud commercial clubs",
    ],
    faqs: [
      {
        question: "Is this trip suitable for solo travellers?",
        answer:
          "Over 60% of our group joiners are solo travellers. Kashshish ensures everyone feels welcomed from Day 1.",
      },
    ],
    status: "almost-full",
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
      alt: "Kedarnath Temple surrounded by Himalayan snow peaks",
    },
    gallery: [
      "/images/trips/kedarnath-trek.jpg",
      "/images/brand_group_amritsar.jpg",
      "/images/brand_hero_founders.jpg",
      "/images/brand_group_stadium.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/kedarnath-trek.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Kedarnath mountain valley landscape",
      },
      {
        src: "/images/brand_group_amritsar.jpg",
        type: "brand",
        source: "TheBucketList.co Real Client Trip",
        alt: "Group travellers in traditional headwear",
      },
    ],
    dates: { start: "2027-05-15", end: "2027-05-20" },
    duration: "6 Days",
    durationDays: 6,
    price: 18500,
    bookingAmount: 4000,
    maxGroupSize: 16,
    seatsBooked: 6,
    seatsRemaining: 10,
    founder: founders[0], // Aryan
    founderId: "founder-1",
    founderNote: {
      author: "Aryan",
      text: "We start the Gaurikund to Kedarnath trek at 5:00 AM. Walking in the early morning cool prevents heat exhaustion and ensures we reach the temple before the midday pilgrim rush.",
    },
    hardTruth: {
      headline: "One thing we'd rather tell you now:",
      bullets: [
        "The 16 km trek is continuously uphill; proper footwear and 3 weeks of prior walking exercise are mandatory.",
        "Stays near Kedarnath Temple at 11,750 ft are basic guesthouses with clean bedding and hot food, not 5-star hotels.",
      ],
    },
    summary:
      "A structured 6-day trek to Kedarnath (11,755 ft) with proper acclimatization, verified clean temple stays, experienced trekking paces, and Rishikesh evening ghat walks. Led by Aryan.",
    difficulty: "Moderate",
    accommodationType: "Clean Lodges & Mountain Guesthouses",
    startingPoint: "Rishikesh / Haridwar",
    endingPoint: "Rishikesh / Haridwar",
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Guptkashi Drive",
        location: "Guptkashi",
        description:
          "Gather in Rishikesh early morning. Drive along the Mandakini River through Devprayag and Rudraprayag to Guptkashi. Evening briefing and gear check.",
        stay: "Hotel in Guptkashi",
        meals: "Lunch & Dinner",
        activities: ["Panch Prayag view stops", "Mandakini valley drive", "Trek briefing"],
      },
      {
        day: 2,
        title: "Guptkashi to Gaurikund & Trek to Kedarnath",
        location: "Kedarnath Temple (11,755 ft)",
        description:
          "Drive to Sonprayag, shuttle to Gaurikund, and begin the 16 km uphill trek to Kedarnath. We walk together at a steady pace with regular hydration breaks.",
        stay: "Guesthouse near Kedarnath Temple",
        meals: "Breakfast, Packed Lunch & Dinner",
        activities: ["16 km valley trek", "Waterfalls along trail", "Evening Aarti view"],
      },
      {
        day: 3,
        title: "Morning Temple Darshan & Bhairavnath Walk",
        location: "Kedarnath",
        description:
          "Early morning temple darshan when queue is shortest and snow-capped peaks shine behind the temple. Walk up to Bhairavnath Temple for panoramic valley views.",
        stay: "Guesthouse near Kedarnath Temple",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Kedarnath Temple Darshan", "Bhairavnath peak hike", "Mountain photography"],
      },
      {
        day: 4,
        title: "Trek Down to Gaurikund & Return to Guptkashi",
        location: "Guptkashi",
        description:
          "Trek 16 km down to Gaurikund, feeling the warmth return. Shuttle back to Sonprayag and drive to Guptkashi for a hot shower and celebratory dinner.",
        stay: "Hotel in Guptkashi",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Descent trek", "Hot springs at Gaurikund", "Rest & recovery"],
      },
      {
        day: 5,
        title: "Guptkashi to Rishikesh Ghats",
        location: "Rishikesh",
        description:
          "Scenic drive back down to Rishikesh. Check into our riverfront stay and attend evening Ganga Aarti at Triveni Ghat.",
        stay: "Riverfront stay in Rishikesh",
        meals: "Breakfast & Dinner",
        activities: ["Scenic drive", "Triveni Ghat Aarti", "Group farewell dinner"],
      },
      {
        day: 6,
        title: "Rishikesh Cafe Morning & Departure",
        location: "Rishikesh",
        description:
          "Morning walk across Laxman Jhula, cafe breakfast, and trip conclusion by 1:00 PM for onward travel.",
        stay: "Departure day",
        meals: "Breakfast",
        activities: ["Rishikesh cafe breakfast", "Farewell"],
      },
    ],
    included: [
      "Rishikesh to Rishikesh private transport",
      "5 nights accommodation in Guptkashi, Kedarnath & Rishikesh",
      "All meals specified during the trek",
      "Mandakini Valley permits & registration",
      "Trek leader (Aryan) + local guide + first-aid kit",
    ],
    excluded: [
      "Travel to/from Rishikesh",
      "Pony / Helicopter charges (if chosen by individual)",
      "Personal porter for luggage",
    ],
    whoItsFor: [
      "Reasonably fit trekkers wanting to complete Kedarnath without chaos",
      "Travellers looking for proper acclimatization and safety support",
    ],
    whoItsNotFor: [
      "People looking for luxury 5-star hotel pampering at 11,700 feet altitude",
    ],
    faqs: [
      {
        question: "How difficult is the 16 km trek?",
        answer:
          "It is a continuous 16 km uphill trek on a paved path. Regular walking exercise for 3 weeks prior makes it very manageable.",
      },
    ],
    status: "upcoming",
    featured: true,
  },
  {
    id: "trip-4",
    name: "Kerala Backwaters & Tea Hills",
    slug: "kerala-coast-hills-january-2027",
    destination: destinations[3], // Kerala
    destinationId: "dest-kerala",
    heroImage: "/images/trips/kerala-backwaters.jpg",
    heroAssetMeta: {
      src: "/images/trips/kerala-backwaters.jpg",
      type: "internet",
      source: "Unsplash Travel Archive",
      alt: "Alleppey backwaters coconut palm canal cruise",
    },
    gallery: [
      "/images/trips/kerala-backwaters.jpg",
      "/images/brand_group_stadium.jpg",
      "/images/brand_group_indoor.jpg",
      "/images/brand_group_amritsar.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/kerala-backwaters.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Kerala backwaters houseboat landscape",
      },
      {
        src: "/images/brand_group_stadium.jpg",
        type: "brand",
        source: "TheBucketList.co Real Client Trip",
        alt: "Group travellers posing together on trip",
      },
    ],
    dates: { start: "2027-01-10", end: "2027-01-17" },
    duration: "8 Days",
    durationDays: 8,
    price: 28500,
    bookingAmount: 6000,
    maxGroupSize: 14,
    seatsBooked: 9,
    seatsRemaining: 5,
    founder: founders[1], // Kashshish
    founderId: "founder-2",
    founderNote: {
      author: "Kashshish",
      text: "We book private traditional Kettuvallam houseboats with an onboard chef who cooks fresh Karimeen fish fry and local vegetarian thalis right in front of you.",
    },
    hardTruth: {
      headline: "One thing we'd rather tell you now:",
      bullets: [
        "Kerala is warm and humid along the coast (Fort Kochi & Varkala); Munnar hills are cool, so pack both cottons and a light jacket.",
        "Houseboats anchor by 5:30 PM in accordance with backwater fishing regulations; evening is spent relaxing on the upper deck.",
      ],
    },
    summary:
      "An 8-day journey through Fort Kochi's spice alleys, Munnar's rolling tea estates, private Alleppey houseboat backwater floating, and Varkala's red cliffs. Curated by Kashshish.",
    difficulty: "Easy",
    accommodationType: "Heritage Stays & Private Houseboat",
    startingPoint: "Kochi",
    endingPoint: "Kochi",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Fort Kochi & Spice Market Walk",
        location: "Fort Kochi",
        description:
          "Arrive in Kochi by 12:00 PM. Check into our Dutch-colonial heritage hotel in Fort Kochi. Walk through Mattancherry spice markets, see Chinese fishing nets, and enjoy fresh seafood thali.",
        stay: "Heritage boutique hotel in Fort Kochi",
        meals: "Dinner",
        activities: ["Mattancherry spice trail", "Chinese fishing nets sunset", "Kerala thali dinner"],
      },
      {
        day: 2,
        title: "Fort Kochi to Munnar Tea Gardens",
        location: "Munnar",
        description:
          "Drive up the Western Ghats into Munnar's tea-blanketed hills. Stop at Cheeyappara waterfalls along the way. Stay at a family-run tea planter's estate.",
        stay: "Tea estate bungalow in Munnar",
        meals: "Breakfast, Lunch & Dinner",
        activities: ["Waterfall stop", "Tea planter bungalow check-in", "Evening mist walk"],
      },
      {
        day: 3,
        title: "Private Tea Estate Trail & Spice Garden",
        location: "Munnar",
        description:
          "Early morning tea garden walk when mist hangs over the valleys. Visit an organic cardamom plantation, sample fresh spices, and enjoy evening campfire under starry mountain skies.",
        stay: "Tea estate bungalow in Munnar",
        meals: "Breakfast & Dinner",
        activities: ["Private tea garden walk", "Organic spice garden tour", "Campfire evening"],
      },
      {
        day: 4,
        title: "Munnar to Alleppey Houseboat Cruise",
        location: "Alleppey Backwaters",
        description:
          "Descend to Alleppey and board our traditional Kettuvallam private houseboat. Cruise through narrow palm-fringed canals, eating fresh Karimeen fish fry prepared by our onboard chef.",
        stay: "Private Deluxe Houseboat",
        meals: "Breakfast, Houseboat Lunch & Dinner",
        activities: ["Backwater canal cruise", "Onboard chef lunch", "Backwater sunset"],
      },
      {
        day: 5,
        title: "Alleppey to Varkala Red Cliff Beach",
        location: "Varkala",
        description:
          "Disembark after breakfast and drive south to Varkala. Check into cliffside rooms overlooking the Arabian Sea. Spend afternoon swimming or relaxing at cliff-top cafes.",
        stay: "Cliff-side resort in Varkala",
        meals: "Breakfast & Dinner",
        activities: ["Varkala cliff walk", "Sunset beach time", "Cliff cafe dinner"],
      },
      {
        day: 6,
        title: "Varkala Slow Day & Ayurvedic Massage",
        location: "Varkala",
        description:
          "A completely unhurried day. Sleep in, try authentic Kerala Ayurvedic massage, swim in the ocean, or read at a cliffside cafe.",
        stay: "Cliff-side resort in Varkala",
        meals: "Breakfast",
        activities: ["Ayurvedic massage option", "Ocean swim", "Slow cafe time"],
      },
      {
        day: 7,
        title: "Varkala Beach Morning & Return to Kochi",
        location: "Kochi",
        description:
          "Morning beach walk, then drive back to Kochi for a final celebratory group dinner in Fort Kochi.",
        stay: "Heritage hotel in Fort Kochi",
        meals: "Breakfast & Farewell Dinner",
        activities: ["Morning beach walk", "Scenic drive to Kochi", "Farewell dinner"],
      },
      {
        day: 8,
        title: "Kochi Departure",
        location: "Kochi",
        description:
          "Breakfast and airport drop. Trip ends with unforgettable memories.",
        stay: "Departure day",
        meals: "Breakfast",
        activities: ["Airport transfers", "Farewell"],
      },
    ],
    included: [
      "All 7 nights accommodation (heritage hotels + private deluxe houseboat)",
      "All meals mentioned (including onboard chef meals on houseboat)",
      "Private AC Tempo Traveller transport throughout",
      "Trip leader (Kashshish) present 24/7",
      "All spice plantation entries and houseboat fees",
    ],
    excluded: [
      "Flights to/from Kochi",
      "Optional Ayurvedic treatments",
      "Personal expenses",
    ],
    whoItsFor: [
      "People wanting a serene, slow-paced coast & hill experience",
      "Food lovers who want authentic regional Kerala cuisine",
      "Friends and couples seeking small group comfort",
    ],
    whoItsNotFor: [
      "Extreme trekkers expecting high-altitude mountain scaling",
    ],
    faqs: [
      {
        question: "What is the houseboat accommodation like?",
        answer:
          "Our houseboats are traditional wood & bamboo Kettuvallams with private AC bedrooms, attached modern bathrooms, and a dedicated chef serving traditional Kerala meals.",
      },
    ],
    status: "filling",
    featured: true,
  },
];
