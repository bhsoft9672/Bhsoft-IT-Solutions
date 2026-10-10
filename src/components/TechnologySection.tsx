'use client';

import React from 'react';
import { Layers, Database, Cpu, Zap, Cloud, Code2 } from 'lucide-react';
import { TECH_STACK_CATEGORIES } from '@/data/siteData';
import Interactive3DTechMatrix from './Interactive3DTechMatrix';

const TECH_ICONS: Record<string, React.ElementType> = {
  "AI & Intelligence": Cpu,
  "Automation & Workflows": Zap,
  "Frontend & UI": Code2,
  "Backend & Systems": Layers,
  "Databases & Storage": Database,
  "Cloud & Infrastructure": Cloud
};

export default function TechnologySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            Engineering Backbone
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            THE TECHNOLOGY <span className="text-gradient-accent-light">BEHIND THE EXPERIENCE</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Drag the 3D tech constellation to inspect our production infrastructure. No unstable toy frameworks — only scalable cloud systems, low-latency LLMs, and resilient micro-services.
          </p>
        </div>

        {/* Interactive 3D Tech Constellation Matrix */}
        <Interactive3DTechMatrix />

        {/* Tech Grid in Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK_CATEGORIES.map((cat, idx) => {
            const Icon = TECH_ICONS[cat.category] || Layers;

            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
