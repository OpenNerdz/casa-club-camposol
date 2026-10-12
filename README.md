# Casa Club Camposol — website

Bilingual (English / Spanish) marketing site for **Casa Club Camposol**, the clubhouse, restaurant, bar and
events venue of Camposol Club de Golf (Calle Aljibe s/n, Urb. Camposol Sector C, Mazarrón, Murcia).

Built with [Astro 7](https://astro.build) (static output), [Tailwind CSS 4](https://tailwindcss.com),
[Leaflet](https://leafletjs.com) for the map and no client-side framework. Lighthouse-friendly: no tracking,
no cookies, no third-party requests until a map scrolls into view, self-hosted fonts, pre-sized WebP images,
structured data (schema.org Restaurant + GolfCourse), sitemap and hreflang tags.

> **Before going live** read [STAFF-REVIEW.md](STAFF-REVIEW.md): it lists every fact on the site that the
> team should confirm, and the few things that must be set up (contact form service, domain).

## Pages

| English | Spanish | Content |
| --- | --- | --- |
| `/` | `/es/` | Hero with today's line-up, weekly programme, restaurant, golf, reviews, private hire, map |
| `/restaurant/` | `/es/restaurant/` | Kitchen, a day at the clubhouse, menu highlights, booking & hours |
| `/golf/` | `/es/golf/` | Course, tees scorecard, facilities, green fees, booking, societies |
| `/events/` | `/es/events/` | Weekly programme, dated highlights, private hire, community |
| `/gallery/` | `/es/gallery/` | Filterable photo gallery with lightbox |
| `/contact/` | `/es/contact/` | Contact cards, map, hours, directions, enquiry form |
| `/legal/`, `/privacy/` | `/es/legal/`, `/es/privacy/` | Aviso legal, privacy & cookies |

## Editing content (no coding needed beyond text)

- **Business facts** (phones, email, address, hours, social links, green fees, tee data):
  `src/data/site.ts`. Everything on the site reads from here.
- **Weekly programme** (quiz nights, Fry Day, carvery…): `src/data/programme.ts`. It feeds the home and
  What's On timetables and the "Today at Casa Club" card, which picks today's row in Spanish time.
- **One-off highlights** (tribute nights, Christmas lunch): `src/content/events.ts`. Give each a `date:
  'YYYY-MM-DD'`; it disappears from the page the day after, even before the next rebuild.
- **Page copy** in both languages: `src/content/*.ts` (`home`, `restaurant`, `golf`, `events`, `gallery`,
  `contact`, `legal`). In headlines, `*word*` sets that word in the italic accent.
- **Navigation / button / form / dialog labels**: `src/i18n/ui.ts`.
- **Photos**: drop originals in `source/photos/`, then edit the mapping in `scripts/images.sh` and run
  `npm run images` (needs ffmpeg; also rebuilds the 600 px gallery thumbnails). The gallery list with
  captions lives in `src/data/images.ts`; categories for the filter come from the file names.
- **Colours & fonts**: `src/styles/global.css` (`@theme` block). Logo mark: `public/images/logo-mark.svg`.

## Design

The look is taken from the clubhouse itself: pine-green fairways, the terracotta terrace tiles, the ochre
roof trim and lime-washed walls. Photos sit in arch frames that echo the terrace colonnade. Type is
[Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) for headlines (one weight, with an
italic accent) and [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) for text, both
self-hosted through Fontsource so no visitor data goes to Google.

Building blocks in `src/components/`: `PageHero`, `Section`/`SectionHeading`, `Timetable`, `TodayCard`,
`Testimonials`, `CheckList`, `HoursList`, `MapLeaflet` (loads on scroll), `ContactForm`, `Lightbox`, plus
site-wide `Header`, `Footer`, `BookDialog` (the "Book a table" sheet: WhatsApp with a pre-filled message,
call, or enquiry form) and `MobileBar` (call / WhatsApp / directions on phones).
- **Public domain**: `src/data/site-url.mjs` (used for canonical URLs, sitemap, Open Graph).

## Contact form

The form posts JSON to `site.formEndpoint`. Leave it empty and the form opens the visitor's email app
instead. Links can preselect the enquiry type with `?type=table|event|golf|other`. To receive enquiries by email without a server, create a free endpoint at
[Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io) and paste the URL into
`src/data/site.ts`. Spam is filtered by a honeypot field.

## Develop & build

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve dist/ locally
npm run build:preview   # dist-preview/ with relative links (for sub-path hosting / review uploads)
```

Node 22 or newer. On Termux/Android, Astro's Markdown engine has no native binary: after `npm install`, run
`npm install --no-save --force @bruits/satteri-wasm32-wasi@<satteri version>` (the postinstall message prints the
exact command) and then `node scripts/postinstall.mjs`, which patches its WASI loader for Android. Any later
`npm install` removes that package again, so repeat both steps after adding dependencies.

## Deploy

- **Vercel** (recommended): import the repo, framework "Astro", defaults work; `vercel.json` adds caching
  and security headers. Point `casaclubcamposolgolf.com` at Vercel in the registrar.
- **GitHub Pages (staging, live now)**: `.github/workflows/deploy-pages.yml` builds on every push to `main`
  and publishes to https://opennerdz.github.io/casa-club-camposol/ with a `noindex` tag, so staff can review
  the site on any device. The build sets `BASE_PATH` so links work under the sub-path.
- Any static host (Netlify, Cloudflare Pages, cPanel): upload the contents of `dist/`.

## Credits

Photos are the venue's own, collected from Casa Club Camposol / Camposol Golf Facebook, Instagram and
camposolgolf.com; sources and rights notes per file are in `source/photos/CREDITS.md`. Map imagery © Esri,
Maxar, Earthstar Geographics; street map © OpenStreetMap contributors. Fonts: Instrument Serif and
Instrument Sans (SIL Open Font License), self-hosted via Fontsource.
