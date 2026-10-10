'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/siteData';
import ProjectMediaCard from '@/components/ProjectMediaCard';

export default function SelectedWorkSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-xs">
              Production Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              SELECTED <span className="text-gradient-blue">WORK</span>.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-3 leading-relaxed">
              Explore real-world client platforms engineered by BHSOFT. From global luxury e-commerce (Maira Rugs) to autonomous AI Voice agents, diagnostic portals, and enterprise automation pipelines.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </div>

        {/* Project Cards Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.slug}
              className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500/50 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.18)] transition-all flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Media Card with Image + Interactive Video Simulation Toggle */}
              <ProjectMediaCard project={proj} variant="card" />

              {/* Main Content Info */}
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                    {proj.industry}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {proj.statusBadge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed font-normal">
                  {proj.subtitle}
                </p>

                {/* Key Metrics Stats Banner */}
                {proj.stats && (
                  <div className="grid grid-cols-3 gap-2 my-4 p-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    {proj.stats.map((s, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xs font-black text-slate-900">{s.value}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Challenge & Solution Summary */}
                <div className="mt-4 space-y-3 pt-3 border-t border-slate-100">
                  <div className="text-xs text-slate-700">
                    <span className="font-mono text-blue-700 uppercase text-[10px] block mb-0.5 font-bold">Solution Delivered:</span>
                    <p className="line-clamp-2 text-slate-600">{proj.solution}</p>
                  </div>

                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="text-xs font-bold text-slate-800 group-hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {proj.url && (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
                    title="Visit Live Application"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
