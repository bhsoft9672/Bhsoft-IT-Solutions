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
    <section id="faqs" className="relative py-24 sm:py-32 bg-[#02050c] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            FREQUENTLY ASKED <span className="text-gradient-cyan">QUESTIONS</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
            Everything you need to know about our engineering process, AI capabilities, timelines, and engagement models.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-xl bg-gradient-to-b from-[#0a0f1d]/70 to-[#04060d]/70 border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-md bg-white/5 text-cyan-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-cyan-500/15' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom inquiry prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question not listed here?</h4>
            <p className="text-xs text-gray-400 mt-0.5">Chat directly with a solutions architect on WhatsApp.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/20 transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
