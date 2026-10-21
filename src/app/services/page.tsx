import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Bot, 
  Workflow, 
  Globe, 
  Smartphone, 
  Cpu, 
  Users, 
  PhoneCall, 
  MessageSquare, 
  ShoppingCart, 
  Search,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/siteData';
import { SITE_CONFIG } from '@/data/siteConfig';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'All Services & Engineering Solutions | AI, Automation, Web & Mobile',
  description: 'Explore production-grade digital engineering services from BHSOFT IT SOLUTION: Autonomous AI Agents, AI Voice Calling Bots, n8n Business Automation, Custom Next.js Websites, Mobile Apps, and Technical SEO in India & globally.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Digital Engineering Services & AI Automation | BHSOFT IT SOLUTION',
    description: 'Bespoke AI voice agents, WhatsApp automation, web development, mobile apps, and custom software engineered for business workflow scale.',
    url: `${SITE_CONFIG.siteUrl}/services`,
    siteName: SITE_CONFIG.companyName,
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/bhsoft-logo.png', width: 1200, height: 630, alt: 'BHSOFT Engineering Services' }]
  }
};

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Workflow,
  Globe,
  Smartphone,
  Cpu,
  Users,
  PhoneCall,
  MessageSquare,
  ShoppingCart,
  Search
};

export default function ServicesPage() {
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
      }
    ]
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-slate-50/50">
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <li className="text-slate-900 font-bold" aria-current="page">
              Services
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Lifecycle Technical Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase">
            ENGINEERING <span className="text-gradient-blue">SERVICES</span>.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Bespoke digital architecture engineered to solve operational bottlenecks, eliminate repetitive manual workflows, and scale client revenue through modern AI and custom software.
          </p>
        </div>

        {/* Services Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Bot;

            return (
              <div
                key={service.id}
                className="group p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-blue-600 border border-blue-200 px-2.5 py-0.5 rounded-md bg-blue-50/80">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {service.tagline}
                  </p>

                  {/* Operational Problem & Solution Snapshot */}
                  <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                    <div>
                      <span className="font-mono text-rose-600 uppercase text-[10px] font-bold block">Bottleneck Solved:</span>
                      <p className="text-slate-600 line-clamp-2">{service.problem}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/70">
                      <span className="font-mono text-emerald-700 uppercase text-[10px] font-bold block">Engineered Result:</span>
                      <p className="text-slate-700 font-medium">{service.impact}</p>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                      Key Deliverables:
                    </span>
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.id}`}
                    className="text-xs font-mono font-bold text-blue-600 group-hover:text-blue-800 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inspect Full Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs font-bold text-slate-600 hover:text-slate-900"
                  >
                    Quote →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
              Bespoke Enterprise Advisory
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Need a Custom Multi-System Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              From unified WhatsApp + Voice bots to specialized ERP databases, we architect solutions customized directly to your unique operational logic.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              Book Technical Consultation →
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi BHSOFT, I want to discuss a custom service requirement.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider text-center transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
