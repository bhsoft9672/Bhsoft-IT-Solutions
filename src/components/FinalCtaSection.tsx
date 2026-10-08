'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function FinalCtaSection() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#030712] via-[#081024] to-[#02050c]">
      {/* Background glowing rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Ready to Engineer Next-Gen Growth?
        </div>

        <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
          YOUR NEXT BUSINESS SYSTEM <span className="text-gradient-cyan">STARTS HERE</span>.
        </h2>

        <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Tell us what you&apos;re trying to build, automate or improve. We&apos;ll help you turn the idea into a practical, high-performance digital solution.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            <span>Book Free Consultation →</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wide border border-white/10 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp BHSOFT</span>
          </a>
        </div>
      </div>
    </section>
  );
}
