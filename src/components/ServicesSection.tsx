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
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              01 — WHAT WE BUILD
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              SYSTEMS ENGINEERED FOR <span className="text-gradient-cyan">WORKFLOW SCALE</span>.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
              From autonomous AI calling and messaging agents to full-stack custom SaaS business engines, we engineer digital infrastructure designed strictly around your operational workflow.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Request Custom Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
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
                className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0c1222]/80 to-[#060913]/90 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-cyan-400/70 border border-cyan-500/20 px-2 py-0.5 rounded bg-cyan-500/5">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                    {service.tagline}
                  </p>

                  {/* Bullet features preview */}
                  <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href={`/services/${service.id}`}
                    className="text-xs font-bold text-gray-400 hover:text-cyan-300 transition-colors"
                  >
                    Deep Dive →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal / Drawer for Instant Inspection */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#090e1a] border border-cyan-400/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Top close */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  {activeModalService.number}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Problem & Solution block */}
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold flex items-center gap-1.5 mb-1">
                  ❌ The Core Bottleneck
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeModalService.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                  ✓ The BHSOFT Solution Architecture
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeModalService.solution}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  Key Technical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.features.map((feat, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Engineering Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalService.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Impact */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold block">Expected Business Impact</span>
                  <p className="text-xs text-gray-300 mt-0.5">{activeModalService.impact}</p>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                href={`/services/${activeModalService.id}`}
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg border border-white/20 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                Read Complete Case & Specs →
              </Link>

              <Link
                href="/contact"
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto text-center px-6 py-2.5 rounded-lg bg-cyan-400 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
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
