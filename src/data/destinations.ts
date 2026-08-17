import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "dest-manali",
    name: "Manali",
    slug: "manali",
    heroImage: "/images/destinations/manali-hero.jpg",
    description:
      "The gateway to the high Himalayas. Manali is where the mountains begin to feel real — old-growth forests, river valleys, and roads that lead somewhere genuinely wild.",
    emotionalHook:
      "Where the plains end and the mountains begin to mean something.",
    bestTime: "March to June, September to November",
    duration: "4–7 days",
    difficulty: "Easy",
    idealFor: ["First-time mountain travellers", "Groups of friends", "Couples", "Solo travellers"],
    startingPoint: "Delhi / Chandigarh",
    guideContent: `## When to Visit

Manali works across multiple seasons. Summer (March–June) gives you clear skies, green valleys, and access to high passes. Post-monsoon (September–November) brings dramatic clouds, fewer crowds, and the first hints of snow on the peaks.

Avoid late July and August unless you're comfortable with landslide risks and road closures.

## How to Get There

Most travellers start from Delhi. You can fly to Kullu (Bhuntar airport) or take an overnight bus/drive from Delhi (~12–14 hours). The Chandigarh route via Mandi is the most common road option.

We typically arrange group transport from a central pickup point.

## What to Pack

Layer everything. Mornings are cold, afternoons can be warm, and evenings drop fast. Bring a good waterproof jacket, comfortable walking shoes, thermals for high-pass days, and sunscreen — the sun hits different at altitude.

## What First-Timers Get Wrong

Booking too many activities and not leaving time to just be in the mountains. Manali isn't a checklist — the best moments happen when you're not rushing between tourist spots.

## Difficulty

Easy to moderate. Most of our Manali trips are accessible to anyone reasonably fit. High-pass excursions (Rohtang, Atal Tunnel area) require some comfort with altitude and long drives.

## How Many Days You Actually Need

4 days minimum for a meaningful experience. 5–7 days if you want to explore Old Manali, Solang, Sissu, and take a day for a high-pass drive without rushing.

## Founder Recommendations

Skip the mall road tourist circuit. Spend time in Old Manali, drive toward Sissu and Solang early morning, eat at local dhabas rather than tourist restaurants, and leave at least one day completely unplanned.`,
    faqs: [
      {
        question: "Is Manali safe for solo female travellers?",
        answer:
          "Yes. Manali is one of the more traveller-friendly destinations in India. Our groups always have a mix of solo travellers and we ensure everyone feels comfortable throughout.",
      },
      {
        question: "Do I need any special fitness level?",
        answer:
          "No. Our Manali trips are designed for regular fitness levels. You should be comfortable walking for 30–60 minutes at a stretch and riding in vehicles on mountain roads.",
      },
      {
        question: "What about altitude sickness?",
        answer:
          "Manali itself is at about 2,050m — most people don't feel altitude effects here. If we go toward Rohtang or higher passes, we acclimatize gradually and monitor the group.",
      },
    ],
    images: [
      "/images/destinations/manali-1.jpg",
      "/images/destinations/manali-2.jpg",
      "/images/destinations/manali-3.jpg",
    ],
  },
  {
    id: "dest-spiti",
    name: "Spiti Valley",
    slug: "spiti",
    heroImage: "/images/destinations/spiti-hero.jpg",
    description:
      "A cold desert valley at 12,500 feet. Spiti is one of the last places in India that genuinely feels remote — ancient monasteries, stark landscapes, and roads that test everything.",
    emotionalHook:
      "High roads. Empty valleys. A trip you'll still be talking about years later.",
    bestTime: "June to September",
    duration: "7–10 days",
    difficulty: "Challenging",
    idealFor: ["Adventure seekers", "Photography enthusiasts", "Experienced mountain travellers", "Road trip lovers"],
    startingPoint: "Delhi / Chandigarh / Manali",
    guideContent: `## When to Visit

Spiti is accessible primarily from June to September via the Manali–Spiti highway. The Shimla route opens slightly earlier. Winter trips are possible but limited to the Shimla–Kaza stretch and require serious cold-weather preparation.

## How to Get There

Two primary routes: Manali → Rohtang → Kunzum Pass → Kaza (dramatic, high-altitude, weather-dependent) or Shimla → Kinnaur → Kaza (longer, lower altitude, more consistently open).

We typically run circuits that enter from one side and exit from the other.

## What to Pack

This is serious altitude. Pack heavy thermals, a down jacket for evenings, UV-protective sunglasses, sunscreen SPF 50+, lip balm, personal medications, and snacks for long road days. The air is extremely dry.

## What First-Timers Get Wrong

Underestimating the roads and the altitude. Spiti is not Manali. Roads are unpaved, distances take twice as long as you'd expect, and altitude above 13,000 feet affects most people. Give yourself time to adjust.

## Difficulty

Challenging. Long drives on rough roads, high altitude (12,500–15,000+ feet), limited infrastructure, and weather that changes without warning. Not recommended as a first Himalayan trip.

## How Many Days You Actually Need

7 days minimum for a circuit. 9–10 days to do it properly without exhausting yourself on road days. Trying to do Spiti in 5 days means you'll spend the entire time in a vehicle.

## Founder Recommendations

Don't rush through Kaza. Spend time at Key Monastery early morning, visit Langza for the fossils and the view, drive to Komic and just sit. The Chandratal lake deserves an overnight camp, not a rushed day visit. And carry cash — cards don't work up here.`,
    faqs: [
      {
        question: "Is Spiti suitable for beginners?",
        answer:
          "We'd recommend at least one previous mountain trip before attempting Spiti. The altitude, road conditions, and remoteness require some baseline comfort with adventure travel.",
      },
      {
        question: "What about phone connectivity?",
        answer:
          "Extremely limited. BSNL has the best coverage but it's patchy at best. Plan to be offline for extended periods. We brief the group on this before departure.",
      },
      {
        question: "Can I do Spiti if I get motion sickness?",
        answer:
          "The roads are genuinely challenging with many hairpin bends. If you're prone to motion sickness, carry medication and let us know — we can adjust seating and break stops.",
      },
    ],
    images: [
      "/images/destinations/spiti-1.jpg",
      "/images/destinations/spiti-2.jpg",
      "/images/destinations/spiti-3.jpg",
    ],
  },
  {
    id: "dest-kedarnath",
    name: "Kedarnath",
    slug: "kedarnath",
    heroImage: "/images/destinations/kedarnath-hero.jpg",
    description:
      "One of the most powerful treks in India. Kedarnath combines spiritual significance with genuine Himalayan trekking — 16 km through mountain valleys to a 1,200-year-old temple at 11,755 feet.",
    emotionalHook:
      "A trek that changes something in you. Sixteen kilometres to one of the oldest temples in India.",
    bestTime: "May to June, September to October",
    duration: "4–6 days",
    difficulty: "Moderate",
    idealFor: ["Trekking enthusiasts", "Spiritual travellers", "First-time Himalayan trekkers", "Groups of friends"],
    startingPoint: "Delhi / Haridwar / Rishikesh",
    guideContent: `## When to Visit

Kedarnath is open May to June and September to October. The monsoon (July–August) closes the trek due to landslide risks. Early May can still have snow on the trail. Late September offers the clearest post-monsoon views.

## How to Get There

Start from Haridwar or Rishikesh, drive to Sonprayag (7–8 hours), then a short shuttle to Gaurikund — the trek begins there. We handle all transport logistics from Delhi/Haridwar.

## What to Pack

Good trekking shoes are non-negotiable. Pack layers, a rain jacket, a small daypack, energy bars, a water bottle, and personal medications. The trail is well-established but altitude still matters.

## What First-Timers Get Wrong

Not training at all beforehand. The trek is 16 km uphill at increasing altitude. It's absolutely doable for regular fitness, but showing up completely untrained makes it a suffer-fest instead of an experience.

## Difficulty

Moderate. The trail is established and well-maintained. The challenge is sustained uphill walking at altitude. Most reasonably fit people complete it, but it's not a casual stroll.

## How Many Days You Actually Need

4 days minimum (drive + trek up + temple + trek down). 5–6 days for a comfortable pace with acclimatization and exploration of surrounding areas.

## Founder Recommendations

Start the trek early morning (before 6 AM ideally) to avoid crowds and afternoon weather. Take it slow — this isn't a race. The last 2 km feel longest. And spend time at the temple in the early morning when it's quietest — that's when you feel why people have been coming here for a thousand years.`,
    faqs: [
      {
        question: "Do I need to be religious to enjoy Kedarnath?",
        answer:
          "Not at all. Many of our travellers go for the trek and the landscape. The temple is architecturally stunning and historically significant regardless of personal beliefs.",
      },
      {
        question: "Are ponies/helicopters available?",
        answer:
          "Yes, ponies and helicopter services exist. Our trips are trekking-focused, but we can arrange alternatives if someone needs them during the trip.",
      },
      {
        question: "What about accommodation on the trek?",
        answer:
          "We arrange stays in Kedarnath town near the temple. Accommodation is basic but adequate — this is a pilgrimage site at 11,755 feet, not a resort. We ensure clean bedding and hot food.",
      },
    ],
    images: [
      "/images/destinations/kedarnath-1.jpg",
      "/images/destinations/kedarnath-2.jpg",
      "/images/destinations/kedarnath-3.jpg",
    ],
  },
  {
    id: "dest-kerala",
    name: "Kerala",
    slug: "kerala",
    heroImage: "/images/destinations/kerala-hero.jpg",
    description:
      "India's green coast. Kerala offers backwaters, hill stations, beaches, and food that makes you reconsider everything you thought you knew about Indian cuisine.",
    emotionalHook:
      "Backwaters. Hill stations. Food that makes you want to cancel your return ticket.",
    bestTime: "September to March",
    duration: "5–8 days",
    difficulty: "Easy",
    idealFor: ["Families", "Couples", "Food lovers", "First-time group travellers", "Anyone needing to slow down"],
    startingPoint: "Kochi / Trivandrum",
    guideContent: `## When to Visit

October to March is ideal — post-monsoon greenery with comfortable temperatures. Kerala's monsoon (June–August) is beautiful but means heavy rain and some closures. December–January is peak season with higher prices and crowds.

## How to Get There

Fly into Kochi (Cochin) or Trivandrum. Both airports are well-connected to all major Indian cities. We typically design routes that start and end at Kochi for convenience.

## What to Pack

Light, breathable clothing. Cotton works best. A light rain jacket (weather can surprise you), comfortable sandals, mosquito repellent, and sunscreen. Kerala is warm and humid year-round.

## What First-Timers Get Wrong

Trying to see all of Kerala in one trip. The state is long and road journeys between regions take time. Pick 2–3 zones and go deeper rather than racing between Munnar, Alleppey, Varkala, and Wayanad in five days.

## Difficulty

Easy. Kerala trips are accessible to everyone. No trekking, no altitude, no extreme weather. The biggest challenge is deciding what to eat next.

## How Many Days You Actually Need

5 days for a focused backwaters + hills experience. 7–8 days to properly cover multiple regions without rushing. A short trip works if you pick one zone and commit to it.

## Founder Recommendations

Alleppey houseboats are worth it if you get a good one (we know which ones). Spend time in Fort Kochi for the history and food. Munnar is beautiful but get beyond the tourist tea estates. And eat everything — Kerala's food is reason enough to visit.`,
    faqs: [
      {
        question: "Is Kerala good for families?",
        answer:
          "Excellent. Kerala is one of the most family-friendly destinations in India. Safe, well-connected, great food variety, and activities that work for all ages.",
      },
      {
        question: "What about Ayurveda and wellness?",
        answer:
          "We can incorporate wellness stays into private trips. Group trips focus more on exploration and food, but we know good authentic Ayurveda centres (not the tourist ones).",
      },
      {
        question: "Is Kerala vegetarian-friendly?",
        answer:
          "Kerala cuisine is heavily non-vegetarian (seafood especially), but vegetarian options are always available and genuinely good — not just an afterthought.",
      },
    ],
    images: [
      "/images/destinations/kerala-1.jpg",
      "/images/destinations/kerala-2.jpg",
      "/images/destinations/kerala-3.jpg",
    ],
  },
];
