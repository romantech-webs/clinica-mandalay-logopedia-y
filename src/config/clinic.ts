export const clinic = {
  name: "Clínica Mandalay | Logopedia y salud",
  logo: "/images/logo.png",
  tagline: "Logopedia infantil y familiar en Valencia",
  description: "Clínica Mandalay es tu centro de logopedia y salud en Valencia, especializado en terapia infantil con enfoque integral. Dirigido por Yasmina, combinamos logopedia con naturopatía para tratar trastornos del habla, lenguaje, lectura y comunicación. Valorados con 5 estrellas por 17 familias que destacan nuestra conexión con los niños, metodología lúdica y atención personalizada.",
  colors: {
    primary: "#c7b8af",
    secondary: "#3c3735",
    accent: "#dccebc",
    neutral: "#fbf9f9"
  },
  phone: "655 54 60 53",
  whatsapp: "+34655546053",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros servicios de logopedia.",
  email: "",
  address: {
    street: "Carrer Doctor Simarro, 1, 46800 Xàtiva, Valencia, España",
    city: "Valencia",
    province: "Albacete",
    postalCode: "46800",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=3791916200361116759&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Cl%C3%ADnica%20Mandalay%20%7C%20Logopedia%20y%20salud%20%4038.9873%2C-0.529181&z=16&output=embed",
  coordinates: {
    lat: 38.9873,
    lng: -0.529181
  },
  schedule: [
    {
      days: "lunes - martes",
      hours: "16:00–20:30"
    },
    {
      days: "miércoles",
      hours: "10:00–13:00, 16:00–20:00"
    },
    {
      days: "jueves",
      hours: "16:00–20:30"
    },
    {
      days: "viernes",
      hours: "10:00–13:00, 16:00–20:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 17,
    url: "https://maps.google.com/?cid=3791916200361116759&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Alicia Martinez Llorens",
        rating: 5,
        text: "Llegamos a la clinica Mandalay cuando más lo necesitabamos. Buscabamos logopeda para mi hija y la anterior había dejado el listón muy alto. Yasmina desde el minuto 1 conectó con Júlia, motivándola y haciendo que trabajar sus necesidades sea más\nameno y divertido.\nSus conocimientos en Naturopatía han sido un grato descubrimiento para mí. Quiero destacar su lado humano y la capacidad de escucha que tiene.",
        date: "Hace un año"
      },
      {
        author: "Erica Prats",
        rating: 5,
        text: "Muy buen trato con los niños/as. Atención individualizada y directa. Muy buen trato con las familias y información continuada.\nAdemás de fàcil accesibilidad y asequible para muchas familias.\nInstalaciones muy bien adaptadas y ambientadas para el trabajo que se lleva a cabo.",
        date: "Hace un año"
      },
      {
        author: "yazmina moragues",
        rating: 5,
        text: "Es una gran profesional, para mi hija ha sido de gran ayuda, le ha enseñado muchísimas cosas  fonéticamente, con la lectura, con el habla y le ha enseñado un montón de recurso.  Es maravillosa.",
        date: "Hace un año"
      },
      {
        author: "Elena Granero Navarro",
        rating: 5,
        text: "Nuestra experiencia fue muy buena con Yasmina.\nEs una gran profesional,sabe como tratar a los niños y hacer que aprendan con juegos y actividades muy divertidas.\nMi hija iba muy contenta",
        date: "Hace un año"
      },
      {
        author: "Joselyn luna",
        rating: 5,
        text: "Yasmina tiene un amor increíble en lo que hace y enseña, mi hijo la ama y avanzó muchísimo con ella, además de eso es muy accesible, gracias gracias ❤️",
        date: "Hace 2 meses"
      }
    ]
  },
  services: [
    {
      id: "logopedia-infantil",
      name: "Logopedia Infantil",
      description: "Evaluación y tratamiento especializado de trastornos del habla, lenguaje y comunicación en niños. Trabajamos con metodología lúdica y motivadora para que los pequeños aprendan mientras se divierten. Sesiones adaptadas a cada edad y necesidad específica.",
      benefits: [
        "Conexión real con el niño desde la primera sesión",
        "Aprendizaje a través del juego y actividades divertidas",
        "Seguimiento continuo con información a las familias"
      ],
      icon: "Baby"
    },
    {
      id: "trastornos-foneticos",
      name: "Trastornos Fonéticos y Articulación",
      description: "Intervención en dificultades de pronunciación y articulación de sonidos. Enseñamos recursos prácticos para mejorar la claridad del habla y la expresión oral. Trabajamos de forma individualizada cada caso con técnicas efectivas y amenas.",
      benefits: [
        "Mejora notable en la pronunciación y claridad",
        "Técnicas y recursos para practicar en casa",
        "Aumento de la confianza al hablar"
      ],
      icon: "Mic"
    },
    {
      id: "lectoescritura",
      name: "Dificultades de Lectoescritura",
      description: "Tratamiento especializado para niños con problemas de lectura y escritura, incluyendo dislexia y otras dificultades de aprendizaje. Utilizamos métodos adaptados que convierten el aprendizaje en una experiencia positiva y motivadora.",
      benefits: [
        "Mejora en comprensión lectora y velocidad",
        "Refuerzo de la escritura y ortografía",
        "Recuperación de la motivación escolar"
      ],
      icon: "BookOpen"
    },
    {
      id: "desarrollo-lenguaje",
      name: "Desarrollo del Lenguaje",
      description: "Estimulación y desarrollo del lenguaje en niños con retraso o dificultades en la adquisición del habla. Trabajamos vocabulario, estructuras gramaticales y comprensión mediante actividades significativas y contextos naturales.",
      benefits: [
        "Ampliación del vocabulario y expresión",
        "Mejora en la comprensión verbal",
        "Avances visibles y continuos"
      ],
      icon: "MessageCircle"
    },
    {
      id: "naturopatia",
      name: "Naturopatía Complementaria",
      description: "Enfoque integral que combina logopedia con naturopatía para potenciar los resultados terapéuticos. Valoramos aspectos nutricionales, emocionales y del bienestar general que pueden influir en el desarrollo del lenguaje y la comunicación.",
      benefits: [
        "Visión holística de la salud del niño",
        "Tratamiento integral cuerpo-mente",
        "Complemento natural a la terapia logopédica"
      ],
      icon: "Heart"
    },
    {
      id: "logopedia-adultos",
      name: "Logopedia para Adultos",
      description: "Rehabilitación del habla, voz y comunicación en adultos tras patologías neurológicas, cirugías o procesos degenerativos. Tratamiento personalizado para recuperar o mantener las capacidades comunicativas.",
      benefits: [
        "Recuperación de habilidades comunicativas",
        "Mejora de la calidad de vida",
        "Atención profesional y empática"
      ],
      icon: "User"
    },
    {
      id: "orientacion-familiar",
      name: "Orientación a Familias",
      description: "Asesoramiento continuo a padres y familias sobre cómo estimular el lenguaje en casa y reforzar los avances logrados en terapia. Información clara sobre el proceso y pautas prácticas para el día a día.",
      benefits: [
        "Comunicación directa y constante",
        "Pautas claras para aplicar en casa",
        "Implicación activa de la familia en el proceso"
      ],
      icon: "Heart"
    },
    {
      id: "terapia-voz",
      name: "Terapia de la Voz",
      description: "Tratamiento de disfonías, alteraciones vocales y problemas de voz en niños y adultos. Técnicas de higiene vocal y reeducación para cuidar y mejorar la calidad de la voz.",
      benefits: [
        "Recuperación de la calidad vocal",
        "Prevención de lesiones vocales",
        "Técnicas de cuidado vocal diario"
      ],
      icon: "Mic"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 655 54 60 53 o escríbenos por WhatsApp. Te atendemos personalmente para conocer tu situación y resolver tus dudas. Fácil accesibilidad y horarios flexibles para familias."
    },
    {
      step: 2,
      title: "Valoración Personalizada",
      description: "Realizamos una evaluación completa del habla, lenguaje y comunicación. Conocemos al niño o adulto en un ambiente adaptado y acogedor. Identificamos necesidades específicas y establecemos objetivos claros."
    },
    {
      step: 3,
      title: "Sesiones de Logopedia",
      description: "Comenzamos el tratamiento con sesiones individualizadas y adaptadas. Utilizamos juegos, actividades divertidas y recursos motivadores. Trabajamos con metodología que hace que aprender sea ameno y efectivo."
    },
    {
      step: 4,
      title: "Seguimiento y Avances",
      description: "Mantenemos información continuada con las familias sobre los progresos. Ajustamos la terapia según la evolución y proporcionamos pautas para casa. Celebramos cada logro y consolidamos los avances conseguidos."
    }
  ],
  whyUs: [
    {
      title: "Valoración 5⭐ por Familias Reales",
      description: "17 reseñas en Google con puntuación perfecta. Las familias destacan nuestra capacidad de conexión con los niños, metodología lúdica efectiva y trato humano cercano. Resultados que hablan por sí mismos.",
      icon: "Award"
    },
    {
      title: "Enfoque Integral: Logopedia + Naturopatía",
      description: "Combinamos logopedia profesional con naturopatía para una visión completa de la salud. Tratamos no solo el síntoma, sino la persona en su totalidad. Un valor diferencial que nuestras familias descubren y agradecen.",
      icon: "Heart"
    },
    {
      title: "Conexión Real con Cada Niño",
      description: "Yasmina conecta desde el primer minuto con cada niño, motivándoles y haciendo que el trabajo sea ameno y divertido. Los pequeños vienen contentos porque aprenden jugando. Esa conexión es la base de los avances reales.",
      icon: "Smile"
    },
    {
      title: "Atención Familiar Continua",
      description: "Comunicación directa y constante con las familias. Proporcionamos información detallada sobre el progreso, pautas para casa y escucha activa de vuestras necesidades. Instalaciones adaptadas y tarifas accesibles para todos.",
      icon: "Users"
    }
  ],
  team: [
    {
      name: "Yasmina",
      role: "Logopeda y Naturópata",
      image: "/images/team/placeholder.jpg",
      bio: "Logopedas comprometidos con la comunicación. En Clínica Mandalay | Logopedia y salud ayudamos a mejorar el habla, el lenguaje y la comunicación en todas las edades."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Clínica Mandalay | Logopedia y salud - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Clínica Mandalay | Logopedia y salud - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Clínica Mandalay | Logopedia y salud - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Clínica Mandalay | Logopedia y salud - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Clínica Mandalay | Logopedia y salud - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Clínica Mandalay | Logopedia y salud - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Clínica Mandalay | Logopedia y salud - Imagen 7"
    }
  ],
  faq: [
    {
      question: "¿Qué edad tienen los niños que atendéis en Clínica Mandalay?",
      answer: "En Clínica Mandalay trabajamos con niños de todas las edades, desde la primera infancia hasta la adolescencia. Adaptamos nuestras sesiones y metodología a cada etapa evolutiva, utilizando juegos y actividades apropiadas para cada edad. También atendemos adultos que necesitan rehabilitación logopédica."
    },
    {
      question: "¿Cómo son las sesiones de logopedia infantil?",
      answer: "Nuestras sesiones son individualizadas y muy dinámicas. Yasmina conecta con cada niño desde el primer momento, utilizando juegos, actividades lúdicas y recursos motivadores que hacen que el aprendizaje sea divertido. Los niños vienen contentos porque aprenden jugando, y las familias reciben información continua sobre los avances."
    },
    {
      question: "¿Qué problemas del habla tratáis en la clínica?",
      answer: "Tratamos dificultades fonéticas y de articulación, retrasos en el desarrollo del lenguaje, problemas de lectoescritura, trastornos de la voz y dificultades de comunicación en general. Cada tratamiento es personalizado según las necesidades específicas del niño o adulto, con seguimiento continuo y orientación familiar."
    },
    {
      question: "¿Qué es la naturopatía y cómo se relaciona con la logopedia?",
      answer: "En Clínica Mandalay combinamos logopedia con naturopatía para ofrecer un enfoque integral de la salud. La naturopatía complementa el tratamiento logopédico considerando aspectos nutricionales, emocionales y del bienestar general que pueden influir en el desarrollo del lenguaje y la comunicación. Es un valor añadido que muchas familias descubren y valoran positivamente."
    },
    {
      question: "¿Dónde está ubicada la clínica y cómo pido cita?",
      answer: "Clínica Mandalay está en Valencia, con instalaciones adaptadas y ambientadas especialmente para el trabajo con niños. Para pedir cita puedes llamarnos al 655 54 60 53 o escribirnos por WhatsApp. Ofrecemos fácil accesibilidad y tarifas asequibles para las familias."
    },
    {
      question: "¿Cuánto dura un tratamiento de logopedia?",
      answer: "La duración depende de cada caso y de las necesidades específicas. Tras la valoración inicial establecemos objetivos claros y un plan de tratamiento personalizado. Realizamos seguimiento continuo y ajustamos la terapia según la evolución. Muchas familias ven avances significativos desde las primeras sesiones."
    },
    {
      question: "¿Reciben las familias información sobre el progreso?",
      answer: "Sí, en Clínica Mandalay mantenemos comunicación directa y continuada con las familias. Proporcionamos información regular sobre los avances, explicamos qué trabajamos en cada sesión y damos pautas prácticas para reforzar en casa. La capacidad de escucha y el trato cercano son valores que nuestras familias destacan especialmente."
    },
    {
      question: "¿Qué opinan las familias que ya han venido?",
      answer: "Clínica Mandalay tiene una valoración de 5 estrellas en Google con 17 reseñas de familias satisfechas. Los padres destacan la conexión que Yasmina establece con los niños, su profesionalidad, el ambiente acogedor, las instalaciones adaptadas y los avances conseguidos. Muchos llegan recomendados y encuentran justo lo que necesitaban para sus hijos."
    }
  ],
  seo: {
    titleTemplate: "%s | Clínica Mandalay | Logopedia y salud",
    defaultTitle: "Clínica Mandalay | Logopedia Infantil en Valencia",
    defaultDescription: "Centro de logopedia infantil y familiar en Valencia. Tratamos habla, lenguaje, lectura con enfoque integral. 5⭐ en Google. Naturopatía complementaria. Pide cita: 655 54 60 53",
    keywords: [
      "logopedia infantil Valencia",
      "logopeda niños Valencia",
      "Clínica Mandalay",
      "logopedia Valencia",
      "trastornos habla Valencia",
      "dificultades lectoescritura Valencia",
      "naturopatía Valencia",
      "logopeda Yasmina Valencia",
      "terapia lenguaje infantil Valencia",
      "pronunciación niños Valencia",
      "logopedia familiar Valencia",
      "centro logopedia Valencia"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Clínica Mandalay | Logopedia y salud",
    cif: "",
    registeredAddress: "Carrer Doctor Simarro, 1, 46800 Xàtiva, Valencia, España, Valencia, Albacete"
  },
  heroHeadline: [
    "Tu Centro de",
    "Logopedia",
    "en Valencia"
  ],
  heroDescription: "Centro de logopedia especializado en niños y familias en Valencia. Tratamos dificultades del habla, lenguaje, lectura y comunicación con un enfoque humano, lúdico y efectivo. Combinamos logopedia profesional con naturopatía para resultados integrales.",
  specialty: "Logopedia Infantil",
  ctaLabel: "Mejor Comunicación",
  ctaHeadline: "¿Tu hijo necesita apoyo con el habla o la lectura?",
  ctaDescription: "Contacta con nosotros y descubre cómo podemos ayudaros. Primera valoración personalizada para conocer las necesidades de tu familia.",
  statsLabel: "Pacientes",
  schemaType: "SpeechPathology",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
