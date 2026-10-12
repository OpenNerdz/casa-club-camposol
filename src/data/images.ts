/**
 * Image manifest. Paths are under /public. All photos are the venue's own
 * (Casa Club Camposol / Camposol Golf Facebook, Instagram and camposolgolf.com);
 * see source/photos/CREDITS.md for sources. Regenerate with: bash scripts/images.sh
 */
export const img = {
  hero: '/images/hero.webp',
  heroGolf: '/images/hero-golf.webp',
  heroEvents: '/images/hero-events.webp',
  terrace: '/images/terrace.webp',
  bar: '/images/bar.webp',
  restaurant: '/images/restaurant.webp',
  food: '/images/food.webp',
  course: '/images/course.webp',
  course2: '/images/course-2.webp',
  range: '/images/range.webp',
  buggies: '/images/buggies.webp',
  events: '/images/events.webp',
  exterior: '/images/exterior.webp',
  og: '/images/og-default.jpg',
} as const;

export const gallery: { src: string; w: number; h: number; alt: { en: string; es: string } }[] = [
  { src: '/images/gallery/terrace-tables-colonnade-01.webp', w: 720, h: 1280, alt: { en: "Diners on the terrace colonnade with the golf course beyond", es: "Comensales en la terraza porticada con el campo de golf al fondo" } },
  { src: '/images/gallery/terrace-arcade-tables-01.webp', w: 720, h: 1280, alt: { en: "Tables under the white pergola on the terrace", es: "Mesas bajo la pérgola blanca de la terraza" } },
  { src: '/images/gallery/terrace-guests-colonnade-01.webp', w: 720, h: 1280, alt: { en: "Guests enjoying drinks in the sun on the terrace", es: "Clientes tomando algo al sol en la terraza" } },
  { src: '/images/gallery/terrace-sunset-palm-01.webp', w: 720, h: 1280, alt: { en: "Sunset over the course from the terrace", es: "Atardecer sobre el campo desde la terraza" } },
  { src: '/images/gallery/terrace-dusk-view-01.webp', w: 720, h: 1280, alt: { en: "Dusk view from the terrace towards the hills", es: "Vista al anochecer desde la terraza hacia las sierras" } },
  { src: '/images/gallery/restaurant-diners-01.webp', w: 720, h: 1280, alt: { en: "Friends dining in the restaurant", es: "Amigos comiendo en el restaurante" } },
  { src: '/images/gallery/restaurant-interior-crowd-01.webp', w: 720, h: 1280, alt: { en: "A full dining room on a busy evening", es: "Comedor lleno en una noche animada" } },
  { src: '/images/gallery/live-music-gazebo-day-01.webp', w: 720, h: 1280, alt: { en: "Live music on the terrace stage by day", es: "Música en vivo en el escenario de la terraza de día" } },
  { src: '/images/gallery/live-music-gazebo-night-01.webp', w: 720, h: 1280, alt: { en: "The terrace stage lit up at night", es: "El escenario de la terraza iluminado de noche" } },
  { src: '/images/gallery/live-music-terrace-crowd-01.webp', w: 720, h: 1280, alt: { en: "The terrace crowd at a Friday live-music session", es: "El público de la terraza en una sesión de música en vivo del viernes" } },
  { src: '/images/gallery/live-music-terrace-singer-01.webp', w: 720, h: 1280, alt: { en: "A singer performing on the terrace", es: "Un cantante actuando en la terraza" } },
  { src: '/images/gallery/event-dance-floor-indoor-01.webp', w: 720, h: 1280, alt: { en: "Dancing in the function room", es: "Baile en el salón de eventos" } },
  { src: '/images/gallery/event-dancing-night-01.webp', w: 720, h: 1280, alt: { en: "Guests dancing under the lights at a night event", es: "Clientes bailando bajo las luces en un evento nocturno" } },
  { src: '/images/gallery/golf-course-lake-panorama-01.webp', w: 1400, h: 934, alt: { en: "The lake and fairways of Camposol Club de Golf", es: "El lago y las calles del Camposol Club de Golf" } },
  { src: '/images/gallery/golf-course-lake-tee-01.webp', w: 1400, h: 934, alt: { en: "Teeing off beside the lake", es: "Salida junto al lago" } },
  { src: '/images/gallery/golf-entrance-sign-course-01.webp', w: 1400, h: 934, alt: { en: "The Casa Club sign beside the bunkers and palms", es: "El cartel de Casa Club junto a los búnkeres y las palmeras" } },
  { src: '/images/gallery/golf-green-flag-mountains-01.webp', w: 1400, h: 2100, alt: { en: "A green with the Sierra de las Moreras behind", es: "Un green con la Sierra de las Moreras al fondo" } },
  { src: '/images/gallery/golf-green-palms-mountains-01.webp', w: 720, h: 960, alt: { en: "Palms, green and mountains", es: "Palmeras, green y montañas" } },
  { src: '/images/gallery/golf-course-golfers-buggy-01.webp', w: 1400, h: 2100, alt: { en: "Golfers heading up the fairway with a buggy", es: "Golfistas subiendo por la calle con un buggy" } },
  { src: '/images/gallery/golf-buggies-bags-01.webp', w: 1400, h: 2100, alt: { en: "Bags on a buggy overlooking the lake", es: "Bolsas en un buggy con vistas al lago" } },
  { src: '/images/gallery/golf-club-closeup-01.webp', w: 1400, h: 2100, alt: { en: "Iron and ball on the fairway", es: "Hierro y bola en la calle" } },
  { src: '/images/gallery/driving-range-bays-01.webp', w: 1400, h: 2100, alt: { en: "The refurbished driving range", es: "El campo de prácticas renovado" } },
  { src: '/images/gallery/clubhouse-exterior-buggies-01.webp', w: 1400, h: 646, alt: { en: "Buggies lined up outside the clubhouse", es: "Buggies alineados frente a la casa club" } },
  { src: '/images/gallery/golf-course-buggy-camposol-view-01.webp', w: 720, h: 1280, alt: { en: "A buggy on the course with Camposol in the distance", es: "Un buggy en el campo con Camposol al fondo" } },
];
