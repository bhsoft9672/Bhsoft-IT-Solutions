import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/siteData';
import { SITE_CONFIG } from '@/data/siteConfig';
import ProjectMediaCard from '@/components/ProjectMediaCard';
import JsonLd from '@/components/JsonLd';

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
    title: `${project.title} Case Study | ${project.subtitle} | BHSOFT`,
    description: `Case study on how BHSOFT engineered ${project.title} (${project.subtitle}): technical challenge, architecture, and delivered business results.`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | BHSOFT IT SOLUTION`,
      description: project.subtitle,
      url: `${SITE_CONFIG.siteUrl}/projects/${project.slug}`,
      siteName: SITE_CONFIG.companyName,
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: project.image || '/bhsoft-logo.png',
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.subtitle}`
        }
      ]
    }
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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
        name: 'Projects',
        item: `${SITE_CONFIG.siteUrl}/projects`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${SITE_CONFIG.siteUrl}/projects/${project.slug}`
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${SITE_CONFIG.siteUrl}/projects/${project.slug}/#article`,
    headline: `${project.title} Case Study: ${project.subtitle}`,
    description: project.solution,
    image: project.image ? `${SITE_CONFIG.siteUrl}${project.image}` : `${SITE_CONFIG.siteUrl}/bhsoft-logo.png`,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.companyName,
      url: SITE_CONFIG.siteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.companyName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.siteUrl}/bhsoft-logo.png`
      }
    },
    mainEntityOfPage: `${SITE_CONFIG.siteUrl}/projects/${project.slug}`
  };

  return (
    <main className="min-h-screen pt-28 pb-16 bg-slate-50/50">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

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
              <Link href="/projects" className="hover:text-blue-600 transition-colors">
                Projects
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <li className="text-slate-900 font-bold" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Hero Banner in Light Theme */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 relative overflow-hidden shadow-xl mb-12">
          <div className="ambient-glow-light -top-10 -right-10 w-80 h-80 bg-blue-400/15" />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
              {project.industry}
            </span>
            <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
              {project.statusBadge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-blue-600 font-semibold mt-2">
            {project.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md hover:scale-102 active:scale-98"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
            >
              <span>Build Similar System</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </Link>
          </div>

          {/* Project Media Showcase in Detail Page */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <ProjectMediaCard project={project} variant="detail" />
          </div>
        </div>

        {/* Structured Case Study Sections: Challenge -> Solution -> Tech -> Implementation -> Result */}
        <div className="space-y-8">
          {/* 1. Challenge */}
          <div className="p-8 rounded-3xl bg-white border border-rose-200/90 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 uppercase tracking-widest font-bold">
              <span>01. The Challenge & Operational Bottleneck</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">The Business Problem</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* 2. Solution */}
          <div className="p-8 rounded-3xl bg-white border border-blue-200 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              <span>02. The BHSOFT Solution Architecture</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Engineering The Solution</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>

          {/* 3. Features Implemented */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-600 uppercase tracking-widest font-bold">
              <span>03. Implemented Capabilities</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Core System Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Tech Stack & Architecture */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              <span>04. Infrastructure & Tech Stack</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Technical Architecture</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {project.architectureOverview}
            </p>
            <div className="flex flex-wrap gap-2 pt-3">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Verified Result */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-50/70 to-white border border-emerald-200 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>05. Production Result</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Verified Outcome</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {project.result}
            </p>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-md">
          <h3 className="text-2xl font-bold text-slate-900">Need a platform engineered for your business?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal">
            We will conduct an initial architectural review and deliver a tailored specification for your workflow.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <span>Schedule Architecture Review →</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
