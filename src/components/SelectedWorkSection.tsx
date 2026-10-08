'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/siteData';

export default function SelectedWorkSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#02050c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              Production Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              SELECTED <span className="text-gradient-cyan">WORK</span>.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-3 leading-relaxed">
              Explore real-world client platforms engineered by BHSOFT. We adhere strictly to verified engineering deliverables and client platforms.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.slug}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0b101c]/90 to-[#050811]/90 border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(0,240,255,0.15)] transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Top Banner / Industry */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {proj.industry}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {proj.statusBadge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {proj.subtitle}
                </p>

                {/* Challenge & Solution Summary */}
                <div className="mt-5 space-y-3 pt-4 border-t border-white/5">
                  <div className="text-xs text-gray-300">
                    <span className="font-mono text-cyan-400 uppercase text-[10px] block mb-0.5">Solution Delivered:</span>
                    <p className="line-clamp-3 text-gray-400">{proj.solution}</p>
                  </div>

                  <div className="pt-2">
                    <span className="font-mono text-gray-400 uppercase text-[10px] block mb-1.5">Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 bg-[#04060d]/80 border-t border-white/5 flex items-center justify-between gap-3">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="text-xs font-bold text-white group-hover:text-cyan-400 flex items-center gap-1 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {proj.url && (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
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
