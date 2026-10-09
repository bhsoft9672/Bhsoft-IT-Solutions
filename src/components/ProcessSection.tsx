'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/siteData';
import { GitCommit } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <GitCommit className="w-3.5 h-3.5" />
            02 — Delivery Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            FROM IDEA <span className="text-gradient-blue">TO PRODUCTION</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Our disciplined engineering sprint structure ensures clean code, continuous stakeholder visibility, and zero deployment surprises.
          </p>
        </div>

        {/* Horizontal Timeline Steps in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600">
                    {step.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-100 border border-blue-300 group-hover:bg-blue-600 transition-colors" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 font-semibold">
                Phase 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
