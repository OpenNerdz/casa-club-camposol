export const legal = {
  en: {
    meta: { title: 'Legal notice', description: 'Legal notice and company information for the Casa Club Camposol website.' },
    title: 'Legal notice',
    updated: 'Last updated: October 2026.',
    sections: [
      { h: 'Website owner', p: ['In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is:'], list: ['Company: {legalName}', 'Tax ID (NIF): {cif}', 'Registered office: {address}', 'Commercial registry: {registry}', 'Email: {email}', 'Telephone: {phone}'] },
      { h: 'Purpose', p: ['This website provides information about the restaurant, bar, events and golf facilities of Casa Club Camposol and Camposol Club de Golf, and allows visitors to contact us. Prices, opening hours and programmes shown are indicative and may change without notice; please confirm when booking.'] },
      { h: 'Intellectual property', p: ['Unless otherwise stated, all texts, images, logos and design elements on this site belong to {legalName} or are used with permission. They may not be reproduced, distributed or modified without prior written consent.'] },
      { h: 'Liability', p: ['We make every effort to keep the information accurate and up to date but cannot guarantee that it is free of errors. Links to third-party sites (booking platform, social networks, maps) are provided for convenience; we are not responsible for their content or privacy practices.'] },
      { h: 'Applicable law', p: ['This website is governed by Spanish law. Any dispute shall be submitted to the courts of the city of Murcia, Spain, unless consumer legislation provides otherwise.'] },
    ],
  },
  es: {
    meta: { title: 'Aviso legal', description: 'Aviso legal e información de la empresa titular del sitio web de Casa Club Camposol.' },
    title: 'Aviso legal',
    updated: 'Última actualización: octubre de 2026.',
    sections: [
      { h: 'Titular del sitio web', p: ['En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es:'], list: ['Empresa: {legalName}', 'NIF: {cif}', 'Domicilio social: {address}', 'Registro Mercantil: {registry}', 'Correo electrónico: {email}', 'Teléfono: {phone}'] },
      { h: 'Objeto', p: ['Este sitio web ofrece información sobre el restaurante, el bar, los eventos y las instalaciones de golf de Casa Club Camposol y Camposol Club de Golf, y permite a los visitantes ponerse en contacto con nosotros. Los precios, horarios y programaciones mostrados son orientativos y pueden cambiar sin previo aviso; confírmalos al reservar.'] },
      { h: 'Propiedad intelectual', p: ['Salvo indicación en contrario, todos los textos, imágenes, logotipos y elementos de diseño de este sitio pertenecen a {legalName} o se utilizan con autorización. No pueden reproducirse, distribuirse ni modificarse sin consentimiento previo por escrito.'] },
      { h: 'Responsabilidad', p: ['Hacemos todo lo posible por mantener la información exacta y actualizada, pero no podemos garantizar que esté libre de errores. Los enlaces a sitios de terceros (plataforma de reservas, redes sociales, mapas) se ofrecen por comodidad; no somos responsables de su contenido ni de sus prácticas de privacidad.'] },
      { h: 'Legislación aplicable', p: ['Este sitio web se rige por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales de la ciudad de Murcia, salvo que la normativa de consumidores disponga otra cosa.'] },
    ],
  },
} as const;

export const privacy = {
  en: {
    meta: { title: 'Privacy & cookies', description: 'How Casa Club Camposol handles personal data sent through this website, and which third-party services the site uses.' },
    title: 'Privacy & cookies policy',
    updated: 'Last updated: October 2026.',
    sections: [
      { h: 'Data controller', p: ['{legalName}, NIF {cif}, {address}. Email: {email}.'] },
      { h: 'What we collect and why', p: ['When you use the contact form, call, email or message us on WhatsApp, we process the details you give us (name, phone, email, type of enquiry, requested date, number of guests and message) solely to answer your enquiry and manage reservations or events. The legal basis is your consent and, where applicable, the steps needed to provide the service you request (Art. 6.1.a and 6.1.b GDPR).'] },
      { h: 'Retention', p: ['Enquiry data is kept for as long as needed to deal with your request and for up to one year afterwards, unless a longer period is required by law (for example, invoicing records).'] },
      { h: 'Recipients', p: ['Your data is not sold or shared with third parties for marketing. Our web hosting and email providers, and the form-delivery service if the contact form is routed through one, process data on our behalf as processors under data-processing agreements. WhatsApp messages are handled by Meta under its own terms.'] },
      { h: 'International transfers', p: ['Some of these providers (web hosting, the form-delivery service when used, and the Esri map service) are based in the United States. Any such transfer relies on the EU–US Data Privacy Framework or on the European Commission’s standard contractual clauses.'] },
      { h: 'Your rights', p: ['You may request access, rectification, erasure, restriction, portability or object to processing at any time by writing to {email}, and you can withdraw your consent whenever you wish. You can also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).'] },
      { h: 'Cookies and third-party services', p: ['This website does not use cookies, advertising or analytics. Fonts are served from this website itself. When you scroll to a map, map images are loaded from Esri (satellite) or OpenStreetMap (street map), which receive your IP address as part of that request. Links to Facebook, Instagram, WhatsApp, Google Maps and our tee-time booking partner lead to external sites with their own policies.'] },
    ],
  },
  es: {
    meta: { title: 'Privacidad y cookies', description: 'Cómo trata Casa Club Camposol los datos personales enviados a través de este sitio web y qué servicios de terceros utiliza.' },
    title: 'Política de privacidad y cookies',
    updated: 'Última actualización: octubre de 2026.',
    sections: [
      { h: 'Responsable del tratamiento', p: ['{legalName}, NIF {cif}, {address}. Correo: {email}.'] },
      { h: 'Qué datos recogemos y para qué', p: ['Cuando utilizas el formulario de contacto, nos llamas, nos escribes o nos envías un mensaje de WhatsApp, tratamos los datos que nos facilitas (nombre, teléfono, correo, tipo de consulta, fecha solicitada, número de personas y mensaje) únicamente para responder a tu consulta y gestionar reservas o eventos. La base jurídica es tu consentimiento y, en su caso, la ejecución de las medidas precontractuales que solicitas (art. 6.1.a y 6.1.b del RGPD).'] },
      { h: 'Conservación', p: ['Los datos de las consultas se conservan el tiempo necesario para atender tu solicitud y hasta un año después, salvo que la ley exija un plazo mayor (por ejemplo, obligaciones de facturación).'] },
      { h: 'Destinatarios', p: ['Tus datos no se venden ni se ceden a terceros con fines comerciales. Nuestros proveedores de alojamiento web y de correo, y el servicio de entrega de formularios si el formulario se envía a través de uno, tratan los datos por cuenta nuestra como encargados del tratamiento, bajo los correspondientes contratos. Los mensajes de WhatsApp los gestiona Meta según sus propias condiciones.'] },
      { h: 'Transferencias internacionales', p: ['Algunos de estos proveedores (alojamiento web, el servicio de formularios cuando se use y el servicio de mapas de Esri) están en Estados Unidos. Estas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. o en las cláusulas contractuales tipo de la Comisión Europea.'] },
      { h: 'Tus derechos', p: ['Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a {email}, y retirar tu consentimiento cuando quieras. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).'] },
      { h: 'Cookies y servicios de terceros', p: ['Este sitio web no utiliza cookies, publicidad ni analítica. Las fuentes tipográficas se sirven desde este mismo sitio. Al desplazarte hasta un mapa, sus imágenes se cargan desde Esri (satélite) u OpenStreetMap (callejero), que reciben tu dirección IP como parte de esa petición. Los enlaces a Facebook, Instagram, WhatsApp, Google Maps y a nuestro sistema de reserva de salidas conducen a sitios externos con sus propias políticas.'] },
    ],
  },
} as const;
