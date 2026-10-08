import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, ArrowRight, ShieldCheck, CheckCircle2, ChevronLeft, Layers, Cpu, Zap } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '@/data/siteData';
import FinalCtaSection from '@/components/FinalCtaSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((proj) => ({
    slug: proj.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} Case Study | BHSOFT Production Platform`,
    description: `Detailed case study on how BHSOFT engineered ${project.title} (${project.subtitle}) to overcome operational bottlenecks.`
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0d1527] to-[#040710] border border-cyan-500/30 relative overflow-hidden shadow-2xl mb-12">
          <div className="ambient-glow -top-10 -right-10 w-80 h-80 bg-cyan-500/15" />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.industry}
            </span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              {project.statusBadge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-cyan-300 font-medium mt-2">
            {project.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <span>Build Similar System</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>
        </div>

        {/* Structured Case Study Sections: Challenge -> Solution -> Tech -> Implementation -> Result */}
        <div className="space-y-10">
          {/* 1. Challenge */}
          <div className="p-8 rounded-2xl bg-[#070b16] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
              <span>01. The Challenge & Operational Bottleneck</span>
            </div>
            <h2 className="text-2xl font-bold text-white">The Business Problem</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* 2. Solution */}
          <div className="p-8 rounded-2xl bg-[#070b16] border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              <span>02. The BHSOFT Solution Architecture</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Engineering The Solution</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* 3. Features Implemented */}
          <div className="p-8 rounded-2xl bg-[#070b16] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
              <span>03. Implemented Capabilities</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Core System Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Tech Stack & Architecture */}
          <div className="p-8 rounded-2xl bg-[#070b16] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              <span>04. Infrastructure & Tech Stack</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Technical Architecture</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.architectureOverview}
            </p>
            <div className="flex flex-wrap gap-2 pt-3">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Verified Result */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-[#070b16] border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>05. Production Result</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Verified Outcome</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 p-8 rounded-2xl bg-[#040813] border border-white/10 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Need a platform engineered for your business?</h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            We will conduct an initial architectural review and deliver a tailored specification for your workflow.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.35)]"
            >
              <span>Schedule Architecture Review →</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
