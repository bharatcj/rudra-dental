# Rudra Dental

Marketing site for Rudra Dental Clinic, Anakaputhur, Chennai. Built with Next.js App Router, TypeScript, Tailwind CSS v4 and Framer Motion, deployed on Vercel.

Live at [rudradental.com](https://rudradental.com).

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, static export of every route) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 with a custom token theme in `app/globals.css` |
| Motion | Framer Motion |
| Analytics | Google Analytics 4 and Google Tag Manager via `next/script` |
| Hosting | Vercel |
| DNS | Cloudflare |

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
```

## Project structure

```
app/
  layout.tsx            root metadata, JSON-LD graph, GA4 and GTM
  page.tsx              landing page composition
  privacy-policy/       privacy policy route
  globals.css           design tokens, utilities, keyframes
  sitemap.ts            sitemap.xml
  robots.ts             robots.txt
  manifest.ts           web app manifest
  opengraph-image.png   social card, also served as twitter-image.png
  favicon.ico
components/
  layout/               header, footer, preloader, scroll chrome, mobile dock
  sections/             hero, services, about, process, doctors, content, contact
  booking/              appointment modal, calendar and WhatsApp handoff
  ui/                   icon set and motion primitives
lib/
  site.ts               single source of truth for clinic content
  keywords.ts           540 SEO keywords carried over from the legacy site
  schema.ts             structured data builders
```

All clinic content lives in `lib/site.ts`. Editing a doctor, service, FAQ or opening hour there updates the page, the structured data and the booking modal together.

## SEO

Everything from the legacy static site is carried over and extended:

- Title, description and the full 540 term keyword list
- Canonical, robots, author, language, coverage, distribution, rating and revisit-after
- Open Graph and Twitter card tags with a generated 1200x630 social image
- Geo tags: `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- Verification tags for Facebook domain, Bing Webmaster Tools and Yandex
- JSON-LD graph: `Dentist`, `MedicalOrganization`, `WebSite`, `BreadcrumbList`, `FAQPage`, `Blog`
- `sitemap.xml`, `robots.txt` and a PWA manifest

The legacy structured data declared `@context: https://schema.com`, which is not a valid vocabulary. It is corrected to `https://schema.org` here.

## Legacy application proxy

The clinic management SPA at `/app` and its PHP API at `/backend` still run on the original cPanel host. `next.config.ts` rewrites those paths to `LEGACY_ORIGIN` so both keep working on the same domain after the DNS cutover. Set `LEGACY_ORIGIN` as an environment variable to point at a different origin.

## Booking flow

The appointment modal collects dentist, treatment, date and time, then hands off to WhatsApp with a prefilled message. Business rules match the legacy behaviour: minimum 12 hours notice, maximum 30 days ahead, slots between 09:00 and 21:00. Booking interactions push `booking_modal_open` and `appointment_request` events to the GTM data layer.

## Deployment

Pushes to `main` deploy to production on Vercel. No environment variables are required for a default build.
