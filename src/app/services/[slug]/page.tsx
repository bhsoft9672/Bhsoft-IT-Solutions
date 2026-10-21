import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Bot, 
  Workflow, 
  Globe, 
  Smartphone, 
  Cpu, 
  Network, 
  Users, 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  PhoneCall,
  ShoppingCart,
  Search,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/siteData';
import { SITE_CONFIG } from '@/data/siteConfig';
import FinalCtaSection from '@/components/FinalCtaSection';
import JsonLd from '@/components/JsonLd';

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Workflow,
  Globe,
  Smartphone,
  Cpu,
  Network,
  Users,
  PhoneCall,
  MessageSquare,
  ShoppingCart,
  Search
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((srv) => ({
    slug: srv.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.id === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} Services | BHSOFT IT SOLUTION India`,
    description: `${service.tagline} Engineered by BHSOFT IT SOLUTION for businesses in Jaipur, India & worldwide.`,
    alternates: {
      canonical: `/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} Services | BHSOFT IT SOLUTION`,
      description: service.tagline,
      url: `${SITE_CONFIG.siteUrl}/services/${service.id}`,
      siteName: SITE_CONFIG.companyName,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: '/bhsoft-logo.png', width: 1200, height: 630, alt: service.title }]
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const Icon = ICON_MAP[service.iconName] || Bot;
  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi BHSOFT, I want to discuss ${service.title} for our workflow.`)}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.siteUrl}/services/${service.id}/#service`,
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.companyName,
      url: SITE_CONFIG.siteUrl,
      logo: `${SITE_CONFIG.siteUrl}/bhsoft-logo.png`,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email
    },
    description: service.tagline,
    areaServed: ['India', 'Rajasthan', 'Jaipur', 'Global'],
    url: `${SITE_CONFIG.siteUrl}/services/${service.id}`
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${SITE_CONFIG.siteUrl}/services`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${SITE_CONFIG.siteUrl}/services/${service.id}`
      }
    ]
  };

  return (
    <main className="min-h-screen pt-28 pb-16 bg-slate-50/50">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <li>
              <Link href="/services" className="hover:text-blue-600 transition-colors">
                Services
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <li className="text-slate-900 font-bold" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        {/* Hero Banner in Light Theme */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 relative overflow-hidden shadow-xl mb-12">
          <div className="ambient-glow-light -top-10 -right-10 w-80 h-80 bg-blue-400/15" />

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              SERVICE {service.number}
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Icon className="w-4 h-4" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl font-normal">
            {service.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?service=${service.id}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-102 active:scale-98"
            >
              <span>{service.ctaText}</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-rose-200/90 space-y-3 shadow-sm">
            <span className="text-xs font-mono text-rose-600 uppercase tracking-widest font-bold">
              ❌ The Operational Problem
            </span>
            <h3 className="text-xl font-bold text-slate-900">Why Existing Systems Fall Short</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {service.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-blue-200 space-y-3 shadow-sm">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              ✓ The BHSOFT Solution Architecture
            </span>
            <h3 className="text-xl font-bold text-slate-900">How We Solve It Permanently</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {service.solution}
            </p>
          </div>
        </div>

        {/* Feature Specs */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 space-y-6 mb-12 shadow-sm">
          <div>
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest font-bold block mb-1">
              Engineering Breakdown
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Core System Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">{feat}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3 shadow-2xs">
            <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono text-blue-700 uppercase font-bold block">Expected Business Impact:</span>
              <p className="text-xs text-slate-700 mt-0.5 font-normal">{service.impact}</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/90 space-y-4 mb-16 shadow-sm">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold block">
            Tools & Frameworks
          </span>
          <h3 className="text-xl font-bold text-slate-900">Technology Stack Utilized</h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {service.technologies.map((tech, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Related Services */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Complementary Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.id}`}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group block"
              >
                <span className="text-[10px] font-mono text-blue-600 font-bold">{rel.number}</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 mt-1">{rel.title}</h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-normal">{rel.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FinalCtaSection />
    </main>
  );
}
