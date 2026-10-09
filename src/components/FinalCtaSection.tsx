'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function FinalCtaSection() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/60 to-white border-t border-slate-200/80">
      {/* Background glowing rings for Light Mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-blue-400/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-400/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-6 font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          Ready to Engineer Next-Gen Growth?
        </div>

        <h2 className="text-3xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
          YOUR NEXT BUSINESS SYSTEM <span className="text-gradient-blue">STARTS HERE</span>.
        </h2>

        <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          Tell us what you&apos;re trying to build, automate or improve. We&apos;ll help you turn the idea into a practical, high-performance digital solution.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_8px_25px_rgba(37,99,235,0.35)] hover:scale-105 active:scale-95"
          >
            <span>Book Free Consultation →</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm tracking-wide border border-slate-200 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp BHSOFT</span>
          </a>
        </div>
      </div>
    </section>
  );
}
