'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function WhatsAppFloating() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BHSOFT on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-slate-950 font-bold text-xs shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_35px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
      >
        <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
        <span className="hidden sm:inline font-semibold tracking-wide">WhatsApp BHSOFT</span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
        </span>
      </a>
    </aside>
  );
}
