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
    <section id="solutions" className="relative py-24 sm:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold">
            Vertical Tailored Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            BUILT FOR <span className="text-gradient-blue">REAL BUSINESS</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
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
                className="group relative p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-400 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.12)] transition-all flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      VERTICAL 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    {ind.tagline}
                  </p>

                  <div className="mt-5 space-y-2.5 pt-4 border-t border-slate-200/70">
                    {ind.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/70">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                    className="w-full inline-flex items-center justify-between text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors"
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
