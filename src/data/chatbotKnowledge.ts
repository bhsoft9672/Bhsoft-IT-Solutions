import { SITE_CONFIG } from './siteConfig';

export interface ChatbotQA {
  id: string;
  keywords: string[];
  questionSample: string;
  answer: string;
  quickReplies?: string[];
  ctaUrl?: string;
  ctaText?: string;
}

export const CHATBOT_WELCOME_MESSAGE = `Namaste! 🙏 Welcome to **BHSOFT IT SOLUTION**.

I am your 24/7 AI Engineering Assistant. I can answer any question about our services, pricing, project timelines, or book a free discovery consultation.

How can I help you today? Choose a quick topic below or type your inquiry:`;

export const CHATBOT_INITIAL_CHIPS = [
  '🤖 AI Voice Calling Agent',
  '💬 WhatsApp Bot & Automation',
  '🌐 Website Development',
  '💰 Pricing & Timelines',
  '📱 Mobile App Development',
  '📞 Book Free Consultation',
];

export const CHATBOT_KNOWLEDGE_BASE: ChatbotQA[] = [
  {
    id: 'voice-ai',
    keywords: ['voice', 'calling', 'caller', 'phone', 'telephony', 'call', 'audio', 'receptionist', 'voice agent', 'shubh', 'calling bot', 'cold caller', 'voice bot', 'calling agent'],
    questionSample: 'Tell me about your AI Voice Calling Agents',
    answer: `🎙️ **BHSOFT AI Voice Calling Agents** handle inbound and high-volume outbound phone calls with **sub-600ms latency**:

• **Inbound Receptionist**: Answers on the first ring, speaks natural Hindi & English, checks doctor/consultant availability, and locks calendar slots.
• **Outbound Sales Dialer**: Calls lead lists, engages prospects, handles objections dynamically, and transfers warm leads to your team.
• **Instant WhatsApp Confirmation**: Sends appointment details and location pin on WhatsApp immediately upon call completion.

⏱️ **Setup Timeline**: Deployed in 1 to 2 weeks.
🔗 [Explore Voice AI Details](/services/voice-ai-agents)`,
    quickReplies: ['💰 Voice Agent Pricing', '📞 Request Voice AI Demo', '💬 Chat on WhatsApp'],
    ctaUrl: '/services/voice-ai-agents',
    ctaText: 'View Voice AI Architecture',
  },
  {
    id: 'whatsapp-automation',
    keywords: ['whatsapp', 'wa', 'chat bot', 'chatbot', 'bot', 'meta', 'whatsapp bot', 'messaging', 'cloud api', 'n8n', 'auto reply'],
    questionSample: 'How do your WhatsApp AI Chatbots & Automation work?',
    answer: `💬 **BHSOFT WhatsApp AI Automation** runs on the official Meta WhatsApp Cloud API:

• **24/7 AI Customer Support**: Answers customer FAQs, product queries, and guides buyers with interactive buttons and catalogs.
• **Automated PDF Invoices**: Generates and sends invoices, payment receipts, and tracking links within 2 seconds.
• **Multi-Agent Team Inbox**: Your entire sales and support team can chat from a single verified number.
• **Zero-Blockage Safety**: 100% compliant with Meta business policies.

⏱️ **Setup Timeline**: Ready in 5 to 7 days.
🔗 [Explore AI Agents](/services/ai-agents)`,
    quickReplies: ['💰 WhatsApp Bot Pricing', '🚀 Start WhatsApp Automation', '💬 Talk on WhatsApp'],
    ctaUrl: '/services/ai-agents',
    ctaText: 'Explore WhatsApp Engine',
  },
  {
    id: 'web-development',
    keywords: ['website', 'web', 'nextjs', 'next.js', 'react', 'frontend', 'web app', 'landing page', 'seo', 'portal', 'redesign', 'e-commerce', 'ecommerce', 'shopify', 'store'],
    questionSample: 'What website development services do you offer?',
    answer: `🌐 **High-Performance Web & E-Commerce Engineering**:

• **Next.js 16 + React 19**: Ultra-fast websites with sub-second page loads and 95+ Google Lighthouse scores.
• **Modern E-Commerce**: Headless stores, custom product configurators, multi-currency checkout (like our work for Maira Rugs).
• **Technical SEO Built-in**: Schema.org JSON-LD, Core Web Vitals optimization, and XML sitemaps for Google #1 rankings.
• **Responsive & Accessible**: Seamlessly adapts to smartphones, tablets, and 4K displays.

⏱️ **Delivery**: 1 to 3 weeks depending on project scope.
🔗 [View Web Services](/services/web-development)`,
    quickReplies: ['💰 Website Cost Estimate', '📂 View Client Work', '📞 Book Free Consultation'],
    ctaUrl: '/services/web-development',
    ctaText: 'Explore Web Engineering',
  },
  {
    id: 'mobile-apps',
    keywords: ['mobile', 'app', 'android', 'ios', 'react native', 'flutter', 'application', 'phone app', 'play store', 'app store'],
    questionSample: 'Do you develop Android and iOS mobile apps?',
    answer: `📱 **Native & Cross-Platform Mobile Apps (React Native & Flutter)**:

• **Single Codebase for iOS & Android**: Cuts development cost and time in half while retaining native 60fps performance.
• **On-Demand & Delivery Stacks**: Driver tracking, real-time WebSockets, push notifications, and payment gateways.
• **Offline Sync & Security**: Biometric fingerprint/face login and encrypted local storage.
• **Full Store Deployment**: We handle Apple App Store and Google Play Store verification and publishing.

⏱️ **Delivery**: 2 to 4 weeks.
🔗 [View Mobile Solutions](/services/mobile-app-development)`,
    quickReplies: ['🚀 View App Blueprints', '💰 Mobile App Cost', '📞 Discuss App Idea'],
    ctaUrl: '/services/mobile-app-development',
    ctaText: 'Explore Mobile Apps',
  },
  {
    id: 'pricing-cost',
    keywords: ['price', 'pricing', 'cost', 'rate', 'budget', 'kharcha', 'fees', 'charges', 'how much', 'quote', 'quotation', 'rupees', 'inr', 'dollar'],
    questionSample: 'What are your pricing packages and costs?',
    answer: `💰 **Transparent, Milestone-Based Pricing**:

• **AI WhatsApp Bot & Automation**: Starting from ₹14,000 / $180 (Official Meta API setup + custom logic).
• **AI Voice Calling Agent**: Starting from ₹18,500 / $240 (Custom prompt engineering, telephony SIP trunk, calendar sync).
• **High-Performance Website**: Starting from ₹19,500 / $250 (Next.js 16, mobile-first, complete technical SEO).
• **Turnkey On-Demand Mobile App Stack**: Starting from ₹45,000 / $580 (Customer + Rider/Vendor + Master Admin).
• **Custom Software / CRM SaaS**: Tailored milestone quotes based on exact specifications.

💡 **Free Consultation**: We provide a 100% free technical roadmap and exact quotation before any commitment.`,
    quickReplies: ['📞 Book Free Consultation', '💬 Get Quote on WhatsApp', '📂 View Portfolio'],
    ctaUrl: '/contact',
    ctaText: 'Request Custom Quote',
  },
  {
    id: 'timelines-process',
    keywords: ['timeline', 'time', 'how long', 'duration', 'kitna time', 'delivery', 'days', 'weeks', 'process', 'steps'],
    questionSample: 'How long does a typical project take to deploy?',
    answer: `⏱️ **Fast Agile Sprint Timelines**:

1. **AI Agents & WhatsApp Automation**: 5 to 10 days.
2. **High-Converting Websites & Portals**: 1 to 2 weeks.
3. **Turnkey Mobile App Stacks**: 2 to 3 weeks.
4. **Custom Enterprise SaaS & CRMs**: 3 to 6 weeks.

📋 **Our 7-Step Process**:
Discover ➔ Strategize ➔ Design ➔ Build ➔ Test ➔ Deploy ➔ 24/7 Support.`,
    quickReplies: ['🚀 Start Your Project', '📞 Schedule Discovery Call', '💬 Talk on WhatsApp'],
    ctaUrl: '/#process',
    ctaText: 'View Engineering Process',
  },
  {
    id: 'contact-location',
    keywords: ['contact', 'location', 'office', 'address', 'where', 'city', 'jaipur', 'phone', 'number', 'email', 'call', 'kahan', 'milna'],
    questionSample: 'Where is your office located and how can I contact you?',
    answer: `📍 **BHSOFT IT SOLUTION Official Headquarters**:

• **Location**: Jaipur Business District, Jaipur, Rajasthan 302001, India.
• **Global Reach**: Serving clients across Jaipur, Rajasthan, pan-India, and internationally (US, UAE, UK, Europe).
• **Direct Phone / WhatsApp**: [${SITE_CONFIG.whatsappDisplay}](https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')})
• **Email**: ${SITE_CONFIG.email}
• **Working Hours**: Monday – Saturday, 9:00 AM – 8:00 PM IST (AI Bots run 24/7/365).`,
    quickReplies: ['💬 Open Official WhatsApp', '📞 Call Now', '📍 Visit Jaipur Office'],
    ctaUrl: '/contact',
    ctaText: 'Open Contact Page',
  },
  {
    id: 'portfolio-projects',
    keywords: ['portfolio', 'projects', 'work', 'clients', 'samples', 'case study', 'maira', 'swadhub', 'ideal', 'fashiontxt', 'examples'],
    questionSample: 'Can you show me your portfolio and live projects?',
    answer: `📂 **Recent Live Client Platforms Built by BHSOFT**:

1. **Maira Rugs** ([mairarug.com](https://mairarug.com)): Global luxury handcrafted rug e-commerce with multi-currency checkout & sub-450ms load speed.
2. **Shubh Life Clinic Voice AI**: Sub-600ms multilingual voice receptionist handling 150+ patient appointments daily.
3. **Ideal Path Labs** ([idealpathlabs.com](https://idealpathlabs.com)): Digital pathology test booking & automated WhatsApp report dispatch.
4. **FashionTXT** ([fashiontxt.netlify.app](https://fashiontxt.netlify.app)): Minimalist interactive apparel portfolio with 45% lower mobile bounce rate.
5. **SwadHub** ([swadhub.com](https://swadhub.com)): Direct restaurant ordering & QR table menus saving 25-30% aggregator commissions.

🔗 [View All Case Studies](/projects)`,
    quickReplies: ['🌐 View Maira Rugs Live', '🌐 View Ideal Path Labs Live', '📞 Discuss Your Project'],
    ctaUrl: '/projects',
    ctaText: 'Explore Full Portfolio',
  },
  {
    id: 'hindi-queries',
    keywords: ['kya', 'chahiye', 'karen', 'kaise', 'banegi', 'banwani', 'paisa', 'kitna', 'madad', 'namaste', 'bhai', 'mujhe', 'karna', 'hai'],
    questionSample: 'Mujhe website ya voice bot banwana hai',
    answer: `🙏 **Namaste! BHSOFT IT SOLUTION mein aapka swagat hai.**

Hum aapke business ke liye:
• **AI Voice Calling Agents**: Clinic, Real Estate ya Sales ke liye automatic phone call lene aur appointment book karne wale bots.
• **WhatsApp Business Automation**: Customer support, instant bill bhejna, aur automatic lead capture.
• **High-Speed Websites & Apps**: Next.js 16 par bani super-fast websites aur mobile apps.

Aapka project **1 se 2 weeks** mein deliver ho jata hai!
Aap humein directly WhatsApp par message kar sakte hain: **${SITE_CONFIG.whatsappDisplay}**`,
    quickReplies: ['📞 Free Call Book Karein', '💬 WhatsApp Par Baat Karein', '💰 Price Kitna Hoga?'],
    ctaUrl: `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`,
    ctaText: 'WhatsApp Par Message Karein',
  },
];

export function findChatbotResponse(userQuery: string): ChatbotQA {
  const query = userQuery.toLowerCase().trim();

  // Score each QA based on keyword matching
  let bestMatch: ChatbotQA | null = null;
  let highestScore = 0;

  for (const item of CHATBOT_KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (query.includes(keyword)) {
        score += keyword.length > 4 ? 3 : 1;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return bestMatch;
  }

  // Fallback default response
  return {
    id: 'default-fallback',
    keywords: [],
    questionSample: userQuery,
    answer: `Thank you for your question! 😊

BHSOFT IT SOLUTION specializes in:
1. **AI Voice Calling Agents** (sub-600ms latency receptionist & sales bots)
2. **WhatsApp Automation & Bots** (Meta Cloud API, automated CRM & invoicing)
3. **High-Performance Web & Mobile Apps** (Next.js 16, React Native, e-commerce)
4. **Custom Business Software & SaaS** (Tailored CRM, ERP & automation)

Would you like to connect directly with our technical team on WhatsApp or book a free consultation call?`,
    quickReplies: ['💬 Chat on WhatsApp', '📞 Book Free Consultation', '💰 View Pricing & Plans'],
    ctaUrl: `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi BHSOFT, I have a query: "${userQuery}"`)}`,
    ctaText: 'Chat Directly on WhatsApp',
  };
}
