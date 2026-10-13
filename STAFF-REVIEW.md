# Staff review checklist — Casa Club Camposol website

This site was built from public information (listings, Facebook posts, press, company registry) and the
venue's own published photos. On 13 Oct 2026 every fact was re-checked against public sources; anything that
could not be backed up was corrected or removed (see "Changed after the fact-check" below). Nothing here has
been confirmed by the business yet. Please go through the list, correct anything that is wrong in
`src/data/site.ts`, `src/data/programme.ts` or `src/content/*.ts`, and tick the box.

Where to look on the site: `/` home, `/restaurant/`, `/golf/`, `/events/`, `/gallery/`, `/contact/`,
`/legal/`, `/privacy/` (Spanish versions under `/es/`).

## 1. Must do before launch

- [ ] **Contact form delivery**: in `src/data/site.ts` either paste a Formspree URL (`https://formspree.io/f/…`)
      into `formEndpoint`, or use Web3Forms: set `formEndpoint` to `https://api.web3forms.com/submit` **and**
      paste your Web3Forms access key into `formAccessKey`. Until then the form opens the visitor's email app
      addressed to eventos@casaclubcamposolgolf.com.
- [ ] **Domain**: the site assumes `https://casaclubcamposolgolf.com` (registered Nov 2024, currently an empty
      Squarespace placeholder). Update `src/data/site-url.mjs` if a different domain will be used.
- [ ] **Photos**: all photos are the venue's own (Casa Club Camposol and Camposol Golf Facebook/Instagram,
      camposolgolf.com). Confirm the golf club is happy for its course photos to be used here. Several terrace
      and dining-room photos show identifiable customers; confirm you are comfortable publishing them (they
      were already public on your own pages). Higher-resolution originals of the terrace/bar/live-music photos
      would improve the hero images: the current ones are 720 px reel covers.
- [ ] **Legal pages**: company name, NIF B19345867 and registered office (C/ Aljibe s/n, Urb. Camposol) are
      confirmed (BORME 17-09-2024, Iberinform). The registry sheet **Hoja MU-114423** could not be found in
      any public source: check it against your deeds and add tomo/folio if you have them (`registry` in
      `site.ts`). The privacy policy now covers processors, international transfers (US hosting/form/map
      providers) and withdrawing consent, and the form shows a short data-protection notice; still have it
      checked by your gestoría / legal adviser.
- [ ] **Menu**: the restaurant page no longer lists sample dishes (they were placeholders, not your menu). It
      now points visitors to the daily menu on Facebook. Add a real menu (a list or a PDF) when ready.
- [ ] **Opening hours for search engines**: fill `openingHours` in `src/data/site.ts` (for example
      `['Mo-Su 08:00-23:00']`) once you know your real closing times. It was removed because the old value
      (08:00–16:00) would have told Google you are closed on quiz nights.
- [ ] **Logo**: the site now uses your round badge (green ring, "CASA CLUB" / "CAMPOSOL GOLF", crossed irons),
      redrawn as a vector from the clubhouse sign and your Facebook cover. If you have the original artwork,
      replace `public/images/logo-mark.svg` (and `public/favicon.svg`, `public/apple-touch-icon.png`,
      `public/images/logo-512.png`) with it. The golf club's separate "Camposol Golf · Casa Club"
      sun-and-flag graphic is not used.

## 2. Facts to confirm (what public sources say, Oct 2026)

### Contact
- [ ] Casa Club bookings / WhatsApp **+34 602 42 01 67**: confirmed (your Facebook page and the clubhouse sign).
      An old line, +34 968 97 88 55, still appears on Tripadvisor and the old club website; ask them to update it.
- [ ] Golf office: **+34 624 41 38 01** is now the main golf number (it is the one on the golf club's own
      Facebook and Instagram). The landline **+34 968 978 886**, still listed by golf directories, is shown
      second on the contact page: delete `golfLandline…` in `site.ts` if it is no longer answered. The old
      numbers 968 018 268 / 692 656 652 are not used.
- [ ] Email **eventos@casaclubcamposolgolf.com**: confirmed (Facebook, Camposol Hub). Golf email shown:
      **info@casaclubcamposolgolf.com** (the golf club's Facebook page; its Instagram says info@camposolgolfclub.com).
- [ ] Golf academy: PGA professional **Jerónimo Janssens Koster**, lessons **+34 604 81 82 05** (the academy's
      Facebook page). "Junior coaching" comes from his website (Sundays 11:30–13:00, September to June, 2025).
      Lesson prices seen there (30 min €30, 50 min €50) are not shown.
- [ ] Address: Calle Aljibe s/n, Urb. Camposol Sector C, **30875** Mazarrón. Postcode directories give 30875 for
      Urbanización Camposol; 30870 (used by some golf directories) is Mazarrón town.
- [ ] Map pin 37.670098, −1.354977: matches the Google and Tripadvisor pins to within a few metres.
- [ ] Social links: facebook.com/theclubhouse.camposol and facebook.com/CamposolClubDeGolf are confirmed.
      instagram.com/casaclubcamposol is shown (a photo was taken from it on 12 Oct 2026) but search engines do
      not index it; check it is public. The TikTok
      handle noted earlier, `@casa.club.camposo`, looks like a typo and is not shown. The golf club's Instagram is
      @camposol.clubdegolf (not shown).
- [ ] Online tee booking https://eu.golfmanager.com/camposol: confirmed (linked from the golf Facebook page).

### Opening hours (footer, contact and restaurant pages)
- [ ] Shown: bar & terrace daily from 08:00; kitchen from 08:00; **Thursday quiz: full menu from 18:00** (Euro
      Weekly News, 23 Aug 2026); event nights open late; golf office daily from 08:00. The 08:00–16:00 hours on
      Tripadvisor/Google date from the previous operator ("The Club House"), so no closing times are shown.
      Please give the real hours, including summer and winter if they differ.

### Weekly programme (home + events pages, `src/data/programme.ts`)
- [ ] Quiz nights Monday and Thursday 19:30: confirmed (Euro Weekly News, Aug 2026; camposolhub). The What's On
      page names the quizmasters: Carl Thomas (Mondays, since 2009) and Paul Pryce (Thursdays).
- [ ] Funky Orange daytime disco: confirmed on Tuesdays (2024). It is shown as "selected weeks"; say which.
- [ ] Friday: fish & chips, bingo 15:30, live music 16:30–18:00. Confirmed (camposolhub, Oct 2026). Renamed
      from "Fry Day", which is another Camposol bar's branding.
- [ ] Saturday is now "Tribute & live music nights, selected Saturdays" (matches the Halloween, 14 Nov and
      19 Dec shows). Karaoke was removed because no source mentions it.
- [ ] Menú del día on weekdays: a choice of starters and mains with dessert or coffee (Camposol Today, Sept
      2025). €10 in a March 2026 review; the price is not shown on the site.
- [ ] Sunday carvery: confirmed. "Book ahead" note kept.

### Coming up (events page, `src/content/events.ts`)
- [ ] From your Facebook cover: **The Jersey Boys Experience** Halloween special (the poster gives no date, so the
      card says "Halloween" and disappears after 31 Oct; set the exact date in `events.ts` if you like), **Commitment Issues** (Sat 14 Nov, €15, bookings by WhatsApp with Venuvo Events on
      +34 604 52 22 87) and **The Troupers Swing Band** (Sat 19 Dec, 20:00, €7).
- [ ] Christmas Day lunch 25 Dec: the €65 / 3 courses + cava details seen earlier on camposolhub could not be found
      again, so the card now says "menu and price coming soon". Add the real menu and price in `events.ts`.
- [ ] Community: Age Concern and FMA events confirmed; Bereavement Café confirmed for 5 Oct 2026 ("monthly"
      removed); kids' talent show confirmed; Camposol Golf Association plays a nine-hole "Monday Mayhem".

### Restaurant
- [ ] Breakfast from 08:00 (full English, tostadas), weekday menú del día, Friday fish & chips, Sunday carvery,
      private function room, large terrace. Allergy note kept (EU rules require allergen information on request).

### Golf
- [ ] 18 holes, par 72, designed by Manuel Quesada Mendiola, originally opened as Sensol Golf. The opening year
      was removed because sources disagree (2002, 2003 or 2004). The stat now reads "7 days a week".
- [ ] Tees (1golf, AllSquare and Golfify agree): White 5,895 m, CR 72.0, slope 129; Yellow 5,674 m, CR 70.9,
      slope 126; Blue 5,484 m, par 73, CR 75.4, slope 136; Red 5,270 m, par 73, CR 74.1, slope 134. GolfPass
      gives slightly different figures (White 71.9 / 136).
- [ ] Green fees shown as "from" prices: 18 holes from €35 (Golfshake walk-on rate, Jan 2026), 9 holes from €22
      (1golf), buggy from €20. Other recent reports: €40 for 18 and €25 for 9. No official price list is
      published anywhere, so please give your current rates.
- [ ] Rules shown: handicap certificate required; advance booking essential; a small insurance supplement for
      players without a Spanish golf licence (€3 per Golfshake). The maximum handicap was removed because
      sources disagree (54 on 1golf, 28/36 on GolfInSpain). "Soft spikes only" was removed: no source mentions it.
- [ ] Course description rewritten from golfer reviews: open, flat front nine; tighter, hillier back nine with
      ravines; water on four holes; the 7th is a par 4 where long hitters can carry the lake. The previous
      "parkland" and "climbs away from the clubhouse" wording was not supported.
- [ ] Facilities shown: driving range with putting/chipping greens, **18-hole crazy golf** in front of the terrace
      (opened about April 2025, Costa Cálida forum), the academy, buggy hire, pro shop, Casa Club. **Driving
      range**: refurbished from May 2025; reports since conflict on whether it is open, so please confirm.
      Removed as unconfirmed (add back if true): "covered bays", trolley and club hire, changing rooms and lockers.
- [ ] Mountains: the copy now says "the Murcian sierras". The Sierra de las Moreras is near Bolnuevo, about
      8 km south, and is not the backdrop of the course.

### Reviews quoted on the home page
- [ ] Tripadvisor: quoted word for word ("Club house is top notch, not the usual stuffy location, cheap drinks,
      entertainment in the evenings"), written by Frank B., probably in June 2025.
- [ ] Golfshake: trimmed to the confirmed words ("…excellent clubhouse providing good food and drinks
      selection"). The "much improved" part could not be confirmed.
- [ ] The unverifiable Google quote was removed. In its place: a May 2025 Tripadvisor review ("Since the new
      Spanish owners have taken over… really turned things around. The food is fab."). Add your own favourite
      reviews in `src/content/home.ts` if you prefer.
- [ ] The Spanish versions are translations and are labelled "(traducida)".

### Getting here (contact page)
- [ ] The RM-3 is the **Totana–Mazarrón** road. The old text said "Mazarrón–Alhama", which was the old MU-603.
      Take the Camposol exit, then follow signs to Sector C. Free parking. Travel times: Mazarrón 10 min,
      Puerto de Mazarrón 15 min, Murcia airport (Corvera) 30 min, Alicante airport 80 min. "Step-free access"
      was removed as unconfirmed; add it back if the terrace and bar are wheelchair accessible.

### Photo captions
- [ ] The function-room photo shows a band performing, not guests dancing. The "restaurant interior" reel cover
      is the covered terrace at night. The "golfers with a buggy" photo shows electric trolleys. Captions have
      been fixed. The `driving-range-bays` photo is ambiguous (it could be a putting or bowls green), so its
      caption is now neutral and it is no longer used for the driving range.

## 3. Nice to have later
- Real menu PDF or priced menu; photos of dishes (none were found online).
- Short video of the terrace (the Instagram reel found online belongs to @levantelovesgolf and was not used).
- Google Business Profile: rename "The Club House" to "Casa Club Camposol", update the phone number and hours,
  and add the website URL.
- Optional cookieless analytics (e.g. Plausible): add the script in `src/layouts/Base.astro` and mention it
  in the privacy page.
