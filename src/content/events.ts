// What's On copy. The weekly programme lives in src/data/programme.ts.
// Highlights: give each one-off event an ISO `date` (it drops off the page the day after) and,
// if known, a start `time`. Add `when` to show a label (e.g. 'Halloween') instead of the date.
// Line-up as advertised on the Casa Club Facebook page (Oct 2026).
export const events = {
  en: {
    meta: { title: 'What’s on', description: 'Live music, quiz nights, bingo, tribute shows, Sunday carvery and private functions at Casa Club Camposol, Mazarrón. See the weekly programme and the dates coming up.' },
    hero: { eyebrow: 'What’s on', title: 'There is always something happening', sub: 'Live music every Friday, two quiz nights a week, bingo, tribute shows, charity days and the big seasonal celebrations.' },
    week: { eyebrow: 'Weekly programme', title: 'The regulars', intro: 'Pencil these in. Carl Thomas has hosted the Monday quiz since 2009; Paul Pryce takes Thursdays, with the full menu from 18:00. Guest acts, specials and any changes go up on our Facebook page every week.', note: 'Programme may change seasonally. Book for Sunday carvery and tribute nights: they fill up fast.' },
    upcoming: { eyebrow: 'Coming up', title: 'Dates for the diary', empty: 'No special dates are announced right now. Follow us on Facebook for the next tribute nights and celebrations.', items: [
      { date: '2026-10-31', when: 'Halloween', title: 'The Jersey Boys Experience', text: 'Our Halloween special: the Four Seasons hits plus a helping of soul and Motown magic. Book your table early.', tag: 'Tribute night' },
      { date: '2026-11-14', title: 'Commitment Issues', text: 'A tribute to The Commitments: a seven-piece band with Joe Travers and Georgia Baie. Entry €15. Bookings by WhatsApp with Venuvo Events on +34 604 52 22 87.', tag: 'Tribute night' },
      { date: '2026-12-19', time: '20:00', title: 'The Troupers Swing Band', text: 'An evening of swing and big-band favourites. Entry €7.', tag: 'Live music' },
      { date: '2026-12-25', title: 'Christmas Day lunch', text: 'Menu and price coming soon. Message us on WhatsApp and we’ll let you know first.', tag: 'Christmas' },
    ] },
    community: { eyebrow: 'Community', title: 'A clubhouse that gives back', text: 'Casa Club regularly hosts local charities and community groups: Age Concern lunches and fairs, Friends of Mazarrón Animals (FMA) fundraisers, a Bereavement Café, kids’ talent shows and Camposol Golf Association competitions. If you run a group that needs a venue, talk to us.', cta: 'Talk to us about your event' },
    hire: { eyebrow: 'Private hire', title: 'Your party, our place', text: 'The private function room hosts lunches, dinners and celebrations, while the terrace takes larger gatherings with the course as a backdrop. We arrange menus, bar packages, entertainment and decorations.', points: ['Birthdays, anniversaries and wakes', 'Society and club presentation dinners', 'Christmas and end-of-year parties', 'Charity nights and community fundraisers'], cta: 'Enquire about hire' },
    alts: { hero: 'A live act on the terrace stage on a sunny afternoon', hire: 'A live band performing in the function room' },
    follow: { title: 'Never miss a night', text: 'Follow Casa Club Camposol on Facebook for weekly line-ups, menus and last-minute announcements.', cta: 'Follow on Facebook' },
  },
  es: {
    meta: { title: 'Agenda', description: 'Música en directo, noches de quiz, bingo, tributos, carvery dominical y eventos privados en Casa Club Camposol, Mazarrón. Consulta la programación semanal y las próximas fechas.' },
    hero: { eyebrow: 'Agenda', title: 'Siempre pasa algo en Casa Club', sub: 'Música en directo cada viernes, dos noches de quiz por semana, bingo, tributos, jornadas benéficas y las grandes celebraciones de temporada.' },
    week: { eyebrow: 'Programación semanal', title: 'Las citas fijas', intro: 'Apúntalas en la agenda. Carl Thomas presenta el quiz de los lunes desde 2009 y Paul Pryce el de los jueves, con carta completa desde las 18:00. Los artistas invitados, las novedades y cualquier cambio se publican cada semana en nuestro Facebook.', note: 'La programación puede cambiar según la temporada. Reserva para el carvery y las noches de tributo: se llenan rápido.' },
    upcoming: { eyebrow: 'Próximamente', title: 'Fechas para apuntar', empty: 'Ahora mismo no hay fechas especiales anunciadas. Síguenos en Facebook para enterarte de los próximos tributos y celebraciones.', items: [
      { date: '2026-10-31', when: 'Halloween', title: 'The Jersey Boys Experience', text: 'Nuestro especial de Halloween: los éxitos de los Four Seasons con mucho soul y Motown. Reserva tu mesa con tiempo.', tag: 'Tributo' },
      { date: '2026-11-14', title: 'Commitment Issues', text: 'Tributo a The Commitments: una banda de siete músicos con Joe Travers y Georgia Baie. Entrada 15 €. Reservas por WhatsApp con Venuvo Events en el +34 604 52 22 87.', tag: 'Tributo' },
      { date: '2026-12-19', time: '20:00', title: 'The Troupers Swing Band', text: 'Una noche de swing y clásicos de big band. Entrada 7 €.', tag: 'En directo' },
      { date: '2026-12-25', title: 'Comida de Navidad', text: 'Menú y precio, muy pronto. Escríbenos por WhatsApp y te avisamos.', tag: 'Navidad' },
    ] },
    community: { eyebrow: 'Comunidad', title: 'Una casa club comprometida', text: 'Casa Club acoge con frecuencia a asociaciones y colectivos de la zona: comidas y ferias de Age Concern, actos benéficos de Friends of Mazarrón Animals (FMA), un Bereavement Café (café de apoyo en el duelo), concursos de talento infantil y las competiciones de la Camposol Golf Association. Si diriges un grupo que necesita un espacio, habla con nosotros.', cta: 'Cuéntanos tu evento' },
    hire: { eyebrow: 'Eventos privados', title: 'Tu fiesta, nuestra casa', text: 'El salón privado acoge comidas, cenas y celebraciones, y la terraza recibe las reuniones más numerosas con el campo de fondo. Nos encargamos de menús, barra, animación y decoración.', points: ['Cumpleaños, aniversarios y reuniones en memoria de un ser querido', 'Cenas de entrega de premios de sociedades y clubes', 'Comidas de Navidad y fiestas de fin de año', 'Noches benéficas y eventos solidarios'], cta: 'Consultar disponibilidad' },
    alts: { hero: 'Una actuación en el escenario de la terraza en una tarde de sol', hire: 'Un grupo actuando en directo en el salón de eventos' },
    follow: { title: 'No te pierdas ni una noche', text: 'Sigue a Casa Club Camposol en Facebook para ver la programación semanal, los menús y los avisos de última hora.', cta: 'Seguir en Facebook' },
  },
} as const;
