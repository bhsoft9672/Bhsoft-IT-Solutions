'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/siteData';
import { GitCommit } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#02050c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <GitCommit className="w-3.5 h-3.5" />
            02 — Delivery Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            FROM IDEA <span className="text-gradient-cyan">TO PRODUCTION</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
            Our disciplined engineering sprint structure ensures clean code, continuous stakeholder visibility, and zero deployment surprises.
          </p>
        </div>

        {/* Horizontal Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-5 rounded-xl bg-gradient-to-b from-[#090e1a] to-[#04060e] border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {step.name}
                </h3>

                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-gray-400">
                Phase 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
