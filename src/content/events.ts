// What's On copy. Headlines accept *emphasis*. The weekly programme lives in src/data/programme.ts.
// Highlights: give one-off events an ISO `date` (they drop off the page the day after);
// recurring ones a free-text `when`.
export const events = {
  en: {
    meta: { title: 'What’s On', description: 'Live music, quiz nights, bingo, tribute acts, karaoke, Sunday carvery, summer BBQs and private functions at Casa Club Camposol, Mazarrón. See the weekly programme and upcoming highlights.' },
    hero: { eyebrow: 'What’s on', title: 'There is always *something* happening', sub: 'Live acts every Friday, two quiz nights a week, bingo, tributes, karaoke, charity days and the big seasonal celebrations.' },
    week: { eyebrow: 'Weekly programme', title: 'The *regulars*', intro: 'Pencil these in. Guest acts, specials and any changes are posted on our Facebook page every week.', note: 'Programme may change seasonally. Book for Sunday carvery and tribute nights: they fill up fast.' },
    upcoming: { eyebrow: 'Coming up', title: 'Dates for the *diary*', items: [
      { date: '2026-10-31', title: 'The Jersey Boys tribute night', text: 'An evening of Four Seasons classics. Dinner and show tickets available; book early.', tag: 'Live show' },
      { date: '2026-12-25', title: 'Christmas Day lunch', text: 'Three courses with a glass of cava, 65 € per person. Reserve by WhatsApp: tables go quickly.', tag: 'Seasonal' },
      { when: 'Every other Tuesday', title: 'Funky Orange daytime disco', text: 'Afternoon dancing with the Funky Orange crew. Doors early, home before dark.', tag: 'Dance' },
      { when: 'Summer', title: 'Terrace BBQ nights', text: 'Chargrilled food, cold drinks and live music on the terrace as the sun goes down over the course.', tag: 'Summer' },
    ] },
    community: { eyebrow: 'Community', title: 'A clubhouse that *gives back*', text: 'Casa Club regularly hosts local charities and community groups: Age Concern lunches and fairs, FMA fundraisers, a monthly Bereavement Café, kids’ talent shows and Camposol Golf Association competitions. If you run a group that needs a venue, talk to us.', cta: 'Talk to us about your event' },
    hire: { eyebrow: 'Private hire', title: 'Your party, *our place*', text: 'The private function room seats parties for lunches, dinners and celebrations, while the terrace hosts larger summer gatherings with the course as a backdrop. We arrange menus, bar packages, entertainment and decorations.', points: ['Birthdays, anniversaries and wakes', 'Society and club presentation dinners', 'Christmas parties and New Year’s Eve', 'Charity nights and community fundraisers'], cta: 'Enquire about hire' },
    alts: { hero: 'The terrace stage lit up red and blue on a summer night', hire: 'Guests dancing in the function room' },
    follow: { title: 'Never miss a night', text: 'Follow Casa Club Camposol on Facebook for weekly line-ups, menus and last-minute announcements.', cta: 'Follow on Facebook' },
  },
  es: {
    meta: { title: 'Agenda', description: 'Música en vivo, noches de quiz, bingo, tributos, karaoke, carvery dominical, barbacoas de verano y eventos privados en Casa Club Camposol, Mazarrón. Consulta la programación semanal y los próximos eventos.' },
    hero: { eyebrow: 'Agenda', title: 'Siempre pasa *algo* en Casa Club', sub: 'Actuaciones cada viernes, dos noches de quiz por semana, bingo, tributos, karaoke, jornadas benéficas y las grandes celebraciones de temporada.' },
    week: { eyebrow: 'Programación semanal', title: 'Las citas *fijas*', intro: 'Apúntalas en la agenda. Los artistas invitados, las novedades y cualquier cambio se publican cada semana en nuestro Facebook.', note: 'La programación puede cambiar según la temporada. Reserva para el carvery y las noches de tributo: se llenan rápido.' },
    upcoming: { eyebrow: 'Próximamente', title: 'Fechas para *apuntar*', items: [
      { date: '2026-10-31', title: 'Noche tributo a The Jersey Boys', text: 'Una velada de clásicos de los Four Seasons. Entradas con cena y espectáculo; reserva pronto.', tag: 'En vivo' },
      { date: '2026-12-25', title: 'Comida de Navidad', text: 'Tres platos con copa de cava, 65 € por persona. Reserva por WhatsApp: las mesas vuelan.', tag: 'Temporada' },
      { when: 'Martes alternos', title: 'Funky Orange disco de tarde', text: 'Baile por la tarde con el equipo de Funky Orange. Apertura temprana y a casa antes de anochecer.', tag: 'Baile' },
      { when: 'Verano', title: 'Noches de barbacoa en la terraza', text: 'Brasas, bebidas frías y música en vivo en la terraza mientras el sol se pone sobre el campo.', tag: 'Verano' },
    ] },
    community: { eyebrow: 'Comunidad', title: 'Una casa club *comprometida*', text: 'Casa Club acoge con frecuencia a asociaciones y colectivos de la zona: comidas y ferias de Age Concern, recaudaciones de FMA, un Bereavement Café mensual, concursos de talento infantil y las competiciones de la Camposol Golf Association. Si diriges un grupo que necesita un espacio, habla con nosotros.', cta: 'Cuéntanos tu evento' },
    hire: { eyebrow: 'Eventos privados', title: 'Tu fiesta, *nuestra casa*', text: 'El salón privado acoge comidas, cenas y celebraciones, y la terraza recibe las reuniones de verano más numerosas con el campo de fondo. Nos encargamos de menús, barra, animación y decoración.', points: ['Cumpleaños, aniversarios y despedidas', 'Cenas de entrega de premios de sociedades y clubes', 'Comidas de Navidad y Nochevieja', 'Noches benéficas y eventos solidarios'], cta: 'Consultar disponibilidad' },
    alts: { hero: 'El escenario de la terraza iluminado en rojo y azul en una noche de verano', hire: 'Clientes bailando en el salón de eventos' },
    follow: { title: 'No te pierdas ni una noche', text: 'Sigue a Casa Club Camposol en Facebook para ver la programación semanal, los menús y los avisos de última hora.', cta: 'Seguir en Facebook' },
  },
} as const;
