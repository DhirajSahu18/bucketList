import { Trip } from "@/types";
import { destinations } from "./destinations";
import { founders } from "./founders";

export const trips: Trip[] = [
  {
    id: "trip-1",
    name: "Himachal Unplugged — Kasol, Manali, Dharamshala & Amritsar",
    slug: "himachal-unplugged-new-year",
    destination: destinations[0], // Manali / Himachal Hub
    destinationId: "dest-manali",
    heroImage: "/images/trips/himachal-hero.jpg",
    heroAssetMeta: {
      src: "/images/trips/himachal-hero.jpg",
      type: "brand",
      source: "Official Himachal PDF Itinerary Cover",
      alt: "Himalayan snow peaks and pine valley landscape",
    },
    gallery: [
      "/images/trips/himachal-hero.jpg",
      "/images/trips/himachal-solang-snow.jpg",
      "/images/trips/himachal-dharamshala.jpg",
      "/images/trips/himachal-amritsar.jpg",
      "/images/trips/himachal-group-snow.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/himachal-hero.jpg",
        type: "brand",
        source: "Official Himachal PDF Itinerary Cover",
        alt: "Himalayan snow peaks and pine valley landscape",
      },
      {
        src: "/images/trips/himachal-solang-snow.jpg",
        type: "brand",
        source: "Official Himachal PDF Itinerary",
        alt: "Solang Valley snow trails and mountain views",
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
    dates: { start: "2026-12-04", end: "2026-12-12" },
    duration: "9 Days / 8 Nights",
    durationDays: 9,
    price: 16499,
    bookingAmount: 5000,
    maxGroupSize: 25,
    seatsBooked: 17,
    seatsRemaining: 8,
    founder: founders[0],
    founderId: "founder-1",
    founderNote: {
      author: "Bucketlist Team",
      text: "Himachal Unplugged is our official flagship 9-day Himalayan journey. We combine Kasol cafes, Parvati Valley campfires, Kullu river rafting, Solang snow trails, Dharamshala monasteries, Wagah Border ceremony, and the Golden Temple in Amritsar.",
    },
    hardTruth: {
      headline: "Good to know before you book:",
      bullets: [
        "Official Departure Batches: Batch 1 (04 Dec – 12 Dec) and Batch 2 (20 Jan – 28 Jan). Early bird discount (₹1,500 off) for the first 5 pax!",
        "Complimentary river rafting at Kullu and bike ride in Manali are included in the package (weather permitting).",
        "Keep a small backpack with dry clothes handy in the bus for river rafting in Kullu, as main luggage stays in the bus until Manali check-in.",
      ],
    },
    summary:
      "Official 9-day Himalayan expedition across Kasol, Manikaran, river rafting in Kullu, Solang snow trails in Manali, Dalai Lama Temple in Dharamshala, and Wagah Border with the Golden Temple in Amritsar.",
    difficulty: "Easy",
    accommodationType: "3 Star Hotels & Riverside Campsite (Quad Sharing)",
    startingPoint: "Mumbai LTT / Ambala / Kasol",
    endingPoint: "Amritsar / Mumbai LTT",
    itinerary: [
      {
        day: 1,
        title: "Day 1 — Mumbai to Ambala Train Journey",
        location: "Mumbai -> Ambala Route (4 Dec / 20 Jan)",
        description:
          "Begin the journey from Mumbai (LTT) with your travel squad and settle in for an exciting train ride. Enjoy the journey with music, games, conversations, and overnight train transit.",
        stay: "Overnight Train Transit",
        meals: "Self-sponsored train meals",
        activities: ["Trip briefing", "Leader introductions", "Train squad icebreakers"],
      },
      {
        day: 2,
        title: "Day 2 — Ambala to Kasol Mountain Drive",
        location: "Ambala -> Kasol Highway (5 Dec / 21 Jan)",
        description:
          "Arrive at Ambala at night, board our Tempo Traveller for the overnight mountain highway drive towards Kasol (approx 280 km, 8-9 hours). Have dinner on the way and wake up surrounded by Himalayan peaks.",
        stay: "Overnight Highway Transit (Tempo Traveller)",
        meals: "Self-sponsored dinner stop",
        activities: ["Scenic mountain drive", "Night highway transit"],
      },
      {
        day: 3,
        title: "Day 3 — Explore Kasol, Manikaran & DJ Night",
        location: "Kasol & Parvati Valley (6 Dec / 22 Jan)",
        description:
          "Arrive in Kasol, freshen up, and enjoy breakfast. Visit peaceful Manikaran Sahib and explore Parvati Valley. Spend afternoon cafe hopping and exploring Kasol market. End the evening with music, a fun DJ night, and good vibes. Dinner & overnight stay in Kasol.",
        stay: "Riverside Campsite / Hotel in Kasol",
        meals: "Breakfast & Dinner",
        activities: ["Manikaran Sahib visit", "Parvati Valley walk", "Kasol cafe hopping", "DJ night & bonfire"],
      },
      {
        day: 4,
        title: "Day 4 — Kasol to Kullu Rafting & Manali",
        location: "Kullu & Manali (7 Dec / 23 Jan)",
        description:
          "Breakfast at hotel. Head towards Kullu (approx 80 km) for an adventure-packed day with complimentary river rafting and optional paragliding. Continue scenic drive to Manali, check in hotel, explore Mall Road or relax. Dinner & overnight stay in Manali.",
        stay: "3 Star Hotel in Manali",
        meals: "Breakfast & Dinner",
        activities: ["Complimentary Kullu river rafting", "Optional paragliding", "Manali Mall Road walk"],
      },
      {
        day: 5,
        title: "Day 5 — Manali Solang Snow Trail & Overnight to Dharamshala",
        location: "Solang Valley & Dharamshala Transit (8 Dec / 24 Jan)",
        description:
          "After breakfast, check out, grab your bikes for a complimentary bike ride towards Hadimba Devi Temple, Solang Valley & Rohtang Pass (subject to permits/weather). Return to hotel for dinner before departing on an overnight journey to Dharamshala (approx 240 km).",
        stay: "Overnight Transit to Dharamshala",
        meals: "Breakfast & Dinner",
        activities: ["Complimentary Manali bike ride", "Solang Valley snow trail", "Hadimba Temple visit"],
      },
      {
        day: 6,
        title: "Day 6 — Explore Dharamshala & McLeod Ganj",
        location: "Dharamshala & McLeod Ganj (9 Dec / 25 Jan)",
        description:
          "Arrive in Dharamshala, freshen up, and enjoy breakfast. Visit Dalai Lama Temple, St. John in the Wilderness Church, HPCA Stadium, and nearby monasteries. Explore McLeod Ganj local cafes, markets, and end the day with a beautiful Himalayan sunset. Dinner & overnight stay in Dharamshala.",
        stay: "3 Star Hotel in Dharamshala",
        meals: "Breakfast & Dinner",
        activities: ["Dalai Lama Temple", "HPCA Stadium visit", "McLeod Ganj market trail", "Himalayan sunset view"],
      },
      {
        day: 7,
        title: "Day 7 — Dharamshala to Amritsar & Wagah Border Ceremony",
        location: "Amritsar (10 Dec / 26 Jan)",
        description:
          "Leave early for Amritsar (sharp 4 AM, approx 200 km). Check in, freshen up & breakfast on arrival. Afternoon drive to witness the electrifying Wagah Border Ceremony. Visit the illuminated Golden Temple by evening. Dinner & overnight stay in Amritsar.",
        stay: "3 Star Hotel in Amritsar",
        meals: "Breakfast & Dinner",
        activities: ["Wagah Border ceremony", "Golden Temple evening illumination", "Amritsar street food"],
      },
      {
        day: 8,
        title: "Day 8 — Golden Temple, Local Markets & Return Train",
        location: "Amritsar -> Mumbai Train (11 Dec / 27 Jan)",
        description:
          "Breakfast, checkout & visit the Golden Temple to experience its peaceful surroundings during the day. Explore local markets and indulge in Amritsar's famous street food. Gather for one last group photo before boarding your 6:00 PM return train back to Mumbai.",
        stay: "Overnight Train Transit",
        meals: "Breakfast",
        activities: ["Golden Temple morning darshan", "Amritsar food trail", "Final group photo", "6:00 PM train departure"],
      },
      {
        day: 9,
        title: "Day 9 — Arrive Back in Mumbai",
        location: "Mumbai LTT (12 Dec / 28 Jan)",
        description:
          "Arrive back in Mumbai with unforgettable memories, new friendships, and stories that will last a lifetime!",
        stay: "Home",
        meals: "N/A",
        activities: ["Group farewell"],
      },
    ],
    included: [
      "Mumbai-Mumbai Train Tickets (Non-AC or 3 Tier AC)",
      "Accommodation in hotels on Quad Sharing basis (3 Star Hotels & Campsite)",
      "Daily Breakfast & Dinner (MAP Plan) as per itinerary",
      "All transfers and sightseeing by Tempo Traveller (or similar)",
      "Complimentary River Rafting at Kullu",
      "Complimentary Bike Ride in Manali (if weather permits)",
      "Toll taxes, parking charges, fuel, road taxes, driver allowance, and night charges",
      "Complete trip coordination and on-ground assistance throughout the journey",
    ],
    excluded: [
      "Meals during train journeys, lunch, and meals not mentioned in the itinerary",
      "Rohtang Pass permits, entry tickets, and monument fees",
      "Optional adventure activities (except complimentary river rafting at Kullu & bike ride in Manali)",
      "Personal expenses, shopping, laundry, heater/porter charges, and tips",
      "Travel insurance and medical expenses",
    ],
    whoItsFor: [
      "Anyone looking for an official 9-day Himalayan & Amritsar expedition",
      "Solo joiners who want a friendly group dynamic and mountain squad",
      "Friends and college crews who love river rafting, snow trails, and street food",
    ],
    whoItsNotFor: [
      "People looking for strict isolation or 5-star luxury resort pampering",
      "Those who prefer short 2-day quick weekend getaways",
    ],
    faqs: [
      {
        question: "What are the package pricing options?",
        answer:
          "The package cost is ₹16,499 per person for Non-AC train option and ₹17,999 per person for 3 Tier AC train option. Early bird booking discount is ₹1,500 off for the first 5 pax!",
      },
      {
        question: "Can I join solo?",
        answer:
          "Yes! Over 60% of people join solo. We pair up room allocations and squad seats so you'll feel at home with new friends on Day 1.",
      },
    ],
    status: "filling",
    featured: true,
  },
  {
    id: "trip-goa",
    name: "Goa Unfiltered — Villa & Beach Expedition",
    slug: "goa-unfiltered",
    destination: destinations[1], // Goa
    destinationId: "dest-goa",
    heroImage: "/images/trips/goa-hero.jpg",
    heroAssetMeta: {
      src: "/images/trips/goa-hero.jpg",
      type: "internet",
      source: "Unsplash Location Archive",
      alt: "Chapora Fort and Vagator Beach coastline in North Goa",
    },
    gallery: [
      "/images/trips/goa-hero.jpg",
      "/images/trips/goa-fort-aguada.jpg",
      "/images/trips/goa-street.jpg",
      "/images/trips/goa-church.jpg",
      "/images/trips/goa-villa-pool.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/goa-hero.jpg",
        type: "internet",
        source: "Unsplash Location Archive",
        alt: "Chapora Fort and Vagator Beach coastline in North Goa",
      },
      {
        src: "/images/trips/goa-fort-aguada.jpg",
        type: "internet",
        source: "Unsplash Location Archive",
        alt: "Historic Fort Aguada lighthouse overlooking the Arabian Sea",
      },
      {
        src: "/images/trips/goa-street.jpg",
        type: "internet",
        source: "Unsplash Location Archive",
        alt: "Fontainhas heritage street walk in Panaji with colorful Portuguese architecture",
      },
      {
        src: "/images/trips/goa-church.jpg",
        type: "brand",
        source: "Official Goa PDF Itinerary",
        alt: "Basilica of Bom Jesus in Old Goa",
      },
      {
        src: "/images/trips/goa-villa-pool.jpg",
        type: "brand",
        source: "Official Goa PDF Itinerary",
        alt: "Private villa swimming pool stay",
      },
    ],
    dates: { start: "2027-07-14", end: "2027-07-17" },
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    price: 7999,
    bookingAmount: 5000,
    maxGroupSize: 15,
    seatsBooked: 9,
    seatsRemaining: 6,
    founder: founders[0],
    founderId: "founder-1",
    founderNote: {
      author: "Bucketlist Team",
      text: "Goa Unfiltered is created for travellers who want sandy feet, cozy villa vibes, and beach parties without strict rigid schedules. It's living in the moment with the right people.",
    },
    hardTruth: {
      headline: "Good to know before you book:",
      bullets: [
        "Land Package Duration: 4 Days / 3 Nights (14 July – 17 July). Overnight train departure from Mumbai is on 13 July night.",
        "Carry a valid Government-approved photo ID (Aadhar / Driving License) for hotel check-in and rental scooties (PAN card not accepted).",
        "Train round-fare (₹2,199) from Mumbai is optional and subject to railway availability.",
      ],
    },
    summary:
      "4 days across private villa swimming pool stays, North Goa beach hopping, Chapora Fort views, Fontainhas heritage walks, and late-night beach parties.",
    difficulty: "Easy",
    accommodationType: "Private Villa with Swimming Pool Access",
    startingPoint: "Mumbai / Thivim (Goa)",
    endingPoint: "Thivim (Goa) / Mumbai",
    itinerary: [
      {
        day: 1,
        title: "Departure Day — Overnight Train from Mumbai to Goa",
        location: "Mumbai -> Goa Train Route (13 July Night)",
        description:
          "Board your overnight train from Mumbai (13 July night). Relax as we head down the Konkan railway line towards Goa.",
        stay: "Overnight Train Journey",
        meals: "Self-sponsored",
        activities: ["Train journey icebreakers", "Group meetup"],
      },
      {
        day: 2,
        title: "Trip Day 1 — Arrival in Goa, Villa Check-in & Local Exploration",
        location: "Thivim & Villa (14 July)",
        description:
          "Arrive at Thivim Railway Station. Transfer to our private villa and check in. Freshen up, relax by the swimming pool, explore local Goan cuisine, and unwind for the evening.",
        stay: "Private Villa with Swimming Pool Access",
        meals: "Self-sponsored",
        activities: ["Villa check-in", "Poolside relax", "Local Goan dinner"],
      },
      {
        day: 3,
        title: "Trip Day 2 — North Goa Sightseeing & Vibrant Nightlife",
        location: "North Goa (15 July)",
        description:
          "Breakfast at the villa. Head out on scooties/traveller for North Goa highlights: Fort Aguada, Candolim Beach, Calangute Beach, Baga Beach, Anjuna Beach, Vagator Beach, and iconic Chapora Fort views. Return to villa to relax, then head out for an unforgettable beach party.",
        stay: "Private Villa with Swimming Pool Access",
        meals: "Breakfast",
        activities: ["Fort Aguada visit", "Chapora Fort sunset", "North Goa beach trail", "Beach party & nightlife"],
      },
      {
        day: 4,
        title: "Trip Day 3 — South Goa Heritage & Coastal Exploration",
        location: "South Goa & Panaji (16 July)",
        description:
          "Breakfast at the villa. Explore scenic South Goa and heritage landmarks: Basilica of Bom Jesus, Se Cathedral, Dona Paula View Point, Miramar Beach, Colva Beach, and Fontainhas Panjim Market. Relaxed group evening back at the villa.",
        stay: "Private Villa with Swimming Pool Access",
        meals: "Breakfast",
        activities: ["Basilica of Bom Jesus", "Fontainhas heritage walk", "Dona Paula viewpoint", "Colva beach sunset"],
      },
      {
        day: 5,
        title: "Trip Day 4 / Return — Villa Checkout & Train to Mumbai",
        location: "Goa -> Mumbai (17 July)",
        description:
          "Breakfast at the villa. Complete checkout formalities and proceed to the railway station. Board your return train to Mumbai (arriving ~11:00 PM). Tour ends with unforgettable memories!",
        stay: "Return Train Transit",
        meals: "Breakfast",
        activities: ["Villa checkout", "Return train journey"],
      },
    ],
    included: [
      "3 nights stay in a private villa on group-sharing basis with swimming pool access",
      "Complimentary daily breakfast throughout the trip",
      "Rental Scooty / Traveller for North Goa and South Goa sightseeing tours",
      "All toll taxes, parking charges, road taxes, driver allowances, and night charges",
      "On-ground trip management and community lead support",
    ],
    excluded: [
      "Train/flight fare (optional ₹2,199 round train fare from Mumbai)",
      "Lunch, dinner, snacks, beverages, and personal cafe orders",
      "Entry tickets, monument fees, and adventure activities (paragliding, water sports)",
      "Personal expenses, shopping, laundry, porter charges, and travel insurance",
    ],
    whoItsFor: [
      "Friends groups and solo joiners looking for a relaxed villa getaway",
      "Travellers who love beach parties, Chapora Fort sunsets, and heritage walks",
      "Anyone wanting a balanced trip without rigid, stressful schedules",
    ],
    whoItsNotFor: [
      "Those expecting luxury 5-star resort room service",
      "Travellers seeking intense high-altitude mountain trekking",
    ],
    faqs: [
      {
        question: "Is train transport included?",
        answer:
          "The land package is ₹7,999. Round train fare from Mumbai is an optional additional ₹2,199 per person, subject to railway booking availability.",
      },
      {
        question: "What documents do I need to bring?",
        answer:
          "All travellers must carry a valid Government-issued photo ID (Aadhar Card, Driving License, Voter ID, or Passport). PAN Card is not accepted.",
      },
    ],
    status: "upcoming",
    featured: true,
  },
  {
    id: "trip-gokarna",
    name: "Gokarna Beach & Cliff Trek",
    slug: "gokarna-community-trip",
    destination: destinations[2], // Gokarna
    destinationId: "dest-gokarna",
    heroImage: "/images/trips/gokarna-hero.jpg",
    heroAssetMeta: {
      src: "/images/trips/gokarna-hero.jpg",
      type: "brand",
      source: "Official Gokarna PDF Itinerary",
      alt: "Gokarna cliffside beach trek trail overlooking ocean",
    },
    gallery: [
      "/images/trips/gokarna-hero.jpg",
      "/images/trips/gokarna-om-beach.jpg",
      "/images/trips/gokarna-yana-caves.jpg",
      "/images/trips/gokarna-murudeshwar.jpg",
      "/images/trips/gokarna-honnavar.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/gokarna-hero.jpg",
        type: "brand",
        source: "Official Gokarna PDF Itinerary",
        alt: "Gokarna cliffside beach trek trail overlooking ocean",
      },
      {
        src: "/images/trips/gokarna-om-beach.jpg",
        type: "internet",
        source: "Unsplash Location Archive",
        alt: "Aerial view of Om Beach and Kudle Beach coastline in Gokarna",
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
    dates: { start: "2027-08-28", end: "2027-08-31" },
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    price: 9999,
    bookingAmount: 5000,
    maxGroupSize: 20,
    seatsBooked: 14,
    seatsRemaining: 6,
    founder: founders[1],
    founderId: "founder-2",
    founderNote: {
      author: "Bucketlist Team",
      text: "Gokarna is the perfect coastal escape. We combine scenic cliffside beach trekking, temple heritage, ancient Yana rock formations, and serene Honnavar backwater boat rides.",
    },
    hardTruth: {
      headline: "Good to know before you book:",
      bullets: [
        "Package Duration: 5 Days / 4 Nights (3 Nights Hotel Accommodation in Gokarna + 3 AC Train Transit).",
        "August is monsoon season — bring lightweight rainwear, a waterproof poncho, and comfortable trekking shoes with good grip.",
        "Round-trip 3 AC train tickets (Matsyagandha Express from Thane) are included in the package cost.",
      ],
    },
    summary:
      "5 days featuring the famous Gokarna beach cliff trek, Mahabaleshwar Temple, Yana Caves, Honnavar mangrove backwaters boat ride, and Murudeshwar giant Shiva statue.",
    difficulty: "Easy",
    accommodationType: "3 Nights Hotel Accommodation in Gokarna",
    startingPoint: "Thane / Gokarna",
    endingPoint: "Gokarna / Thane",
    itinerary: [
      {
        day: 1,
        title: "Departure Day — Overnight Train from Thane to Gokarna",
        location: "Thane -> Gokarna Train",
        description:
          "Board the 12619 Matsyagandha Express from Thane Railway Station. Overnight train journey towards Karnataka's West Coast.",
        stay: "Overnight Train (3 AC Class)",
        meals: "Self-sponsored",
        activities: ["Train journey meetup", "Trip icebreakers"],
      },
      {
        day: 2,
        title: "Trip Day 1 — Arrival in Gokarna, Mahabaleshwar Temple & Sunset Beaches",
        location: "Gokarna (28 August)",
        description:
          "Arrive at Gokarna Railway Station. Transfer to hotel and check in. Freshen up, visit the sacred Mahabaleshwar Temple, explore local town markets, then head to Kudle Beach and Om Beach for peaceful sunset views over the Arabian Sea.",
        stay: "Hotel in Gokarna",
        meals: "Dinner",
        activities: ["Mahabaleshwar Temple visit", "Kudle Beach walk", "Om Beach sunset", "Beach cafe evening"],
      },
      {
        day: 3,
        title: "Trip Day 2 — Yana Caves & Honnavar Backwaters Excursion",
        location: "Yana Caves & Honnavar (29 August)",
        description:
          "Breakfast at hotel. Drive through Western Ghats forest to Yana. Short trek to black limestone rock monoliths (Bhairaveshwara & Mohini Shikhara). Continue to Honnavar for a serene mangrove backwaters boat ride. Return evening to Gokarna.",
        stay: "Hotel in Gokarna",
        meals: "Breakfast & Dinner",
        activities: ["Yana Caves forest trek", "Limestone monoliths tour", "Honnavar backwater boat ride"],
      },
      {
        day: 4,
        title: "Trip Day 3 — Murudeshwar Temple & Coastal Viewpoints",
        location: "Murudeshwar & Gokarna (30 August)",
        description:
          "Breakfast at hotel. Drive to Murudeshwar Temple overlooking the ocean and marvel at the world's second-tallest Shiva statue. Explore Murudeshwar Beach, then return to Gokarna for beachside markets and local cafes.",
        stay: "Hotel in Gokarna",
        meals: "Breakfast & Dinner",
        activities: ["Murudeshwar Temple & Shiva Statue", "Murudeshwar Beach walk", "Local cafe trail"],
      },
      {
        day: 5,
        title: "Trip Day 4 / Return — Famous Gokarna Beach Trek & Departure",
        location: "Gokarna -> Thane (31 August)",
        description:
          "Begin the famous Gokarna Beach Trek connecting hidden beach cliffs. Capture spectacular ocean photography. Collect luggage, transfer to station, and board return train 12620 Matsyagandha Express to Thane. Trip concludes with lifelong memories!",
        stay: "Return Train (3 AC Class)",
        meals: "Breakfast",
        activities: ["Gokarna cliffside beach trek", "Ocean cliff photography", "Return train departure"],
      },
    ],
    included: [
      "Round journey 3 AC Class train tickets (12619 / 12620 Matsyagandha Express from Thane)",
      "3 nights hotel accommodation in Gokarna",
      "Daily hot breakfast and dinner throughout stay",
      "Gokarna railway station transfers",
      "Private vehicle for entire sightseeing itinerary",
      "Driver allowance, toll taxes, and parking charges",
    ],
    excluded: [
      "Lunches and personal cafe orders",
      "Optional boat rides, cruises, and water sports activities",
      "Entry fees, permits, monument charges, and attraction tickets",
      "Personal expenses, shopping, tips, laundry, and medical insurance",
    ],
    whoItsFor: [
      "Friends and solo travellers who love beach cliff trekking and nature excursions",
      "Anyone wanting to explore Gokarna, Yana Caves, and Honnavar backwaters",
      "Travellers seeking an authentic, well-managed coastal community run",
    ],
    whoItsNotFor: [
      "Those who dislike walking on beach sand or cliff trails",
      "People seeking luxury resort pampering",
    ],
    faqs: [
      {
        question: "Are train tickets included in the price?",
        answer:
          "Yes! Round-trip 3 AC train tickets on Matsyagandha Express (Thane to Gokarna & return) are included in the ₹9,999 package cost.",
      },
      {
        question: "Is the beach trek strenuous?",
        answer:
          "No, the Gokarna beach trek is an easy-to-moderate trail along scenic coastal cliffs with comfortable rest stops.",
      },
    ],
    status: "upcoming",
    featured: true,
  },
  {
    id: "trip-2",
    name: "Kerala Backwaters & Tea Hills",
    slug: "kerala-coast-hills-january-2027",
    destination: destinations[3], // Kerala
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
      "/images/destinations/kerala/hero.jpg",
    ],
    galleryMeta: [
      {
        src: "/images/trips/kerala-backwaters.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Alleppey houseboat backwaters scenery",
      },
      {
        src: "/images/destinations/kerala/hero.jpg",
        type: "internet",
        source: "Unsplash",
        alt: "Alleppey backwaters floating under coconut palms",
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
    founder: founders[1],
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
          "Gather in Kochi by noon. Check into our heritage hotel and explore Chinese fishing nets, spice market alleys, and local seafood joints.",
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
      "On-ground founder guidance throughout",
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
    destination: destinations[4], // Kedarnath
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
      "/images/destinations/kedarnath/hero.jpg",
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
    founder: founders[0],
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
        description: "Drive along the Mandakini river via Devprayag to Sonprayag. Evening trek briefing.",
        stay: "Mountain guesthouse in Sonprayag",
        meals: "Dinner",
        activities: ["Devprayag sangam stop", "Trek briefing"],
      },
    ],
    included: ["Private transport from Rishikesh", "Guesthouse accommodation", "Meals during trek", "Trek leader support"],
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
