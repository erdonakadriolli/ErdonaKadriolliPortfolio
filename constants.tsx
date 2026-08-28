import { Project, Skill, ExperienceItem, CertificationItem, LanguageProficiency } from './types';

export const ERDONA_PROFILE = {
  name: "Erdona Kadriolli",
  titleEn: "Computer Science & Engineering | Data, AI & Full-Stack Development",
  titleSq: "Shkenca Kompjuterike & Inxhinieri | Data, AI & Zhvillim Full-Stack",
  location: "Kosovo",
  locationSq: "Kosovë",
  university: "UBT, University for Business and Technology",
  universitySq: "UBT - Universiteti për Biznes dhe Teknologji",
  studyYear: "Final-year Student (Sep 2023 – Present)",
  studyYearSq: "Viti Përmbyllës (Shtator 2023 – Aktual)",
  specialization: "Data, AI & Full-Stack Engineering",
  specializationSq: "Inxhinieri e të Dhënave, AI & Full-Stack",
  photo1: "/Foto1.jpeg",
  photo2: "/Foto2.jpeg",
  avatar: "/Foto1.jpeg",
  email: "donakadriolli@gmail.com",
  phone: "+383 49 236 261",
  github: "https://github.com/erdonakadriolli",
  githubUsername: "erdonakadriolli",
  linkedin: "https://linkedin.com/in/erdona-kadriolli",
  bioEn: "Final-year Computer Science & Engineering student at UBT, specializing in Data, AI & Full-Stack Engineering. Hands-on experience developing end-to-end applications with Python, FastAPI, React, TypeScript, SQL/PostgreSQL/MySQL, machine learning (scikit-learn), REST APIs, and Git through academic and personal projects. Built production-ready web platforms and data-driven systems, with field experience in national statistics and election operations. Motivated to deliver robust full-stack software and intelligent AI solutions.",
  bioSq: "Studente e vitit të fundit në Shkenca Kompjuterike dhe Inxhinieri në UBT, me specializim në Inxhinierinë e të Dhënave, AI & Zhvillimin Full-Stack. Përvojë praktike në ndërtimin e aplikacioneve të plota me Python, FastAPI, React, TypeScript, SQL/PostgreSQL/MySQL, mësim makinerik (scikit-learn), REST API dhe Git përmes projekteve akademike dhe reale. Kam zhvilluar platforma moderne web dhe sisteme të orientuara nga të dhënat, me përvojë reale nga terreni me ASK, UNICEF dhe KQZ. E motivuar për të krijuar zgjidhje cilësore softuerike full-stack dhe inteligjencë artificiale.",
  social: {
    linkedin: "https://linkedin.com/in/erdona-kadriolli",
    github: "https://github.com/erdonakadriolli",
    email: "mailto:donakadriolli@gmail.com",
    phone: "tel:+38349236261"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "healthconnect-ai",
    title: "HealthConnect-AI",
    titleSq: "HealthConnect-AI",
    description: "AI-powered health platform with 24 SQL tables, JWT authentication/RBAC, WebSocket chat, OCR extraction from lab reports, and five ML models. Team project role: Data & ML Engineer; Random Forest achieved 85.71% accuracy.",
    descriptionSq: "Platformë shëndetësore e fuqizuar nga AI me 24 tabela SQL, autentikim JWT/RBAC, bisedë me WebSockets, nxjerrje OCR nga raportet laboratorike dhe pesë modele ML. Roli në ekip: Data & ML Engineer; Random Forest arriti 85.71% saktësi.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "scikit-learn", "Claude Vision API", "WebSockets"],
    category: "Data & AI",
    link: "https://github.com/erdonakadriolli",
    githubUrl: "https://github.com/erdonakadriolli",
    liveUrl: "https://github.com/erdonakadriolli",
    highlights: [
      "Designed and optimized 24 PostgreSQL tables with relational integrity and role-based access control (RBAC)",
      "Implemented Claude Vision API integration for automated OCR extraction from medical lab reports",
      "Engineered 5 machine learning diagnostic models with Random Forest achieving 85.71% benchmark accuracy",
      "Built low-latency real-time doctor-patient communication using WebSocket pipelines"
    ],
    highlightsSq: [
      "Dizajnim dhe optimizim i 24 tabelave PostgreSQL me integritet relacional dhe kontroll qasjeje (RBAC)",
      "Integrim i Claude Vision API për nxjerrje automatike të tekstit OCR nga analizat laboratorike",
      "Trajnim i 5 modeleve të mësimit makinerik me Random Forest që arriti 85.71% saktësi",
      "Komunikim në kohë reale midis mjekut dhe pacientit përmes WebSockets"
    ],
    metrics: "85.71% Accuracy • 24 SQL Tables"
  },
  {
    id: "ojq-vizioni-rinor",
    title: "OJQ Vizioni Rinor i Shales — Official Website",
    titleSq: "Faqja Zyrtare — OJQ Vizioni Rinor i Shalës",
    description: "Full-stack multilingual NGO platform with an AI assistant, admin panel for projects/news/volunteers, responsive UI, and Firebase backend; deployed on Vercel.",
    descriptionSq: "Platformë full-stack shumëgjuhëshe për OJQ me asistent inteligjent AI, panel administrativ për projekte/lajme/vullnetarë, ndërfaqe adaptive dhe backend në Firebase; e publikuar në Vercel.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    tags: ["React.js", "Vite", "Tailwind CSS", "Firebase", "Vercel", "Gemini AI"],
    category: "Full-Stack",
    link: "https://github.com/erdonakadriolli",
    githubUrl: "https://github.com/erdonakadriolli",
    liveUrl: "https://github.com/erdonakadriolli",
    highlights: [
      "Engineered complete full-stack web application with responsive Tailwind CSS & React architecture",
      "Integrated Gemini AI assistant to guide visitors and answer inquiries about youth initiatives",
      "Created dynamic admin dashboard for real-time publishing of community projects and volunteer registrations",
      "Configured secure Firebase Firestore database rules and continuous deployment on Vercel"
    ],
    highlightsSq: [
      "Zhvillim i plotë full-stack me arkitekturë moderne në React, Vite dhe Tailwind CSS",
      "Integrim i asistentit virtual Gemini AI për udhëzimin e vizitorëve dhe informim mbi nismat rinore",
      "Ndërtim i panelit të avancuar të administrimit për menaxhimin e projekteve dhe vullnetarëve",
      "Baza e të dhënave në kohë reale me Firebase dhe shpërndarje e automatizuar në Vercel"
    ],
    metrics: "Production NGO Platform • Gemini AI"
  },
  {
    id: "covid19-analysis",
    title: "COVID-19 Spread Analysis & Prediction",
    titleSq: "Analiza dhe Parashikimi i Përhapjes së COVID-19",
    description: "Data science project using Our World in Data for analysis, visualization and predictive modeling.",
    descriptionSq: "Projekt në Shkencën e të Dhënave duke përdorur të dhënat nga Our World in Data për analizë eksploruese, vizualizim dhe modelim parashikues.",
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "Data Science"],
    category: "Data & AI",
    link: "https://github.com/erdonakadriolli",
    githubUrl: "https://github.com/erdonakadriolli",
    liveUrl: "https://github.com/erdonakadriolli",
    highlights: [
      "Aggregated and preprocessed comprehensive global pandemic time-series datasets from Our World in Data",
      "Conducted exploratory data analysis (EDA) to identify correlation factors in transmission rates",
      "Generated publication-quality visual insights using Matplotlib and Seaborn statistical palettes",
      "Built predictive time-series models for spread forecasting and epidemiological trend evaluation"
    ],
    highlightsSq: [
      "Përpunim dhe pastrim i të dhënave globale të serive kohore nga Our World in Data",
      "Analizë eksploruese statistikore (EDA) për identifikimin e modeleve të përhapjes",
      "Vizualizime të avancuara me Matplotlib dhe Seaborn për paraqitje të qartë analitike",
      "Implementim i modeleve parashikuese për vlerësimin e trajektores së pandemisë"
    ],
    metrics: "Our World in Data • Predictive Modeling"
  },
  {
    id: "productivity-dashboard",
    title: "Personal Productivity Dashboard",
    titleSq: "Paneli Personal i Produktivitetit",
    description: "Task-management platform combining a FastAPI backend with an interactive Streamlit frontend.",
    descriptionSq: "Platformë menaxhimi të detyrave dhe produktivitetit që kombinon një backend të shpejtë në FastAPI me ndërfaqe interaktive në Streamlit.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    tags: ["FastAPI", "Streamlit", "Python", "REST APIs", "CSS"],
    category: "Full-Stack",
    link: "https://github.com/erdonakadriolli",
    githubUrl: "https://github.com/erdonakadriolli",
    liveUrl: "https://github.com/erdonakadriolli",
    highlights: [
      "Engineered asynchronous REST API endpoints with FastAPI for fast task state mutations",
      "Built responsive analytical user interface using Python Streamlit with custom CSS theme",
      "Implemented task categorization, priority scoring, and completion rate tracking",
      "Optimized data caching and state persistence for instant UI re-renders"
    ],
    highlightsSq: [
      "Ndërtim i REST API asinkrone në FastAPI për përpunim të shpejtë të të dhënave",
      "Ndërfaqe interaktive dhe analitike në Streamlit me dizajn të stiluar në CSS",
      "Kategorizim i detyrave, pikëzim i prioriteteve dhe ndjekje e ecurisë në kohë reale",
      "Optimizim i ruajtjes së gjendjes për rifreskim të menjëhershëm të të dhënave"
    ],
    metrics: "FastAPI REST • Streamlit Frontend"
  },
  {
    id: "cshops-ecommerce",
    title: "CShops — E-commerce Web Application",
    titleSq: "CShops — Aplikacion Web për E-commerce",
    description: "Course project implementing an e-commerce application with product management and a web interface.",
    descriptionSq: "Projekt akademik që zbaton një aplikacion tregtie elektronike me menaxhim të produkteve, shportë dhe ndërfaqe web.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Database Design"],
    category: "Backend",
    link: "https://github.com/erdonakadriolli",
    githubUrl: "https://github.com/erdonakadriolli",
    liveUrl: "https://github.com/erdonakadriolli",
    highlights: [
      "Engineered full-featured online shop with product listing, dynamic cart, and checkout flow",
      "Designed normalized MySQL database schema with relationships for products, categories, and orders",
      "Developed secure administrator portal for inventory management and sales records",
      "Implemented session handling and form validations in pure PHP and JavaScript"
    ],
    highlightsSq: [
      "Zhvillim i plotë i dyqanit online me katalog produktesh, shportë blerjeje dhe porosi",
      "Dizajnim i skemës relacionale në MySQL me lidhje midis përdoruesve, produkteve dhe kategorive",
      "Panel administrues për menaxhimin e stokut dhe regjistrit të porosive",
      "Menaxhim i sesioneve të sigurta dhe validim i të dhënave në PHP dhe JavaScript"
    ],
    metrics: "Full CRUD • Relational MySQL"
  }
];

export const SKILLS: Skill[] = [
  // Full-Stack & Web Development
  { name: "Full-Stack Architecture", category: "Full-Stack", level: 92 },
  { name: "React & Vite", category: "Full-Stack", level: 94 },
  { name: "TypeScript", category: "Full-Stack", level: 90 },
  { name: "FastAPI & REST APIs", category: "Full-Stack", level: 92 },
  { name: "Node.js & Express", category: "Full-Stack", level: 86 },
  { name: "Tailwind CSS", category: "Full-Stack", level: 94 },
  { name: "WebSockets & Real-time", category: "Full-Stack", level: 85 },

  // Programming Languages
  { name: "Python", category: "Data & AI", level: 95 },
  { name: "Java", category: "Backend", level: 88 },
  { name: "SQL", category: "Backend", level: 92 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "PHP", category: "Backend", level: 82 },
  { name: "HTML5 / CSS3", category: "Frontend", level: 94 },

  // Data & AI
  { name: "Pandas", category: "Data & AI", level: 92 },
  { name: "scikit-learn", category: "Data & AI", level: 88 },
  { name: "Machine Learning", category: "Data & AI", level: 88 },
  { name: "Data Analysis & EDA", category: "Data & AI", level: 92 },
  { name: "Data Visualization (Matplotlib, Seaborn)", category: "Data & AI", level: 90 },

  // Databases & Backend
  { name: "MySQL", category: "Backend", level: 90 },
  { name: "PostgreSQL", category: "Backend", level: 88 },
  { name: "Database Design & Relational Modeling", category: "Backend", level: 92 },

  // Frontend & UI
  { name: "Streamlit", category: "Frontend", level: 88 },

  // Tools & Platforms
  { name: "Git & GitHub", category: "Tools & Cloud", level: 92 },
  { name: "Docker", category: "Tools & Cloud", level: 80 },
  { name: "Firebase Firestore", category: "Tools & Cloud", level: 88 },
  { name: "Vercel Deployment", category: "Tools & Cloud", level: 92 },
  { name: "VS Code", category: "Tools & Cloud", level: 96 },
  { name: "XAMPP", category: "Tools & Cloud", level: 88 },

  // Core Strengths
  { name: "Analytical Thinking", category: "Soft Skills", level: 96 },
  { name: "Problem-Solving", category: "Soft Skills", level: 96 },
  { name: "Teamwork & Collaboration", category: "Soft Skills", level: 94 },
  { name: "Communication", category: "Soft Skills", level: 92 },
  { name: "Adaptability", category: "Soft Skills", level: 94 },
  { name: "Time Management", category: "Soft Skills", level: 92 },
  { name: "Leadership", category: "Soft Skills", level: 90 }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "powertohr-2026",
    role: "IT Team Volunteer",
    roleSq: "Vullnetare në Ekipin e IT-së",
    company: "PowerToHR Global Summit 2026 (IPKO Stage / AMC Hall)",
    companySq: "PowerToHR Global Summit 2026 (Salla IPKO / AMC Hall)",
    period: "May 2026",
    periodSq: "Maj 2026",
    category: "IT & Tech",
    description: [
      "Provided technical and IT support during the international summit.",
      "Collaborated with the organizing and technical team on event operations and live tech infrastructure."
    ],
    descriptionSq: [
      "Ofrim i mbështetjes teknike dhe IT gjatë samitit ndërkombëtar.",
      "Bashkëpunim i ngushtë me ekipin organizativ dhe teknik për rrjedhën e suksesshme të ngjarjes."
    ]
  },
  {
    id: "keyvote-kqz",
    role: "Preliminary Results Operator",
    roleSq: "Operatore e Rezultateve Preliminare",
    company: "KeyVote — Central Election Commission (KQZ)",
    companySq: "KeyVote — Komisioni Qendror i Zgjedhjeve (KQZ)",
    period: "Oct – Dec 2025",
    periodSq: "Tet – Dhj 2025",
    category: "Elections",
    description: [
      "Entered and processed preliminary election results in the official centralized system.",
      "Maintained strict data accuracy and confidentiality standards under high-speed operational requirements."
    ],
    descriptionSq: [
      "Regjistrim dhe procesim i rezultateve preliminare të zgjedhjeve në sistemin e centralizuar.",
      "Ruajtje e standardeve të larta të saktësisë së të dhënave dhe konfidencialitetit nën ritëm intensiv."
    ]
  },
  {
    id: "mics-unicef",
    role: "Enumerator — Multiple Indicator Cluster Survey (MICS)",
    roleSq: "Anketuese — Multiple Indicator Cluster Survey (MICS)",
    company: "Kosovo Agency of Statistics (KAS) & UNICEF",
    companySq: "Agjencia e Statistikave të Kosovës (ASK) & UNICEF",
    period: "Aug – Nov 2025",
    periodSq: "Gus – Nën 2025",
    category: "Data & Research",
    description: [
      "Collected and processed standardized household survey data according to UNICEF methodologies.",
      "Communicated effectively with diverse respondents and supported rigorous field data quality assurance."
    ],
    descriptionSq: [
      "Mbledhje dhe përpunim i të dhënave të anketimit sipas metodologjisë së standardizuar të UNICEF.",
      "Komunikim me qytetarët dhe sigurim i cilësisë së të dhënave në terren."
    ]
  },
  {
    id: "idra-airport",
    role: "Field Enumerator — Airport Research",
    roleSq: "Anketuese në Terren — Hulumtimi i Aeroportit",
    company: "Idra Research Company",
    companySq: "Kompania Hulumtuese Idra",
    period: "Jul 2025",
    periodSq: "Kor 2025",
    category: "Data & Research",
    description: [
      "Conducted on-site traveler interviews and systematically collected quantitative research data.",
      "Ensured high completion rates and real-time response validation."
    ],
    descriptionSq: [
      "Realizim i intervistave me udhëtarë dhe mbledhje e strukturuar e të dhënave sasiore.",
      "Sigurim i normave të larta të përgjigjeve dhe validim i të dhënave në kohë reale."
    ]
  },
  {
    id: "census-kas",
    role: "Population Census Enumerator",
    roleSq: "Regjistruese e Popullsisë dhe Banesave",
    company: "Kosovo Agency of Statistics (KAS / ASK)",
    companySq: "Agjencia e Statistikave të Kosovës (ASK)",
    period: "Mar – May 2024",
    periodSq: "Mar – Maj 2024",
    category: "Data & Research",
    description: [
      "Registered and digitally processed demographic, household, and housing data during the official National Census.",
      "Adhered to rigorous statistical guidelines and electronic data integrity checks."
    ],
    descriptionSq: [
      "Regjistrim dhe procesim digjital i të dhënave demografike dhe të banesave gjatë Regjistrimit Kombëtar.",
      "Zbatim i përpiktë i udhëzimeve statistikore dhe kontroll i integritetit të të dhënave."
    ]
  },
  {
    id: "dots-research",
    role: "Field Enumerator",
    roleSq: "Anketuese në Terren",
    company: "Dots Research Company",
    companySq: "Kompania Hulumtuese Dots",
    period: "Jul – Aug 2024",
    periodSq: "Kor – Gus 2024",
    category: "Data & Research",
    description: [
      "Conducted field interviews and collected market & social research data across assigned regions."
    ],
    descriptionSq: [
      "Kryerje e intervistave në terren dhe mbledhje e të dhënave për hulumtime tregu dhe sociale."
    ]
  },
  {
    id: "ngo-vizioni-rinor",
    role: "Active Member & Volunteer",
    roleSq: "Anëtare Aktive & Vullnetare",
    company: 'NGO "Vizioni Rinor i Shales"',
    companySq: 'OJQ "Vizioni Rinor i Shalës"',
    period: "Jul 2021 – Present",
    periodSq: "Kor 2021 – Në Vazhdim",
    category: "Volunteering",
    description: [
      "Supported grant documentation, youth empowerment activities, and community advocacy initiatives.",
      "Contributed to the development and implementation of community technology and leadership projects."
    ],
    descriptionSq: [
      "Përgatitje e dokumentacionit për grante, aktivitete fuqizuese për rininë dhe nisma avokuese.",
      "Kontribut i vazhdueshëm në hartimin dhe zbatimin e projekteve komunitare dhe teknologjike."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "PowerToHR Summit 2026 (Edition 4)",
    issuer: "PowerToHR",
    date: "May 2026"
  },
  {
    title: "MICS Data Collection Training",
    issuer: "Kosovo Agency of Statistics & UNICEF-Kosovo",
    date: "Aug – Sep 2025"
  },
  {
    title: "Professional Course: Python",
    issuer: "Digital School",
    date: "Oct – Dec 2024"
  },
  {
    title: "Professional Course: Java",
    issuer: "Probit Academy",
    date: "May – Aug 2024"
  },
  {
    title: "Training for Trainers: Public Info & Awareness for Vulnerable Communities",
    issuer: "ATRC",
    date: "Dec 2024"
  },
  {
    title: "Digital Tools for CSOs",
    issuer: "KCSF",
    date: "Sep 2024"
  },
  {
    title: "Capacity Building Program",
    issuer: "USAID & KCSF",
    date: "Feb 2024",
    hours: "33 hours"
  }
];

export const LANGUAGES_DATA: LanguageProficiency[] = [
  {
    language: "Albanian",
    languageSq: "Shqip",
    level: "Native",
    levelSq: "Gjuhë Amtare"
  },
  {
    language: "English",
    languageSq: "Anglisht",
    level: "Professional",
    levelSq: "Nivel Profesional"
  },
  {
    language: "Turkish",
    languageSq: "Turqisht",
    level: "Advanced",
    levelSq: "Nivel i Avancuar"
  }
];

export const CORE_STRENGTHS = [
  { en: "Analytical Thinking", sq: "Mendimi Analitik" },
  { en: "Problem-Solving", sq: "Zgjidhja e Problemeve" },
  { en: "Teamwork", sq: "Puna në Ekip" },
  { en: "Communication", sq: "Komunikimi" },
  { en: "Adaptability", sq: "Përshtatshmëria" },
  { en: "Time Management", sq: "Menaxhimi i Kohës" },
  { en: "Leadership", sq: "Lidershipi" }
];

export const EDUCATION_TIMELINE = [
  {
    period: "Sep 2023 – Present",
    periodSq: "Shtator 2023 – Aktual",
    title: "B.Sc. in Computer Science and Engineering",
    titleSq: "B.Sc. në Shkenca Kompjuterike dhe Inxhinieri",
    institution: "UBT, University for Business and Technology",
    institutionSq: "UBT, Universiteti për Biznes dhe Teknologji",
    specialization: "Specialization: Data & AI Engineering",
    specializationSq: "Specializimi: Inxhinieri e të Dhënave & AI",
    description: "Hands-on engineering curriculum covering Machine Learning, Data Preprocessing & Analytics, Algorithms & Data Structures, Relational Database Management (SQL/PostgreSQL), and Modern Web Systems.",
    descriptionSq: "Kurrikulë praktike inxhinierike me fokus në Mësim Makinerik, Përpunim & Analitikë të të Dhënave, Algoritme & Struktura të Dhënash, Menaxhim të Bazave të të Dhënave (SQL/PostgreSQL) dhe Sisteme Moderne Web.",
    badge: "Final Year Student",
    badgeSq: "Viti Përmbyllës"
  },
  {
    period: "Sep 2020 – Jun 2023",
    periodSq: "Shtator 2020 – Qershor 2023",
    title: 'High School Diploma in Natural Sciences',
    titleSq: 'Diplomë e Shkollës së Mesme — Drejtimi i Shkencave Natyrore',
    institution: 'SHMLM "Shaqir Hoxha", Shale',
    institutionSq: 'SHMLM "Shaqir Hoxha", Shalë',
    specialization: "Natural Sciences & Mathematics",
    specializationSq: "Shkenca Natyrore & Matematikë",
    description: "Solid foundational preparation in advanced mathematics, analytical logic, informatics, and scientific methodology.",
    descriptionSq: "Përgatitje e thellë bazë në matematikë të avancuar, logjikë analitike, informatikë dhe metodologji shkencore.",
    badge: "Graduated",
    badgeSq: "E Diplomuar"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Data Pipelines & Preprocessing",
    titleSq: "Përpunimi i të Dhënave & Pastrimi",
    desc: "Ingesting raw structured datasets, handling missing values, statistical EDA with Pandas, NumPy, and Outlier normalization.",
    descSq: "Marrja e të dhënave, trajtimi i vlerave munguese, analiza statistikore me Pandas dhe normalizimi i anomalive."
  },
  {
    step: "02",
    title: "Machine Learning & AI Modeling",
    titleSq: "Modelimi me Mësim Makinerik",
    desc: "Feature engineering and training predictive ML models (Random Forest, Classification, Regression) with scikit-learn and AI vision APIs.",
    descSq: "Inxhinieri karakteristikash dhe trajnim i modeleve parashikuese (Random Forest, Klasifikim, Regresion) me scikit-learn dhe Vision AI."
  },
  {
    step: "03",
    title: "FastAPI & Relational Databases",
    titleSq: "FastAPI, SQL & Baza të Sigurta",
    desc: "Architecting normalized MySQL and PostgreSQL schemas, designing high-speed asynchronous RESTful APIs and WebSockets.",
    descSq: "Dizajnim i bazave relacionale në MySQL dhe PostgreSQL, ndërtim i REST API asinkrone në FastAPI dhe WebSockets."
  },
  {
    step: "04",
    title: "Modern React & Streamlit Frontend",
    titleSq: "Ndërfaqe Interaktive në React & Streamlit",
    desc: "Creating intuitive user experiences with React, TypeScript, Tailwind CSS, and interactive data dashboards in Streamlit.",
    descSq: "Ndërtim i përvojave intuitive të përdoruesit me React, TypeScript, Tailwind CSS dhe paneleve analitike në Streamlit."
  }
];
