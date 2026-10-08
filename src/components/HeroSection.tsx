'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import Hero3DCore from './Hero3DCore';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="ambient-glow -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/15" />
      <div className="ambient-glow top-1/3 -right-20 w-[600px] h-[600px] bg-purple-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>● SOFTWARE • WEBSITES • AUTOMATION • AI CALLING AGENTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.08]">
              WE BUILD <br />
              <span className="text-gradient-cyan">THE DIGITAL SYSTEMS</span> <br />
              THAT POWER GROWTH.
            </h1>

            {/* Highlighted Slogan */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest uppercase text-cyan-400 font-bold">
              <span>Build Smarter.</span>
              <span className="text-gray-600">•</span>
              <span>Automate Faster.</span>
              <span className="text-gray-600">•</span>
              <span>Grow Bigger.</span>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
              {SITE_CONFIG.heroSubtitle}
            </p>

            {/* Conversion Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]"
              >
                <span>{SITE_CONFIG.primaryCtaText} →</span>
              </Link>

              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wide border border-white/10 transition-colors"
              >
                <span>{SITE_CONFIG.secondaryCtaText}</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* 5-Second Trust Proof */}
            <div className="pt-4 flex items-center gap-6 text-xs text-gray-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold text-sm">24/7</span>
                <span>Autonomous Operation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-bold text-sm">&lt; 3s</span>
                <span>Response Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">100%</span>
                <span>Custom Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive AI Digital Core */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DCore />
          </div>
        </div>
      </div>
    </section>
  );
}
