'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { EXPANDED_INDUSTRIES_DATA, ExpandedIndustryItem } from '@/data/expandedIndustriesData';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function IndustrySolutionsSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<ExpandedIndustryItem | null>(null);
  const whatsappBaseUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Vertical Tailored Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            INDUSTRIES WE <span className="text-gradient-blue">SERVE</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
            Every sector has unique workflows, regulations, and customer lifecycles. We build tailored software ecosystems, AI calling bots, and CRM automation engineered for your exact vertical.
          </p>
        </div>

        {/* Industry Cards Grid (matching user reference image 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPANDED_INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.12)] transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Letter Icon Badge (like image 2) */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${ind.badgeBg} flex items-center justify-center font-black text-base shadow-sm group-hover:scale-110 transition-transform`}>
                    {ind.letter}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {ind.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {ind.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal line-clamp-2">
                  {ind.description}
                </p>

                {/* Mini Features List */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {ind.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link (like image 2: "Explore ->") */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedIndustry(ind)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/link cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>

                <Link
                  href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                  className="text-[11px] font-mono text-slate-500 hover:text-blue-600 font-semibold"
                >
                  Get Scope →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Industry Quick Scope Modal */}
        {selectedIndustry && (
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="industry-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
          >
            <div className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${selectedIndustry.badgeBg} flex items-center justify-center font-black text-lg shadow-sm`}>
                    {selectedIndustry.letter}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-700 uppercase tracking-wider">
                      {selectedIndustry.category}
                    </span>
                    <h3 id="industry-modal-title" className="text-xl font-black text-slate-900">
                      {selectedIndustry.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedIndustry.description}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-2.5">
                  Available Systems &amp; Automations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedIndustry.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 text-xs text-slate-700 border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi BHSOFT, I want to discuss software and automation solutions for the ${selectedIndustry.title} industry.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Discuss on WhatsApp</span>
                </a>

                <Link
                  href={`/contact?industry=${encodeURIComponent(selectedIndustry.title)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <span>Request Custom Scope</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
