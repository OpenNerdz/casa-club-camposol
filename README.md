# Casa Club Camposol — website

Bilingual (English / Spanish) marketing site for **Casa Club Camposol**, the clubhouse, restaurant, bar and
events venue of Camposol Club de Golf (Calle Aljibe s/n, Urb. Camposol Sector C, Mazarrón, Murcia).

Built with [Astro 7](https://astro.build) (static output), [Tailwind CSS 4](https://tailwindcss.com),
[Leaflet](https://leafletjs.com) for the map and no client-side framework. Lighthouse-friendly: no tracking,
no cookies, pre-sized WebP images, structured data (schema.org Restaurant + GolfCourse), sitemap and
hreflang tags.

> **Before going live** read [STAFF-REVIEW.md](STAFF-REVIEW.md): it lists every fact on the site that the
> team should confirm, and the few things that must be set up (contact form service, domain).

## Pages

| English | Spanish | Content |
| --- | --- | --- |
| `/` | `/es/` | Hero, weekly programme, restaurant, golf, reviews, private hire, map |
| `/restaurant/` | `/es/restaurant/` | Kitchen, a day at the clubhouse, menu highlights, booking, hours |
| `/golf/` | `/es/golf/` | Course, tees table, facilities, green fees, societies, booking |
| `/events/` | `/es/events/` | Weekly programme, highlights, private hire, community |
| `/gallery/` | `/es/gallery/` | Photo gallery with lightbox |
| `/contact/` | `/es/contact/` | Contact cards, map, hours, directions, enquiry form |
| `/legal/`, `/privacy/` | `/es/legal/`, `/es/privacy/` | Aviso legal, privacy & cookies |

## Editing content (no coding needed beyond text)

- **Business facts** (phones, email, address, hours, social links, green fees, tee data):
  `src/data/site.ts`. Everything on the site reads from here.
- **Page copy** in both languages: `src/content/*.ts` (`home`, `restaurant`, `golf`, `events`, `contact`, `legal`).
- **Navigation / button / form labels**: `src/i18n/ui.ts`.
- **Photos**: drop originals in `source/photos/`, then edit the mapping in `scripts/images.sh` and run
  `npm run images` (needs ffmpeg). The gallery list with captions lives in `src/data/images.ts`.
- **Colours & fonts**: `src/styles/global.css` (`@theme` block). Logo mark: `public/images/logo-mark.svg`.
- **Public domain**: `src/data/site-url.mjs` (used for canonical URLs, sitemap, Open Graph).

## Contact form

The form posts JSON to `site.formEndpoint`. Leave it empty and the form opens the visitor's email app
instead. To receive enquiries by email without a server, create a free endpoint at
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

Node 22 or newer. On Termux/Android `npm install` applies a small patch so Astro's Markdown engine runs
through its WASI build (see `scripts/postinstall.mjs`); run the WASI package install it prints if needed.

## Deploy

- **Vercel** (recommended): import the repo, framework "Astro", defaults work; `vercel.json` adds caching
  and security headers. Point `casaclubcamposolgolf.com` at Vercel in the registrar.
- **GitHub Pages**: `.github/workflows/deploy-pages.yml` builds on every push to `main`.
- Any static host (Netlify, Cloudflare Pages, cPanel): upload the contents of `dist/`.

## Credits

Photos are the venue's own, collected from Casa Club Camposol / Camposol Golf Facebook, Instagram and
camposolgolf.com; sources and rights notes per file are in `source/photos/CREDITS.md`. Map imagery © Esri,
Maxar, Earthstar Geographics; street map © OpenStreetMap contributors. Fonts: Fraunces and Manrope
(Google Fonts).
