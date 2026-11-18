'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS_DATA, ProductItem } from '@/data/productsData';
import { 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Check, 
  X 
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function ProductsShowcaseSection() {
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);
  const whatsappBaseUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-xs">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Pre-Engineered Commercial Software
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              READY-TO-DEPLOY <span className="text-gradient-blue">PRODUCTS</span>.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-3 leading-relaxed font-normal">
              Skip 6+ months of costly trial-and-error development. Our turnkey software engines come pre-integrated with telephony, WhatsApp Cloud API, payment gateways, and admin dashboards.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105"
            >
              <span>Request Product Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((prod) => (
            <div
              key={prod.id}
              className="group relative rounded-3xl bg-slate-50/60 border border-slate-200 hover:border-blue-400 hover:shadow-[0_20px_45px_-15px_rgba(37,99,235,0.15)] transition-all flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 p-7"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${prod.badgeColor}`}>
                    {prod.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-500">
                    {prod.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs font-medium text-blue-700 mt-1">
                  {prod.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed font-normal">
                  {prod.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-2 my-5 p-3 rounded-2xl bg-white border border-slate-200/80">
                  {prod.specs.map((s, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">{s.label}</span>
                      <span className="text-xs font-black text-slate-900">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-3 border-t border-slate-200/70">
                  {prod.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Footer Actions */}
              <div className="mt-6 pt-5 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block">Pricing Starts At</span>
                    <span className="text-base font-black text-slate-900">{prod.pricingStart}</span>
                  </div>
                  {prod.liveUrl && (
                    <a
                      href={prod.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-blue-600 hover:text-blue-800"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi BHSOFT, I want a live demo and quotation for "${prod.title}".`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Demo</span>
                  </a>

                  <Link
                    href={`/contact?product=${encodeURIComponent(prod.title)}`}
                    className="py-2.5 px-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-bold text-xs transition-colors shadow-2xs"
                    title="Request Specs Sheet"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
