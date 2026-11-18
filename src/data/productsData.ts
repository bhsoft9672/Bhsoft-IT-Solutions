export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  badge: string;
  badgeColor: string;
  pricingStart: string;
  features: string[];
  specs: { label: string; value: string }[];
  liveUrl?: string;
  demoActionText: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'voice-ai-desk',
    title: 'BHSOFT Voice AI Desk',
    tagline: 'Autonomous AI Telephony Receptionist & Outbound Sales Machine',
    category: 'AI Agents & Telephony',
    description: 'Ultra-low latency (<580ms) conversational voice agent that answers inbound patient/client phone calls, checks calendar availability, qualifies prospects, and books meetings 24/7.',
    badge: 'Flagship AI Product',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    pricingStart: '₹18,500 / deployment',
    features: [
      'Sub-600ms latency neural streaming with ElevenLabs voice synthesis',
      'Understands accents, medical symptoms, and dynamic sales objections',
      'Direct Twilio SIP trunking & private VoIP integration',
      'Automated Google Calendar / Outlook consultation slot locking',
      'Instant WhatsApp booking confirmation with clinic/office location'
    ],
    specs: [
      { label: 'Latency', value: '<580ms' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Resolution Rate', value: '94%' },
      { label: 'Voice Accents', value: 'Hindi, English' },
    ],
    liveUrl: 'https://bhsoft.solutions/services/voice-ai-agents',
    demoActionText: 'Request Voice AI Demo',
  },
  {
    id: 'omniflow-whatsapp-crm',
    title: 'OmniFlow WhatsApp Engine',
    tagline: 'Official Meta WhatsApp Cloud API Automation & Multi-Agent CRM',
    category: 'Automation & Messaging',
    description: 'Transform your business phone number into an automated 24/7 sales, customer support, and invoice dispatch engine with multi-agent team inbox and verified green-tick readiness.',
    badge: 'Enterprise Automation',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    pricingStart: '₹14,000 / setup',
    features: [
      'Official Meta Cloud API zero-blockage infrastructure',
      'Automated interactive buttons, catalogs, and payment links',
      'AI intent matching for instant FAQ and quotation responses',
      'Shared multi-agent team inbox with role assignment',
      'Automated PDF invoice & shipping tracking broadcast'
    ],
    specs: [
      { label: 'Response Time', value: '<2 sec' },
      { label: 'Daily Capacity', value: '50,000+ msgs' },
      { label: 'API Tier', value: 'Meta Tier-1' },
      { label: 'CRM Sync', value: 'Instant' },
    ],
    liveUrl: 'https://bhsoft.solutions/services/ai-agents',
    demoActionText: 'Test WhatsApp Bot',
  },
  {
    id: 'quickcommerce-express',
    title: 'QuickCommerce Express',
    tagline: 'Hyperlocal Multi-Vendor Grocery & Dark-Store Delivery Stack',
    category: 'Mobile & E-Commerce',
    description: 'Complete 10-minute quick-commerce architecture equipped with customer mobile apps, dark-store warehouse picker tablets, rider route optimization, and live order tracking.',
    badge: 'Turnkey App Stack',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    pricingStart: '₹45,000 / turnkey stack',
    features: [
      'Customer iOS & Android apps with sub-second catalog search',
      'Dark-store picker routing algorithm to pack orders in under 3 minutes',
      'Rider companion app with real-time GPS turn-by-turn navigation',
      'Dynamic inventory reservation preventing out-of-stock orders',
      'Razorpay, Paytm, UPI, and Cash-on-Delivery payment options'
    ],
    specs: [
      { label: 'Dispatch Speed', value: '<10 min' },
      { label: 'Apps Included', value: 'Customer, Rider, Admin' },
      { label: 'Tech Stack', value: 'React Native, Node.js' },
      { label: 'Deployment', value: '14 Days' },
    ],
    liveUrl: 'https://bhsoft.solutions/projects',
    demoActionText: 'Inspect App Demo',
  },
  {
    id: 'documed-diagnostic-os',
    title: 'DocuMed Diagnostic OS',
    tagline: 'Pathology Lab Management, Test Bookings & Home Sample Pickup',
    category: 'Healthcare Tech',
    description: 'Digital pathology management system that lets patients search diagnostic tests, book doorstep phlebotomist sample collection, and receive PDF test reports directly on WhatsApp.',
    badge: 'Live Proven System',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    pricingStart: '₹28,000 / platform',
    features: [
      'Searchable test directory with fasting & preparation guidelines',
      'Phlebotomist home collection dispatch with OTP verification',
      'Automated laboratory barcode tracking and analyzer sync',
      'Direct WhatsApp PDF report delivery upon doctor verification',
      'Integrated payment gateway with discount packages'
    ],
    specs: [
      { label: 'Booking Time', value: '<60 sec' },
      { label: 'Report Delivery', value: 'Instant WA' },
      { label: 'Sample Assignment', value: 'Geo-Auto' },
      { label: 'Reference Site', value: 'Ideal Path Labs' },
    ],
    liveUrl: 'https://idealpathlabs.com/',
    demoActionText: 'View Live Platform',
  },
  {
    id: 'dinexpress-restaurant-os',
    title: 'DineXpress Restaurant OS',
    tagline: 'Direct Digital Menu, QR Table Ordering & 0% Commission Platform',
    category: 'FoodTech & Hospitality',
    description: 'Empower food brands and cloud kitchens with a proprietary online food ordering website and QR code table ordering system, eliminating 25-30% aggregator commissions.',
    badge: 'Zero-Commission',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    pricingStart: '₹19,000 / setup',
    features: [
      'Interactive visual digital food menu with modifier add-ons',
      'Direct WhatsApp order placement with instant itemized bill',
      'Kitchen Display System (KDS) for chef order management',
      'Table QR code self-ordering for dine-in guests',
      'Customer database ownership for automated SMS/WhatsApp marketing'
    ],
    specs: [
      { label: 'Aggregator Fee', value: '0%' },
      { label: 'Order Velocity', value: '<90 sec' },
      { label: 'Table Bookings', value: '+180%' },
      { label: 'Reference Site', value: 'SwadHub' },
    ],
    liveUrl: 'https://swadhub.com/',
    demoActionText: 'View Live Platform',
  },
  {
    id: 'proppulse-realestate-crm',
    title: 'PropPulse Real Estate CRM',
    tagline: 'Automated Property Lead Calling, Brochure Dispatch & Broker Suite',
    category: 'Real Estate PropTech',
    description: 'All-in-one real estate sales accelerator that calls portal leads within 30 seconds, qualifies budget & location intent, sends property PDF brochures on WhatsApp, and books site visits.',
    badge: 'High-ROI Solution',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    pricingStart: '₹32,000 / deployment',
    features: [
      'Instant lead webhook connect (99acres, MagicBricks, Meta Ads, Google)',
      'Sub-30 second outbound AI caller qualifying property buyer intent',
      'Automated high-definition property PDF brochure WhatsApp delivery',
      'Interactive site visit calendar slot booking with rep notifications',
      'Multi-tier broker commission and unit inventory availability tracker'
    ],
    specs: [
      { label: 'Lead Response', value: '<30 sec' },
      { label: 'Lead Conversion', value: '+240%' },
      { label: 'Site Visits', value: '+180%' },
      { label: 'Integrations', value: 'WhatsApp, n8n, CRM' },
    ],
    liveUrl: 'https://bhsoft.solutions/contact',
    demoActionText: 'Request PropPulse Demo',
  },
];
