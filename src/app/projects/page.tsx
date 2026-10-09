import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Selected Projects & Case Studies | Real Business Systems',
  description: 'Explore verified production platforms engineered by BHSOFT IT SOLUTION, including Maira Rugs, Shubh Life Clinic Voice AI, AI Cold Caller, Ideal Path Labs, FashionTXT, and Swadhub.'
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            Production Implementations
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase">
            SELECTED <span className="text-gradient-blue">WORK</span>.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Real enterprise solutions delivered for clinics, luxury textile studios, e-commerce, and high-volume outbound sales. Each project engineered to solve specific operational bottlenecks.
          </p>
        </div>

        {/* Projects Listing in Light Theme */}
        <div className="space-y-10">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.slug}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:border-blue-400 hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                    {proj.industry}
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {proj.statusBadge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {proj.title}
                </h2>
                <p className="text-sm text-blue-600 font-semibold">
                  {proj.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {proj.solution}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase block font-bold">Engineered Features:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {proj.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.techStack.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-6">
                <div>
                  <span className="text-xs font-mono text-blue-700 uppercase tracking-wider block mb-1 font-bold">Architecture Snapshot:</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {proj.architectureOverview}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider block mb-1 font-bold">Delivered Result:</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {proj.result}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all shadow-md hover:scale-102 active:scale-98"
                  >
                    View Deep Case Study →
                  </Link>
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
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
