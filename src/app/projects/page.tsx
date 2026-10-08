import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Selected Projects & Case Studies | Real Business Systems',
  description: 'Explore verified production platforms engineered by BHSOFT IT SOLUTION, including Ideal Path Labs, FashionTXT, and Swadhub.'
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            Production Implementations
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            SELECTED <span className="text-gradient-cyan">WORK</span>.
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Real enterprise solutions delivered for clinics, apparel brands, and food operations. Each project engineered to solve specific operational bottlenecks.
          </p>
        </div>

        {/* Projects Listing */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={proj.slug}
              className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#04060d] border border-white/10 hover:border-cyan-400/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {proj.industry}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {proj.statusBadge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {proj.title}
                </h2>
                <p className="text-sm text-cyan-300 font-medium">
                  {proj.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {proj.solution}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-gray-400 uppercase block">Engineered Features:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {proj.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="text-xs text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.techStack.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[11px] font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">Architecture Snapshot:</span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {proj.architectureOverview}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">Delivered Result:</span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {proj.result}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="flex-1 py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs uppercase tracking-wider text-center transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  >
                    View Deep Case Study →
                  </Link>
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Visit Live Application"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
