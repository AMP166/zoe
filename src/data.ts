export const verifiedFacts = {
  name: 'Zoe Pedersen',
  tagline: 'New Zealand Aquablack. World Junior Champion. Commonwealth Games finalist. New Zealand record holder.',
  aquablackNumber: '293',
  club: 'Coast',
  coach: 'Michael Weston',
  strokes: 'Sprint freestyle, butterfly',
  debut: '2025 World Aquatics Championships',
  heroAchievement: {
    title: 'World Junior Champion',
    event: 'Women’s 50m Butterfly',
    result: '25.63',
    note: '2025 World Aquatics Junior Swimming Championships'
  },
  nationalRecord: {
    event: 'Women’s 4×100m Freestyle',
    result: '3:38.38',
    note: 'New Zealand record · 2026 Pan Pacific Championships'
  },
  surfLifesaving: {
    club: 'Red Beach SLSC',
    note: 'Zoe is also an elite surf lifesaving athlete and Youth World Record holder.',
    records: [
      'Youth 50m Manikin Carry — 33.08',
      'Youth 100m Rescue Medley — 1:09.10'
    ]
  },
  socials: {
    instagram: 'https://www.instagram.com/zoe.pedersen/'
  }
};

export const recentResults = [
  {
    meet: 'Glasgow 2026 Commonwealth Games',
    date: '24–29 July 2026',
    location: 'Glasgow, Scotland',
    label: 'Senior international',
    headline: 'Commonwealth Games finalist',
    events: [
      { event: '50m Butterfly', result: '5th · 26.24', detail: 'Semi-final 26.02 · Heat 26.60' },
      { event: '100m Freestyle', result: '12th · 55.49', detail: 'Heat 55.18' },
      { event: '50m Freestyle', result: '13th · 25.63', detail: 'Heat 25.60' }
    ]
  },
  {
    meet: '2026 Pan Pacific Championships',
    date: '12–15 August 2026',
    location: 'Irvine, USA',
    label: 'Senior international',
    headline: 'Pan Pacific finalist & NZ record',
    events: [
      { event: '50m Butterfly', result: '7th · 26.45', detail: 'A final · Heat 26.62' },
      { event: '100m Freestyle', result: '30th · 55.57', detail: 'Heat' },
      { event: '50m Freestyle', result: '23rd · 25.64', detail: 'Heat' },
      { event: '4×100m Freestyle Relay', result: '4th · 3:38.38', detail: 'NEW ZEALAND RECORD · Zoe split 54.54' }
    ]
  },
  {
    meet: '2026 NZ Short Course Championships',
    date: '27 September–1 October 2026',
    location: 'Christchurch, New Zealand',
    label: 'National championships',
    headline: 'Three individual national titles',
    events: [
      { event: '50m Freestyle', result: 'GOLD · 24.63', detail: 'Individual national title' },
      { event: '50m Butterfly', result: 'GOLD · 26.42', detail: 'Individual national title' },
      { event: '100m Butterfly', result: 'GOLD · 59.25', detail: 'Individual national title' },
      { event: '100m Freestyle', result: 'BRONZE', detail: 'National podium' },
      { event: '4×100m Freestyle Relay', result: 'GOLD · 3:42.51', detail: 'Coast' },
      { event: '4×100m Medley Relay', result: 'GOLD · 3:57.81', detail: 'Coast' },
      { event: '4×50m Freestyle Relay', result: 'GOLD · 1:40.30', detail: 'Coast' },
      { event: '4×50m Medley Relay', result: 'GOLD · 1:47.83', detail: 'NEW ZEALAND RECORD · Coast' },
      { event: 'Mixed 4×100m Freestyle Relay', result: 'GOLD · 3:27.18', detail: 'Coast' },
      { event: 'Mixed 4×100m Medley Relay', result: 'GOLD · 3:45.41', detail: 'Coast' }
    ]
  }
];

export const recentHighlights = [
  {
    title: 'U19 Sportswoman of the Year',
    detail: '2026 Surf Life Saving Northern Region Awards of Excellence · Red Beach SLSC'
  },
  {
    title: 'Aon NZ Pool Rescue Championships',
    detail: 'Represented Red Beach SLSC in Auckland · 2–4 October 2026'
  }
];

export const samplePosts = [
  {
    title: 'Road to Glasgow begins',
    slug: 'road-to-glasgow-begins',
    category: 'Training',
    location: 'New Zealand',
    date: '2026-06-27',
    excerpt: 'A short first update as Zoe begins Commonwealth Games preparation.',
    body: [
      'A short update from Zoe as the Road to Glasgow begins.',
      'This placeholder post is here so the site works before Sanity is connected. Once Sanity is set up, Zoe can replace this with her own updates from the editor.'
    ],
    image: '/assets/zoe-race.jpg',
    featured: true
  },
  {
    title: 'First update from camp',
    slug: 'first-update-from-camp',
    category: 'Camp',
    location: 'Pool deck',
    date: '2026-06-28',
    excerpt: 'Settling into the rhythm of training, recovery and race-week preparation.',
    body: ['Placeholder post. Replace from Sanity once the CMS is live.'],
    image: '/assets/zoe-poolside.jpg',
    featured: false
  }
];
