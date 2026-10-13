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
  // Golf office / tee times
  golfPhoneDisplay: '+34 968 978 886', // CONFIRM
  golfPhoneHref: 'tel:+34968978886',
  // The golf club's mobile, listed on its own website and social pages. CONFIRM.
  golfMobileDisplay: '+34 624 41 38 01',
  golfMobileHref: 'tel:+34624413801',
  email: 'eventos@casaclubcamposolgolf.com',
  golfEmail: 'info@camposolclubdegolf.com', // CONFIRM (old domain), not shown on the site yet
  teeTimeUrl: 'https://eu.golfmanager.com/camposol',

  /** Optional form service endpoint: a Formspree URL (https://formspree.io/f/…) or
   *  https://api.web3forms.com/submit together with formAccessKey below.
   *  Leave empty to fall back to the visitor's email app. */
  formEndpoint: '',
  /** Web3Forms only: the public access key from web3forms.com (sent with each enquiry). */
  formAccessKey: '',

  address: {
    lines: ['Calle Aljibe s/n', 'Urb. Camposol, Sector C', '30875 Mazarrón, Murcia', 'España'],
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

  // Opening hours shown in the footer and contact page. CONFIRM with the team.
  hours: {
    en: [
      { label: 'Bar & terrace', value: 'Daily from 08:00' },
      { label: 'Kitchen', value: '08:00 – 16:00' },
      { label: 'Quiz & event nights', value: 'Open late' },
      { label: 'Golf office', value: 'Daily 08:00 – 16:00' },
    ],
    es: [
      { label: 'Bar y terraza', value: 'Todos los días desde las 8:00' },
      { label: 'Cocina', value: '8:00 – 16:00' },
      { label: 'Noches de quiz y eventos', value: 'Abierto hasta tarde' },
      { label: 'Oficina de golf', value: 'Todos los días 8:00 – 16:00' },
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
    // Indicative prices from 2025–26 listings and reviews (18 holes €35–40). CONFIRM before publishing.
    fees: [
      { key: '18', eur: 40 },
      { key: '9', eur: 25 },
      { key: 'buggy', eur: 20 },
    ],
  },
} as const;

export type Site = typeof site;

/** WhatsApp link with the booking template pre-filled in the visitor's language. */
export const whatsappBookingHref = (lang: 'en' | 'es') =>
  `${site.whatsappHref}?text=${encodeURIComponent(site.whatsappBooking[lang])}`;
