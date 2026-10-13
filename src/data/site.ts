/**
 * Single source of truth for the business facts shown across the site.
 * Staff: edit values here (phone numbers, hours, links) and rebuild.
 * Items marked CONFIRM were taken from public listings and should be checked.
 */
export const site = {
  name: 'Casa Club Camposol',
  legalName: 'Casa Club Camposol Golf S.L.',
  cif: 'B19345867', // CONFIRM
  registry: 'Registro Mercantil de Murcia, Hoja MU-114423', // CONFIRM

  // Casa Club (restaurant, bar, events) — bookings & WhatsApp
  phoneDisplay: '+34 602 42 01 67',
  phoneHref: 'tel:+34602420167',
  whatsappHref: 'https://wa.me/34602420167',
  /** Pre-filled WhatsApp booking message, so guests only fill in the blanks. */
  whatsappBooking: {
    en: "Hello Casa Club! I'd like to book a table.\nName:\nDate:\nTime:\nNumber of people:",
    es: '¡Hola Casa Club! Quería reservar una mesa.\nNombre:\nFecha:\nHora:\nNúmero de personas:',
  },
  // Golf office / tee times: the number on the golf club's own Facebook and Instagram pages
  golfPhoneDisplay: '+34 624 41 38 01',
  golfPhoneHref: 'tel:+34624413801',
  // Older landline, still listed by golf directories. CONFIRM it is answered, or delete it.
  golfLandlineDisplay: '+34 968 97 88 86',
  golfLandlineHref: 'tel:+34968978886',
  email: 'eventos@casaclubcamposolgolf.com',
  // Golf club email as shown on its Facebook page (its Instagram shows info@camposolgolfclub.com). CONFIRM.
  golfEmail: 'info@casaclubcamposolgolf.com',
  // Camposol Golf Academy (PGA professional Jerónimo Janssens Koster), from the academy's Facebook page
  academyPhoneDisplay: '+34 604 81 82 05',
  academyPhoneHref: 'tel:+34604818205',
  teeTimeUrl: 'https://eu.golfmanager.com/camposol',

  /** Optional form service endpoint: a Formspree URL (https://formspree.io/f/…) or
   *  https://api.web3forms.com/submit together with formAccessKey below.
   *  Leave empty to fall back to the visitor's email app. */
  formEndpoint: '',
  /** Web3Forms only: the public access key from web3forms.com (sent with each enquiry). */
  formAccessKey: '',

  address: {
    lines: ['Calle Aljibe s/n', 'Urb. Camposol, Sector C', '30875 Mazarrón, Murcia'],
    countryName: { en: 'Spain', es: 'España' },
    street: 'Calle Aljibe s/n, Urb. Camposol Sector C',
    locality: 'Mazarrón',
    region: 'Región de Murcia',
    postcode: '30875', // CONFIRM: 30870 also appears in listings
    country: 'ES',
  },
  geo: { lat: 37.670098, lng: -1.354977 },
  // Opens the Google listing; directionsUrl starts turn-by-turn navigation to the pin.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Casa%20Club%20Camposol%2C%20Calle%20Aljibe%2C%20Mazarr%C3%B3n',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=37.670098%2C-1.354977',
  social: {
    facebook: 'https://www.facebook.com/theclubhouse.camposol/',
    facebookGolf: 'https://www.facebook.com/CamposolClubDeGolf/',
    instagram: 'https://www.instagram.com/casaclubcamposol/',
    // CONFIRM, not shown on the site yet
    tiktok: 'https://www.tiktok.com/@casa.club.camposo',
    instagramAcademy: 'https://www.instagram.com/camposolgolfacademy/',
  },

  // Opening hours shown in the footer, restaurant and contact pages. Thursday kitchen time from Euro Weekly
  // News (Aug 2026); no current closing times are published anywhere. CONFIRM with the team.
  hours: {
    en: [
      { label: 'Bar & terrace', value: 'Daily from 08:00' },
      { label: 'Kitchen', value: 'From 08:00' },
      { label: 'Thursday quiz', value: 'Full menu from 18:00' },
      { label: 'Event nights', value: 'Open late' },
      { label: 'Golf office', value: 'Daily from 08:00' },
    ],
    es: [
      { label: 'Bar y terraza', value: 'A diario desde las 8:00' },
      { label: 'Cocina', value: 'Desde las 8:00' },
      { label: 'Quiz de los jueves', value: 'Carta desde las 18:00' },
      { label: 'Noches de eventos', value: 'Hasta tarde' },
      { label: 'Oficina de golf', value: 'A diario desde las 8:00' },
    ],
  },

  // Schema.org opening hours for search engines, e.g. ['Mo-Su 08:00-23:00']. Left empty until the
  // real closing times are confirmed: a wrong value here would show the bar as closed on quiz nights.
  openingHours: [] as string[],

  golf: {
    holes: 18,
    par: 72,
    designer: 'Manuel Quesada Mendiola',
    // Lengths, course and slope ratings as listed on 1golf.eu (matches AllSquare and Golfify). CONFIRM.
    tees: [
      { name: 'White', es: 'Blancas', metres: 5895, par: 72, cr: 72.0, slope: 129 },
      { name: 'Yellow', es: 'Amarillas', metres: 5674, par: 72, cr: 70.9, slope: 126 },
      { name: 'Blue', es: 'Azules', metres: 5484, par: 73, cr: 75.4, slope: 136 },
      { name: 'Red', es: 'Rojas', metres: 5270, par: 73, cr: 74.1, slope: 134 },
    ],
    // "From" prices paid by visitors in 2025–26 (Golfshake Jan 2026: €35 walk-on; 1golf: 9 holes €22;
    // buggy €20). No official price list is published. CONFIRM before publishing.
    fees: [
      { key: '18', eur: 35 },
      { key: '9', eur: 22 },
      { key: 'buggy', eur: 20 },
    ],
  },
} as const;

export type Site = typeof site;

/** An email address as HTML that may only wrap after the "@" or before the domain ending. */
export const breakable = (email: string) => email.replace('@', '@<wbr>').replace(/\.(?=[^.]+$)/, '<wbr>.');

/** WhatsApp link with the booking template pre-filled in the visitor's language. */
export const whatsappBookingHref = (lang: 'en' | 'es') =>
  `${site.whatsappHref}?text=${encodeURIComponent(site.whatsappBooking[lang])}`;
