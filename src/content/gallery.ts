// Gallery page copy. The photo list itself lives in src/data/images.ts.
export const galleryPage = {
  en: {
    meta: { title: 'Gallery', description: 'Photos of Casa Club Camposol: the clubhouse, terrace, bar, restaurant, events and the Camposol golf course in Mazarrón.' },
    eyebrow: 'Gallery', title: 'A look *around* the club', intro: 'The terrace, the bar, the course and a few of our nights. Come and see it for yourself.',
    filters: { all: 'All', club: 'Terrace & dining', events: 'Music & events', golf: 'Golf' },
    filterLabel: 'Filter photos',
    more: 'More photos every week on',
  },
  es: {
    meta: { title: 'Galería', description: 'Fotos de Casa Club Camposol: la casa club, la terraza, el bar, el restaurante, los eventos y el campo de golf de Camposol en Mazarrón.' },
    eyebrow: 'Galería', title: 'Un paseo *por* el club', intro: 'La terraza, el bar, el campo y algunas de nuestras noches. Ven a verlo con tus propios ojos.',
    filters: { all: 'Todo', club: 'Terraza y comedor', events: 'Música y eventos', golf: 'Golf' },
    filterLabel: 'Filtrar fotos',
    more: 'Más fotos cada semana en',
  },
} as const;
