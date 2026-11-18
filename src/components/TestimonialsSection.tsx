'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, ExternalLink, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Verified Client Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            WHAT FOUNDERS <span className="text-gradient-blue">SAY</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
            Real outcomes from verified founders, medical directors, and operations executives who deployed BHSOFT AI agents, e-commerce architectures, and automation pipelines.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-[0_16px_36px_-12px_rgba(37,99,235,0.14)] transition-all flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Top Stars & Outcome Metric */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {item.metrics.value}
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic relative">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Project Verification Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                    {item.clientName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      {item.clientName}
                      {item.verified && (
                        <span title="Verified Client Deployment">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 inline" />
                        </span>
                      )}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.role}, <span className="font-semibold text-slate-700">{item.company}</span>
                    </p>
                    <span className="text-[10px] font-mono text-slate-400 block">{item.location}</span>
                  </div>
                </div>

                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-500 hover:text-blue-600 transition-colors shadow-2xs shrink-0"
                    title={`Inspect ${item.company} live platform`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs font-mono text-slate-600">
          <span className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Verified Production Deployments
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            5.0 / 5.0 Average Client Satisfaction
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Zero-Downtime Migration Guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
