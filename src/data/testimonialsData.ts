export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
  projectSlug?: string;
  projectUrl?: string;
  rating: number;
  quote: string;
  metrics: { label: string; value: string };
  avatarBg: string;
  verified: boolean;
  location: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'maira-rugs-review',
    clientName: 'Vikramaditya S.',
    role: 'Founder & Managing Director',
    company: 'Maira Rugs',
    industry: 'Luxury Handcrafted Textiles & Global E-Commerce',
    projectSlug: 'mairarug-com',
    projectUrl: 'https://mairarug.com',
    rating: 5,
    quote: 'BHSOFT transformed our handcrafted rug export business into a world-class luxury digital storefront. The multi-currency sync and sub-450ms load times increased our international high-ticket inquiries by 320%. The direct WhatsApp luxury concierge is closing deals effortlessly.',
    metrics: { label: 'Bespoke Inquiries', value: '+320%' },
    avatarBg: 'bg-blue-600',
    verified: true,
    location: 'Jaipur & Global',
  },
  {
    id: 'shubh-life-review',
    clientName: 'Dr. R. K. Sharma',
    role: 'Medical Director',
    company: 'Shubh Life Clinics',
    industry: 'Healthcare & Multispeciality Clinic',
    projectSlug: 'shubh-life-voice',
    projectUrl: 'https://bhsoft.solutions/services/voice-ai-agents',
    rating: 5,
    quote: 'Our clinic reception was overwhelmed with 150+ calls every single morning. BHSOFT’s Voice AI agent answers on the first ring, speaks fluent Hindi and English, checks doctor schedules, and confirms appointments on WhatsApp. Our missed calls dropped to zero.',
    metrics: { label: 'Inbound Resolution', value: '94%' },
    avatarBg: 'bg-emerald-600',
    verified: true,
    location: 'Jaipur, Rajasthan',
  },
  {
    id: 'ideal-path-labs-review',
    clientName: 'Arun Mehta',
    role: 'Managing Director',
    company: 'Ideal Path Labs',
    industry: 'Diagnostic Pathology & Lab Network',
    projectSlug: 'ideal-path-labs',
    projectUrl: 'https://idealpathlabs.com/',
    rating: 5,
    quote: 'The digital diagnostic portal and automated WhatsApp report delivery system built by BHSOFT eliminated our phone booking chaos. Patients love booking home sample collections in under 60 seconds, and phlebotomists receive automated route dispatches.',
    metrics: { label: 'Booking Time', value: '<60 sec' },
    avatarBg: 'bg-teal-600',
    verified: true,
    location: 'India',
  },
  {
    id: 'fashiontxt-review',
    clientName: 'Pooja Agarwal',
    role: 'Creative Director',
    company: 'FashionTXT',
    industry: 'Apparel & Digital Fashion Showcase',
    projectSlug: 'fashiontxt',
    projectUrl: 'https://fashiontxt.netlify.app/',
    rating: 5,
    quote: 'The speed, responsiveness, and clean aesthetic BHSOFT engineered for our fashion lookbook catalog was beyond expectations. Mobile bounce rates dropped 45% immediately after launch, and buyer inquiries via WhatsApp doubled within the first month.',
    metrics: { label: 'Mobile Bounce', value: '-45%' },
    avatarBg: 'bg-rose-600',
    verified: true,
    location: 'Delhi & Jaipur',
  },
  {
    id: 'swadhub-review',
    clientName: 'Gaurav Singhal',
    role: 'Managing Partner',
    company: 'SwadHub Kitchens',
    industry: 'Food, Dining & Multi-Outlet Cloud Kitchen',
    projectSlug: 'swadhub',
    projectUrl: 'https://swadhub.com/',
    rating: 5,
    quote: 'We were bleeding 25% to 30% on food aggregator platform commissions. BHSOFT built our direct digital menu with one-click WhatsApp ordering and QR table reservations. We now own our customer database and direct repeat orders are up significantly.',
    metrics: { label: 'Aggregator Fee Saved', value: '0% Comm' },
    avatarBg: 'bg-amber-600',
    verified: true,
    location: 'Jaipur, Rajasthan',
  },
  {
    id: 'notifyflow-review',
    clientName: 'Rohan Deshmukh',
    role: 'VP Operations',
    company: 'FinScale Enterprise',
    industry: 'Enterprise SaaS & Business Automation',
    projectSlug: 'notifyflow',
    projectUrl: 'https://bhsoft.solutions/services/automation',
    rating: 5,
    quote: 'NotifyFlow solved our disconnected data problem. Connecting our CRM, Stripe billing, and WhatsApp alerts through custom n8n pipelines saved our team over 35 hours every week of manual data entry, with zero dropped transactions.',
    metrics: { label: 'Hours Saved/Wk', value: '35+ hrs' },
    avatarBg: 'bg-indigo-600',
    verified: true,
    location: 'Mumbai & Pan-India',
  },
];
