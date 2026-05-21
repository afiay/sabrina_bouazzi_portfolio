const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const i18n = {
  fr: {
    skip: "Aller au contenu",
    loading: "Chargement du portfolio",
    brandRole: "Artiste plasticienne & scénographe",
    navVision: "Vision",
    navWorks: "Œuvres",
    navCinema: "Cinéma",
    navStudio: "Atelier",
    navTimeline: "Parcours",
    navContact: "Contact",
    heroKicker: "Design éthique · Scénographie · Matière · Cinéma",
    heroTitle: "La matière abandonnée devient mémoire vivante.",
    heroLead: "Sabrina Bouazzi compose des espaces, décors et objets où le réemploi devient poésie visuelle, récit sensible et geste scénographique.",
    heroPrimary: "Explorer les œuvres",
    heroSecondary: "Inviter / collaborer",
    metaCulture: "Artiste inscrite au Ministère de la Culture",
    metaRaskla: "Atelier éco-responsable & design d’intérieur durable",
    metaArch: "Formation en architecture",
    heroCardOverline: "Ateliers Raskla",
    heroCardTitle: "Scénographie, architecture sensible & design éthique",
    heroBadge: "Premier court métrage en développement autour de la mémoire des lieux et des objets.",
    visionKicker: "Vision artistique",
    visionTitle: "Révéler la beauté cachée de ce qui semblait fini.",
    visionP1: "Formée en architecture, Sabrina lit l’espace comme une scène et la matière comme une archive. Bois, tissu, meubles, objets usés ou fragments abandonnés deviennent des présences actives.",
    visionP2: "Sa démarche croise scénographie, design durable, arts vivants et cinéma. Elle crée des environnements où l’objet n’est pas décoratif seulement : il porte une mémoire, une tension, une poésie.",
    visionQuote: "Un objet réinventé n’est pas réparé pour disparaître : il est transformé pour raconter.",
    principleOneTitle: "Mémoire",
    principleOneText: "Conserver les traces, l’usage et la charge émotionnelle des matériaux.",
    principleTwoTitle: "Réemploi",
    principleTwoText: "Transformer sans effacer, composer avec les contraintes et les accidents.",
    principleThreeTitle: "Scène",
    principleThreeText: "Créer des espaces capables d’accueillir un corps, une histoire et une image.",
    worksKicker: "Portfolio sélectionné",
    worksTitle: "Œuvres, expositions et collaborations.",
    worksLead: "Une grille éditoriale filtrable pour présenter les projets cinéma, expositions, atelier et recherche matière.",
    filterAll: "Tout",
    filterCinema: "Cinéma",
    filterExhibition: "Exposition",
    filterStudio: "Atelier",
    filterResearch: "Recherche",
    cinemaKicker: "Cinéma & arts vivants",
    cinemaTitle: "Le décor comme architecture narrative.",
    cinemaP: "Sabrina intervient sur la décoration de plateau, la création d’accessoires, le choix des textures, l’ambiance, le mobilier transformé et la cohérence spatiale. Son regard d’architecte donne au décor une structure, une circulation et une dramaturgie.",
    processOneTitle: "Lecture du récit",
    processOneText: "Comprendre les tensions, lieux, objets et gestes du projet.",
    processTwoTitle: "Palette matière",
    processTwoText: "Définir textures, objets, mobilier, couleurs et traces d’usage.",
    processThreeTitle: "Mise en espace",
    processThreeText: "Construire une image habitable par le corps et la caméra.",
    atelierKicker: "Atelier pluridisciplinaire",
    atelierLead: "Atelier éco-responsable mêlant scénographie, architecture, design éthique, artisanat, recyclage créatif, costumes, art graphique, BD et court métrage en cours.",
    serviceSpace: "Scénographie & espace",
    serviceSpaceText: "Concept, volumes, circulation, ambiance et composition visuelle.",
    serviceMaterial: "Matière & réemploi",
    serviceMaterialText: "Bois, textile, meuble, accessoire, objet trouvé et mobilier recyclé.",
    serviceStory: "Image & récit",
    serviceStoryText: "Art graphique, bande dessinée, court métrage et narration plastique.",
    timelineKicker: "Parcours",
    timelineTitle: "Architecture, artisanat, design et direction artistique.",
    timelineLead: "Un parcours hybride, de l’architecture au textile, de la menuiserie à la scénographie.",
    educationTitle: "Formation",
    languagesTitle: "Langues & logiciels",
    contactKicker: "Contact",
    contactTitle: "Créer une scénographie, un décor ou une œuvre visuelle ensemble.",
    contactLead: "Basée à Gammarth Village, La Marsa, Tunis. Disponible pour cinéma, arts vivants, expositions, design d’espace et collaborations interdisciplinaires.",
    downloadVcard: "Télécharger la vCard",
    printPdf: "Imprimer / PDF",
    formName: "Nom",
    formMessage: "Message",
    formSend: "Préparer l’email",
    footer: "Portfolio artistique",
    backTop: "Retour en haut ↑"
  },
  en: {
    skip: "Skip to content",
    loading: "Loading portfolio",
    brandRole: "Visual artist & scenographer",
    navVision: "Vision",
    navWorks: "Works",
    navCinema: "Cinema",
    navStudio: "Studio",
    navTimeline: "Path",
    navContact: "Contact",
    heroKicker: "Ethical design · Scenography · Material · Cinema",
    heroTitle: "Abandoned matter becomes living memory.",
    heroLead: "Sabrina Bouazzi creates spaces, sets and objects where reuse becomes visual poetry, sensitive storytelling and scenographic gesture.",
    heroPrimary: "Explore works",
    heroSecondary: "Invite / collaborate",
    metaCulture: "Registered artist with the Ministry of Culture",
    metaRaskla: "Eco-responsible studio & sustainable interior design",
    metaArch: "Architecture background",
    heroCardOverline: "Ateliers Raskla",
    heroCardTitle: "Scenography, sensitive architecture & ethical design",
    heroBadge: "First short film in development around the memory of places and objects.",
    visionKicker: "Artistic vision",
    visionTitle: "Revealing the hidden beauty of what seemed finished.",
    visionP1: "Trained in architecture, Sabrina reads space as a stage and material as an archive. Wood, fabric, furniture, worn objects and abandoned fragments become active presences.",
    visionP2: "Her approach crosses scenography, sustainable design, live arts and cinema. She creates environments where the object is not only decorative: it carries memory, tension and poetry.",
    visionQuote: "A reinvented object is not repaired to disappear: it is transformed to tell.",
    principleOneTitle: "Memory",
    principleOneText: "Preserve traces, use and the emotional charge of materials.",
    principleTwoTitle: "Reuse",
    principleTwoText: "Transform without erasing, compose with constraints and accidents.",
    principleThreeTitle: "Stage",
    principleThreeText: "Create spaces able to host a body, a story and an image.",
    worksKicker: "Selected portfolio",
    worksTitle: "Works, exhibitions and collaborations.",
    worksLead: "A filterable editorial grid for cinema, exhibitions, studio work and material research.",
    filterAll: "All",
    filterCinema: "Cinema",
    filterExhibition: "Exhibition",
    filterStudio: "Studio",
    filterResearch: "Research",
    cinemaKicker: "Cinema & live arts",
    cinemaTitle: "Set design as narrative architecture.",
    cinemaP: "Sabrina works on set decoration, props, texture selection, atmosphere, transformed furniture and spatial coherence. Her architectural eye gives the set structure, circulation and dramaturgy.",
    processOneTitle: "Reading the story",
    processOneText: "Understanding tensions, places, objects and gestures in the project.",
    processTwoTitle: "Material palette",
    processTwoText: "Defining textures, objects, furniture, colors and traces of use.",
    processThreeTitle: "Spatial staging",
    processThreeText: "Building an image inhabited by body and camera.",
    atelierKicker: "Multidisciplinary studio",
    atelierLead: "An eco-responsible studio combining scenography, architecture, ethical design, craft, creative recycling, costume, graphic art, comics and a short film in progress.",
    serviceSpace: "Scenography & space",
    serviceSpaceText: "Concept, volumes, circulation, atmosphere and visual composition.",
    serviceMaterial: "Material & reuse",
    serviceMaterialText: "Wood, textile, furniture, props, found objects and recycled furniture.",
    serviceStory: "Image & story",
    serviceStoryText: "Graphic art, comics, short film and visual narration.",
    timelineKicker: "Path",
    timelineTitle: "Architecture, craft, design and art direction.",
    timelineLead: "A hybrid path from architecture to textile, woodworking and scenography.",
    educationTitle: "Education",
    languagesTitle: "Languages & software",
    contactKicker: "Contact",
    contactTitle: "Create a scenography, set or visual work together.",
    contactLead: "Based in Gammarth Village, La Marsa, Tunis. Available for cinema, live arts, exhibitions, spatial design and interdisciplinary projects.",
    downloadVcard: "Download vCard",
    printPdf: "Print / PDF",
    formName: "Name",
    formMessage: "Message",
    formSend: "Prepare email",
    footer: "Art portfolio",
    backTop: "Back to top ↑"
  },
  ar: {
    skip: "انتقل إلى المحتوى",
    loading: "تحميل البورتفوليو",
    brandRole: "فنانة تشكيلية وسينوغرافية",
    navVision: "الرؤية",
    navWorks: "الأعمال",
    navCinema: "السينما",
    navStudio: "الورشة",
    navTimeline: "المسار",
    navContact: "اتصال",
    heroKicker: "تصميم أخلاقي · سينوغرافيا · مادة · سينما",
    heroTitle: "المادة المهملة تتحول إلى ذاكرة حيّة.",
    heroLead: "تصنع صابرينا بوعزيزي فضاءات وديكورات وأشياء يتحول فيها إعادة الاستعمال إلى شعر بصري وسرد حساس وفعل سينوغرافي.",
    heroPrimary: "استكشاف الأعمال",
    heroSecondary: "دعوة / تعاون",
    metaCulture: "فنانة مسجلة بوزارة الثقافة",
    metaRaskla: "ورشة مسؤولة بيئياً وتصميم داخلي مستدام",
    metaArch: "تكوين في الهندسة المعمارية",
    heroCardOverline: "Ateliers Raskla",
    heroCardTitle: "سينوغرافيا، عمارة حساسة وتصميم أخلاقي",
    heroBadge: "فيلم قصير أول قيد التطوير حول ذاكرة الأماكن والأشياء.",
    visionKicker: "الرؤية الفنية",
    visionTitle: "كشف الجمال الخفي فيما ظُنّ أنه انتهى.",
    visionP1: "بفضل تكوينها في الهندسة المعمارية، تقرأ صابرينا الفضاء كخشبة، والمادة كأرشيف. الخشب والنسيج والأثاث والأشياء المستعملة تتحول إلى حضور فعّال.",
    visionP2: "يجمع عملها بين السينوغرافيا والتصميم المستدام والفنون الحية والسينما. الشيء ليس زينة فقط؛ بل يحمل ذاكرة وتوتراً وشعراً.",
    visionQuote: "الشيء المعاد ابتكاره لا يُصلح كي يختفي، بل يتحول كي يروي.",
    principleOneTitle: "ذاكرة",
    principleOneText: "الحفاظ على الأثر والاستعمال والشحنة العاطفية للمواد.",
    principleTwoTitle: "إعادة استعمال",
    principleTwoText: "التحويل دون محو، والتأليف مع القيود والصدف.",
    principleThreeTitle: "مشهد",
    principleThreeText: "خلق فضاءات تستقبل جسداً وحكاية وصورة.",
    worksKicker: "مختارات",
    worksTitle: "أعمال، معارض وتعاونات.",
    worksLead: "شبكة أعمال قابلة للتصفية للسينما والمعارض والورشة والبحث في المادة.",
    filterAll: "الكل",
    filterCinema: "سينما",
    filterExhibition: "معرض",
    filterStudio: "ورشة",
    filterResearch: "بحث",
    cinemaKicker: "سينما وفنون حية",
    cinemaTitle: "الديكور كعمارة سردية.",
    cinemaP: "تعمل صابرينا على ديكور التصوير، الإكسسوارات، اختيار الخامات، الأجواء، الأثاث المحول والاتساق المكاني. نظرتها المعمارية تمنح الديكور بنية وحركة ودرامية.",
    processOneTitle: "قراءة الحكاية",
    processOneText: "فهم التوترات والأماكن والأشياء والإيماءات داخل المشروع.",
    processTwoTitle: "لوحة المادة",
    processTwoText: "تحديد الخامات والأشياء والأثاث والألوان وآثار الاستعمال.",
    processThreeTitle: "التشكيل المكاني",
    processThreeText: "بناء صورة قابلة للسكنى بالجسد والكاميرا.",
    atelierKicker: "ورشة متعددة الاختصاصات",
    atelierLead: "ورشة مسؤولة بيئياً تجمع السينوغرافيا، العمارة، التصميم الأخلاقي، الحرفة، إعادة التدوير الإبداعي، الأزياء، الفن الغرافيكي، القصص المصورة وفيلماً قصيراً قيد الإنجاز.",
    serviceSpace: "سينوغرافيا وفضاء",
    serviceSpaceText: "فكرة، أحجام، حركة، أجواء وتركيب بصري.",
    serviceMaterial: "مادة وإعادة استعمال",
    serviceMaterialText: "خشب، نسيج، أثاث، إكسسوارات، أشياء معثور عليها وأثاث معاد تدويره.",
    serviceStory: "صورة وحكاية",
    serviceStoryText: "فن غرافيكي، قصص مصورة، فيلم قصير وسرد تشكيلي.",
    timelineKicker: "المسار",
    timelineTitle: "عمارة، حرفة، تصميم وإدارة فنية.",
    timelineLead: "مسار هجين من العمارة إلى النسيج والنجارة والسينوغرافيا.",
    educationTitle: "التكوين",
    languagesTitle: "لغات وبرامج",
    contactKicker: "اتصال",
    contactTitle: "لنصنع سينوغرافيا أو ديكوراً أو عملاً بصرياً معاً.",
    contactLead: "مقيمة في قمرت، المرسى، تونس. متاحة لمشاريع السينما والفنون الحية والمعارض وتصميم الفضاء والتعاونات متعددة الاختصاصات.",
    downloadVcard: "تحميل بطاقة الاتصال",
    printPdf: "طباعة / PDF",
    formName: "الاسم",
    formMessage: "الرسالة",
    formSend: "تحضير البريد",
    footer: "بورتفوليو فني",
    backTop: "العودة إلى الأعلى ↑"
  }
};

const storage = {
  get(key, fallback) {
    try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch {}
  }
};

const html = document.documentElement;
const header = $("[data-header]");
const navPanel = $("[data-nav-panel]");
const navToggle = $("[data-nav-toggle]");
const progress = $("[data-scroll-progress]");
const loader = $("[data-loader]");
const year = $("[data-year]");
const spotlight = $("[data-spotlight]");
const langSwitch = $("[data-lang-switch]");
const themeSwitch = $("[data-theme-switch]");
const motionSwitch = $("[data-motion-switch]");
const dialog = $("[data-project-dialog]");

if (year) year.textContent = new Date().getFullYear();

window.addEventListener("load", () => {
  setTimeout(() => loader?.classList.add("is-hidden"), 420);
});

function setLanguage(lang) {
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[lang]?.[key]) node.textContent = i18n[lang][key];
  });
  if (langSwitch) langSwitch.textContent = lang.toUpperCase();
  storage.set("sabrina-lang", lang);
}

function setTheme(theme) {
  html.dataset.theme = theme;
  if (themeSwitch) themeSwitch.textContent = theme === "nocturne" ? "☀" : "☾";
  storage.set("sabrina-theme", theme);
}

function setMotion(motion) {
  html.dataset.motion = motion;
  if (motionSwitch) motionSwitch.textContent = motion === "off" ? "Still" : "Motion";
  storage.set("sabrina-motion", motion);
}

setLanguage(storage.get("sabrina-lang", "fr"));
setTheme(storage.get("sabrina-theme", "atelier"));
setMotion(storage.get("sabrina-motion", "on"));

langSwitch?.addEventListener("click", () => {
  const current = html.lang;
  const next = current === "fr" ? "en" : current === "en" ? "ar" : "fr";
  setLanguage(next);
});

themeSwitch?.addEventListener("click", () => {
  setTheme(html.dataset.theme === "nocturne" ? "atelier" : "nocturne");
});

motionSwitch?.addEventListener("click", () => {
  setMotion(html.dataset.motion === "off" ? "on" : "off");
});

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  if (progress) progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}
updateScrollUI();
window.addEventListener("scroll", updateScrollUI, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

$$(".nav-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    navPanel?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

$$('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    const target = $(id);
    if (!target) return;
    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 82;
    window.scrollTo({
      top,
      behavior: html.dataset.motion === "off" ? "auto" : "smooth"
    });
  });
});

const revealEls = $$(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const sections = $$("[data-section]");
  const navLinks = $$(".nav-panel a[href^='#']");
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 });
  sections.forEach((section) => activeObserver.observe(section));
}

$$("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    $$("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    $$("[data-category]").forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

const projectData = window.SABRINA_PROJECTS || {};
function openProject(key) {
  const project = projectData[key];
  if (!project || !dialog) return;

  $("[data-dialog-image]", dialog).src = project.image;
  $("[data-dialog-image]", dialog).alt = project.title;
  $("[data-dialog-meta]", dialog).textContent = project.meta;
  $("[data-dialog-title]", dialog).textContent = project.title;
  $("[data-dialog-description]", dialog).textContent = project.description;

  const list = $("[data-dialog-list]", dialog);
  list.innerHTML = "";
  project.points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    list.append(li);
  });

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  document.body.classList.add("dialog-open");
}

$$("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.openProject));
});

$("[data-close-dialog]")?.addEventListener("click", () => {
  dialog?.close();
  document.body.classList.remove("dialog-open");
});

dialog?.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedBackdrop =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedBackdrop) {
    dialog.close();
    document.body.classList.remove("dialog-open");
  }
});

dialog?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

$$("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    if (html.dataset.motion === "off" || !matchMedia("(pointer:fine)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

if (spotlight && matchMedia("(pointer:fine)").matches) {
  document.addEventListener("mousemove", (event) => {
    if (html.dataset.motion === "off") {
      spotlight.style.opacity = "0";
      return;
    }
    spotlight.style.opacity = "1";
    spotlight.style.left = `${event.clientX}px`;
    spotlight.style.top = `${event.clientY}px`;
  }, { passive: true });
}

$("[data-print]")?.addEventListener("click", () => window.print());

$("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();

  const subject = encodeURIComponent(`Collaboration artistique${name ? ` — ${name}` : ""}`);
  const body = encodeURIComponent(`${message || "Bonjour Sabrina,\n\nJe souhaite discuter d’un projet artistique avec vous."}\n\n${name ? `— ${name}` : ""}`);
  window.location.href = `mailto:atelierraskla.38@gmail.com?subject=${subject}&body=${body}`;
});
