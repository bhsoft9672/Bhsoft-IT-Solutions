'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Workflow, 
  Globe, 
  Smartphone, 
  Cpu, 
  Network, 
  Users, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/siteData';

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Workflow,
  Globe,
  Smartphone,
  Cpu,
  Network,
  Users
};

export default function ServicesSection() {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-slate-50/50">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-blue-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-bold">
              <Layers className="w-3.5 h-3.5" />
              01 — WHAT WE BUILD
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              SYSTEMS ENGINEERED FOR <span className="text-gradient-blue">WORKFLOW SCALE</span>.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
              From autonomous AI calling and messaging agents to full-stack custom SaaS business engines, we engineer digital infrastructure designed strictly around your operational workflow.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105"
            >
              <span>Request Custom Architecture</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Bot;

            return (
              <div
                key={service.id}
                className="group relative p-7 rounded-2xl bg-white/85 border border-slate-200/90 hover:border-blue-500/50 hover:shadow-[0_15px_35px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 backdrop-blur-md"
              >
                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md bg-blue-50/80">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                    {service.tagline}
                  </p>

                  {/* Bullet features preview */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href={`/services/${service.id}`}
                    className="text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    Deep Dive →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal in Light Theme */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Top close */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-700 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  {activeModalService.number}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Problem & Solution block */}
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-700 font-bold flex items-center gap-1.5 mb-1">
                  ❌ The Core Bottleneck
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {activeModalService.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold flex items-center gap-1.5 mb-1">
                  ✓ The BHSOFT Solution Architecture
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {activeModalService.solution}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-2 font-bold">
                  Key Technical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.features.map((feat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
                  Engineering Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalService.technologies.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Impact */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-blue-700 uppercase font-bold block">Expected Business Impact</span>
                  <p className="text-xs text-slate-700 mt-0.5 font-normal">{activeModalService.impact}</p>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                href={`/services/${activeModalService.id}`}
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Read Complete Case & Specs →
              </Link>

              <Link
                href="/contact"
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto text-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all"
              >
                {activeModalService.ctaText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
