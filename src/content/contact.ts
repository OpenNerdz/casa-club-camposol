// Contact page copy. Phone numbers and hours live in src/data/site.ts.
export const contact = {
  en: {
    meta: { title: 'Contact & directions', description: 'Contact Casa Club Camposol: phone, WhatsApp, email, opening hours, map and directions to the clubhouse at Camposol golf course, Sector C, Mazarrón.' },
    hero: { eyebrow: 'Contact', title: 'Say hello', sub: 'Table bookings, event enquiries, society days or just a question: we are easy to reach.' },
    cards: { club: 'Casa Club', clubSub: 'Tables, events & the bar', golf: 'Golf office', golfSub: 'Tee times, buggies & green fees', email: 'Email' },
    findTitle: 'Find us',
    alt: 'The Casa Club Camposol sign beside the bunkers and palms at the entrance',
    hoursTitle: 'Opening hours',
    formTitle: 'Send an enquiry', formText: 'Tell us what you have in mind and we will reply by email or phone, usually the same day.',
    directions: { title: 'Getting here', steps: [
      'Camposol is on the RM-3 Totana–Mazarrón road, about 10 minutes north of Mazarrón town and 15 minutes from the Puerto de Mazarrón beaches. Leave the RM-3 at the Camposol exit.',
      'Follow the signs for Camposol and then Sector C. Casa Club is the clubhouse of Camposol golf course, on Calle Aljibe.',
      'Free parking at the clubhouse.',
      'From Murcia airport (Corvera) allow about 30 minutes; from Alicante airport about 80 minutes.',
    ] },
  },
  es: {
    meta: { title: 'Contacto y cómo llegar', description: 'Contacta con Casa Club Camposol: teléfono, WhatsApp, correo, horario, mapa y cómo llegar a la casa club del golf de Camposol, Sector C, Mazarrón.' },
    hero: { eyebrow: 'Contacto', title: 'Hablemos', sub: 'Reservas de mesa, consultas para eventos, jornadas de peñas de golf o cualquier pregunta: es fácil contactar con nosotros.' },
    cards: { club: 'Casa Club', clubSub: 'Mesas, eventos y el bar', golf: 'Oficina de golf', golfSub: 'Salidas, buggies y green fees', email: 'Correo' },
    findTitle: 'Dónde estamos',
    alt: 'El cartel de Casa Club Camposol junto a los búnkeres y las palmeras de la entrada',
    hoursTitle: 'Horario',
    formTitle: 'Envíanos una consulta', formText: 'Cuéntanos qué tienes en mente y te responderemos por correo o teléfono, normalmente el mismo día.',
    directions: { title: 'Indicaciones para llegar', steps: [
      'Camposol está junto a la autovía RM-3 Totana-Mazarrón, a unos 10 minutos al norte del pueblo de Mazarrón y a 15 minutos de las playas de Puerto de Mazarrón. Toma la salida de Camposol.',
      'Sigue las indicaciones hacia Camposol y, después, hacia el Sector C. Casa Club es la casa club del campo de golf de Camposol, en la calle Aljibe.',
      'Aparcamiento gratuito en la casa club.',
      'Desde el aeropuerto de Murcia (Corvera) calcula unos 30 minutos; desde el aeropuerto de Alicante, unos 80 minutos.',
    ] },
  },
} as const;
