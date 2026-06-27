export const verifiedFacts = {
  name: 'Zoe Pedersen',
  tagline: 'New Zealand swimmer. World Junior Champion — 50m Butterfly. Glasgow 2026.',
  aquablackNumber: '293',
  club: 'Coast',
  coach: 'John Gatfield',
  strokes: 'Sprint freestyle, butterfly',
  debut: '2025 World Aquatics Championships',
  heroAchievement: {
    title: 'World Junior Champion',
    event: 'Women’s 50m Butterfly',
    result: '25.63',
    note: '2025 World Aquatics Junior Swimming Championships'
  },
  glasgowEvents: [
    { event: 'Women’s 50m Butterfly', status: 'Selected event' },
    { event: 'Women’s 50m Freestyle', status: 'Permission to start' },
    { event: 'Women’s 100m Freestyle', status: 'Permission to start' }
  ],
  surfLifesaving: {
    club: 'Red Beach SLSC',
    note: 'Zoe has also achieved Youth World Record marks in surf lifesaving.',
    recentRecord: 'U19 women’s 50m Manikin Carry — 33.08, listed as a provisional Youth World Record and confirmed New Zealand U19 record in 2025.'
  },
  socials: {
    instagram: 'https://www.instagram.com/zoe.pedersen/'
  }
};

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
