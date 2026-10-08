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
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/siteData';
import { SITE_CONFIG } from '@/data/siteConfig';
import FinalCtaSection from '@/components/FinalCtaSection';

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Workflow,
  Globe,
  Smartphone,
  Cpu,
  Network,
  Users
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
    title: `${service.title} | BHSOFT IT SOLUTION Architecture`,
    description: service.tagline
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

  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0d1629] to-[#040711] border border-cyan-500/30 relative overflow-hidden shadow-2xl mb-12">
          <div className="ambient-glow -top-10 -right-10 w-80 h-80 bg-cyan-500/15" />

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              SERVICE {service.number}
            </span>
            <div className="w-8 h-8 rounded-lg bg-cyan-400 text-black flex items-center justify-center font-bold">
              <Icon className="w-4 h-4" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed max-w-2xl">
            {service.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?service=${service.id}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>{service.ctaText}</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-7 rounded-2xl bg-[#0d0912] border border-red-500/20 space-y-3">
            <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
              ❌ The Operational Problem
            </span>
            <h3 className="text-xl font-bold text-white">Why Existing Systems Fall Short</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {service.problem}
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#071216] border border-cyan-500/30 space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              ✓ The BHSOFT Solution Architecture
            </span>
            <h3 className="text-xl font-bold text-white">How We Solve It Permanently</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {service.solution}
            </p>
          </div>
        </div>

        {/* Feature Specs */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#070b16] border border-white/10 space-y-6 mb-12">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1">
              Engineering Breakdown
            </span>
            <h3 className="text-2xl font-bold text-white">Core System Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300">{feat}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold block">Expected Business Impact:</span>
              <p className="text-xs text-gray-300 mt-0.5">{service.impact}</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="p-8 rounded-2xl bg-[#070b16] border border-white/10 space-y-4 mb-16">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold block">
            Tools & Frameworks
          </span>
          <h3 className="text-xl font-bold text-white">Technology Stack Utilized</h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {service.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Related Services */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6">Complementary Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.id}`}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 transition-colors group block"
              >
                <span className="text-[10px] font-mono text-cyan-400 font-bold">{rel.number}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 mt-1">{rel.title}</h4>
                <p className="text-xs text-gray-400 line-clamp-2 mt-1">{rel.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FinalCtaSection />
    </main>
  );
}
