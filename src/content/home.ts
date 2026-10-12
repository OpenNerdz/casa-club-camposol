// Home page copy.
// The weekly programme itself lives in src/data/programme.ts.
export const home = {
  en: {
    meta: { title: 'Casa Club Camposol · Restaurant, Bar & Golf Clubhouse in Mazarrón', description: 'Casa Club Camposol is the clubhouse of Camposol Club de Golf: restaurant, bar and sun terrace overlooking the course, live music, quiz nights, Sunday carvery and an 18-hole par-72 course. Open to everyone, 7 days a week.' },
    hero: {
      eyebrow: 'Camposol Club de Golf · Mazarrón',
      title: 'The clubhouse at the heart of Camposol',
      sub: 'Restaurant, bar and sun terrace overlooking the first tee. Great food, live music and golf in the Murcian sunshine, open to everyone, seven days a week.',
      cta1: 'Book a table', cta2: 'See what’s on',
      alt: 'Guests at the tables on the Casa Club terrace under the ochre roof on a sunny day',
    },
    intro: {
      eyebrow: 'Welcome',
      text: 'Casa Club is Camposol’s social hub: a relaxed, friendly clubhouse where neighbours, golfers and visitors meet from breakfast through to the last song of the night.',
      links: [
        { href: '/restaurant/', label: 'Eat & drink' },
        { href: '/golf/', label: 'Play the course' },
        { href: '/events/', label: 'What’s on' },
        { href: '/events/#hire', label: 'Private parties' },
      ],
    },
    week: {
      eyebrow: 'Every week', title: 'Your week at Casa Club',
      intro: 'Regular favourites you can plan around. Guest acts and this week’s specials go up on our Facebook page.',
      note: 'Programme may change seasonally. Book for Sunday carvery and tribute nights: they fill up fast.',
      cta: 'Everything that’s on',
    },
    restaurant: {
      eyebrow: 'Restaurant & bar', title: 'Honest food, generous plates, sunshine on the side',
      text: 'From a proper breakfast before your round to a long Sunday lunch with the family, the kitchen serves British and Spanish favourites made fresh every day, with friendly service, fair prices and one of the best terrace views in Camposol.',
      signatures: [
        { name: 'Breakfast', when: 'From 08:00', desc: 'Full English, tostadas and proper coffee' },
        { name: 'Menú del día', when: 'Mon – Fri', desc: 'Three courses that change daily' },
        { name: 'Fry Day', when: 'Fridays', desc: 'Fish & chips with all the trimmings' },
        { name: 'Sunday carvery', when: 'Sundays', desc: 'Roasts carved to order; book ahead' },
      ],
      cta: 'See the restaurant',
      alt: 'Friends sharing drinks around a table in the Casa Club dining room',
    },
    golf: {
      eyebrow: 'Golf', title: 'Eighteen holes in the Murcian sun',
      text: 'Designed by Manuel Quesada, Camposol Club de Golf winds through a valley of lakes, olive groves and palms with the Sierra de las Moreras as a backdrop: a friendly test for every handicap, with a tougher back nine for those who want it.',
      stats: [{ v: '18', l: 'holes' }, { v: '72', l: 'par' }, { v: '5,895 m', l: 'from the white tees' }, { v: '136', l: 'slope rating' }],
      cta: 'Green fees & tee times',
    },
    reviews: {
      eyebrow: 'What people say', title: 'Loved by locals, golfers and visitors',
      items: [
        { quote: 'The new owners are a credit to the course, the club, the crazy golf and the driving range. The meals are excellent and the Sunday carvery is well worth it.', who: 'Google review, 2026' },
        { quote: 'The clubhouse is top notch: not the usual stuffy location, with cheap drinks and entertainment in the evenings.', who: 'Tripadvisor review, 2025' },
        { quote: 'An excellent clubhouse providing good food and a great selection of drinks. Much improved over the past year.', who: 'Golfshake review, 2026' },
      ],
    },
    functions: {
      eyebrow: 'Private hire', title: 'Celebrate with us', text: 'Birthdays, anniversaries, society dinners, charity fundraisers and Christmas lunches. Our private function room and summer terrace can be dressed for anything from a casual buffet to a seated three-course dinner.',
      points: ['Private function room', 'Summer terrace with golf-course views', 'Set menus and buffets for groups', 'Live entertainment arranged on request'],
      cta: 'Enquire about an event',
      alt: 'A singer performing for guests on the terrace stage',
    },
    visit: {
      eyebrow: 'Visit', title: 'Easy to find, hard to leave',
      text: 'We are in Sector C of Camposol, right beside the first tee. Free parking, step-free access to the terrace, and only ten minutes from Mazarrón.',
      distances: [
        { place: 'Mazarrón town', time: '10 min', icon: 'car' },
        { place: 'Puerto de Mazarrón beaches', time: '15 min', icon: 'car' },
        { place: 'Corvera (Murcia) airport', time: '30 min', icon: 'plane' },
        { place: 'Alicante airport', time: '80 min', icon: 'plane' },
      ],
      cta: 'All contact details',
    },
  },
  es: {
    meta: { title: 'Casa Club Camposol · Restaurante, bar y casa club de golf en Mazarrón', description: 'Casa Club Camposol es la casa club del Camposol Club de Golf: restaurante, bar y terraza con vistas al campo, música en vivo, noches de quiz, carvery dominical y un campo de 18 hoyos par 72. Abierto a todo el mundo, 7 días a la semana.' },
    hero: {
      eyebrow: 'Camposol Club de Golf · Mazarrón',
      title: 'La casa club en el corazón de Camposol',
      sub: 'Restaurante, bar y terraza al sol con vistas al tee del hoyo 1. Buena comida, música en vivo y golf bajo el sol de Murcia, abierto a todo el mundo los siete días de la semana.',
      cta1: 'Reservar mesa', cta2: 'Ver la agenda',
      alt: 'Clientes en las mesas de la terraza de Casa Club bajo el tejado ocre en un día de sol',
    },
    intro: {
      eyebrow: 'Bienvenidos',
      text: 'Casa Club es el punto de encuentro de Camposol: una casa club relajada y cercana donde vecinos, golfistas y visitantes coinciden desde el desayuno hasta la última canción de la noche.',
      links: [
        { href: '/restaurant/', label: 'Comer y beber' },
        { href: '/golf/', label: 'Jugar al golf' },
        { href: '/events/', label: 'Agenda' },
        { href: '/events/#hire', label: 'Fiestas privadas' },
      ],
    },
    week: {
      eyebrow: 'Cada semana', title: 'Tu semana en Casa Club',
      intro: 'Citas fijas con las que puedes contar. Los artistas invitados y las novedades de la semana se publican en nuestro Facebook.',
      note: 'La programación puede cambiar según la temporada. Reserva para el carvery y las noches de tributo: se llenan rápido.',
      cta: 'Toda la agenda',
    },
    restaurant: {
      eyebrow: 'Restaurante y bar', title: 'Cocina honesta, platos generosos y mucho sol',
      text: 'Desde un buen desayuno antes de tu partida hasta una larga comida de domingo en familia, la cocina prepara cada día clásicos británicos y españoles, con trato cercano, precios justos y una de las mejores terrazas de Camposol.',
      signatures: [
        { name: 'Desayunos', when: 'Desde las 8:00', desc: 'Desayuno inglés, tostadas y buen café' },
        { name: 'Menú del día', when: 'Lun – Vie', desc: 'Tres platos que cambian cada día' },
        { name: 'Fry Day', when: 'Viernes', desc: 'Fish & chips con todas sus guarniciones' },
        { name: 'Carvery dominical', when: 'Domingos', desc: 'Asados cortados al momento; reserva' },
      ],
      cta: 'Ver el restaurante',
      alt: 'Amigos tomando algo alrededor de una mesa en el comedor de Casa Club',
    },
    golf: {
      eyebrow: 'Golf', title: 'Dieciocho hoyos bajo el sol de Murcia',
      text: 'Diseñado por Manuel Quesada, el Camposol Club de Golf serpentea por un valle de lagos, olivos y palmeras con la Sierra de las Moreras de fondo: un reto amable para cualquier hándicap, con unos segundos nueve más exigentes para quien los busque.',
      stats: [{ v: '18', l: 'hoyos' }, { v: '72', l: 'par' }, { v: '5.895 m', l: 'desde barras blancas' }, { v: '136', l: 'valor slope' }],
      cta: 'Green fees y salidas',
    },
    reviews: {
      eyebrow: 'Opiniones', title: 'Vecinos, golfistas y visitantes repiten',
      items: [
        { quote: 'Los nuevos propietarios son un orgullo para el campo, el club, el minigolf y el campo de prácticas. La comida es excelente y el carvery del domingo merece mucho la pena.', who: 'Reseña de Google, 2026' },
        { quote: 'La casa club es de primera: nada de ambiente estirado, bebidas baratas y entretenimiento por las tardes.', who: 'Reseña de Tripadvisor, 2025' },
        { quote: 'Una casa club excelente con buena comida y gran selección de bebidas. Ha mejorado mucho en el último año.', who: 'Reseña de Golfshake, 2026' },
      ],
    },
    functions: {
      eyebrow: 'Eventos privados', title: 'Celebra con nosotros', text: 'Cumpleaños, aniversarios, cenas de sociedades de golf, eventos benéficos y comidas de Navidad. Nuestro salón privado y la terraza de verano se adaptan a todo, desde un bufé informal hasta una cena de tres platos.',
      points: ['Salón privado para eventos', 'Terraza de verano con vistas al campo', 'Menús cerrados y bufés para grupos', 'Animación y música en vivo a medida'],
      cta: 'Consultar para un evento',
      alt: 'Un cantante actuando para los clientes en el escenario de la terraza',
    },
    visit: {
      eyebrow: 'Visítanos', title: 'Fácil de encontrar, difícil de dejar',
      text: 'Estamos en el Sector C de Camposol, junto al tee del hoyo 1. Aparcamiento gratuito, acceso sin escalones a la terraza y a solo diez minutos de Mazarrón.',
      distances: [
        { place: 'Mazarrón', time: '10 min', icon: 'car' },
        { place: 'Playas de Puerto de Mazarrón', time: '15 min', icon: 'car' },
        { place: 'Aeropuerto de Corvera (Murcia)', time: '30 min', icon: 'plane' },
        { place: 'Aeropuerto de Alicante', time: '80 min', icon: 'plane' },
      ],
      cta: 'Todos los datos de contacto',
    },
  },
} as const;
