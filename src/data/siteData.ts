export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  impact: string;
  ctaText: string;
  iconName: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-agents",
    number: "01",
    title: "AI AGENTS",
    tagline: "Autonomous intelligent agents engineered to execute tasks 24/7 without manual intervention.",
    problem: "Businesses lose 40%+ of potential leads because inquiries outside business hours go unanswered and manual follow-ups take hours or days.",
    solution: "We build multi-modal AI agents trained on your business knowledge base that converse naturally via WhatsApp, Web, and Voice, qualify leads instantly, and close appointments straight into your calendar.",
    features: [
      "Natural multilingual conversation handling",
      "WhatsApp & omnichannel live chat integration",
      "Autonomous Voice Calling & Appointment Booking",
      "Dynamic lead scoring & automatic qualification",
      "Instant 2-way CRM synchronization",
      "Escalation handover to human agents when needed"
    ],
    technologies: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Twilio Voice API", "Whisper STT", "ElevenLabs", "LangChain", "n8n"],
    impact: "Reduces first-response time from 4 hours to under 3 seconds with up to 90% routine task resolution.",
    ctaText: "Explore AI Agents →",
    iconName: "Bot"
  },
  {
    id: "automation",
    number: "02",
    title: "BUSINESS AUTOMATION",
    tagline: "End-to-end orchestration of repetitive business operations and cross-tool workflows.",
    problem: "Operational bottlenecks, slow manual data entry between spreadsheets and CRMs, delayed invoicing, and missed follow-ups cost dozens of team hours weekly.",
    solution: "We map your operational workflows and construct enterprise automation engines that synchronize systems, trigger automated client touchpoints, and eliminate manual copy-pasting.",
    features: [
      "Automated lead capture & routing engine",
      "CRM & pipeline state updates",
      "Automated invoice generation & payment reminders",
      "Multi-channel drip notifications (WhatsApp, SMS, Email)",
      "Cross-database reconciliation & continuous sync",
      "Operational exception logging & auto-recovery"
    ],
    technologies: ["n8n Enterprise", "Make", "Custom Webhooks", "Node.js Workers", "PostgreSQL", "Google Workspace APIs", "Stripe API"],
    impact: "Saves 25+ staff hours per week and removes 99% of manual copy-paste errors across tools.",
    ctaText: "Automate My Business →",
    iconName: "Workflow"
  },
  {
    id: "web-development",
    number: "03",
    title: "WEBSITE DEVELOPMENT",
    tagline: "Ultra-fast, high-converting digital storefronts and SaaS web platforms.",
    problem: "Generic templates and sluggish websites create high bounce rates, zero visitor trust, and dismal conversion numbers.",
    solution: "We engineer bespoke, lightning-fast web applications using Next.js and modern component architecture with built-in analytics, SEO structure, and conversion funnels.",
    features: [
      "Modern Next.js App Router architecture",
      "Sub-second load times & 95+ Core Web Vitals",
      "Conversion-optimized UI/UX & micro-interactions",
      "Interactive 3D / WebGL brand experiences",
      "Headless CMS integration for effortless client editing",
      "Comprehensive Technical & Local SEO schema"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Vercel / Cloudflare"],
    impact: "Boosts average conversion rates by 2.5x with superior trust-building UX and sub-second page performance.",
    ctaText: "Build My Website →",
    iconName: "Globe"
  },
  {
    id: "app-development",
    number: "04",
    title: "MOBILE APP DEVELOPMENT",
    tagline: "Production-grade iOS and Android mobile experiences crafted for scalable engagement.",
    problem: "Off-the-shelf app templates fail under real user scale, suffer from sluggish native performance, and frustrate customers.",
    solution: "We design and engineer fluid cross-platform and native mobile apps with offline persistence, real-time push engines, and frictionless checkout flows.",
    features: [
      "Unified cross-platform codebase (iOS & Android)",
      "Native device API access (Biometrics, Camera, Geolocation)",
      "Real-time push notifications & background sync",
      "Instant in-app payment gateway integrations",
      "Offline-first architecture with automatic sync",
      "App Store & Google Play deployment & compliance"
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Node.js", "Firebase", "Apple APNs", "PostgreSQL"],
    impact: "Enables direct customer touchpoints with 4.8+ star app store user retention architectures.",
    ctaText: "Build My App →",
    iconName: "Smartphone"
  },
  {
    id: "custom-software",
    number: "05",
    title: "CUSTOM SOFTWARE",
    tagline: "Bespoke SaaS platforms, internal ERPs, and custom admin control centers.",
    problem: "SaaS subscriptions with rigid features force businesses to adapt their workflows to the software instead of the software serving their operations.",
    solution: "We architect tailor-made web applications, enterprise dashboards, and workflow management systems built strictly around your company's proprietary operational model.",
    features: [
      "Role-based access control (RBAC) & enterprise auth",
      "Real-time analytics and KPI dashboards",
      "Custom ERP, inventory, and order tracking engines",
      "Audit logs, data export, and automated reporting",
      "High-concurrency database design",
      "Containerized Docker & cloud infrastructure"
    ],
    technologies: ["Next.js", "Node.js / Express", "PostgreSQL", "Prisma ORM", "Redis", "Docker", "AWS / GCP"],
    impact: "Consolidates fractured subscription tools into one centralized, proprietary enterprise asset.",
    ctaText: "Build Custom Software →",
    iconName: "Cpu"
  },
  {
    id: "api-integration",
    number: "06",
    title: "AI + AUTOMATION INTEGRATION",
    tagline: "Seamlessly connecting your existing enterprise tools into one intelligent ecosystem.",
    problem: "Siloed software stacks where the CRM does not talk to accounting, and WhatsApp conversations are isolated from customer databases.",
    solution: "We construct reliable bidirectional API pipelines, webhook middleware, and AI transformation layers that turn disconnected tools into a unified operating system.",
    features: [
      "OpenAI & Claude LLM integration into existing workflows",
      "Official WhatsApp Business API integration",
      "CRM bi-directional sync (HubSpot, Zoho, Salesforce)",
      "Payment gateway & accounting webhooks (Stripe, Razorpay, QuickBooks)",
      "Secure API middleware with rate limiting & retry queues",
      "Custom RESTful and GraphQL endpoints"
    ],
    technologies: ["OpenAI API", "Meta WhatsApp API", "n8n", "Twilio", "REST / Webhooks", "MongoDB", "PostgreSQL"],
    impact: "Eliminates duplicate data entry across departments and ensures real-time operational visibility.",
    ctaText: "Automate My Workflow →",
    iconName: "Network"
  },
  {
    id: "crm",
    number: "07",
    title: "CRM & LEAD PIPELINE SYSTEMS",
    tagline: "Custom sales engines designed to capture, track, and convert high-value leads automatically.",
    problem: "Leads slip through the cracks, sales reps fail to follow up consistently, and management lacks visibility into conversion bottlenecks.",
    solution: "We configure custom CRM architectures with automated stage progression, instant lead dispatch, and AI-assisted qualification summaries.",
    features: [
      "Custom pipeline stages tailored to your sales process",
      "Automatic lead scoring based on interaction history",
      "Automated follow-up drip sequences across WhatsApp & Email",
      "Real-time rep notifications upon prospect engagement",
      "Comprehensive revenue forecasting and conversion analytics",
      "One-click communication history & deal timelines"
    ],
    technologies: ["Custom Next.js CRM", "PostgreSQL", "Node.js", "WhatsApp Cloud API", "n8n", "Redis"],
    impact: "Shortens sales cycle duration by 40% and ensures zero leads are ever abandoned.",
    ctaText: "Build CRM Engine →",
    iconName: "Users"
  }
];

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  url?: string;
  servicesProvided: string[];
  techStack: string[];
  challenge: string;
  solution: string;
  features: string[];
  architectureOverview: string;
  result: string;
  statusBadge: string;
  image?: string;
  videoDemo?: string;
  stats?: { label: string; value: string }[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: "mairarug-com",
    title: "Maira Rugs",
    subtitle: "Global Luxury Handcrafted Rugs E-Commerce & Custom Rug Studio",
    industry: "Luxury E-Commerce & Handcrafted Textiles",
    url: "https://mairarug.com",
    servicesProvided: ["Bespoke E-Commerce Architecture", "Luxury UI/UX Design", "Custom Rug Visualizer Engine", "Global Payment & Currency Sync"],
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "Stripe Global", "Cloudflare CDN"],
    challenge: "High-ticket bespoke rug buyers required an ultra-premium luxury digital storefront with interactive material exploration, custom sizing calculators, and zero-latency international browsing.",
    solution: "BHSOFT engineered an elite, dark-luxury e-commerce architecture for Maira Rugs featuring rich tactile catalog displays, custom bespoke order inquiries, automated WhatsApp luxury concierge routing, and multi-currency checkout.",
    features: [
      "High-definition zoom & tactile luxury craftsmanship showcase",
      "Interactive custom rug dimensional estimator & weave calculator",
      "VIP Concierge WhatsApp gateway for private client consultations",
      "Multi-currency conversion with automatic geo-detection",
      "Sub-second image rendering optimized with next-gen WebP/AVIF delivery",
      "Seamless integration with international logistics & shipping tracking"
    ],
    architectureOverview: "Edge-rendered Next.js storefront combined with resilient Node.js API services, automated currency hedging cache, and direct luxury concierge webhook bridges.",
    result: "Elevated brand prestige to compete with global luxury home decor houses, driving international buyer trust and increasing custom bespoke rug inquiries.",
    statusBadge: "Live Production Showcase",
    image: "/images/projects/maira-rugs.jpg",
    stats: [
      { label: "Image Render Speed", value: "<450ms" },
      { label: "Global Currencies", value: "14+" },
      { label: "Bespoke Inquiries", value: "+320%" }
    ]
  },
  {
    slug: "shubh-life-voice",
    title: "Shubh Life Clinic Voice AI",
    subtitle: "Autonomous Healthcare Receptionist & Patient Appointment Voice Agent",
    industry: "Healthcare & AI Voice Automation",
    servicesProvided: ["Autonomous Voice Calling Agent", "Twilio SIP Trunking", "Doctor Calendar Synchronization", "WhatsApp Prescription Alerts"],
    techStack: ["Python", "FastAPI", "OpenAI Whisper STT", "GPT-4o Realtime", "ElevenLabs Voice", "Twilio Voice API", "Google Calendar API"],
    challenge: "Clinic reception was overwhelmed with 150+ daily incoming calls for doctor schedules, emergency queries, and rescheduling, causing missed calls and 15-minute wait times for anxious patients.",
    solution: "BHSOFT engineered an autonomous conversational AI Voice Agent that answers phone calls within 1 ring, speaks in natural multilingual tone, understands medical specialties, verifies real-time doctor availability, books appointments, and triggers instant WhatsApp confirmations.",
    features: [
      "Natural multilingual human-like voice response with <600ms latency",
      "Intelligent symptom & doctor specialty intent routing",
      "Live 2-way doctor consultation slot locking & calendar sync",
      "Automated WhatsApp confirmation with clinic location & preparation instructions",
      "Autonomous outbound appointment reminder calls to eliminate no-shows",
      "Instant warm call transfer to human medical officer for critical emergencies"
    ],
    architectureOverview: "High-concurrency FastAPI microservice bridging Twilio media streams to Whisper STT, GPT-4o conversational engine, and low-latency ElevenLabs neural TTS.",
    result: "Achieved 94% call resolution rate without human receptionist intervention, dropping patient wait time to zero and eliminating appointment no-shows.",
    statusBadge: "Active AI Voice Production",
    image: "/images/projects/shubh-voice-ai.jpg",
    videoDemo: "voice-simulation",
    stats: [
      { label: "First Ring Answer", value: "100%" },
      { label: "Voice Latency", value: "<580ms" },
      { label: "Call Resolution", value: "94%" }
    ]
  },
  {
    slug: "ai-cold-caller",
    title: "AI Cold Caller & Outbound Sales Agent",
    subtitle: "Enterprise Outbound Telephony & Autonomous Lead Qualification Machine",
    industry: "B2B Sales & Outbound Telemarketing",
    servicesProvided: ["Autonomous Outbound Dialer", "Conversational AI Sales Engine", "CRM Bi-directional Sync", "Real-Time Sentiment Analytics"],
    techStack: ["Node.js", "Python", "Twilio Voice API", "OpenAI GPT-4o", "Deepgram Nova", "PostgreSQL", "n8n Pipelines"],
    challenge: "Sales teams spent 70% of their workday dialing cold prospects, getting hung up on, and manually updating CRM notes, resulting in sales burnout and low conversion throughput.",
    solution: "BHSOFT architected an enterprise autonomous AI outbound calling system capable of dialing prospective lists, engaging prospects in natural context-aware conversations, handling objections dynamically, qualifying budget and intent, and booking demo calls straight onto account executive calendars.",
    features: [
      "Autonomous high-volume predictive dialer with instant human connection",
      "Adaptive objection handling trained on custom sales battlecards",
      "Real-time audio transcription and emotional sentiment scoring",
      "Instant calendar booking with Account Executive round-robin assignment",
      "Automated call recording, AI summary generation, and CRM deal creation",
      "Compliance engine with DND filtering and localized calling window checks"
    ],
    architectureOverview: "Distributed worker architecture coordinating Twilio voice media forks with ultra-low latency Deepgram speech recognition and OpenAI GPT-4o reasoning agents.",
    result: "Scaled outbound prospect contact volume by 800% while cutting cost per qualified lead by 65%.",
    statusBadge: "Enterprise AI Agent System",
    image: "/images/projects/ai-cold-caller.jpg",
    videoDemo: "outbound-dialer",
    stats: [
      { label: "Outbound Scale", value: "+800%" },
      { label: "Cost Per Lead", value: "-65%" },
      { label: "Objection Handling", value: "Real-Time" }
    ]
  },
  {
    slug: "notifyflow",
    title: "NotifyFlow Automation Engine",
    subtitle: "Omnichannel Business Process Automation & Cross-Platform Orchestration",
    industry: "Enterprise Workflow Automation",
    servicesProvided: ["n8n Enterprise Automation", "Custom Webhook Infrastructure", "WhatsApp Cloud Sync", "Database Reconciliation"],
    techStack: ["n8n", "Node.js", "PostgreSQL", "Redis", "Meta WhatsApp API", "Stripe Webhooks", "Docker"],
    challenge: "Mid-market companies were losing orders and hours because incoming payments, inventory changes, and WhatsApp notifications were managed via disconnected, manual spreadsheets.",
    solution: "BHSOFT built NotifyFlow: a resilient, event-driven orchestration architecture that connects Shopify, Stripe, WhatsApp, and PostgreSQL to execute auto-invoicing, instant customer dispatch alerts, and multi-tier team escalations.",
    features: [
      "Zero-code / low-code n8n enterprise workflows self-hosted with private data isolation",
      "Automated payment receipt to WhatsApp PDF invoice delivery in <2 seconds",
      "Real-time cross-database synchronization with automatic retry queues",
      "Slack / Telegram operations notification alerts for failed transactions",
      "Automated lead follow-up drip schedules based on customer behavior triggers"
    ],
    architectureOverview: "Containerized Docker swarm running n8n workers with Redis message broker and PostgreSQL persistence, handling 50,000+ daily webhook events.",
    result: "Completely eliminated manual invoice dispatch and saved over 35 operational staff hours every week.",
    statusBadge: "Production Automation Suite",
    image: "/images/projects/notifyflow-automation.jpg",
    videoDemo: "workflow-engine",
    stats: [
      { label: "Invoice Dispatch", value: "<1.8s" },
      { label: "Hours Saved / Wk", value: "35+ hrs" },
      { label: "Sync Accuracy", value: "99.9%" }
    ]
  },
  {
    slug: "ideal-path-labs",
    title: "Ideal Path Labs",
    subtitle: "Digital Pathology & Automated Diagnostic Booking Platform",
    industry: "Healthcare & Diagnostics",
    url: "https://idealpathlabs.com/",
    servicesProvided: ["Custom Web Development", "Test Booking Engine", "WhatsApp Integration", "Local SEO Optimization"],
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "WhatsApp Cloud API", "Vercel"],
    challenge: "Patients and doctors experienced delays in discovering test packages, checking preparation instructions, and booking home sample collections over congested phone calls.",
    solution: "BHSOFT architected a modern, responsive digital diagnostic hub with test catalog search, automated WhatsApp booking dispatch, and sample collection scheduling.",
    features: [
      "Searchable laboratory diagnostic test directory with pricing & preparation guidance",
      "Direct home sample collection booking funnel",
      "WhatsApp one-click inquiry and report status routing",
      "Mobile-first responsive design optimized for fast patient access",
      "Local SEO architecture targeted for patient discovery"
    ],
    architectureOverview: "High-performance Next.js frontend serving dynamic test catalogs with fast search filtering, coupled with instant WhatsApp webhook alerts for lab technicians.",
    result: "Transformed offline manual booking into a streamlined digital workflow with instant test discovery and verified online patient accessibility.",
    statusBadge: "Live Production Platform",
    image: "/images/projects/ideal-pathlabs.jpg",
    videoDemo: "diagnostic-portal",
    stats: [
      { label: "Report Delivery", value: "Instant WA" },
      { label: "Patient Booking", value: "<60s" },
      { label: "Home Collection", value: "Auto-Assigned" }
    ]
  },
  {
    slug: "fashiontxt",
    title: "FashionTXT",
    subtitle: "Custom Apparel & Interactive Fashion Showcase Platform",
    industry: "E-Commerce & Apparel",
    url: "https://fashiontxt.netlify.app/",
    servicesProvided: ["Interactive Web Application", "Product Showcase UI", "Lead Inquiries Funnel", "Responsive Architecture"],
    techStack: ["React", "Tailwind CSS", "Modern JavaScript", "Netlify", "Micro-animations"],
    challenge: "Displaying bespoke textile collections and custom apparel orders required an engaging visual presentation with quick buyer inquiry capture without bulky legacy e-commerce friction.",
    solution: "BHSOFT developed an ultra-clean, minimalist fashion digital showcase featuring dynamic catalog browsing, high-resolution visual curation, and quick inquiry pathways.",
    features: [
      "Modern aesthetic apparel portfolio with seamless category navigation",
      "High-contrast dark/light responsive interface",
      "Instant inquiry buttons connected to sales representatives",
      "Sub-second load times optimized for image-heavy asset delivery",
      "Smooth mobile layout with intuitive touch gestures"
    ],
    architectureOverview: "Static-optimized React client application hosted on global CDN edges for zero latency, featuring responsive media galleries and direct inquiry hooks.",
    result: "Delivered a high-end luxury brand presentation that elevated client inquiries and streamlined digital product showcases.",
    statusBadge: "Live Production Showcase",
    image: "/images/projects/fashiontxt-showcase.jpg",
    videoDemo: "fashion-lookbook",
    stats: [
      { label: "Load Speed", value: "<380ms" },
      { label: "Mobile Bounce", value: "-45%" },
      { label: "Inquiries", value: "+210%" }
    ]
  },
  {
    slug: "swadhub",
    title: "Swadhub",
    subtitle: "Digital Food Business & Multi-Outlet Operational Ecosystem",
    industry: "Food, Dining & Cloud Kitchens",
    url: "https://swadhub.com/",
    servicesProvided: ["Full-Stack Web Platform", "Order Inquiry System", "Menu Management Engine", "Local SEO & Branding"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "WhatsApp API"],
    challenge: "Food enterprises face high aggregator commissions, delayed customer contact, and difficulty managing online menus across multiple local outlets.",
    solution: "BHSOFT built a direct-to-consumer digital menu and operational ordering hub allowing customers to browse live food menus, reserve tables, and place direct WhatsApp orders with zero commission fees.",
    features: [
      "Interactive digital food catalog with category filters and dish highlights",
      "Direct WhatsApp order checkout with automated bill details",
      "Table reservation request engine with instant notification",
      "Outlet location finder with one-click directions and contact info",
      "Admin menu management for real-time pricing and availability updates"
    ],
    architectureOverview: "Full-stack Next.js web application connected to a cloud database with automated WhatsApp message generation for order details.",
    result: "Enabled direct customer ordering, cutting third-party commission dependence and giving the business ownership over its customer database.",
    statusBadge: "Verified Business Platform",
    image: "/images/projects/swadhub-ordering.jpg",
    videoDemo: "food-ordering",
    stats: [
      { label: "Commission Fee", value: "0%" },
      { label: "Order Velocity", value: "<2min" },
      { label: "Table Bookings", value: "+180%" }
    ]
  }
];

export interface IndustrySolution {
  title: string;
  tagline: string;
  iconName: string;
  features: string[];
}

export const INDUSTRIES_DATA: IndustrySolution[] = [
  {
    title: "Healthcare & Clinics",
    tagline: "Automated patient care journeys and appointment pipelines.",
    iconName: "Stethoscope",
    features: [
      "AI appointment booking & calendar synchronization",
      "Automated WhatsApp patient reminders & prep instructions",
      "AI Voice Calling for visit confirmations and follow-ups",
      "Prescription & diagnostic report dispatch workflows"
    ]
  },
  {
    title: "Real Estate",
    tagline: "Instant lead qualification and property inspection bookings.",
    iconName: "Building2",
    features: [
      "Instant AI lead qualification from ad campaigns",
      "Automated property brochure dispatch via WhatsApp",
      "Site visit scheduling with CRM auto-assignment",
      "Automated follow-up sequences for prospective buyers"
    ]
  },
  {
    title: "E-Commerce",
    tagline: "24/7 autonomous shopping support and cart recovery.",
    iconName: "ShoppingBag",
    features: [
      "Automated order tracking & shipping updates via WhatsApp",
      "AI product recommendations & conversational search",
      "Automated abandoned cart recovery notifications",
      "Return & refund policy self-service assistance"
    ]
  },
  {
    title: "Restaurants & Cafes",
    tagline: "Commission-free direct orders and table reservations.",
    iconName: "Utensils",
    features: [
      "Digital interactive menu with direct WhatsApp ordering",
      "Real-time table reservation inquiries and notifications",
      "Automated post-dining review & feedback collection",
      "Loyalty rewards & seasonal event broadcasts"
    ]
  },
  {
    title: "Education & Academies",
    tagline: "Streamlined student enrollment and admissions automation.",
    iconName: "GraduationCap",
    features: [
      "Instant inquiry response for course syllabus & fee queries",
      "Automated lead scoring for prospective student applications",
      "Admissions interview scheduling & calendar sync",
      "Fee payment deadline reminders & status updates"
    ]
  },
  {
    title: "Professional Services",
    tagline: "High-ticket client qualification and CRM dispatch.",
    iconName: "Briefcase",
    features: [
      "Client intake questionnaires & automated proposal routing",
      "Consultation calendar booking with meeting link generation",
      "Automated document collection and signature reminders",
      "Multi-channel client status updates"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "DISCOVER",
    description: "Deep-dive audit into your current operational bottlenecks, workflows, and technical objectives."
  },
  {
    step: "02",
    name: "STRATEGIZE",
    description: "Design the technical blueprint, selecting the ideal architecture, AI models, and integration pathways."
  },
  {
    step: "03",
    name: "DESIGN",
    description: "Craft high-fidelity UI/UX layouts, database schemas, and conversational flow wireframes."
  },
  {
    step: "04",
    name: "BUILD",
    description: "Develop the production code, train custom AI agents, and engineer reliable automation webhooks."
  },
  {
    step: "05",
    name: "TEST",
    description: "Rigorous stress testing across edge cases, integration resilience, speed benchmarks, and security."
  },
  {
    step: "06",
    name: "DEPLOY",
    description: "Launch production-ready cloud infrastructure with SSL, domain configuration, and continuous monitoring."
  },
  {
    step: "07",
    name: "SUPPORT",
    description: "Ongoing proactive monitoring, model fine-tuning, and feature enhancements as your business scales."
  }
];

export const FAQS_DATA = [
  {
    question: "What services does BHSOFT IT SOLUTION provide?",
    answer: "BHSOFT specializes in full-lifecycle digital engineering: autonomous AI Agents (chat, voice, and omnichannel), Business Workflow Automation (n8n, CRM sync, WhatsApp), High-Converting Website Development, Scalable Mobile App Development, Custom SaaS & Enterprise Software, and API Integration ecosystems."
  },
  {
    question: "Can you build custom AI agents for our specific business?",
    answer: "Yes. We engineer customized AI agents trained on your specific products, operational policies, FAQs, and database. Our agents can converse over WhatsApp, your website, or voice phone lines, qualify prospects, check live calendar availability, book appointments, and update your CRM directly."
  },
  {
    question: "Can you automate WhatsApp for customer support and sales?",
    answer: "Absolutely. We utilize the official Meta WhatsApp Business API to build automated conversational funnels, lead captures, instant payment alerts, appointment confirmations, and multi-agent customer support workflows."
  },
  {
    question: "Can you build modern e-commerce and web platforms?",
    answer: "Yes. We create bespoke e-commerce experiences and high-performance websites built on Next.js with lightning-fast load times, seamless checkout experiences, headless CMS management, and complete technical SEO."
  },
  {
    question: "Can you develop mobile applications for iOS and Android?",
    answer: "Yes. We build native and cross-platform mobile apps (React Native, Flutter) equipped with offline sync, biometric security, real-time push notifications, and payment gateway integrations."
  },
  {
    question: "How do you connect our existing CRM and tools with automation?",
    answer: "We engineer custom webhook bridges, API middleware, and n8n orchestration engines that connect your existing tools (CRM, Google Workspace, PostgreSQL, Stripe, WhatsApp, OpenAI, Twilio) into one cohesive, automated pipeline."
  },
  {
    question: "Can you build automated appointment booking systems?",
    answer: "Yes. We build intelligent scheduling systems that verify doctor/consultant availability in real time, collect booking deposits or requirements, synchronize with Google Calendar/Outlook, and send instant SMS/WhatsApp reminders."
  },
  {
    question: "Do you provide post-launch maintenance and support?",
    answer: "Yes. Every production system comes with dedicated launch monitoring, followed by tailored monthly maintenance tiers covering infrastructure health, security updates, model prompt refinements, and continuous feature expansion."
  },
  {
    question: "How long does a typical development project take?",
    answer: "Sprint delivery depends on the scope: focused AI automation pipelines and landing platforms typically deploy in 1 to 2 weeks. Comprehensive custom software, multi-outlet web portals, or enterprise mobile apps generally range between 3 to 6 weeks."
  },
  {
    question: "How do I get a custom quote for my project?",
    answer: "You can book a free consultation through our website form, or click the WhatsApp button to message us directly. We will review your workflow, clarify requirements, and provide a tailored technical scope and quote."
  }
];

export const TECH_STACK_CATEGORIES = [
  {
    category: "AI & Intelligence",
    items: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "LangChain", "Whisper STT", "ElevenLabs Voice", "Custom Vector DB"]
  },
  {
    category: "Automation & Workflows",
    items: ["n8n Enterprise", "Meta WhatsApp API", "Twilio API", "Custom Webhooks", "Make", "Email APIs"]
  },
  {
    category: "Frontend & UI",
    items: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "Framer Motion"]
  },
  {
    category: "Backend & Systems",
    items: ["Node.js / Express", "Python", "REST APIs", "GraphQL", "Prisma ORM", "Microservices"]
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "MongoDB", "Redis Cache", "Supabase", "Cloudflare R2", "AWS S3"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Docker", "Nginx", "Vercel", "AWS / GCP", "Cloudflare CDN", "GitHub CI/CD"]
  }
];
