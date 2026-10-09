'use client';

import React from 'react';
import { 
  Target, 
  Cpu, 
  Wrench, 
  Maximize2, 
  Workflow, 
  LifeBuoy 
} from 'lucide-react';

const REASONS = [
  {
    icon: Target,
    title: "BUSINESS-FIRST DEVELOPMENT",
    desc: "We focus on real revenue, lead capture velocity, and operational cost reduction — not writing code for code's sake."
  },
  {
    icon: Cpu,
    title: "AI-FIRST AUTOMATION",
    desc: "We weave intelligence into your daily workflows, allowing autonomous agents to eliminate repetitive manual friction."
  },
  {
    icon: Wrench,
    title: "CUSTOM SOLUTIONS",
    desc: "No forced templates or rigid off-the-shelf software. We tailor every interface and pipeline strictly to your team's workflow."
  },
  {
    icon: Maximize2,
    title: "SCALABLE ARCHITECTURE",
    desc: "Engineered on modern cloud primitives capable of expanding from dozens to millions of requests without costly rewrites."
  },
  {
    icon: Workflow,
    title: "INTEGRATION READY",
    desc: "We connect your CRMs, WhatsApp APIs, databases, payment processors, and team tools into one synchronized engine."
  },
  {
    icon: LifeBuoy,
    title: "LONG-TERM SUPPORT",
    desc: "We partner with your team beyond launch, handling model tuning, security updates, and performance monitoring."
  }
];

export default function WhyBhsoftSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            The BHSOFT Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            WHY BUSINESSES <span className="text-gradient-blue">CHOOSE BHSOFT</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            We operate as your dedicated fractional AI engineering & software product department.
          </p>
        </div>

        {/* Reason Cards in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;

            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-wide">
                    {reason.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
