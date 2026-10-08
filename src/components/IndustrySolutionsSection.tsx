'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Stethoscope, 
  Building2, 
  ShoppingBag, 
  Utensils, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { INDUSTRIES_DATA } from '@/data/siteData';

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  Stethoscope,
  Building2,
  ShoppingBag,
  Utensils,
  GraduationCap,
  Briefcase
};

export default function IndustrySolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            Vertical Tailored Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BUILT FOR <span className="text-gradient-cyan">REAL BUSINESS</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
            We don&apos;t build abstract experiments. We deliver pragmatic AI agents, automated booking engines, and CRM systems customized to your industry&apos;s exact client lifecycle.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const Icon = INDUSTRY_ICONS[ind.iconName] || Briefcase;

            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0b101d]/90 to-[#050811]/90 border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">
                      VERTICAL 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {ind.tagline}
                  </p>

                  <div className="mt-5 space-y-2.5 pt-4 border-t border-white/5">
                    {ind.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                    className="w-full inline-flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>Deploy for {ind.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
