/* EDITA AQUÍ: añade categorías o subhabilidades copiando uno de estos objetos. */
// Datos editables de Habilidades: cada categoría contiene imagen, descripción y subhabilidades.
function setupCharacterGif() {
  const character = document.querySelector(".brand-character");
  if (!character || character.dataset.gifReady) return;
  character.dataset.gifReady = "true";
  const staticImage = character.getAttribute("src");
  const animatedGif = character.dataset.gif;
  if (!animatedGif) return;
  character.addEventListener("mouseenter", () => {
    character.src = animatedGif;
  });
  character.addEventListener("mouseleave", () => {
    character.src = staticImage;
  });
}

const skills = [
  {
    title: "Diseño y prototipado",
    label: "ÁREA PRINCIPAL",
    wide: true,
    tools: [
      {
        name: "Unity",
        image:
          "Imagenes/Habilidades/Aplicaciones/unity-logo.png",
      },
      {
        name: "Unreal",
        image:
          "Imagenes/Habilidades/Aplicaciones/Unreal.png",
      },
      {
        name: "Construct",
        image:
          "Imagenes/Habilidades/Aplicaciones/construct-logo-DF244B4ECA-seeklogo.com.png",
      },
      {
        name: "Figma",
        image:
          "Imagenes/Habilidades/Aplicaciones/Figma-logo.svg.png",
      },
      {
        name: "Miro",
        image:
          "Imagenes/Habilidades/Aplicaciones/Miro.png",
      },
      {
        name: "Notion",
        image:
          "Imagenes/Habilidades/Aplicaciones/Notion-logo.svg.png",
      },
    ],
    image: "Imagenes/Habilidades/Diseño de videojuegos.gif",
    description:
      "Me gusta pensar en las reglas como el idioma del juego: tienen que ser claras, pero también dejar espacio para que el jugador las interprete y se sorprenda." ,
    items: [
      [
        "Diseño de Narrativa",
        "Me encargo de crear y estructurar la historia, personajes, universo y diálogos, integrando la narrativa con las mecánicas y la experiencia del jugador.",
      ],
      [
        "Level design",
        "Me encargo de diseñar los espacios jugables, recorridos, retos, objetivos y ritmo de los niveles para construir una experiencia equilibrada y atractiva.",
      ],
      [
        "Diseño de sistemas",
        "Me encargo de diseñar las reglas, mecánicas, progresión, recursos y relaciones entre los diferentes sistemas que conforman la experiencia de juego.",
      ],
      [
        "UX/UI",
        "Me encargo de diseñar y optimizar la experiencia del usuario, facilitando la interacción con las interfaces, sistemas y mecánicas de forma clara, intuitiva y accesible.",
      ],
      [
        "Prototipado y Testeo",
        "Me encargo de crear prototipos para probar y validar mecánicas, sistemas e ideas de diseño, detectando problemas y realizando iteraciones antes de su implementación final.",
      ],
      [
        "Documentación",
        "Me encargo de estructurar y mantener la documentación del proyecto, definiendo mecánicas, sistemas, niveles y procesos para facilitar la comunicación y el desarrollo del equipo.",
      ],
      [
        "Gamificación",
        "Me encargo de aplicar principios y mecánicas de diseño de juegos a experiencias interactivas para fomentar la participación, motivación y consecución de objetivos.",
      ],
    ],
  },
  {
    title: "Inteligencia artificial",
    label: "ÁREA COMPLEMENTARIA",
    image: "Imagenes/Habilidades/Inteligencia Artificial.png",
    tools: [
      {
        name: "Copilot",
        image: "Imagenes/Habilidades/Aplicaciones/IAs/microsoft-copilot.png",
      },
      {
        name: "ChatGPT",
        image:
          "Imagenes/Habilidades/Aplicaciones/IAs/chatgpt-logo-png_seeklogo-465219.png",
      },
      {
        name: "Claude",
        image:
          "Imagenes/Habilidades/Aplicaciones/IAs/claude-logo-png_seeklogo-554534.png",
      },
      {
        name: "Gemini",
        image:
          "Imagenes/Habilidades/Aplicaciones/IAs/Gemini-icon.png",
      },
    ],
    description:
      "Estoy aprendiendo a usar la IA como una herramienta de exploración, no como un sustituto de las decisiones.",
    wide: true,
    items: [
      [
        "Fundamentos de IA y Machine Learning",
        "Me encargo de comprender y aplicar conceptos fundamentales de Inteligencia Artificial y Machine Learning en diferentes contextos y procesos creativos.",
      ],
      [
        "Prompting",
        "Me encargo de diseñar y optimizar prompts para obtener resultados precisos y adaptados a diferentes necesidades creativas.",
      ],
      [
        "Soft IA",
        "Me encargo de utilizar herramientas de IA orientadas a la generación de contenido, automatización y apoyo a procesos creativos.",
      ],
      [
        "Aplicacion de IA para el analisis de datos",
        "Me encargo de aplicar herramientas de Inteligencia Artificial al análisis, interpretación y explotación de datos.",
      ],
      [
        "Aplicación de herramientas para optimización",
        "Me encargo de identificar, seleccionar y aplicar herramientas de IA según las necesidades de cada proyecto, integrándolas en diferentes fases del proceso creativo.",
      ],
    ],
  },
  {
    title: "Programación",
    label: "ÁREA COMPLEMENTARIA",
    image: "Imagenes/Habilidades/Programacion.jpg",
    tools: [
      { name: "C#", image: "Imagenes/Habilidades/Aplicaciones/Programación/C#.png" },
      { name: "Unreal Blueprint", image: "Imagenes/Habilidades/Aplicaciones/Programación/Unreal blueprint.png" },
      {name: "Html", image: "Imagenes/Habilidades/Aplicaciones/Programación/Html.png", },
      {name: "Css", image: "Imagenes/Habilidades/Aplicaciones/Programación/Css.png",},
      {name: "Java script", image: "Imagenes/Habilidades/Aplicaciones/Programación/Js.png",},
    ],
    description:
      "Programo lo suficiente para que una idea deje de ser una explicación y se convierta en algo que podamos jugar.",
    items: [
      [
        "C#",
        "Me encargo de programar videojuegos en Unity utilizando C#, creando mecánicas, sistemas e interacciones.",
      ],
      [
        "Blueprint unreal",
        "Me encargo de crear mecánicas y sistemas para videojuegos utilizando Blueprints en Unreal Engine.",
      ],
      [
        "Html, css y js",
        "Me encargo de crear páginas web utilizando HTML, CSS y JavaScript, trabajando tanto en el diseño como en la funcionalidad.",
      ],
      [
        "Aprendiendo C++",
        "Actualmente estoy aprendiendo C++ para ampliar mis conocimientos de programación y aplicarlos al desarrollo de videojuegos y aplicaciones.",
      ],
    ],
  },
  {
    title: "Arte",
    label: "ÁREA COMPLEMENTARIA",
    image: "Imagenes/Habilidades/Arte.gif",
    tools: [
      {
        name: "Aseprite",
        image:
          "Imagenes/Habilidades/Aplicaciones/Dibujo/Logo_Aseprite.svg.png",
      },
      {
        name: "Photoshop",
        image: "Imagenes/Habilidades/Aplicaciones/Dibujo/Adobe_Photoshop_CC_icon.svg.png",
      },
      {
        name: "Ilustrator",
        image:
          "Imagenes/Habilidades/Aplicaciones/Dibujo/Adobe_Illustrator_CC_icon.svg.png",
      },
    ],
    description:
      "El arte me ayuda a pensar con claridad y a que una idea empiece a tener una identidad propia.",
    items: [
      [
        "Pixel Art",
        "Me encargo de crear sprites, objetos y pequeños elementos visuales en pixel art para videojuegos.",
      ],
      [
        "Bocetado",
        "Utilizo bocetos sencillos para representar y desarrollar ideas antes de llevarlas a una versión más elaborada.",
      ],
      [
        "Diseño de mapas",
        "Me encargo de crear mapas y niveles cuadriculados, organizando espacios, recorridos y elementos del escenario.",
      ],
      [
        "Documentación visual",
        "Utilizo dibujos y esquemas para explicar mecánicas, diseños y conceptos de forma visual.",
      ],
    ],
  },
];

// Datos editables de Proyectos: todos los campos de las fichas se editan aquí.
// Cada proyecto puede tener su propia portada, resumen, galería, contribuciones, aprendizaje y CTA.
const projects = [
  {
    slug: "bugged-out",
     title: { es: "Bugged Out", en: "Bugged Out" },
    type: { es: "Videojuego", en: "Video Game" },
    date: { es: "2026", en: "2026" },
    status: { es: "En proceso", en: "In progress" },
    description: {
      es: "",
      en: "",
    },
     role: { es: "Diseñador de narrativa", en: "Narrative Designer" },
    tools: { es: "Unreal", en: "Unreal" },
    image: "",
    video: "Imagenes/Juegos/Bugged Out/Presentacion MIG.mp4",
    cardImage: "Imagenes/Juegos/Bugged Out/Presentacion MIG.gif",
    cardVideo: "Imagenes/Juegos/Bugged Out/Presentacion MIG.gif",
    website: {
      enabled: true,
      url: "",
      label: { es: "Visitar la página del juego", en: "Visit the game website" },
    },
    theme: {
      primary: "#444545",
      deep: "#0e0505",
      accent: "#f70303",
      secondary: "#8e0000",
      glow: "rgba(255, 7, 7, 0.16)",
      grid: "rgba(247, 243, 236, 0.08)",
      radius: "20px",
    },
     team: {
      name: { es: "Evil Duck", en: "Evil Duck" },
      members: [
        { name: { es: "Andrés Calvo" }, role: { es: "Diseño-Arte-Cinematicas", en: "Art-Cinematics" } },
        { name: { es: "LucÍa Pelado" }, role: { es: "Art", en: "Art" } },
        { name: { es: "Rorigo López-Salazar" }, role: { es: "Diseño-Diseño de Nivel", en: "Design – Level Design" } },
        { name: { es: "Pablo Manuel Martín" }, role: { es: "Programación", en: "Programming" } },
        { name: { es: "Pablo Menéndez-Morán" }, role: { es: "Diseño-Diseño de narrativa ", en: "Design–Narrative design" } },
      ],
    },
     summary: {
      paragraphs: [
        { es: "Bugged Out es una aventura narrativa en tercera persona que combina la estética del cine noir con un mundo de insectos antropomórficos. En una ciudad corrupta y decadente, el jugador se adentra en una investigación marcada por la intriga, los dilemas morales y una lucha constante por la supervivencia. A través de la exploración, la búsqueda de pistas, los interrogatorios y la toma de decisiones, descubrirá una historia oscura que plantea una crítica social en un universo tan original como inquietante.", en: "Bugged Out is a third-person narrative adventure that blends film noir aesthetics with a world of anthropomorphic insects. Set in a corrupt, decaying city, the game plunges the player into an investigation defined by intrigue, moral dilemmas, and a constant struggle for survival. Through exploration, clue-hunting, interrogations, and decision-making, the player uncovers a dark story that offers social commentary within a universe that is as original as it is unsettling." },
        { es: "", en: "" },
      ],

      details: [
        { label: { es: "Estudio / equipo", en: "Studio / team" }, value: { es: "Añadir equipo", en: "Add team" } },
        { label: { es: "Género", en: "Genre" }, value: { es: "Aventura Narrativa / Misterio / Noir.", en: "Narrative Adventure / Mystery / Noir." } },
        { label: { es: "Estado", en: "Status" }, value: { es: "En desarrollo", en: "In development" } },
      ],

    },
    gallery: [{ src:"Imagenes/Juegos/Bugged Out/Presentacion MIG.gif"}, { src:"Imagenes/Juegos/Bugged Out/Interrogar.gif"}, { src:"Imagenes/Juegos/Bugged Out/Movimiento y ambiente.gif"}, { src:"Imagenes/Juegos/Bugged Out/Noctrium.gif"},],
    contributions: [
      {
        title: { es: "Reto y objetivo", en: "Challenge and goal" },
        text: { es: "Explica qué querías descubrir, para quién era y qué problema decidiste abordar.", en: "Explain what you wanted to discover, who it was for and which problem you chose to address." },
        image: "",
        imageAlt: { es: "Imagen pendiente de la contribución", en: "Contribution image pending" },
      },
      {
        title: { es: "Decisiones de diseño", en: "Design decisions" },
        text: { es: "Cuenta las decisiones que dieron forma a la experiencia, las pruebas realizadas y por qué cambiaste el rumbo.", en: "Describe the decisions, tests and iterations that shaped the experience." },
        image: "",
        imageAlt: { es: "Imagen pendiente de la contribución", en: "Contribution image pending" },
      },
    ],
    learned: {
      text: { es: "Cuenta qué te enseñó el proyecto y qué cambiarías si tuvieras una semana más.", en: "Explain what the project taught you and what you would change with one more week." },
      points: [],
    },
    visual: "visual-1",
  },
  {
    slug: "Videojuego ARG",
    title: { es: "Hotel Alighieri", en: "Hotel Alighieri" },
    type: { es: "Videojuego con elementos ARG", en: "Video game with ARG elements" },
    date: { es: "2025", en: "2025" },
    status: { es: "Demo Publicada", en: "Demo Publicada" },
    description: {

    },
    role: { es: "Lead Designer-Lead Programmer", en: "Lead Designer-Lead Programmer" },
    tools: { es: "Unreal", en: "Unreal" },
    image: "",
    video: "Imagenes/Juegos/Hotel Alighieri/Presentación Hotel Alighieri.mp4",
    cardImage: "Imagenes/Juegos/Hotel Alighieri/Hotel alighieri.jpg",
    cardVideo: "Imagenes/Juegos/Hotel Alighieri/Hotel alighieri.jpg",
    website: {
      enabled: true,
      url: "https://bloodmoons-studios.itch.io/hotel-alighieri",
      label: { es: "Visitar la página del juego", en: "Visit the game website" },
    },
    theme: {
      primary: "#30302c",
      deep: "#0e0505",
      accent: "#c6d30f",
      secondary: "#8e0000",
      glow: "rgba(255, 7, 7, 0.16)",
      grid: "rgba(247, 247, 236, 0.08)",
      radius: "20px",
    },
    team: {
      name: { es: "BloodMoon studios" },
      members: [
        { name: { es: "Nombre del integrante 1", en: "Member name 1" }, role: { es: "Puesto del integrante 1", en: "Member role 1" } },
        { name: { es: "Nombre del integrante 2", en: "Member name 2" }, role: { es: "Puesto del integrante 2", en: "Member role 2" } },
      ],
    },
    summary: {
      paragraphs: [
        { es: "Cuenta aquí qué querías explorar y qué restricciones tenía el prototipo.", en: "Describe what you wanted to explore and which constraints shaped the prototype." },
        { es: "Resume cómo se juega y qué hipótesis querías validar con una versión pequeña.", en: "Summarise how it plays and which hypothesis you wanted to validate with a small version." },
      ],
      details: [
        { label: { es: "Género", en: "Genre" }, value: { es: "Supervivencia-Terror psicológico", en: "Survival-Psychological horror" } },
        { label: { es: "Equipo", en: "Team" }, value: { es: "Añadir equipo", en: "Add team" } },
        { label: { es: "Estado", en: "Status" }, value: { es: "Beta", en: "Beta" } },
      ],
    },
    gallery: [],
    contributions: [
      {
        title: { es: "Idea que poner a prueba", en: "Idea to test" },
        text: { es: "Describe la hipótesis que querías validar con el prototipo y cómo la convertiste en una experiencia jugable.", en: "Describe the hypothesis you wanted to validate and how you turned it into a playable experience." },
        image: "",
        imageAlt: { es: "Imagen pendiente de la contribución", en: "Contribution image pending" },
      },
      {
        title: { es: "Iteración", en: "Iteration" },
        text: { es: "Resume qué cambió después de probarlo, qué no funcionó y qué aprendiste.", en: "Summarise what changed after testing, what did not work and what you learned." },
        image: "",
        imageAlt: { es: "Imagen pendiente de la contribución", en: "Contribution image pending" },
      },
    ],
    learned: {
      text: { es: "Escribe qué funcionó, qué no y qué te llevas para el siguiente prototipo.", en: "Write what worked, what did not and what you will carry into the next prototype." },
      points: [],
    },
    visual: "visual-2",
  },
  {
    slug: "proyecto-colaborativo",
    title: { es: "Slap League", en: "Collaborative project" },
    type: { es: "Trabajo en equipo", en: "Team project" },
    date: { es: "Añadir fecha", en: "Add date" },
    status: { es: "Añadir proyecto real", en: "Add real project" },
    description: {
      es: "Explica qué necesitaba el equipo y qué parte concreta asumiste para que el proyecto avanzara.",
      en: "Explain what the team needed and which specific part you took on to move the project forward.",
    },
    role: { es: "Añadir tu rol", en: "Add your role" },
    tools: { es: "Añadir motor y herramientas", en: "Add engine and tools" },
    image: "",
    video: "",
    cardImage: "",
    cardVideo: "",
    website: {
      enabled: true,
      url: "",
      label: { es: "Visitar la página del juego", en: "Visit the game website" },
    },
    theme: {
      primary: "#2e625b",
      deep: "#111820",
      accent: "#b8d96b",
      secondary: "#ff6b4a",
      glow: "rgba(184, 217, 107, 0.14)",
      grid: "rgba(247, 243, 236, 0.08)",
      radius: "20px",
    },
    team: {
      name: { es: "Añadir nombre del equipo", en: "Add team name" },
      members: [
        { name: { es: "Nombre del integrante 1", en: "Member name 1" }, role: { es: "Puesto del integrante 1", en: "Member role 1" } },
        { name: { es: "Nombre del integrante 2", en: "Member name 2" }, role: { es: "Puesto del integrante 2", en: "Member role 2" } },
      ],
    },
    summary: {
      paragraphs: [
        { es: "Presenta el equipo, el encargo y el objetivo común del proyecto.", en: "Introduce the team, brief and shared goal." },
        { es: "Explica qué necesitaba la experiencia para funcionar y dónde encajaba tu responsabilidad.", en: "Explain what the experience needed to work and where your responsibility fitted in." },
      ],
      details: [
        { label: { es: "Motor / herramientas", en: "Engine / tools" }, value: { es: "Añadir herramientas", en: "Add tools" } },
        { label: { es: "Equipo", en: "Team" }, value: { es: "Añadir equipo", en: "Add team" } },
        { label: { es: "Estado", en: "Status" }, value: { es: "Completado", en: "Completed" } },
      ],
    },
  },
  {
    slug: "Juego de cartas ",
    title: { es: "Cabras Locas", en: "Collaborative project" },
    type: { es: "Trabajo en equipo", en: "Team project" },
    date: { es: "Añadir fecha", en: "Add date" },
    status: { es: "Añadir proyecto real", en: "Add real project" },
    description: {
      es: "Explica qué necesitaba el equipo y qué parte concreta asumiste para que el proyecto avanzara.",
      en: "Explain what the team needed and which specific part you took on to move the project forward.",
    },
    role: { es: "Añadir tu rol", en: "Add your role" },
    tools: { es: "Añadir motor y herramientas", en: "Add engine and tools" },
    image: "",
    video: "",
    cardImage: "",
    cardVideo: "",
    website: {
      enabled: true,
      url: "",
      label: { es: "Visitar la página del juego", en: "Visit the game website" },
    },
    theme: {
      primary: "#2e625b",
      deep: "#111820",
      accent: "#b8d96b",
      secondary: "#ff6b4a",
      glow: "rgba(184, 217, 107, 0.14)",
      grid: "rgba(247, 243, 236, 0.08)",
      radius: "20px",
    },
    team: {
      name: { es: "Añadir nombre del equipo", en: "Add team name" },
      members: [
        { name: { es: "Nombre del integrante 1", en: "Member name 1" }, role: { es: "Puesto del integrante 1", en: "Member role 1" } },
        { name: { es: "Nombre del integrante 2", en: "Member name 2" }, role: { es: "Puesto del integrante 2", en: "Member role 2" } },
      ],
    },
    summary: {
      paragraphs: [
        { es: "Presenta el equipo, el encargo y el objetivo común del proyecto.", en: "Introduce the team, brief and shared goal." },
        { es: "Explica qué necesitaba la experiencia para funcionar y dónde encajaba tu responsabilidad.", en: "Explain what the experience needed to work and where your responsibility fitted in." },
      ],
      details: [
        { label: { es: "Motor / herramientas", en: "Engine / tools" }, value: { es: "Añadir herramientas", en: "Add tools" } },
        { label: { es: "Equipo", en: "Team" }, value: { es: "Añadir equipo", en: "Add team" } },
        { label: { es: "Estado", en: "Status" }, value: { es: "Completado", en: "Completed" } },
      ],
    },
  },


];

// Datos editables de Documentación: añade portadas, enlaces, categorías e idiomas aquí.
const documents = [
  {
    title: { es: "GDD de diseño de juego", en: "Game design document" },
    project: { es: "Proyecto principal", en: "Main project" },
    category: "gameplay",
    label: { es: "GAMEPLAY", en: "GAMEPLAY" },
    format: "PDF",
    year: "2026",
    languages: "ES / EN",
    description: {
      es: "Documento para explicar el contexto, las reglas principales, el objetivo de diseño y las decisiones que convierten una idea en una experiencia jugable.",
      en: "A document explaining the context, core rules, design goal and decisions that turn an idea into a playable experience.",
    },
    image: "Imagenes/Habilidades/Diseño de videojuegos.gif",
    url: "",
  },
  {
    title: { es: "Sistema y progresión", en: "Systems and progression" },
    project: { es: "Sistema interactivo", en: "Interactive system" },
    category: "systems",
    label: { es: "SISTEMAS", en: "SYSTEMS" },
    format: "PDF / XLSX",
    year: "2026",
    languages: "ES / EN",
    description: {
      es: "Una plantilla para documentar variables, estados, recursos, progresión y relaciones entre sistemas sin perder de vista la experiencia del jugador.",
      en: "A framework for documenting variables, states, resources, progression and system relationships while keeping the player experience in focus.",
    },
    image: "Imagenes/Habilidades/Programacion.jpg",
    url: "",
  },
  {
    title: { es: "Flujo UX / UI", en: "UX / UI flow" },
    project: { es: "Interfaz en contexto", en: "Interface in context" },
    category: "ux",
    label: { es: "UX / UI", en: "UX / UI" },
    format: "PDF / FIGMA",
    year: "2026",
    languages: "ES / EN",
    description: {
      es: "Un documento para conectar objetivos del jugador, arquitectura de información, wireframes y decisiones visuales antes de implementar una interfaz.",
      en: "A document connecting player goals, information architecture, wireframes and visual decisions before implementing an interface.",
    },
    image: "Imagenes/Habilidades/Aplicaciones/Figma-logo.svg.png",
    url: "",
  },
  {
    title: { es: "Análisis y aprendizajes", en: "Analysis and learnings" },
    project: { es: "Investigación de diseño", en: "Design research" },
    category: "research",
    label: { es: "INVESTIGACIÓN", en: "RESEARCH" },
    format: "PDF",
    year: "2026",
    languages: "ES / EN",
    description: {
      es: "Análisis de referencias y pruebas para entender qué funciona, qué falla y qué decisiones merece la pena llevar a un prototipo.",
      en: "Reference analysis and testing to understand what works, what fails and which decisions are worth taking into a prototype.",
    },
    image: "Imagenes/Habilidades/Inteligencia Artificial.png",
    url: "",
  },
  {
    title: { es: "Movimiento y cámara", en: "Movement and camera" },
    project: { es: "Prototipo de mecánica", en: "Mechanic prototype" },
    category: "research",
    label: { es: "EXPERIMENTO", en: "EXPERIMENT" },
    format: "GIF / PROTOTIPO",
    year: "2026",
    languages: "ES / EN",
    description: {
      es: "Una prueba pequeña para estudiar cómo el ritmo del movimiento cambia la lectura de un nivel.",
      en: "A small test exploring how movement rhythm changes the way a level is read.",
    },
    image: "/manus-storage/skill-design_b9258bcc.png",
    url: "",
  },
  {
    title: { es: "Interfaz en contexto", en: "Interface in context" },
    project: { es: "Experimento UX", en: "UX experiment" },
    category: "research",
    label: { es: "EXPERIMENTO", en: "EXPERIMENT" },
    format: "GIF / UX",
    year: "2026",
    languages: "ES / EN",
    description: {
      es: "Una exploración de cómo presentar información sin interrumpir la atención del jugador.",
      en: "An exploration of how to present information without interrupting the player's attention.",
    },
    image: "/manus-storage/skill-art_a485fde1.png",
    url: "",
  },
  {
    title: { es: "Idea en 48 horas", en: "An idea in 48 hours" },
    project: { es: "Game jam", en: "Game jam" },
    category: "research",
    label: { es: "EXPERIMENTO", en: "EXPERIMENT" },
    format: "GIF / GAME JAM",
    year: "2026",
    languages: "ES / EN",
    description: {
      es: "Un experimento breve para aprender qué decisiones sobreviven cuando el tiempo obliga a priorizar.",
      en: "A short experiment to learn which decisions survive when time forces prioritisation.",
    },
    image: "/manus-storage/skill-programming_69e5ebc9.png",
    url: "",
  },
];

// Datos editables de Experiencia: cambia imagen, textos, fechas y organización aquí.
const experiences = [
  {
    title: { es: "Diseño y Desarrollo de Videojuegos y Entornos Virtuales", en: "Game Design and Virtual Environments" },
    organization: "UDIT",
    date: "2022 — 2026",
    image: "Imagenes/Experiencia/Diseño y desarrollo de videojuegos y entornos virtuales.jpg",
    description: { es: "Durante mi formación en Diseño y Desarrollo de Videojuegos en UDIT, me especializo en la rama de Diseño, aprendiendo a desarrollar videojuegos desde la conceptualización de una idea hasta su implementación. Trabajo en la creación de mecánicas, niveles, sistemas de juego y experiencias centradas en el jugador, colaborando con perfiles de programación y arte para desarrollar proyectos completos.", en: "During my Game Design and Development studies at UDIT, I specialise in the Design pathway, learning to develop games from the conceptualisation of an idea through to implementation. I work on mechanics, levels, game systems and player-centred experiences, collaborating with programming and art profiles to develop complete projects." },
    areas: {
      es: ["Diseño de mecánicas y sistemas de juego.", "Diseño y planificación de niveles y mapas.", "Creación de prototipos y pruebas de gameplay.", "Diseño de narrativa y experiencias interactivas.", "Conceptualización y diseño visual de videojuegos.", "Diseño centrado en la experiencia del jugador.", "Desarrollo y documentación de ideas y conceptos.", "Trabajo en equipos multidisciplinares.", "Uso de Unity y Unreal Engine.", "Iteración y mejora a partir de pruebas y feedback.", "Desarrollo de proyectos prácticos y trabajos en equipo."],
      en: ["Game mechanics and systems design.", "Level and map design and planning.", "Prototype creation and gameplay testing.", "Narrative design and interactive experiences.", "Game visual conceptualisation and design.", "Player experience-centred design.", "Development and documentation of ideas and concepts.", "Multidisciplinary teamwork.", "Using Unity and Unreal Engine.", "Iteration and improvement through testing and feedback.", "Practical projects and collaborative work."],
    },
    learned: { es: "Esta formación me ha permitido construir una base sólida para diseñar experiencias jugables y trabajar dentro de equipos de desarrollo.", en: "This training has given me a strong foundation for designing playable experiences and working within development teams." },
    learnedPoints: {
      es: ["Convertir ideas abstractas en prototipos jugables.", "Justificar decisiones de diseño mediante pruebas.", "Analizar el comportamiento y la experiencia del jugador.", "Colaborar con perfiles de programación y arte.", "Iterar y mejorar un proyecto a partir del feedback."],
      en: ["Turning abstract ideas into playable prototypes.", "Supporting design decisions through testing.", "Analysing player behaviour and experience.", "Collaborating with programming and art profiles.", "Iterating and improving a project through feedback."],
    },
  },
  {
    title: { es: "Curso básico de Inteligencia Artificial Aplicada", en: "Basic Applied Artificial Intelligence Course" },
    organization: "UDIT",
    date: "2024 — 2025",
    image: "Imagenes/Experiencia/IA basico.jpg",
    description: { es: "Durante este curso en UDIT me introduje en los fundamentos de la Inteligencia Artificial Aplicada y exploré cómo puede incorporarse de forma responsable a procesos creativos, de investigación y de desarrollo de proyectos.", en: "During this course at UDIT, I was introduced to the fundamentals of Applied Artificial Intelligence and explored how it can be responsibly integrated into creative, research and project development processes." },
    areas: {
      es: ["Fundamentos de Inteligencia Artificial y Machine Learning.", "Comprensión de los principales tipos de herramientas de IA.", "Diseño y optimización de prompts.", "Generación y exploración de ideas creativas.", "Análisis y síntesis de información.", "Aplicación de IA a procesos de investigación.", "Automatización de tareas repetitivas.", "Evaluación crítica de resultados generados.", "Uso responsable y ético de la Inteligencia Artificial.", "Integración de herramientas de IA en proyectos."],
      en: ["Artificial Intelligence and Machine Learning fundamentals.", "Understanding the main types of AI tools.", "Prompt design and optimisation.", "Creative idea generation and exploration.", "Information analysis and synthesis.", "Applying AI to research processes.", "Automating repetitive tasks.", "Critical evaluation of generated results.", "Responsible and ethical use of AI.", "Integrating AI tools into projects."],
    },
    learned: { es: "El curso me ayudó a entender la IA como una herramienta de apoyo que necesita criterio, revisión y una intención clara.", en: "The course helped me understand AI as a support tool that requires judgement, review and a clear intention." },
    learnedPoints: {
      es: ["Investigar y comparar herramientas según cada necesidad.", "Formular preguntas y prompts más precisos.", "Revisar los resultados antes de utilizarlos.", "Detectar limitaciones y posibles errores.", "Aplicar la IA de forma responsable en procesos creativos."],
      en: ["Researching and comparing tools according to each need.", "Formulating more precise questions and prompts.", "Reviewing results before using them.", "Detecting limitations and possible errors.", "Applying AI responsibly in creative processes."],
    },
  },
  {
    title: { es: "Curso intermedio de Inteligencia Artificial Aplicada", en: "Intermediate Applied Artificial Intelligence Course" },
    organization: "UDIT",
    date: "2025 — 2026",
    image: "Imagenes/Experiencia/IA intermedio.jpg",
    description: { es: "En el curso intermedio profundicé en el uso práctico de herramientas de Inteligencia Artificial para apoyar el análisis, la automatización y la toma de decisiones dentro de proyectos creativos y tecnológicos.", en: "In the intermediate course, I deepened my practical use of Artificial Intelligence tools to support analysis, automation and decision-making within creative and technological projects." },
    areas: {
      es: ["Creación de prompts más precisos y estructurados.", "Diseño de flujos de trabajo asistidos por IA.", "Automatización y optimización de procesos.", "Análisis, clasificación e interpretación de datos.", "Comparación y selección de herramientas.", "Aplicación de IA a la documentación de proyectos.", "Apoyo a la ideación y al desarrollo de conceptos.", "Revisión y validación de resultados.", "Identificación de errores, sesgos y limitaciones.", "Integración de la IA manteniendo el criterio humano."],
      en: ["Creating more precise and structured prompts.", "Designing AI-assisted workflows.", "Process automation and optimisation.", "Data analysis, classification and interpretation.", "Comparing and selecting tools.", "Applying AI to project documentation.", "Supporting ideation and concept development.", "Reviewing and validating results.", "Identifying errors, bias and limitations.", "Integrating AI while keeping human judgement."],
    },
    learned: { es: "La experiencia me enseñó a combinar automatización y análisis sin perder la intención humana ni el control sobre las decisiones del proyecto.", en: "The experience taught me to combine automation and analysis without losing human intent or control over project decisions." },
    learnedPoints: {
      es: ["Diseñar flujos de trabajo asistidos por IA.", "Automatizar tareas repetitivas y optimizar procesos.", "Analizar datos para apoyar decisiones.", "Validar los resultados antes de incorporarlos.", "Mantener el criterio humano en todo el proceso."],
      en: ["Designing AI-assisted workflows.", "Automating repetitive tasks and optimising processes.", "Analysing data to support decisions.", "Validating results before incorporating them.", "Keeping human judgement throughout the process."],
    },
  },
  {
    title: { es: "Prácticas diseñando Escape Rooms", en: "Escape Room Design Internship" },
    organization: "Icarus Escape",
    date: "2024 — 2025",
    image: "Imagenes/Experiencia/Icarus Escape.jpg",
    description: { es: "Durante mis prácticas en Icarus Escape participé en el diseño de experiencias de escape room, trabajando en retos, recorridos y momentos de descubrimiento pensados para grupos de jugadores reales.", en: "During my internship at Icarus Escape, I contributed to the design of escape room experiences, working on puzzles, flows and moments of discovery designed for real groups of players." },
    areas: {
      es: ["Diseño de retos y puzles físicos.", "Creación de recorridos y secuencias de juego.", "Diseño de pistas y sistemas de descubrimiento.", "Equilibrado de dificultad y ritmo.", "Observación del comportamiento de los jugadores.", "Pruebas de juego con usuarios reales.", "Iteración a partir de feedback y resultados.", "Diseño de experiencias colaborativas.", "Comunicación de ideas dentro de un equipo.", "Adaptación de retos a distintos perfiles de jugador."],
      en: ["Physical puzzle and challenge design.", "Creating game flows and sequences.", "Designing clues and discovery systems.", "Balancing difficulty and pacing.", "Observing player behaviour.", "Playtesting with real users.", "Iterating from feedback and results.", "Designing collaborative experiences.", "Communicating ideas within a team.", "Adapting challenges to different player profiles."],
    },
    learned: { es: "Las prácticas me enseñaron a diseñar para personas reales, observar sus reacciones y convertir ese feedback en mejoras concretas.", en: "The internship taught me to design for real people, observe their reactions and turn that feedback into concrete improvements." },
    learnedPoints: {
      es: ["Diseñar retos claros, estimulantes y colaborativos.", "Ajustar la dificultad y el ritmo de una experiencia.", "Observar cómo las personas interpretan las pistas.", "Detectar problemas mediante pruebas con usuarios reales.", "Comunicar ideas de forma clara dentro de un equipo."],
      en: ["Designing clear, engaging and collaborative challenges.", "Adjusting the difficulty and pacing of an experience.", "Observing how people interpret clues.", "Finding problems through testing with real users.", "Communicating ideas clearly within a team."],
    },
  },
];

/*
 * EDITA AQUÍ LOS TEXTOS FIJOS DE LA WEB.
 * Cada entrada tiene las dos versiones juntas: es = español, en = inglés.
 * No hace falta buscar el texto dentro del HTML.
 */
const siteCopy = {
  metaDescription: {
    es: "Portfolio de Pablo Menéndez-Morán, diseñador y desarrollador de videojuegos.",
    en: "Portfolio of Pablo Menéndez-Morán, game designer and developer.",
  },
  nav: {
    about: { es: "Sobre mí", en: "About me" },
    skills: { es: "Habilidades", en: "Skills" },
    projects: { es: "Proyectos", en: "Projects" },
    documents: { es: "Investigación", en: "Research" },
    awards: { es: "Reconocimientos", en: "Recognition" },
    experience: { es: "Experiencia", en: "Experience" },
    contact: { es: "Contacto ↗", en: "Contact ↗" },
  },
  hero: {
    eyebrow: {
      es: "Diseñador y desarrollador de videojuegos",
      en: "Game designer and developer",
    },
    title: {
      es: "Diseñar es<br><em>entender más alla</em><br>de lo que se ve.",
      en: "To design is<br><em>to understand beyond</em><br> what is visible.",
    },
    lede: {
      es: "Soy Pablo Menéndez-Morán, apasionado de los videojuegos, la tecnología y la creación de experiencias. Me encanta investigar, experimentar y entender cómo funcionan las cosas para convertir mi curiosidad y creatividad en experiencias capaces de sorprender a las personas.",
      en: "I'm Pablo Menéndez-Morán, passionate about video games, technology, and creating experiences. I love exploring, experimenting, and understanding how things work, turning my curiosity and creativity into experiences that surprise and inspire people.",
    },
    button: { es: "Ver mis proyectos →", en: "View my projects →" },
  },
  about: {
    eyebrow: { es: "Sobre mí", en: "About me" },
    title: {
      es: "Diseñar es<br><em>hacer preguntas.</em>",
      en: "Design is<br><em>asking questions.</em>",
    },
    introOne: {

      es: "Soy una persona creativa, con facilidad para trabajar en equipos multidisciplinares y comunicar ideas de forma clara. Me gusta buscar soluciones a los problemas, aprender nuevas herramientas digitales y cuidar los detalles para crear experiencias pensadas para el usuario.",

      en: "I am a creative person who works well in multidisciplinary teams and communicates ideas clearly. I enjoy finding solutions to problems, learning new digital tools, and paying attention to detail to create user-focused experiences.",

    },
    introTwo: {

       es: "Me muevo entre el diseño, la programación y el arte porque muchas veces una buena idea no se entiende hasta que se puede tocar. Ahí es donde más disfruto: convirtiendo ideas en prototipos.",

      en: "I work between design, programming, and art, because a good idea often isn't understood until it can be touched. That is where I find the most enjoyment: turning ideas into prototypes.",
    },

    callout: {
      es: "<strong>Mi forma de trabajar:</strong> empiezo por la pregunta, construyo algo pequeño, lo pongo en manos de alguien y escucho lo que el juego me devuelve.",
      en: "<strong>How I work:</strong> I start with the question, build something small, put it in someone’s hands and listen to what the game gives back.",
    },
    statsEyebrow: { es: "Lo que he construido", en: "What I have built" },
    stats: {
      projects: { es: "Proyectos", en: "Projects" },
      awards: { es: "Reconocimientos", en: "Awards" },
      areas: { es: "Áreas de trabajo", en: "Work areas" },
      languages: { es: "Español nativo · Inglés C1", en: "Native Spanish · English C1" },
    },
  },
  skills: {
    eyebrow: { es: "Habilidades", en: "Skills" },
    title: { es: "Lo que sé<br><em>hacer.</em>", en: "What I<br><em>do.</em>" },
    intro: {
      es: "No separo estas áreas como conocimientos individuales. Diseño es mi punto de partida; el resto me ayudan a probar,comunicar y entender mejor las ideas.",
      en: "I do not separate these areas as isolated bodies of knowledge. Design is my starting point; the others help me test, communicate, and better understand ideas.",
    },
  },
  projects: {
    eyebrow: { es: "Proyectos", en: "Projects" },
    title: {
      es: "Ideas hechas<br><em>jugables.</em>",
      en: "Ideas made<br><em>playable.</em>",
    },
    intro: {
      es: "Aquí quiero enseñar cómo pienso, no solo qué he terminado. Cada ficha está preparada para contar una idea, sus pruebas, sus problemas y lo que aprendí por el camino.",
      en: "I want to show how I think, not only what I have finished. Each case study is ready to tell the story of an idea, its tests, its problems and what I learned along the way.",
    },

  },
  documents: {
    eyebrow: { es: "Investigación", en: "Research" },
    title: { es: "Experimentos<br><em>y documentos.</em>", en: "Experiments<br><em>and documents.</em>" },
    intro: {
      es: "Una biblioteca viva de documentos, análisis y pequeños experimentos que muestra cómo paso de una intuición a una experiencia jugable.",
      en: "A living library of documents, analysis and small experiments showing how I turn an intuition into a playable experience.",
    },
    archive: { es: "Explorar archivo", en: "Explore archive" },
    definition: {
      es: "<strong>Archivo vivo:</strong> una colección que puede crecer y actualizarse con cada nuevo proyecto, prueba o documento.",
      en: "<strong>Living archive:</strong> a collection that can grow and evolve with every new project, test or document.",
    },

    filters: { all: { es: "Todo", en: "All" }, gameplay: { es: "Gameplay", en: "Gameplay" }, systems: { es: "Sistemas", en: "Systems" }, ux: { es: "UX / UI", en: "UX / UI" }, research: { es: "Experimentos", en: "Experiments" } },
  },
  awards: {
    eyebrow: { es: "Reconocimientos", en: "Recognition" },
    title: {
      es: "Trabajo que<br><em>deja señal.</em>",
      en: "Work that<br><em>leaves a mark.</em>",
    },
    intro: {
      es: "Son momentos y proyectos que me han dado una excusa para seguir haciendo cosas. Pulsa una tarjeta para conocer el contexto y ver la referencia externa.",
      en: "These are moments and projects that gave me another reason to keep making things. Open a card to see the context and the external reference.",
    },
  },
  experience: {
    eyebrow: { es: "Experiencia", en: "Experience" },
    title: {
      es: "Aprender<br><em>haciendo.</em>",
      en: "Learning<br><em>by doing.</em>",
    },
    intro: {
      es: "No es una lista de puestos perfectos: son los lugares y aprendizajes que han ido dando forma a mi manera de diseñar.",
      en: "This is not a list of perfect job titles: it is a record of the places and lessons that have shaped the way I design.",
    },
    titles: [
      {
        es: "Diseño y Desarrollo de Videojuegos y Entornos Virtuales",
        en: "Game Design and Virtual Environments",
      },
      {
        es: "Curso básico de Inteligencia Artificial Aplicada",
        en: "Basic Applied Artificial Intelligence Course",
      },
      {
        es: "Curso intermedio de Inteligencia Artificial Aplicada",
        en: "Intermediate Applied Artificial Intelligence Course",
      },
      {
        es: "Prácticas diseñando Escape Rooms",
        en: "Escape Room Design Internship",
      },
    ],
  },
  contact: {
    eyebrow: { es: "Contacto", en: "Contact" },
    title: {
      es: "¿Hablamos de<br><em>un juego?</em>",
      en: "Shall we talk about<br><em>a game?</em>",
    },
    body: {
      es: "Si tienes una idea, un prototipo a medias o un problema de diseño que quieras mirar desde otro ángulo, escríbeme. Me gusta hablar de juegos antes de que estén resueltos.",
      en: "If you have an idea, a half-finished prototype or a design problem you want to look at from another angle, write to me. I like talking about games before they are solved.",
    },
    button: { es: "Escribir un mensaje →", en: "Write a message →" },
    github: {
      es: "GitHub <small>pendiente</small>",
      en: "GitHub <small>pending</small>",
    },
    cv: { es: "CV <small>pendiente</small>", en: "CV <small>pending</small>" },
  },
  footer: {
    description: {
      es: "Diseñado, desarrollado y revisado muchas veces con curiosidad.",
      en: "Designed, developed and revised many times with curiosity.",
    },
    back: { es: "Volver arriba ↑", en: "Back to top ↑" },
  },
};

/*
 * Textos de tarjetas, habilidades y modales.
 * Para añadir o cambiar una traducción dinámica, escribe:
 * "Texto en español": "English translation",
 */
const translations = {
  "Sobre mí": "About me",
  Habilidades: "Skills",
  Proyectos: "Projects",
  Laboratorio: "Lab",
  Reconocimientos: "Recognition",
  Experiencia: "Experience",
  Contacto: "Contact",
  "Documentación": "Documentation",
  "Ideas convertidas": "Ideas turned",
  "Explorar archivo": "Explore archive",
  Todo: "All",
  Sistemas: "Systems",
  Investigación: "Research",
  "Piezas": "Pieces",
  "Archivo vivo": "Living archive",
  "Abrir documento": "Open document",
  "Documento por publicar": "Document to publish",
  "Proyecto relacionado": "Related project",
  "Formato": "Format",
  Idiomas: "Languages",
  "Año": "Year",
  "Pequeñas pruebas": "Small experiments",
  "Abrir experimento": "Open experiment",
  "Ver mis proyectos": "View my projects",
  "Ver ficha completa": "View full case study",
  "Ver página del proyecto": "View project page",
  "Volver a proyectos": "Back to projects",
  Proceso: "Process",
  Resultado: "Result",
  "Ver experiencia": "View experience",
  "Qué hice": "What I did",
  "Principales áreas trabajadas": "Main areas covered",
  "Qué aprendí": "What I learned",

  "Ver reconocimiento": "View recognition",
  "Escribir un mensaje": "Write a message",
  "Volver arriba": "Back to top",
  "ÁREA PRINCIPAL": "CORE AREA",
  "ÁREA COMPLEMENTARIA": "SUPPORTING AREA",
  "Diseño de videojuegos": "Game design",
  "Diseño y prototipado": "Design and prototyping",
  "Inteligencia artificial": "Artificial intelligence",
  Arte: "Art",
  Programación: "Programming",
  "Me gusta pensar en las reglas como el idioma del juego: tienen que ser claras, pero también dejar espacio para que el jugador las interprete y se sorprenda.":
    "I like to think of rules as the language of a game: they have to be clear, while still leaving room for the player to interpret them and be surprised.",
  "Estoy aprendiendo a usar la IA como una herramienta de exploración, no como un sustituto de las decisiones.":
    "I am learning to use AI as a tool for exploration, not as a substitute for decision-making.",
  "Programo lo suficiente para que una idea deje de ser una explicación y se convierta en algo que podamos jugar.":
    "I code enough for an idea to stop being an explanation and become something we can play.",
  "El arte me ayuda a pensar con claridad y a que una idea empiece a tener una identidad propia.":
    "Art helps me think clearly and gives an idea the beginnings of its own identity.",
  "Diseño de Narrativa": "Narrative design",
  "Diseño de sistemas": "Systems design",
  "UX/UI": "UX/UI",
  "Prototipado y Testeo": "Prototyping and testing",
  Gamificación: "Gamification",
  "Fundamentos de IA y Machine Learning": "AI and machine learning fundamentals",
  Prompting: "Prompting",
  "Soft IA": "Soft AI",
  "Aplicacion de IA para el analisis de datos": "AI for data analysis",
  "Aplicación de herramientas para optimización": "Tools for optimisation",
  "Blueprint unreal": "Unreal Blueprints",
  "Html, css y js": "HTML, CSS and JS",
  "Aprendiendo C++": "Learning C++",
  "Pixel Art": "Pixel art",
  "Diseño de mapas": "Map design",
  "Documentación visual": "Visual documentation",
  "Premio de Publicación y 3º Puesto": "Publication Award and 3rd place",
  "Añadir motor y herramientas": "Add engine and tools",
  "Añadir tu rol": "Add your role",
  "Añadir fecha": "Add date",
  "Contenido por completar": "Content to complete",
  "Añadir proyecto real": "Add real project",
  "Diseño de mecánicas": "Mechanics design",
  "UX y documentación": "UX and documentation",
  Ideación: "Ideation",
  "Prototipado visual": "Visual prototyping",
  "Criterio y revisión": "Judgement and review",
  "Dirección visual": "Visual direction",
  Bocetado: "Sketching",
  "Pixel art": "Pixel art",
  Composición: "Composition",
  Prototipado: "Prototyping",
  "C#": "C#",
  "Unreal y Construct": "Unreal and Construct",
  "Desarrollo web": "Web development",
  Herramientas: "Tools",
  Reconocimiento: "Recognition",
  "Visitar página externa": "Visit external page",
  "Abrir enlace externo": "Open external link",
  "Ficha de proyecto": "Project case study",
  "Resumen": "Overview",
  "Mis contribuciones": "My contributions",
  "Detalles del proyecto": "Project details",
  "Galería": "Gallery",
  "Abrir demo": "Open demo",
  "Fecha de creación": "Created",
  "Mi rol": "My role",
  Descripción: "Description",
  "Lo aprendido": "What I learned",
  "Resumen del juego": "Game overview",
  "Galería del proyecto": "Project gallery",
  "Visitar la página del juego": "Visit the game website",
  "Imagen principal pendiente": "Hero image pending",
  "Capturas pendientes": "Add project screenshots",
  "Imagen de contribución pendiente": "Add contribution image",
  "Estado provisional": "Placeholder state",
  "Una colección de imágenes del proyecto preparada para crecer.": "A project image collection ready to grow.",
  "Añade aquí varias imágenes del proyecto para construir la galería.": "Add several project images here to build the gallery.",
  "Añade una imagen para explicar visualmente esta contribución.": "Add an image to explain this contribution visually.",
  "Añade una imagen o un vídeo": "Add an image or video",
  "Caso de estudio": "Case study",
  "Experimento jugable": "Playable experiment",
  "Trabajo en equipo": "Team project",
  "Reto de innovación": "Innovation challenge",
  "Hackathon de impacto": "Impact hackathon",
  "Primer puesto": "First place",
  Fotografía: "Photography",
  Ideathon: "Ideathon",
  "Game Jam": "Game Jam",
  "Movimiento y cámara": "Movement and camera",
  "Interfaz en contexto": "Interface in context",
  "Idea en 48 horas": "An idea in 48 hours",
  "Prototipo de mecánica": "Mechanic prototype",
  "Experimento UX": "UX experiment",
  "Una prueba pequeña para estudiar cómo el ritmo del movimiento cambia la lectura de un nivel.": "A small test exploring how movement rhythm changes the way a level is read.",
  "Una exploración de cómo presentar información sin interrumpir la atención del jugador.": "An exploration of how to present information without interrupting the player's attention.",
  "Un experimento breve para aprender qué decisiones sobreviven cuando el tiempo obliga a priorizar.": "A short experiment to learn which decisions survive when time forces prioritisation.",
  "Añade aquí capturas del proyecto": "Add project screenshots here",
  "Añade aquí un vídeo o enlace a una demo":
    "Add a short video or demo link here",
  "Añade un enlace a la build, repositorio, vídeo o página del proyecto.":
    "Add a link to the build, repository, video or project page.",
  "Match in Games · UDIT": "Match in Games · UDIT",
  "IndesIAhack · Ferrovial": "IndesIAhack · Ferrovial",
  "IndesIAhack · Global": "IndesIAhack · Global",
  "Hack For Good · Telefónica": "Hack For Good · Telefónica",
  "HackSTEM · Barrio Sésamo India": "HackSTEM · Sesame Street India",
  "Ideathon Amadeus": "Amadeus Ideathon",
  "Madrid Game Jam": "Madrid Game Jam",
  "Premio de fotografía OPPO × UDIT": "OPPO × UDIT Photography Award",
};

let language = "es";
const tr = text => {
  if (text && typeof text === "object") return text[language] || text.es || "";
  return language === "en" ? translations[text] || text : text;
};

// Datos editables de Reconocimientos: imagen, descripción y página externa.
const awards = [
  {
    title: "Match in Games · UDIT",
    category: "Premio de Publicación y 3º Puesto",
    image: "Imagenes/premios/Match in games.jpeg",
    description:
      "Un reto que me permitió trabajar con restricciones reales y pensar en cómo convertir una idea tecnológica en algo que una persona pueda entender y usar. Completa aquí el proyecto, tu rol y el resultado concreto.",
    url: "https://www.nintenderos.com/2026/06/match-in-games-2026-asi-fue-la-feria-de-videojuegos-de-udit/",
  },

  {
    title: "IndesIAhack · Ferrovial",
    category: "Reto de innovación",
    image: "Imagenes/premios/Diploma_ganador_Ferrovial.jpg",
    description:
      "Un reto que me permitió trabajar con restricciones reales y pensar en cómo convertir una idea tecnológica en algo que una persona pueda entender y usar. Completa aquí el proyecto, tu rol y el resultado concreto.",
    url: "https://www.indesia.org/conoce-a-los-ganadores-de-la-primera-fase-de-indesiahack/",
  },
  {
    title: "IndesIAhack · Global",
    category: "Reto de innovación",
    image: "Imagenes/premios/Indesiahack.png",
    description:
      "Un reto que me permitió trabajar con restricciones reales y pensar en cómo convertir una idea tecnológica en algo que una persona pueda entender y usar. Completa aquí el proyecto, tu rol y el resultado concreto.",
    url: "https://www.udit.es/proyectos-de-exito/cuatro-estudiantes-de-udit-triunfan-en-el-indesiahack/",
  },
  {
    title: "Hack For Good · Telefónica",
    category: "Hackathon de impacto",
    image: "Imagenes/premios/Hack_for_good.jpeg",
    description:
      "Una experiencia centrada en diseñar con impacto y escuchar bien el problema antes de lanzarse a construir una solución. Completa aquí el reto y tu aportación exacta.",
    url: "https://www.udit.es/proyectos-de-exito/tres-estudiantes-del-grado-en-diseno-y-desarrollo-de-videojuegos-ganan-el-tercer-puesto-en-la-hackaton-hackforgood-de-telefonica/",
  },
  {
    title: "HackSTEM · Barrio Sésamo India",
    category: "Primer puesto",
    image: "Imagenes/premios/HackSTEM_Certificate_First_Place.png",
    description:
      "Un proyecto que me obligó a pensar cómo hacer que una idea fuese clara, cercana y útil para su público. Añade aquí el reto, el proceso y el resultado exactos.",
    url: "https://www.udit.es/proyectos-de-exito/los-alumnos-del-grado-en-diseno-y-desarrollo-de-videojuegos-de-udit-ganadores-de-hackstem/",
  },
  {
    title: "Ideathon Amadeus",
    category: "Ideathon",
    image: "Imagenes/premios/Ideathon-Amadeus-premios-82-scaled-1.jpg",
    description:
      "Una oportunidad para convertir una intuición en una propuesta defendible en poco tiempo. Completa aquí la idea presentada y las decisiones de diseño.",
    url: "https://www.udit.es/en/amadeus-celebra-con-los-alumnos-de-esne-una-maraton-creativa-en-torno-al-metaverso/",
  },
  {
    title: "Madrid Game Jam",
    category: "Game Jam",
    image: "Imagenes/premios/Madrid_game_jam.jpg",
    description:
      "Una experiencia concentrada de diseño, decisiones rápidas y trabajo en equipo. Completa aquí el juego, la temática y tu contribución.",
    url: "https://www.udit.es/proyectos-de-exito/siete-proyectos-de-alumnos-de-udit-entre-los-ganadores-de-la-vi-edicion-de-game-jam-madrid-crea/",
  },
  {
    title: "Premio de fotografía OPPO × UDIT",
    category: "Fotografía",
    image: "Imagenes/premios/Oppo_imagine_if.jpeg",
    description:
      "Un reconocimiento que también forma parte de mi manera de observar, encuadrar y comunicar una idea con pocos elementos. Añade aquí la obra y la publicación correspondiente.",
    url: "https://www.udit.es/en/succesful-projects/siete-estudiantes-de-udit-ganadores-en-el-concurso-de-fotografia-oppo-imagine-if-photography-award-udit-edition/",
  },

];

/* Páginas de proyecto: cada ficha usa un slug y campos bilingües editables. */
const projectText = value => tr(value);
const projectBySlug = slug => projects.find(project => project.slug === slug) || projects[0];
const projectThemeStyle = project => Object.entries(project.theme || {})
  .map(([name, value]) => `--project-${name}:${value}`)
  .join(";");

function renderProjectPage() {
  const target = $("#project-page");
  if (!target) return;
  const params = new URLSearchParams(window.location.search);
  const project = projectBySlug(params.get("project"));
  Object.entries(project.theme || {}).forEach(([name, value]) => target.style.setProperty(`--project-${name}`, value));

  const title = projectText(project.title);
  const heroMedia = project.image
    ? `<img class="project-page-image" src="${project.image}" alt="${title}">`
    : project.video
      ? `<video class="project-page-video" controls autoplay muted loop playsinline src="${project.video}"></video>`
      : `<div class="project-page-placeholder"><span>${tr("Imagen principal pendiente")}</span><small>${tr("Añade aquí capturas del proyecto")}</small></div>`;

  const paragraphs = (project.summary?.paragraphs || []).map(item => `<p>${projectText(item)}</p>`).join("");
  const teamMembers = (project.team?.members || []).filter(member => member && (member.name || member.role));
  const teamDetail = project.team
    ? `<div class="project-detail-item project-team-inline">
        <span>${tr("Equipo")}</span>
        <strong>${projectText(project.team.name)}</strong>
        <div class="project-team-members">${teamMembers.map(member => `<div class="project-team-member"><b>${projectText(member.name)}</b><span>${projectText(member.role)}</span></div>`).join("")}</div>
      </div>`
    : "";
  const details = (project.summary?.details || [])
    .filter(item => !["Equipo", "Estudio / equipo", "Team", "Studio / team"].includes(projectText(item.label)))
    .map(item => `
      <div class="project-detail-item"><span>${projectText(item.label)}</span><b>${projectText(item.value)}</b></div>
    `).join("") + teamDetail;

  const gallery = Array.isArray(project.gallery) ? project.gallery.filter(item => item && (item.src || item.image)) : [];
  const galleryMarkup = gallery.length
    ? gallery.map((item, index) => {
        const src = item.src || item.image || item;
        const alt = projectText(item.alt) || `${title} ${index + 1}`;
        const caption = projectText(item.caption || "");
        return `<figure class="project-gallery-item"><img src="${src}" alt="${alt}">${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
      }).join("")
    : `<div class="project-gallery-empty"><span class="eyebrow">${tr("Galería del proyecto")}</span><p>${tr("Añade aquí varias imágenes del proyecto para construir la galería.")}</p><small>gallery: [{ src: "Imagenes/Proyectos/mi-imagen.jpg", caption: "..." }]</small></div>`;

  const contributions = (project.contributions || []).map((item, index) => {
    const image = item.image
      ? `<img src="${item.image}" alt="${projectText(item.imageAlt) || projectText(item.title)}">`
      : `<div class="project-contribution-placeholder"><span>${tr("Imagen de contribución pendiente")}</span><small>${tr("Añade una imagen para explicar visualmente esta contribución.")}</small></div>`;
    return `
      <article class="project-contribution-block ${index % 2 ? "is-reversed" : ""}">
        <div class="project-contribution-copy">
          <span class="project-section-number">0${index + 1}</span>
          <h3>${projectText(item.title)}</h3>
          <p>${projectText(item.text)}</p>
        </div>
        <figure class="project-contribution-media">${image}</figure>
      </article>`;
  }).join("");

  const learnedPoints = (project.learned?.points || []).filter(Boolean);
  const learnedList = learnedPoints.length
    ? `<ul>${learnedPoints.map(point => `<li>${projectText(point)}</li>`).join("")}</ul>`
    : "";
  const websiteReady = project.website?.enabled !== false && project.website?.url;
  const websiteLabel = projectText(project.website?.label || "Visitar la página del juego");
  const gamepadIcon = `<svg class="gamepad-icon" viewBox="0 0 64 48" aria-hidden="true" focusable="false"><path d="M14.5 8h35c6.2 0 10.7 4.2 12.1 10.3l2.2 9.8c1.6 7.1-2.1 11.5-6.9 11.5-3.1 0-5.5-1.8-7.8-5l-2.5-3.5H17.4l-2.5 3.5c-2.3 3.2-4.7 5-7.8 5-4.8 0-8.5-4.4-6.9-11.5l2.2-9.8C3.7 12.2 8.3 8 14.5 8Z"/><path d="M16 17v10M11 22h10M44 19h.01M51 25h.01"/></svg>`;
  const website = websiteReady
    ? `<a class="project-floating-game-link" data-game-link href="${project.website.url}" target="_blank" rel="noreferrer" aria-label="${websiteLabel}" title="${websiteLabel}">${gamepadIcon}</a>`
    : "";

  document.title = `${title} · Pablo`;
  target.innerHTML = `
    <article class="project-page-article project-case ${project.visual}">
      <a class="project-back" href="index.html#projects">← ${tr("Volver a proyectos")}</a>
      <header class="project-study-hero">
        <p class="eyebrow">${projectText(project.type)}</p>
        <h1>${title}</h1>
        <p class="project-page-lede">${projectText(project.description)}</p>
        <div class="project-role-tools" aria-label="${language === "en" ? "Role and tools" : "Rol y herramientas"}">
          <div class="project-role-tools-item"><span>${tr("Mi rol")}</span><strong>${projectText(project.role)}</strong></div>
          <div class="project-role-tools-item"><span>${tr("Herramientas")}</span><strong>${projectText(project.tools)}</strong></div>
        </div>
        <div class="project-study-cover">${heroMedia}</div>
      </header>

      <section class="project-study-section project-summary-section">
        <div class="project-study-heading"><span class="eyebrow">01</span><div><p class="project-study-kicker">${tr("Resumen")}</p><h2>${tr("Resumen del juego")}</h2></div></div>
        <div class="project-summary-layout"><div class="project-summary-copy">${paragraphs}</div><aside class="project-details-card">${details}</aside></div>
      </section>

      <section class="project-study-section project-gallery-section">
        <div class="project-study-heading"><span class="eyebrow">02</span><div><p class="project-study-kicker">${tr("Galería")}</p><h2>${tr("Galería del proyecto")}</h2></div></div>
        <p class="project-gallery-intro">${tr("Una colección de imágenes del proyecto preparada para crecer.")}</p>
        <div class="project-gallery-grid">${galleryMarkup}</div>
      </section>

      <section class="project-study-section project-contributions-section">
        <div class="project-study-heading"><span class="eyebrow">03</span><div><p class="project-study-kicker">${tr("Mis contribuciones")}</p><h2>${tr("Mis contribuciones")}</h2></div></div>
        <div class="project-contributions-stack">${contributions}</div>
      </section>

      <section class="project-study-section project-learned-section">
        <div class="project-study-heading"><span class="eyebrow">04</span><div><p class="project-study-kicker">${tr("Lo aprendido")}</p><h2>${tr("Lo aprendido")}</h2></div></div>
        <div class="project-learned-content"><p>${projectText(project.learned?.text || "")}</p>${learnedList}</div>
      </section>

      ${website || ""}
    </article>`;

  const gameLink = target.querySelector("[data-game-link]");
  if (gameLink) {
    gameLink.addEventListener("click", event => {
      const message = language === "en"
        ? "Do you want to visit the game's website?"
        : "¿Quieres visitar la página web del juego?";
      if (!window.confirm(message)) event.preventDefault();
    });
  }
}

/* Documentación: genera un archivo filtrable y abre cada pieza en un modal. */
let activeDocumentFilter = "all";
function renderDocuments() {
  const target = $("#documents-grid");
  if (!target) return;
  const visibleDocuments = documents.filter(item => activeDocumentFilter === "all" || item.category === activeDocumentFilter);
  const count = $("#documents-count");
  if (count) count.textContent = String(documents.length).padStart(2, "0");
  target.innerHTML = visibleDocuments.map((document, index) => `
    <article class="document-card" style="--card-index:${index}" data-document-card="${documents.indexOf(document)}">
      <div class="document-card-visual">
        <img src="${document.image}" alt="">
        <span class="document-card-format">${document.format}</span>
        <span class="document-card-number">0${documents.indexOf(document) + 1}</span>
      </div>
      <div class="document-card-body">
        <div class="document-card-top"><span class="skill-label">${tr(document.label)}</span><span class="document-card-year">${document.year}</span></div>
        <h3>${tr(document.title)}</h3>
        <p>${tr(document.description)}</p>
        <div class="document-card-meta"><span>${tr(document.project)}</span><span>${document.languages}</span></div>
        <button class="document-open" type="button" data-document-open="${documents.indexOf(document)}">${tr("Abrir documento")} <span aria-hidden="true">↗</span></button>
      </div>
    </article>`).join("");

  target.querySelectorAll(".document-card").forEach(card => card.addEventListener("click", event => {
    if (event.target.closest("button")) return;
    const documentItem = documents[Number(card.dataset.documentCard)];
    const external = documentItem.url ? `<a class="button button-dark" href="${documentItem.url}" target="_blank" rel="noreferrer">${tr("Abrir enlace externo")} ↗</a>` : `<p class="modal-note">${tr("Documento por publicar")}</p>`;
    openModal(`<img class="document-modal-image" src="${documentItem.image}" alt=""><p class="eyebrow">${tr(documentItem.label)} · ${documentItem.year}</p><h2 id="modal-title">${tr(documentItem.title)}</h2><p class="modal-lede">${tr(documentItem.description)}</p><div class="project-meta"><span>${tr("Proyecto relacionado")}<b>${tr(documentItem.project)}</b></span><span>${tr("Formato")}<b>${documentItem.format}</b></span><span>${tr("Idiomas")}<b>${documentItem.languages}</b></span></div>${external}`);
  }));

  target.querySelectorAll("[data-document-open]").forEach(button => button.addEventListener("click", () => {
    const documentItem = documents[Number(button.dataset.documentOpen)];
    const external = documentItem.url ? `<a class="button button-dark" href="${documentItem.url}" target="_blank" rel="noreferrer">${tr("Abrir enlace externo")} ↗</a>` : `<p class="modal-note">${tr("Documento por publicar")}</p>`;
    openModal(`<img class="document-modal-image" src="${documentItem.image}" alt=""><p class="eyebrow">${tr(documentItem.label)} · ${documentItem.year}</p><h2 id="modal-title">${tr(documentItem.title)}</h2><p class="modal-lede">${tr(documentItem.description)}</p><div class="project-meta"><span>${tr("Proyecto relacionado")}<b>${tr(documentItem.project)}</b></span><span>${tr("Formato")}<b>${documentItem.format}</b></span><span>${tr("Idiomas")}<b>${documentItem.languages}</b></span></div>${external}`);
  }));
}

function setupDocumentFilters() {
  document.querySelectorAll("[data-document-filter]").forEach(button => button.addEventListener("click", () => {
    activeDocumentFilter = button.dataset.documentFilter;
    document.querySelectorAll("[data-document-filter]").forEach(item => item.classList.toggle("is-active", item === button));
    renderDocuments();
    document.body.removeAttribute("data-reveal-ready");
    setupRevealAnimations();
  }));
}

// Genera las tarjetas de experiencia y abre una explicación breve al seleccionarlas.
function renderExperiences() {
  const target = $("#experience-list");
  if (!target) return;
  target.innerHTML = experiences.map((experience, index) => `
    <button class="experience-card" data-experience="${index}">
      <span class="experience-card-image"><img src="${experience.image}" alt=""></span>
      <span class="experience-card-body d-flex flex-column">
        <span class="experience-card-index">0${index + 1}</span>
        <span class="experience-card-title">${tr(experience.title)}</span>
        <span class="experience-card-org">${experience.organization}</span>
        <span class="experience-card-footer"><time>${experience.date}</time><span>${tr("Ver experiencia")} ↗</span></span>
      </span>
    </button>
  `).join("");

  document.querySelectorAll("[data-experience]").forEach(button =>
    button.addEventListener("click", () => {
      const experience = experiences[Number(button.dataset.experience)];
      const areas = experience.areas
        ? `<h3>${tr("Principales áreas trabajadas")}</h3><ul class="experience-modal-list">${tr(experience.areas).map(area => `<li>${area}</li>`).join("")}</ul>`
        : "";
      const learnedPoints = experience.learnedPoints
        ? `<ul class="experience-modal-list experience-learned-list">${tr(experience.learnedPoints).map(point => `<li>${point}</li>`).join("")}</ul>`
        : "";
      openModal(`<img class="experience-modal-image" src="${experience.image}" alt=""><p class="eyebrow">${experience.organization} · ${experience.date}</p><h2 id="modal-title">${tr(experience.title)}</h2><h3>${tr("Qué hice")}</h3><p class="modal-lede">${tr(experience.description)}</p>${areas}<h3>${tr("Qué aprendí")}</h3><p class="modal-lede">${tr(experience.learned)}</p>${learnedPoints}`);
    })
  );
}

// Anima la línea central y activa cada hito conforme el visitante avanza.
function setupExperienceTimeline() {
  const section = $("#experience");
  const timeline = $("#experience-list");
  if (!section || !timeline) return;
  if (timeline.dataset.timelineReady) {
    window.dispatchEvent(new Event("scroll"));
    return;
  }
  timeline.dataset.timelineReady = "true";

  const updateProgress = () => {
    const rect = section.getBoundingClientRect();
    const range = Math.max(rect.height - window.innerHeight * 0.35, 1);
    const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.3 - rect.top) / range));
    timeline.style.setProperty("--timeline-progress", `${progress * 100}%`);
    const progressDistance = progress * timeline.offsetHeight;
    timeline.querySelectorAll(".experience-card").forEach(card => {
      const cardRect = card.getBoundingClientRect();
      card.classList.toggle("is-visible", cardRect.top < window.innerHeight * 0.72);
      card.classList.toggle(
        "is-active",
        card.offsetTop + card.offsetHeight / 2 <= progressDistance
      );
    });
  };

  let ticking = false;
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateProgress();
      ticking = false;
    });
  };
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  requestUpdate();
}

// Genera y anima los marcadores de Sobre mí usando los datos reales del portfolio.
function renderAboutStats() {
  const target = $("#about-stats");
  if (!target) return;
  const stats = [
    { key: "projects", value: projects.length },
    { key: "awards", value: awards.length },
    { key: "languages", value: "ES / EN" },
  ];
  target.innerHTML = stats
    .map(stat => {
      const isNumber = typeof stat.value === "number";
      const counter = isNumber ? `<strong data-counter-target="${stat.value}">0</strong>` : `<strong>${stat.value}</strong>`;
      return `<div class="about-stat${stat.key === "languages" ? " about-stat-language" : ""}">${counter}<span>${tr(siteCopy.about.stats[stat.key])}</span></div>`;
    })
    .join("");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.querySelectorAll("[data-counter-target]").forEach(counter => {
    const end = Number(counter.dataset.counterTarget);
    if (prefersReducedMotion) {
      counter.textContent = String(end).padStart(2, "0");
      return;
    }
    const duration = 1050;
    const startedAt = performance.now();
    const tick = now => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = String(Math.round(end * eased)).padStart(2, "0");
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* Idioma: aplica todos los textos fijos desde siteCopy sin duplicar el HTML. */
function applyStaticLanguage() {
  const set = (selector, value) => {
    const node = $(selector);
    if (node) node.innerHTML = tr(value);
  };
  const c = siteCopy;
  const english = language === "en";
  document.documentElement.lang = language;
  document.title = english
    ? "Pablo · Game Design / Dev"
    : "Pablo · Game Design / Dev";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", tr(c.metaDescription));

  set('.main-nav a[href$="#about"]', c.nav.about);
  set('.main-nav a[href$="#skills"]', c.nav.skills);
  set('.main-nav a[href$="#projects"]', c.nav.projects);
  set('.main-nav a[href$="#documents"]', c.nav.documents);
  set('.main-nav a[href$="#awards"]', c.nav.awards);
  set('.main-nav a[href$="#experience"]', c.nav.experience);
  set('.main-nav a[href$="#contact"]', c.nav.contact);
  set(".hero-section .eyebrow", c.hero.eyebrow);
  set(".hero-section h1", c.hero.title);
  set(".hero-lede", c.hero.lede);
  set(".hero-copy .button", c.hero.button);
  set("#about .eyebrow", c.about.eyebrow);
  set("#about h2", c.about.title);
  set("#about .section-intro p:not(.eyebrow):nth-of-type(2)", c.about.introOne);
  set("#about .section-intro p:not(.eyebrow):nth-of-type(3)", c.about.introTwo);
  set(".about-callout p", c.about.callout);
  set(".about-stats-wrap .eyebrow", c.about.statsEyebrow);
  renderAboutStats();
  set("#skills .eyebrow", c.skills.eyebrow);
  set("#skills h2", c.skills.title);
  set("#skills .section-intro", c.skills.intro);
  set("#projects .eyebrow", c.projects.eyebrow);
  set("#projects h2", c.projects.title);
  set("#projects .section-intro", c.projects.intro);
  set("#projects .content-note", c.projects.note);
  set("#documents .eyebrow", c.documents.eyebrow);
  set("#documents h2", c.documents.title);
  set("#documents .section-intro > p", c.documents.intro);
  set(".documents-toolbar-label", c.documents.archive);
  set(".documents-definition", c.documents.definition);
  set("#documents .documents-note", c.documents.note);
  document.querySelectorAll("[data-document-filter]").forEach(button => {
    const key = button.dataset.documentFilter;
    if (c.documents.filters[key]) button.textContent = tr(c.documents.filters[key]);
  });
  set("#awards .eyebrow", c.awards.eyebrow);
  set("#awards h2", c.awards.title);
  set("#awards .section-intro", c.awards.intro);
  set("#experience .eyebrow", c.experience.eyebrow);
  set("#experience h2", c.experience.title);
  set("#experience .section-intro", c.experience.intro);
  document.querySelectorAll(".experience-row h3").forEach((node, index) => {
    if (c.experience.titles[index])
      node.textContent = tr(c.experience.titles[index]);
  });
  set("#contact .eyebrow", c.contact.eyebrow);
  set("#contact h2", c.contact.title);
  set("#contact p:not(.eyebrow)", c.contact.body);
  set("#contact .button", c.contact.button);
  set(".contact-links a", "✉ Email");
  set(".contact-links .contact-pending:nth-child(2)", c.contact.github);
  set(".contact-links .contact-pending:nth-child(3)", c.contact.cv);
  set(".footer span:nth-child(2)", c.footer.description);
  set(".footer a", c.footer.back);
  const closeButton = $("#modal-close");
  if (closeButton)
    closeButton.setAttribute(
      "aria-label",
      english ? "Close window" : "Cerrar ventana"
    );
  const mobileToggle = $(".mobile-toggle");
  if (mobileToggle)
    mobileToggle.setAttribute(
      "aria-label",
      english ? "Open navigation" : "Abrir navegación"
    );
}

/* Referencias DOM: se reutilizan para abrir, cerrar y rellenar el modal. */
// Atajo para buscar elementos del documento.
const $ = selector => document.querySelector(selector);
const modalBackdrop = $("#modal-backdrop");
const modalContent = $("#modal-content");

/* Modal: cierra la ventana, limpia su contenido y restaura el scroll del body. */
// Cierra el modal y devuelve el scroll al estado normal.
function closeModal() {
  modalBackdrop.hidden = true;
  modalContent.innerHTML = "";
  document.body.style.overflow = "";
}

/* Modal: recibe HTML ya preparado y lo muestra centrado sobre la página. */
// Abre el modal con el contenido generado para una habilidad, proyecto o reconocimiento.
function openModal(content) {
  modalContent.innerHTML = content;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  $("#modal-close").focus();
}

/* Habilidades: genera tarjetas, herramientas y botones de subhabilidades. */
// Genera las categorías de Habilidades y conecta sus subhabilidades con el modal.
function renderSkills() {
  $("#skills-list").innerHTML = skills
    .map(
      (skill, categoryIndex) => `
    <article class="skill-card${skill.wide ? " featured" : ""}">
      <img class="skill-image" src="${skill.image}" alt="">
      <div class="skill-card-body">
        <span class="skill-label">${tr(skill.label)}</span>
        <h3>${tr(skill.title)}</h3>
        <p class="skill-description">${tr(skill.description)}</p>
        <div class="skill-items">
          ${skill.items.map((item, itemIndex) => `<button class="skill-item" data-skill="${categoryIndex}-${itemIndex}"><span>${tr(item[0])}</span><span aria-hidden="true">↗</span></button>`).join("")}
        </div>
        <div class="skill-tools-inline" aria-label="Herramientas de ${skill.title}">
          <span class="skill-tools-inline-label">${tr("Herramientas")}</span>
          <div class="tool-icons">
            ${skill.tools.map(tool => `<span class="tool-icon" data-tooltip="${tr(tool.name)}" title="${tr(tool.name)}" tabindex="0" aria-label="${tr(tool.name)}"><img src="${tool.image}" alt=""></span>`).join("")}
          </div>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  document.querySelectorAll("[data-skill]").forEach(button =>
    button.addEventListener("click", () => {
      const [categoryIndex, itemIndex] = button.dataset.skill
        .split("-")
        .map(Number);
      const skill = skills[categoryIndex];
      const item = skill.items[itemIndex];
      openModal(
        `<p class="eyebrow">${tr(skill.title)}</p><h2 id="modal-title">${tr(item[0])}</h2><p class="modal-lede">${language === "en" ? "A concise skill I use to explore, test and communicate playable ideas." : item[1]}</p>`
      );
    })
  );
}

/* Proyectos: genera tarjetas, previews de vídeo y fichas con metadatos/media. */
// Genera las tarjetas de proyectos y sus fichas ampliadas.
function renderProjects() {
  const target = $("#projects-list");
  if (!target) return;
  target.innerHTML = projects
    .map(project => {
      const cardImage = project.cardImage || project.image;
      const cardVideo = project.cardVideo || project.video;
      const cardMedia = cardVideo
        ? `<video class="project-card-media" src="${cardVideo}" ${cardImage ? `poster="${cardImage}"` : ""} muted loop autoplay playsinline aria-label="${projectText(project.title)}"></video><span class="project-media-badge">VIDEO / PREVIEW</span>`
        : cardImage
          ? `<img class="project-card-media" src="${cardImage}" alt="${projectText(project.title)}"><span class="project-media-badge">IMAGE / COVER</span>`
          : `<div class="project-card-media-empty"><div class="prototype-shape"></div><span>${tr("Añade una imagen o un vídeo")}</span></div>`;
      return `
        <a class="project-card" style="${projectThemeStyle(project)}" href="project.html?project=${project.slug}">
          <div class="project-visual ${project.visual}">
            <span class="project-status-pill">${projectText(project.status)}</span>
            <div class="project-card-media-frame">${cardMedia}</div>
          </div>
          <div class="project-content"><p class="project-type">${projectText(project.type)}</p><h3>${projectText(project.title)}</h3><p>${projectText(project.description)}</p><span class="project-link">${tr("Ver página del proyecto")} <b aria-hidden="true">↗</b></span></div>
        </a>`;
    })
    .join("");
}

/* Reconocimientos: genera tarjetas visuales y modales con referencias externas. */
// Genera las tarjetas de reconocimientos y sus enlaces externos.
function renderAwards() {
  $("#awards-grid").innerHTML = awards
    .map(
      award =>
        `<button class="award-card" data-award="${award.title}"><img src="${award.image}" alt=""><span class="award-card-copy"><strong class="award-card-title">${tr(award.title)}</strong><span class="skill-label award-card-category">${tr(award.category)}</span><span class="award-open">${tr("Ver reconocimiento")} ↗</span></span></button>`
    )
    .join("");
  document.querySelectorAll("[data-award]").forEach(button =>
    button.addEventListener("click", () => {
      const award = awards.find(item => item.title === button.dataset.award);
      openModal(
        `<img class="award-modal-image" src="${award.image}" alt=""><p class="eyebrow">${tr("Reconocimiento")}</p><h2 id="modal-title">${tr(award.title)}</h2><p class="modal-lede">${language === "en" ? "Recognition details and the external reference for this project." : award.description}</p><a class="button button-dark" href="${award.url}" target="_blank" rel="noreferrer">${tr("Visitar página externa")} ↗</a>`
      );
    })
  );
}

/* Navegación: controla anclas suaves, menú móvil, barra de progreso y accesibilidad. */
// Configura menú móvil, navegación suave y cierre del modal con Escape.
function setupNavigation() {
  const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveSection = id => {
    navLinks.forEach(link => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    sections.forEach(section => sectionObserver.observe(section));
  }

  document.querySelectorAll('a[href^="#"]').forEach(link =>
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      if (link.closest(".main-nav")) setActiveSection(target.id);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      $(".main-nav").classList.remove("is-open");
      $(".mobile-toggle").setAttribute("aria-expanded", "false");
    })
  );
  $(".mobile-toggle").addEventListener("click", () => {
    const nav = $(".main-nav");
    const isOpen = nav.classList.toggle("is-open");
    $(".mobile-toggle").setAttribute("aria-expanded", String(isOpen));
    $(".mobile-toggle").setAttribute(
      "aria-label",
      isOpen ? "Cerrar navegación" : "Abrir navegación"
    );
  });
  window.addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      $(".scroll-progress").style.width =
        `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    },
    { passive: true }
  );
}

/* Revela contenido una sola vez al entrar en el viewport. */
function setupRevealAnimations() {
  document.__portfolioRevealCleanup?.();
  const selector = [
    ".about-profile-photo",
    ".about-stats-panel",
    "#skills-list > .skill-card",
    "#projects-list > .project-card",
    "#documents-grid > .document-card",
    "#awards-grid > .award-card",
    "#experience-list > .experience-card",
    ".hero-visual",
  ].join(",");
  const targets = [...document.querySelectorAll(selector)].filter(target => !target.classList.contains("is-revealed") || target.classList.contains("will-reveal"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const getOrigin = target => {
    if (target.matches(".hero-visual")) return "right";
    if (target.matches(".experience-card")) return "bottom";
    const rect = target.getBoundingClientRect();
    return rect.left + rect.width / 2 < window.innerWidth / 2 ? "left" : "right";
  };
  targets.forEach((target, index) => {
    target.classList.add("will-reveal", `reveal-from-${getOrigin(target)}`);
    target.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
  });
  if (reducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach(target => target.classList.add("is-revealed"));
    document.body.setAttribute("data-reveal-ready", "true");
    return;
  }
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach(target => {
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      target.classList.add("is-revealed");
      return;
    }
    observer.observe(target);
  });
  document.body.setAttribute("data-reveal-ready", "true");
  document.__portfolioRevealCleanup = () => observer.disconnect();
}

/* Selector de idioma: vuelve a renderizar contenido dinámico y después actualiza HTML estático. */
document.querySelectorAll("[data-language]").forEach(button =>
  button.addEventListener("click", () => {
    language = button.dataset.language;
    document
      .querySelectorAll("[data-language]")
      .forEach(item =>
        item.classList.toggle("is-active", item.dataset.language === language)
      );
    if (document.body.dataset.page === "project") {
      renderProjectPage();
      document.body.removeAttribute("data-reveal-ready");
      setupRevealAnimations();
      setupMotionLayer();
      setupExperienceTimeline();
    } else {
      renderSkills();
      renderProjects();
      renderDocuments();
      renderExperiences();
      renderAwards();
      applyStaticLanguage();
      document.body.removeAttribute("data-reveal-ready");
      setupRevealAnimations();
      setupMotionLayer();
      setupExperienceTimeline();
    }
  })
);

/* Arranque: espera al HTML, genera las secciones y conecta todos los eventos. */
document.addEventListener("DOMContentLoaded", () => {
  setupCharacterGif();
  // Render inicial de tarjetas, idioma por defecto y controles interactivos.
  if (document.body.dataset.page === "project") {
    applyStaticLanguage();
    renderProjectPage();
    setupNavigation();
    setupRevealAnimations();
    setupMotionLayer();
    setupExperienceTimeline();
  } else {
    renderSkills();
    renderProjects();
    renderDocuments();
    renderExperiences();
    renderAwards();
    applyStaticLanguage();
    setupNavigation();
    setupDocumentFilters();
    setupRevealAnimations();
    setupMotionLayer();
    setupExperienceTimeline();
  }
  setupClickSpark();
  if ($("#modal-close")) $("#modal-close").addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", event => {
    if (event.target === modalBackdrop) closeModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (modalBackdrop && !modalBackdrop.hidden) {
      closeModal();
      return;
    }
    if (document.body.dataset.page === "project") {
      event.preventDefault();
      window.location.href = "index.html#projects";
    }
  });
});


/* ClickSpark: chispas radiales en el color coral del sitio. */
function setupClickSpark() {
  if (document.body.dataset.clickSparkReady) return;
  document.body.dataset.clickSparkReady = "true";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.className = "click-spark-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;
  const sparks = [];
  const color = getComputedStyle(document.documentElement).getPropertyValue("--coral").trim() || "#ff6b4a";
  const duration = 640;
  const sparkCount = 8;
  const sparkRadius = 32;
  const sparkSize = 15;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let frame = 0;
  let width = window.innerWidth;
  let height = window.innerHeight;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const easeOut = value => value * (2 - value);
  const draw = timestamp => {
    ctx.clearRect(0, 0, width, height);
    let write = 0;
    for (let index = 0; index < sparks.length; index += 1) {
      const spark = sparks[index];
      if (timestamp - spark.start < duration) sparks[write++] = spark;
    }
    sparks.length = write;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineCap = "round";
    ctx.shadowColor = color;
    sparks.forEach(spark => {
      const progress = Math.min((timestamp - spark.start) / duration, 1);
      const eased = easeOut(progress);
      const distance = eased * sparkRadius;
      const length = sparkSize * (1 - eased);
      ctx.globalAlpha = 1 - progress;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(spark.x + distance * Math.cos(spark.angle), spark.y + distance * Math.sin(spark.angle));
      ctx.lineTo(spark.x + (distance + length) * Math.cos(spark.angle), spark.y + (distance + length) * Math.sin(spark.angle));
      ctx.stroke();
    });
    if (sparks.length) {
      const first = sparks[0];
      const progress = Math.min((timestamp - first.start) / duration, 1);
      ctx.globalAlpha = (1 - progress) * 0.9;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(first.x, first.y, 7 + progress * 18, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(first.x, first.y, 3.5 * (1 - progress), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    frame = sparks.length ? requestAnimationFrame(draw) : 0;
  };
  const handleClick = event => {
    const now = performance.now();
    for (let index = 0; index < sparkCount; index += 1) {
      sparks.push({
        x: event.clientX,
        y: event.clientY,
        angle: (Math.PI * 2 * index) / sparkCount,
        start: now,
      });
    }
    if (!frame) frame = requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("click", handleClick, { passive: true });
}

/* Motion layer: puntero, scroll, tilt 3D, glow y botones magnéticos. */
function setupMotionLayer() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const ensureGlow = card => {
    if (card.querySelector(":scope > .card-glow")) return;
    const glow = document.createElement("span");
    glow.className = "card-glow";
    glow.setAttribute("aria-hidden", "true");
    card.prepend(glow);
  };

  if (!reducedMotion && !document.body.dataset.motionGlobalReady) {
    document.body.dataset.motionGlobalReady = "true";
    let pointerX = 0;
    let pointerY = 0;
    let pointerPending = false;
    const hero = () => document.querySelector(".hero-section");
    const applyPointer = () => {
      const normalizedX = pointerX / window.innerWidth - 0.5;
      const normalizedY = pointerY / window.innerHeight - 0.5;
      root.style.setProperty("--pointer-x", `${pointerX}px`);
      root.style.setProperty("--pointer-y", `${pointerY}px`);
      document.body.classList.add("has-pointer");
      const heroNode = hero();
      if (heroNode) {
        heroNode.style.setProperty("--hero-x", `${normalizedX * -34}px`);
        heroNode.style.setProperty("--hero-y", `${normalizedY * -24}px`);
        heroNode.style.setProperty("--hero-video-x", `${normalizedX * 58}px`);
        heroNode.style.setProperty("--hero-video-y", `${normalizedY * 38}px`);
        heroNode.style.setProperty("--hero-bg-x", `${normalizedX * -32}px`);
        heroNode.style.setProperty("--hero-bg-y", `${normalizedY * -24}px`);
      }
      pointerPending = false;
    };
    const resetPointer = () => {
      document.body.classList.remove("has-pointer");
      root.style.setProperty("--pointer-x", "50vw");
      root.style.setProperty("--pointer-y", "45vh");
      const heroNode = hero();
      if (heroNode) {
        ["--hero-x", "--hero-y", "--hero-video-x", "--hero-video-y", "--hero-bg-x", "--hero-bg-y"].forEach(name => {
          heroNode.style.setProperty(name, "0px");
        });
      }
    };
    window.addEventListener("pointermove", event => {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (pointerPending) return;
      pointerPending = true;
      requestAnimationFrame(applyPointer);
    }, { passive: true });
    document.addEventListener("pointerleave", resetPointer, { passive: true });

    let scrollTicking = false;
    const updateDepth = () => {
      const heroNode = hero();
      if (heroNode) {
        const depth = Math.min(window.scrollY, window.innerHeight) * 0.075;
        heroNode.style.setProperty("--hero-scroll", `${depth}px`);
        heroNode.style.setProperty("--hero-bg-scroll", `${depth * 0.7}px`);
      }
      scrollTicking = false;
    };
    window.addEventListener("scroll", () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(updateDepth);
    }, { passive: true });
    updateDepth();
  }

  document.querySelectorAll(".skill-card, .project-card, .award-card, .document-card, .experience-card").forEach(card => {
    card.dataset.tilt = "true";
    ensureGlow(card);
  });

  document.querySelectorAll("[data-tilt]").forEach(card => {
    if (card.dataset.motionReady || reducedMotion) return;
    card.dataset.motionReady = "true";
    let tiltPending = false;
    let nextX = 0.5;
    let nextY = 0.5;
    const applyTilt = () => {
      card.style.setProperty("--tilt-x", `${(nextX - 0.5) * 8}deg`);
      card.style.setProperty("--tilt-y", `${(0.5 - nextY) * 8}deg`);
      card.style.setProperty("--card-glow-x", `${nextX * 100}%`);
      card.style.setProperty("--card-glow-y", `${nextY * 100}%`);
      card.classList.add("is-tilting");
      tiltPending = false;
    };
    card.addEventListener("pointermove", event => {
      if (event.pointerType === "touch") return;
      const rect = card.getBoundingClientRect();
      nextX = (event.clientX - rect.left) / rect.width;
      nextY = (event.clientY - rect.top) / rect.height;
      if (tiltPending) return;
      tiltPending = true;
      requestAnimationFrame(applyTilt);
    });
    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-tilting");
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });

  document.querySelectorAll(".button").forEach(button => {
    if (button.dataset.magneticReady || reducedMotion) return;
    button.dataset.magneticReady = "true";
    button.addEventListener("pointermove", event => {
      if (event.pointerType === "touch") return;
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
      button.style.setProperty("--mag-x", `${x}px`);
      button.style.setProperty("--mag-y", `${y}px`);
      button.classList.add("is-magnetic");
    });
    button.addEventListener("pointerleave", () => {
      button.classList.remove("is-magnetic");
      button.style.setProperty("--mag-x", "0px");
      button.style.setProperty("--mag-y", "0px");
    });
  });
}
