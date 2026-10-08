'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';
import { SERVICES_DATA } from '@/data/siteData';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <footer className="relative bg-[#02050c] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.4)] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SITE_CONFIG.logoImage}
                  alt="BHSOFT Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  BHSOFT <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">IT SOLUTION</span>
                </span>
                <span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">SOFTWARE • WEBSITES • AUTOMATION</span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Architecting autonomous AI agents, enterprise workflow automation, high-performance websites, and scalable software ecosystems designed to save operations time and maximize business growth.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp BHSOFT
              </a>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Enterprise SLA
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About BHSOFT</Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-white transition-colors">Industry Solutions</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">Selected Projects</Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">Engineering Process</Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors">Knowledge Base (FAQ)</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Book Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-400">
                {SITE_CONFIG.locationNote}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 {SITE_CONFIG.companyName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Built with Next.js, Three.js & AI Systems</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for High-Performance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
