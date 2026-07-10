export const additionalFamilies = [
  {
    id: "mercado", name: "Mercado", layout: "window", visualMode: "shop-window-pop", conversion: "visit-or-message", bestFor: ["local-retail", "concept-store", "gift-shop"],
    colors: ["oklch(0.93 0.18 103)", "oklch(0.2 0.05 245)", "oklch(0.58 0.22 25)", "oklch(0.98 0 0)"], font: "Anybody",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Tienda local y concept store", headline: "Lo que no encuentras en cualquier parte.", intro: "Producto, personalidad y una visita que empieza antes de llegar.", primary: "Cómo llegar", secondary: "Ver selección", offers: ["Novedades de la semana", "Selección local", "Regalos con intención"], story: "Una ventana digital que cambia con la tienda, sin convertir el catálogo en ruido." },
      ca: { type: "Botiga local i concept store", headline: "El que no trobes a qualsevol lloc.", intro: "Producte, personalitat i una visita que comença abans d’arribar.", primary: "Com arribar", secondary: "Veure selecció", offers: ["Novetats de la setmana", "Selecció local", "Regals amb intenció"], story: "Un aparador digital que canvia amb la botiga, sense convertir el catàleg en soroll." },
    },
  },
  {
    id: "taller", name: "Taller", layout: "workbench", visualMode: "industrial-service", conversion: "quote-or-call", bestFor: ["repair", "car-repair", "specialist-trade"],
    colors: ["oklch(0.18 0.025 235)", "oklch(0.95 0.01 235)", "oklch(0.78 0.18 78)", "oklch(0.28 0.04 235)"], font: "Teko",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Taller y servicio técnico", headline: "Diagnóstico claro. Trabajo bien hecho.", intro: "Explica el problema, recibe el siguiente paso y habla con quien lo va a resolver.", primary: "Pedir diagnóstico", secondary: "Llamar al taller", offers: ["Diagnóstico", "Reparación", "Mantenimiento"], story: "La web muestra proceso y oficio antes que promesas vacías." },
      ca: { type: "Taller i servei tècnic", headline: "Diagnòstic clar. Feina ben feta.", intro: "Explica el problema, rep el pas següent i parla amb qui ho resoldrà.", primary: "Demanar diagnòstic", secondary: "Trucar al taller", offers: ["Diagnòstic", "Reparació", "Manteniment"], story: "El web mostra procés i ofici abans que promeses buides." },
    },
  },
  {
    id: "clinica-serena", name: "Clínica Serena", layout: "clinical", visualMode: "reassuring-clinical", conversion: "appointment", bestFor: ["clinic", "dentist", "physiotherapy"],
    colors: ["oklch(0.97 0.012 225)", "oklch(0.22 0.045 235)", "oklch(0.57 0.15 228)", "oklch(0.9 0.045 205)"], font: "Atkinson Hyperlegible",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Clínica y consulta", headline: "Entender qué ocurre también es parte del cuidado.", intro: "Información directa para llegar a la primera visita con menos incertidumbre.", primary: "Solicitar visita", secondary: "Ver tratamientos", offers: ["Primera valoración", "Plan de tratamiento", "Seguimiento"], story: "Jerarquía calmada, lenguaje humano y ningún dato clínico inventado." },
      ca: { type: "Clínica i consulta", headline: "Entendre què passa també forma part de la cura.", intro: "Informació directa per arribar a la primera visita amb menys incertesa.", primary: "Sol·licitar visita", secondary: "Veure tractaments", offers: ["Primera valoració", "Pla de tractament", "Seguiment"], story: "Jerarquia calmada, llenguatge humà i cap dada clínica inventada." },
    },
  },
  {
    id: "patio", name: "Patio", layout: "postcard", visualMode: "slow-hospitality", conversion: "availability", bestFor: ["small-hotel", "guesthouse", "rural-stay"],
    colors: ["oklch(0.29 0.075 164)", "oklch(0.98 0 0)", "oklch(0.74 0.13 55)", "oklch(0.43 0.08 164)"], font: "Afacad",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Hotel pequeño y casa de huéspedes", headline: "Dormir bien. Despertar aquí.", intro: "La estancia se entiende en una imagen, la ubicación en un minuto y la disponibilidad en un toque.", primary: "Consultar fechas", secondary: "Explorar habitaciones", offers: ["Habitaciones", "Desayuno", "Guía local"], story: "Una postal útil: atmósfera primero, decisión después." },
      ca: { type: "Hotel petit i casa d’hostes", headline: "Dormir bé. Despertar aquí.", intro: "L’estada s’entén en una imatge, la ubicació en un minut i la disponibilitat en un toc.", primary: "Consultar dates", secondary: "Explorar habitacions", offers: ["Habitacions", "Esmorzar", "Guia local"], story: "Una postal útil: atmosfera primer, decisió després." },
    },
  },
  {
    id: "estudio", name: "Estudio", layout: "portfolio", visualMode: "creative-proof", conversion: "project-enquiry", bestFor: ["creative-studio", "photography", "interior-design"],
    colors: ["oklch(0.96 0.02 305)", "oklch(0.18 0.04 305)", "oklch(0.62 0.23 332)", "oklch(0.84 0.08 300)"], font: "Anybody",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Estudio creativo", headline: "Ideas que se pueden enseñar.", intro: "Una portada de trabajo real, enfoque claro y una conversación de proyecto sin formulario eterno.", primary: "Contar un proyecto", secondary: "Ver trabajos", offers: ["Identidad", "Espacios", "Campañas"], story: "La prueba visual manda; el texto sólo orienta la mirada." },
      ca: { type: "Estudi creatiu", headline: "Idees que es poden ensenyar.", intro: "Una portada de feina real, enfocament clar i una conversa de projecte sense formulari etern.", primary: "Explicar un projecte", secondary: "Veure treballs", offers: ["Identitat", "Espais", "Campanyes"], story: "La prova visual mana; el text només orienta la mirada." },
    },
  },
  {
    id: "raiz", name: "Raíz", layout: "ritual", visualMode: "grounded-wellness", conversion: "class-or-session", bestFor: ["yoga", "massage", "wellness"],
    colors: ["oklch(0.45 0.13 165)", "oklch(0.98 0 0)", "oklch(0.79 0.15 92)", "oklch(0.32 0.09 165)"], font: "Afacad",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Yoga, masaje y bienestar", headline: "Tiempo para volver al cuerpo.", intro: "Clases, sesiones y disponibilidad sin espiritualidad prefabricada.", primary: "Reservar sesión", secondary: "Ver prácticas", offers: ["Sesiones individuales", "Clases de grupo", "Bonos y talleres"], story: "Una presencia serena que sigue siendo directa y comercialmente útil." },
      ca: { type: "Ioga, massatge i benestar", headline: "Temps per tornar al cos.", intro: "Classes, sessions i disponibilitat sense espiritualitat prefabricada.", primary: "Reservar sessió", secondary: "Veure pràctiques", offers: ["Sessions individuals", "Classes de grup", "Bons i tallers"], story: "Una presència serena que continua sent directa i comercialment útil." },
    },
  },
  {
    id: "aula", name: "Aula", layout: "clinical", visualMode: "bright-learning", conversion: "trial-class", bestFor: ["language-school", "academy", "music-school"],
    colors: ["oklch(0.96 0.03 92)", "oklch(0.2 0.04 260)", "oklch(0.68 0.19 36)", "oklch(0.83 0.11 220)"], font: "Atkinson Hyperlegible",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Academia y escuela local", headline: "Aprender empieza por encontrar tu grupo.", intro: "Nivel, horario y formato explicados antes de pedir una clase de prueba.", primary: "Pedir clase de prueba", secondary: "Ver cursos", offers: ["Grupos reducidos", "Clases individuales", "Preparación específica"], story: "La estructura funciona como un horario bien explicado, no como un folleto escolar." },
      ca: { type: "Acadèmia i escola local", headline: "Aprendre comença per trobar el teu grup.", intro: "Nivell, horari i format explicats abans de demanar una classe de prova.", primary: "Demanar classe de prova", secondary: "Veure cursos", offers: ["Grups reduïts", "Classes individuals", "Preparació específica"], story: "L’estructura funciona com un horari ben explicat, no com un fullet escolar." },
    },
  },
  {
    id: "nido", name: "Nido", layout: "ritual", visualMode: "playful-care", conversion: "care-enquiry", bestFor: ["veterinary", "pet-grooming", "pet-care"],
    colors: ["oklch(0.9 0.1 188)", "oklch(0.2 0.05 245)", "oklch(0.66 0.19 28)", "oklch(0.97 0.02 188)"], font: "Fredoka",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Cuidado y servicios para mascotas", headline: "Cuidarlos bien también debería ser fácil.", intro: "Servicios, preparación de la visita y contacto urgente claramente separados.", primary: "Pedir cita", secondary: "Ver cuidados", offers: ["Primera visita", "Cuidado habitual", "Consultas rápidas"], story: "Amable sin parecer infantil, útil sin llenar la pantalla de iconos." },
      ca: { type: "Cura i serveis per a mascotes", headline: "Cuidar-los bé també hauria de ser fàcil.", intro: "Serveis, preparació de la visita i contacte urgent clarament separats.", primary: "Demanar cita", secondary: "Veure cures", offers: ["Primera visita", "Cura habitual", "Consultes ràpides"], story: "Amable sense semblar infantil, útil sense omplir la pantalla d’icones." },
    },
  },
  {
    id: "casa-abierta", name: "Casa Abierta", layout: "property", visualMode: "property-led", conversion: "viewing", bestFor: ["real-estate", "property-management", "architecture"],
    colors: ["oklch(0.94 0.02 210)", "oklch(0.2 0.035 240)", "oklch(0.58 0.15 145)", "oklch(0.82 0.08 210)"], font: "Chivo",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Inmobiliaria y vivienda", headline: "Encontrar casa empieza por entender la zona.", intro: "Propiedades, proceso y contacto local sin portales dentro del portal.", primary: "Pedir una visita", secondary: "Ver propiedades", offers: ["Compra", "Alquiler", "Gestión"], story: "Una sola imagen fuerte y un camino claro hacia la visita." },
      ca: { type: "Immobiliària i habitatge", headline: "Trobar casa comença per entendre la zona.", intro: "Propietats, procés i contacte local sense portals dins del portal.", primary: "Demanar una visita", secondary: "Veure propietats", offers: ["Compra", "Lloguer", "Gestió"], story: "Una sola imatge forta i un camí clar cap a la visita." },
    },
  },
  {
    id: "obrador", name: "Obrador", layout: "ledger", visualMode: "daily-bakery", conversion: "order-or-visit", bestFor: ["bakery", "confectionery", "deli"],
    colors: ["oklch(0.52 0.18 38)", "oklch(0.98 0 0)", "oklch(0.84 0.16 88)", "oklch(0.27 0.07 38)"], font: "Barlow Condensed",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Panadería y obrador", headline: "Hoy sale del horno.", intro: "Especialidades, encargos y horario diario en una portada que cambia con el mostrador.", primary: "Hacer un encargo", secondary: "Ver lo de hoy", offers: ["Pan diario", "Dulce de temporada", "Encargos"], story: "Una pizarra digital sin fingir existencias ni precios." },
      ca: { type: "Forn i obrador", headline: "Avui surt del forn.", intro: "Especialitats, encàrrecs i horari diari en una portada que canvia amb el taulell.", primary: "Fer un encàrrec", secondary: "Veure el d’avui", offers: ["Pa diari", "Dolç de temporada", "Encàrrecs"], story: "Una pissarra digital sense fingir existències ni preus." },
    },
  },
  {
    id: "nocturno", name: "Nocturno", layout: "nocturne", visualMode: "night-schedule", conversion: "table-or-event", bestFor: ["bar", "music-venue", "night-restaurant"],
    colors: ["oklch(0.14 0.03 290)", "oklch(0.96 0.02 40)", "oklch(0.63 0.24 25)", "oklch(0.28 0.08 320)"], font: "Anybody",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Bar, música y noche", headline: "Esta noche tiene sitio.", intro: "Agenda, ambiente y reserva en una sola secuencia oscura y rápida.", primary: "Reservar", secondary: "Ver agenda", offers: ["Hoy", "Esta semana", "Grupos"], story: "El horario se lee como un cartel, no como una tabla administrativa." },
      ca: { type: "Bar, música i nit", headline: "Aquesta nit té lloc.", intro: "Agenda, ambient i reserva en una sola seqüència fosca i ràpida.", primary: "Reservar", secondary: "Veure agenda", offers: ["Avui", "Aquesta setmana", "Grups"], story: "L’horari es llegeix com un cartell, no com una taula administrativa." },
    },
  },
  {
    id: "botanica", name: "Botánica", layout: "window", visualMode: "floral-blocks", conversion: "order-or-visit", bestFor: ["florist", "plant-shop", "garden-studio"],
    colors: ["oklch(0.68 0.18 145)", "oklch(0.16 0.04 150)", "oklch(0.8 0.16 345)", "oklch(0.96 0.025 145)"], font: "Bricolage Grotesque",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Floristería y plantas", headline: "Flores que llegan con una intención.", intro: "Colecciones, encargos y entrega local sin convertir cada ramo en una ficha de producto.", primary: "Hacer un encargo", secondary: "Ver colecciones", offers: ["Ramos", "Plantas", "Eventos"], story: "Color decidido, fotografía real y contacto visible." },
      ca: { type: "Floristeria i plantes", headline: "Flors que arriben amb una intenció.", intro: "Col·leccions, encàrrecs i entrega local sense convertir cada ram en una fitxa de producte.", primary: "Fer un encàrrec", secondary: "Veure col·leccions", offers: ["Rams", "Plantes", "Esdeveniments"], story: "Color decidit, fotografia real i contacte visible." },
    },
  },
  {
    id: "ruta", name: "Ruta", layout: "postcard", visualMode: "local-journey", conversion: "tour-booking", bestFor: ["tour-guide", "experience", "local-travel"],
    colors: ["oklch(0.38 0.13 245)", "oklch(0.98 0 0)", "oklch(0.75 0.19 70)", "oklch(0.5 0.11 245)"], font: "Afacad",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Tours y experiencias locales", headline: "Ver la ciudad con alguien que la conoce.", intro: "Duración, punto de encuentro y qué esperar antes de reservar.", primary: "Consultar fecha", secondary: "Ver rutas", offers: ["Ruta esencial", "Barrio y cultura", "Experiencia privada"], story: "La ciudad es la imagen; la logística nunca se esconde." },
      ca: { type: "Tours i experiències locals", headline: "Veure la ciutat amb algú que la coneix.", intro: "Durada, punt de trobada i què esperar abans de reservar.", primary: "Consultar data", secondary: "Veure rutes", offers: ["Ruta essencial", "Barri i cultura", "Experiència privada"], story: "La ciutat és la imatge; la logística no s’amaga mai." },
    },
  },
  {
    id: "liga", name: "Liga", layout: "workbench", visualMode: "training-schedule", conversion: "trial-session", bestFor: ["gym", "personal-training", "sports-club"],
    colors: ["oklch(0.17 0.035 255)", "oklch(0.97 0 0)", "oklch(0.7 0.22 145)", "oklch(0.3 0.08 255)"], font: "Teko",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Entrenamiento y club", headline: "Entrena con un plan, no con ruido.", intro: "Horarios, niveles y una primera sesión fácil de pedir.", primary: "Probar una sesión", secondary: "Ver entrenamientos", offers: ["Fuerza", "Movilidad", "Entrenamiento personal"], story: "Ritmo de marcador deportivo con información que sí ayuda a decidir." },
      ca: { type: "Entrenament i club", headline: "Entrena amb un pla, no amb soroll.", intro: "Horaris, nivells i una primera sessió fàcil de demanar.", primary: "Provar una sessió", secondary: "Veure entrenaments", offers: ["Força", "Mobilitat", "Entrenament personal"], story: "Ritme de marcador esportiu amb informació que sí ajuda a decidir." },
    },
  },
  {
    id: "sastreria", name: "Sastrería", layout: "portfolio", visualMode: "fashion-atelier", conversion: "fitting", bestFor: ["fashion", "tailor", "boutique"],
    colors: ["oklch(0.21 0.04 25)", "oklch(0.97 0.01 25)", "oklch(0.64 0.17 20)", "oklch(0.83 0.05 25)"], font: "Chivo",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Moda, atelier y confección", headline: "Hecho para sentar bien. Y durar.", intro: "Proceso, materiales y cita de prueba con el producto como protagonista.", primary: "Pedir una prueba", secondary: "Ver trabajo", offers: ["A medida", "Arreglos", "Colección"], story: "El lookbook se convierte en conversación, no en escaparate infinito." },
      ca: { type: "Moda, atelier i confecció", headline: "Fet per quedar bé. I durar.", intro: "Procés, materials i cita de prova amb el producte com a protagonista.", primary: "Demanar una prova", secondary: "Veure treball", offers: ["A mida", "Arranjaments", "Col·lecció"], story: "El lookbook es converteix en conversa, no en aparador infinit." },
    },
  },
  {
    id: "orbita", name: "Órbita", layout: "property", visualMode: "workspace-availability", conversion: "visit-or-desk", bestFor: ["coworking", "studio-rental", "business-center"],
    colors: ["oklch(0.31 0.1 160)", "oklch(0.97 0 0)", "oklch(0.74 0.18 52)", "oklch(0.47 0.1 160)"], font: "Chivo",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Coworking y espacios de trabajo", headline: "Un lugar para trabajar sin trabajar solo.", intro: "Modalidades, ambiente y visita explicados sin comparativas interminables.", primary: "Reservar visita", secondary: "Ver espacios", offers: ["Mesa flexible", "Mesa fija", "Sala de reunión"], story: "Disponibilidad y comunidad comparten la misma portada." },
      ca: { type: "Coworking i espais de treball", headline: "Un lloc per treballar sense treballar sol.", intro: "Modalitats, ambient i visita explicats sense comparatives interminables.", primary: "Reservar visita", secondary: "Veure espais", offers: ["Taula flexible", "Taula fixa", "Sala de reunió"], story: "Disponibilitat i comunitat comparteixen la mateixa portada." },
    },
  },
  {
    id: "barrio", name: "Barrio", layout: "ledger", visualMode: "neighborhood-directory", conversion: "visit-or-contact", bestFor: ["bookshop", "local-retail", "community-space"],
    colors: ["oklch(0.9 0.12 85)", "oklch(0.2 0.04 265)", "oklch(0.58 0.22 30)", "oklch(0.97 0.01 85)"], font: "Atkinson Hyperlegible",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1600&q=82",
    copy: {
      es: { type: "Librería y espacio de barrio", headline: "Siempre hay algo que descubrir cerca.", intro: "Novedades, agenda y ubicación para negocios que viven del regreso.", primary: "Ver agenda", secondary: "Cómo llegar", offers: ["Recomendaciones", "Actividades", "Encargos"], story: "Una cartelera de barrio ordenada por utilidad, no por algoritmo." },
      ca: { type: "Llibreria i espai de barri", headline: "Sempre hi ha alguna cosa per descobrir a prop.", intro: "Novetats, agenda i ubicació per a negocis que viuen del retorn.", primary: "Veure agenda", secondary: "Com arribar", offers: ["Recomanacions", "Activitats", "Encàrrecs"], story: "Una cartellera de barri ordenada per utilitat, no per algoritme." },
    },
  },
];

export const additionalFamiliesById = Object.fromEntries(additionalFamilies.map((family) => [family.id, family]));
