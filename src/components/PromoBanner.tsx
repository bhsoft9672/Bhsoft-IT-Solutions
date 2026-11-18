'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, X, PhoneCall } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  // Check if dismissed previously in session
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('bhsoft_promo_dismissed');
    if (isDismissed === 'true') {
      setVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem('bhsoft_promo_dismissed', 'true');
  };

  if (!visible) return null;

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi BHSOFT, I saw your Special Offer banner and want to discuss my project!')}`;

  return (
    <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white py-2.5 px-4 text-xs font-medium border-b border-blue-600/40 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left / Center content */}
        <div className="flex-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-yellow-300 animate-pulse" />
            Special 2026 Offer
          </span>
          <span className="text-white/95 font-semibold">
            Deploy your <strong className="text-yellow-300 font-bold">Autonomous AI Voice Agent</strong> or Custom Next.js Platform in 14 Days.
          </span>
          <span className="hidden md:inline text-white/80">
            • Free Technical Architecture Blueprint &amp; Consultation included.
          </span>
        </div>

        {/* Right CTA + Close */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-blue-800 font-bold text-[11px] hover:bg-yellow-300 hover:text-slate-950 transition-all shadow-xs hover:scale-105 active:scale-95"
          >
            <span>Claim Offer</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <Link
            href="/contact"
            className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1 rounded-full bg-white text-blue-800 font-bold text-[11px]"
          >
            <span>Book Call</span>
          </Link>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss banner"
            className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
