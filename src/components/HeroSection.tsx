'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import Hero3DCore from './Hero3DCore';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern-light">
      {/* Light Theme Ambient Glow Blobs */}
      <div className="ambient-glow-light -top-20 -left-20 w-[550px] h-[550px] bg-blue-400/20" />
      <div className="ambient-glow-light top-1/3 -right-20 w-[650px] h-[650px] bg-purple-400/15" />
      <div className="ambient-glow-light -bottom-20 left-1/4 w-[500px] h-[500px] bg-cyan-400/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wide shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
              <span>● SOFTWARE • WEBSITES • AUTOMATION • AI CALLING AGENTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 uppercase leading-[1.08]">
              WE BUILD <br />
              <span className="text-gradient-blue">THE DIGITAL SYSTEMS</span> <br />
              THAT POWER GROWTH.
            </h1>

            {/* Highlighted Slogan */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest uppercase text-blue-600 font-extrabold">
              <span>Build Smarter.</span>
              <span className="text-slate-400">•</span>
              <span>Automate Faster.</span>
              <span className="text-slate-400">•</span>
              <span>Grow Bigger.</span>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              {SITE_CONFIG.heroSubtitle}
            </p>

            {/* Conversion Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_8px_25px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.45)] hover:scale-105 active:scale-95"
              >
                <span>{SITE_CONFIG.primaryCtaText} →</span>
              </Link>

              <a
                href="#video-showcase"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-blue-50 text-blue-700 font-bold text-sm tracking-wide border border-blue-200/90 shadow-sm hover:border-blue-400 transition-all hover:scale-105 active:scale-95 group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span>Watch Live AI Video Demos</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-700 border border-emerald-200/90 text-sm font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* 5-Second Trust Proof */}
            <div className="pt-6 flex flex-wrap items-center gap-8 text-xs text-slate-600 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-extrabold text-sm">24/7</span>
                <span className="font-semibold">Autonomous Operation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-violet-600 font-extrabold text-sm">&lt; 3s</span>
                <span className="font-semibold">Response Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-extrabold text-sm">100%</span>
                <span className="font-semibold">Custom Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive AI Digital Core */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DCore />

            {/* Floating Live AI Stream Telemetry Pill */}
            <div className="absolute -bottom-4 sm:bottom-2 left-1/2 -translate-x-1/2 z-20 w-11/12 max-w-xs p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl flex items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-900 uppercase">AI Voice Bot Active</div>
                  <div className="text-[9px] font-mono text-slate-500">Twilio SIP • &lt;580ms latency</div>
                </div>
              </div>
              <a
                href="#video-showcase"
                className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-mono font-bold transition-all shadow-xs"
              >
                Play Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
