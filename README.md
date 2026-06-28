# Zoe Pedersen — Cloudflare + Sanity site

A static Astro athlete site designed for Cloudflare Pages, with a Sanity CMS live blog so Zoe can publish updates from her phone.

## Verified site facts used

Current Glasgow 2026 events are based on Swimming NZ and NZOC announcements:

- Women's 50m Butterfly — selected event
- Women's 50m Freestyle — permission to start
- Women's 100m Freestyle — permission to start

Other public facts used from Swimming NZ / World Aquatics:

- Aquablack #293
- Club: Coast
- Coach: Michael Weston
- Stroke: sprint freestyle, butterfly
- Lead sponsor/media headline: 2025 World Junior Champion, Women's 50m Butterfly, 25.63
- Glasgow 2026 selected event: Women's 50m Butterfly
- Supporting credential only: Youth World Records in surf lifesaving
- Official sources note Zoe broke Youth World Records at the 2024 Surf Lifesaving World Championships
- Red Beach SLSC / U19 women's 50m Manikin Carry: 33.08 in 2025, listed as a provisional Youth World Record and confirmed New Zealand U19 record

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

The site works with placeholder posts before Sanity is connected.

## Sanity setup

1. Create a Sanity project at https://www.sanity.io/manage
2. Use dataset: `production`
3. Copy the project ID into `.env`:

```bash
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

4. Start the Studio locally:

```bash
npm run studio
```

5. Deploy Sanity Studio so Zoe has a login/editor:

```bash
npm run studio:deploy
```

This gives you a Sanity-hosted Studio URL. Give Zoe access in Sanity Manage.

## Cloudflare Pages setup

Use Cloudflare Pages with GitHub.

Recommended build settings:

```text
Build command: npm run build
Build output directory: dist
Node version: 20 or later
```

Cloudflare environment variables:

```text
PUBLIC_SITE_URL=https://zoepedersen.com
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2026-06-27
```

## CMS rebuild flow

1. In Cloudflare Pages, create a Deploy Hook for the production branch.
2. In Sanity Manage, go to API / Webhooks.
3. Create a webhook pointing to the Cloudflare Deploy Hook URL.
4. Trigger it on create/update/publish/delete for documents.

Now when Zoe publishes a post in Sanity, Cloudflare rebuilds the static site automatically.

## Images

Before final launch, replace placeholders with approved images:

```text
public/assets/zoe-hero.jpg
public/assets/zoe-race.jpg
public/assets/zoe-podium.jpg
```

The current SVG placeholders are intentionally black-and-silver so the site doesn't look broken before photos are added.

## Notes

- The site deliberately leads with the World Junior 50m Butterfly title because that is the strongest sponsor/media positioning.
- Surf lifesaving records are included as supporting credibility only, not as the headline claim.
- Exact 2024 surf lifesaving event/time details should be added if Zoe/family can confirm them from competition records; current public official pages verify Youth World Records but do not consistently publish every event detail on the profile pages.
- This is a static build. No server required.
- Sanity stores content and images.
- Cloudflare serves the final static files.
- The Cloudflare deploy hook connects Sanity edits to automatic rebuilds.


## Copy hierarchy note

The public site should lead with Zoe's World Junior Champion title in the women's 50m butterfly and Glasgow 2026 selection. Surf lifesaving records are included only as supporting background, not as the lead headline. Avoid wording that explains the sponsor strategy directly on the site.
