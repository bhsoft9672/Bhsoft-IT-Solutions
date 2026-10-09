'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '@/data/siteData';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi BHSOFT, I have a custom question about your services.')}`;

  return (
    <section id="faqs" className="relative py-24 sm:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            FREQUENTLY ASKED <span className="text-gradient-blue">QUESTIONS</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Everything you need to know about our engineering process, AI capabilities, timelines, and engagement models.
          </p>
        </div>

        {/* Accordion in Light Theme */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50/70 border border-slate-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0 transition-transform duration-200 shadow-2xs ${isOpen ? 'rotate-180 bg-blue-50 border-blue-300' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom inquiry prompt */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/70 border border-blue-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Chat directly with a solutions architect on WhatsApp.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shrink-0 shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
