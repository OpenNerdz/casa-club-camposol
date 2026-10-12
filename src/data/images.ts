/**
 * Image manifest. Paths are under /public. All photos are the venue's own
 * (Casa Club Camposol / Camposol Golf Facebook, Instagram and camposolgolf.com);
 * see source/photos/CREDITS.md for sources. Regenerate with: bash scripts/images.sh
 */
const b = import.meta.env.BASE_URL.replace(/\/$/, '');

export const img = {
  hero: `${b}/images/hero.webp`,
  heroGolf: `${b}/images/hero-golf.webp`,
  heroEvents: `${b}/images/hero-events.webp`,
  terrace: `${b}/images/terrace.webp`,
  bar: `${b}/images/bar.webp`,
  restaurant: `${b}/images/restaurant.webp`,
  food: `${b}/images/food.webp`,
  course: `${b}/images/course.webp`,
  course2: `${b}/images/course-2.webp`,
  range: `${b}/images/range.webp`,
  buggies: `${b}/images/buggies.webp`,
  events: `${b}/images/events.webp`,
  exterior: `${b}/images/exterior.webp`,
  golfPortrait: `${b}/images/golf-portrait.webp`,
  functionRoom: `${b}/images/gallery/event-dance-floor-indoor-01.webp`,
  og: `${b}/images/og-default.jpg`,
} as const;

export type GalleryCategory = 'club' | 'events' | 'golf';
export interface GalleryImage { src: string; thumb: string; w: number; h: number; cat: GalleryCategory; alt: { en: string; es: string } }

// Grid thumbnails (600 px wide) live in gallery/thumb/; the lightbox opens the full-size file.
const raw: Omit<GalleryImage, 'thumb' | 'cat'>[] = [
  { src: `${b}/images/gallery/terrace-tables-colonnade-01.webp`, w: 720, h: 1280, alt: { en: "Diners on the terrace colonnade with the golf course beyond", es: "Comensales en la terraza porticada con el campo de golf al fondo" } },
  { src: `${b}/images/gallery/terrace-arcade-tables-01.webp`, w: 720, h: 1280, alt: { en: "Tables under the white pergola on the terrace", es: "Mesas bajo la pérgola blanca de la terraza" } },
  { src: `${b}/images/gallery/terrace-guests-colonnade-01.webp`, w: 720, h: 1280, alt: { en: "Guests enjoying drinks in the sun on the terrace", es: "Clientes tomando algo al sol en la terraza" } },
  { src: `${b}/images/gallery/terrace-sunset-palm-01.webp`, w: 720, h: 1280, alt: { en: "Sunset over the course from the terrace", es: "Atardecer sobre el campo desde la terraza" } },
  { src: `${b}/images/gallery/terrace-dusk-view-01.webp`, w: 720, h: 1280, alt: { en: "Dusk view from the terrace towards the hills", es: "Vista al anochecer desde la terraza hacia las sierras" } },
  { src: `${b}/images/gallery/restaurant-diners-01.webp`, w: 720, h: 1280, alt: { en: "Friends dining in the restaurant", es: "Amigos comiendo en el restaurante" } },
  { src: `${b}/images/gallery/restaurant-interior-crowd-01.webp`, w: 720, h: 1280, alt: { en: "A full dining room on a busy evening", es: "Comedor lleno en una noche animada" } },
  { src: `${b}/images/gallery/live-music-gazebo-day-01.webp`, w: 720, h: 1280, alt: { en: "Live music on the terrace stage by day", es: "Música en vivo en el escenario de la terraza de día" } },
  { src: `${b}/images/gallery/live-music-gazebo-night-01.webp`, w: 720, h: 1280, alt: { en: "The terrace stage lit up at night", es: "El escenario de la terraza iluminado de noche" } },
  { src: `${b}/images/gallery/live-music-terrace-crowd-01.webp`, w: 720, h: 1280, alt: { en: "The terrace crowd at a Friday live-music session", es: "El público de la terraza en una sesión de música en vivo del viernes" } },
  { src: `${b}/images/gallery/live-music-terrace-singer-01.webp`, w: 720, h: 1280, alt: { en: "A singer performing on the terrace", es: "Un cantante actuando en la terraza" } },
  { src: `${b}/images/gallery/event-dance-floor-indoor-01.webp`, w: 720, h: 1280, alt: { en: "Dancing in the function room", es: "Baile en el salón de eventos" } },
  { src: `${b}/images/gallery/event-dancing-night-01.webp`, w: 720, h: 1280, alt: { en: "Guests dancing under the lights at a night event", es: "Clientes bailando bajo las luces en un evento nocturno" } },
  { src: `${b}/images/gallery/golf-course-lake-panorama-01.webp`, w: 1400, h: 934, alt: { en: "The lake and fairways of Camposol Club de Golf", es: "El lago y las calles del Camposol Club de Golf" } },
  { src: `${b}/images/gallery/golf-course-lake-tee-01.webp`, w: 1400, h: 934, alt: { en: "Teeing off beside the lake", es: "Salida junto al lago" } },
  { src: `${b}/images/gallery/golf-entrance-sign-course-01.webp`, w: 1400, h: 934, alt: { en: "The Casa Club sign beside the bunkers and palms", es: "El cartel de Casa Club junto a los búnkeres y las palmeras" } },
  { src: `${b}/images/gallery/golf-green-flag-mountains-01.webp`, w: 1400, h: 2100, alt: { en: "A green with the Sierra de las Moreras behind", es: "Un green con la Sierra de las Moreras al fondo" } },
  { src: `${b}/images/gallery/golf-green-palms-mountains-01.webp`, w: 720, h: 960, alt: { en: "Palms, green and mountains", es: "Palmeras, green y montañas" } },
  { src: `${b}/images/gallery/golf-course-golfers-buggy-01.webp`, w: 1400, h: 2100, alt: { en: "Golfers heading up the fairway with a buggy", es: "Golfistas subiendo por la calle con un buggy" } },
  { src: `${b}/images/gallery/golf-buggies-bags-01.webp`, w: 1400, h: 2100, alt: { en: "Bags on a buggy overlooking the lake", es: "Bolsas en un buggy con vistas al lago" } },
  { src: `${b}/images/gallery/golf-club-closeup-01.webp`, w: 1400, h: 2100, alt: { en: "Iron and ball on the fairway", es: "Hierro y bola en la calle" } },
  { src: `${b}/images/gallery/driving-range-bays-01.webp`, w: 1400, h: 2100, alt: { en: "The refurbished driving range", es: "El campo de prácticas renovado" } },
  { src: `${b}/images/gallery/clubhouse-exterior-buggies-01.webp`, w: 1400, h: 646, alt: { en: "Buggies lined up outside the clubhouse", es: "Buggies alineados frente a la casa club" } },
  { src: `${b}/images/gallery/golf-course-buggy-camposol-view-01.webp`, w: 720, h: 1280, alt: { en: "A buggy on the course with Camposol in the distance", es: "Un buggy en el campo con Camposol al fondo" } },
];

const category = (src: string): GalleryCategory =>
  /live-music|event-/.test(src) ? 'events' : /golf-|driving-range/.test(src) ? 'golf' : 'club';

export const gallery: GalleryImage[] = raw.map((g) => ({
  ...g,
  thumb: g.src.replace('/gallery/', '/gallery/thumb/'),
  cat: category(g.src),
}));
