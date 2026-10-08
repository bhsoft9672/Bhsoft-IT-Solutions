'use client';

import React from 'react';
import { Layers, Database, Cpu, Zap, Cloud, Code2 } from 'lucide-react';
import { TECH_STACK_CATEGORIES } from '@/data/siteData';

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
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            Engineering Backbone
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            THE TECHNOLOGY <span className="text-gradient-accent">BEHIND THE EXPERIENCE</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
            We use production-grade, battle-tested modern infrastructure. No unstable toy frameworks — only scalable cloud systems, low-latency LLMs, and resilient micro-services.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK_CATEGORIES.map((cat, idx) => {
            const Icon = TECH_ICONS[cat.category] || Layers;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#0a0f1d]/80 to-[#04060d]/80 border border-white/10 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
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
