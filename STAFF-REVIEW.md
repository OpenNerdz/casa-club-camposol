# Staff review checklist — Casa Club Camposol website

This site was built from public information (listings, Facebook posts, press, company registry) and the
venue's own published photos. Nothing here has been confirmed by the business yet. Please go through the
list, correct anything that is wrong in `src/data/site.ts` or `src/content/*.ts`, and tick the box.

Where to look on the site: `/` home, `/restaurant/`, `/golf/`, `/events/`, `/gallery/`, `/contact/`,
`/legal/`, `/privacy/` (Spanish versions under `/es/`).

## 1. Must do before launch

- [ ] **Contact form delivery**: set `formEndpoint` in `src/data/site.ts` (Web3Forms / Formspree endpoint).
      Until then the form opens the visitor's email app addressed to eventos@casaclubcamposolgolf.com.
- [ ] **Domain**: the site assumes `https://casaclubcamposolgolf.com` (registered Nov 2024, currently an empty
      Squarespace placeholder). Update `src/data/site-url.mjs` if a different domain will be used.
- [ ] **Photos**: all photos are the venue's own (Casa Club Camposol and Camposol Golf Facebook/Instagram,
      camposolgolf.com). Confirm the golf club is happy for its course photos to be used here. Several terrace
      and dining-room photos show identifiable customers; confirm you are comfortable publishing them (they
      were already public on your own pages). Higher-resolution originals of the terrace/bar/live-music photos
      would improve the hero images: the current ones are 720 px reel covers.
- [ ] **Legal pages**: company data (Casa Club Camposol Golf S.L., CIF B19345867, Registro Mercantil de Murcia
      Hoja MU-114423, Calle Aljibe s/n) comes from the public registry extract. Have the privacy policy checked
      by your gestoría / legal adviser.
- [ ] **Menu highlights** on `/restaurant/` are representative dishes, not your actual menu. Replace with real
      dishes (and optionally prices) in `src/content/restaurant.ts`, or link a PDF menu.

## 2. Facts to confirm (source in brackets)

### Contact
- [ ] Casa Club bookings / WhatsApp: **+34 602 42 01 67** (your sign and Facebook).
- [ ] Golf office: **+34 968 978 886** (golf directories). Older numbers 968 018 268 / 692 656 652 are not shown.
- [ ] Email: **eventos@casaclubcamposolgolf.com** (Facebook). Golf email shown nowhere yet:
      info@camposolclubdegolf.com (old domain, listed on hole19) — add a current one in `site.ts` if wanted.
- [ ] Address: Calle Aljibe s/n, Urb. Camposol Sector C, **30875** Mazarrón (Facebook) — some listings say 30870.
- [ ] Map pin: 37.670098, −1.354977 (Google listing). Check it sits on the clubhouse.
- [ ] Social links: facebook.com/theclubhouse.camposol, facebook.com/CamposolClubDeGolf,
      instagram.com/casaclubcamposol, tiktok @casa.club.camposo, instagram.com/camposolgolfacademy.
- [ ] Online tee booking: https://eu.golfmanager.com/camposol.

### Opening hours (shown in footer, contact and restaurant pages)
- [ ] Bar & terrace daily from 08:00; kitchen 08:00–16:00; open late on event nights; golf office daily
      08:00–16:00. Google/Tripadvisor list 08:00–16:00 only; evening events run to 21:00+, so please give the
      real bar and kitchen hours (summer/winter if they differ).

### Weekly programme (home + events pages)
- [ ] Quiz nights Monday and Thursday 19:30.
- [ ] Funky Orange daytime disco every other Tuesday.
- [ ] Menú del día on weekdays (price seen: €10 in a March 2026 review — not shown on the site).
- [ ] Fry Day fish & chips on Fridays; bingo Friday 15:30; live music Friday 16:30–18:00.
- [ ] Saturday "tribute nights & karaoke" is a generalisation — adjust to the real pattern.
- [ ] Sunday carvery, booking recommended.

### Upcoming highlights (events page)
- [ ] The Jersey Boys tribute, 31 Oct 2026 (camposolhub listing).
- [ ] Christmas Day lunch 25 Dec 2026, 3 courses + cava, €65 pp, booking via WhatsApp (camposolhub).
- [ ] Summer terrace BBQ nights.
- [ ] Community: Age Concern lunches/fairs, FMA fundraisers, monthly Bereavement Café, Kids Got Talent,
      Camposol Golf Association Monday competitions (murciatoday / camposolhub).

### Restaurant
- [ ] Breakfast from 08:00 (full English, tostadas), weekday menú del día, Friday fish & chips, Sunday
      carvery, private function room, large terrace. Dietary note: "tell us about allergies".
- [ ] Group bookings: "book ahead for Sunday carvery, groups of six or more, and event nights".

### Golf
- [ ] 18 holes, par 72, designer Manuel Quesada Mendiola, opened 2002 (9 holes), 18 holes by 2004.
- [ ] Tees: White 5,895 m (CR 71.9, slope 136); Yellow 5,674 m; Blue 5,470 m par 73; Red 5,270 m par 73
      (GolfPass). Fill in missing ratings in `site.golf.tees` if you have them.
- [ ] Green fees shown as "from": 18 holes €40, 9 holes €25, buggy €20 (2025–26 listings). Twilight,
      resident and society rates are not shown — add if wanted.
- [ ] Max handicap 54, soft spikes, handicap certificate required, booking essential at weekends.
- [ ] Facilities: refurbished driving range, putting/chipping greens, 18-hole crazy golf, academy with
      PGA professional (Camposol Golf Academy), buggy/trolley/club hire, pro shop, changing rooms & lockers.
- [ ] "Signature 7th par 4 over water" and "tougher back nine" come from directory descriptions.
- [ ] Camposol Golf Association plays Mondays, welcomes new members (murciatoday).

### Reviews quoted on the home page (lightly edited for length)
- [ ] Google (Feb 2026): "The new owners are a credit to the course… Sunday carvery well worth it."
- [ ] Tripadvisor (May 2025): "Club house is top notch, not the usual stuffy location, cheap drinks,
      entertainment in the evenings."
- [ ] Golfshake (2025–26): "excellent clubhouse providing good food and drinks selection", "much improved".
  Replace with your own testimonials if preferred.

### Getting here (contact page)
- [ ] RM-3 Mazarrón–Alhama road, follow signs to Camposol then Sector C, end of Calle Aljibe, free parking,
      step-free terrace access. Travel times: Mazarrón 10 min, Puerto de Mazarrón 15 min, Corvera airport
      30 min, Alicante airport 80 min (regional guides).

## 3. Nice to have later
- Real menu PDF or priced menu; photos of dishes (none were found online).
- A proper logo file (SVG/PNG) — the site uses a drawn sun-and-flag mark matching your round badge; swap
  `public/images/logo-mark.svg` for your artwork.
- Short video of the terrace (the Instagram reel found online belongs to @levantelovesgolf and was not used).
- Google Business Profile: rename "The Club House" to "Casa Club Camposol" and add the website URL.
- Optional cookieless analytics (e.g. Plausible) — add the script in `src/layouts/Base.astro` and mention it
  in the privacy page.
