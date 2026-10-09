'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Check, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function PricingSection() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi BHSOFT, I want a custom architecture quote for my project.')}`;

  const packages = [
    {
      tier: "STARTER SYSTEM",
      subtitle: "For small businesses & clinics ready to automate first touchpoints.",
      scope: "Single Core Workflow",
      features: [
        "Single AI Agent (WhatsApp or Web Chatbot)",
        "Appointment booking & calendar integration",
        "Lead capture to Google Sheets / simple CRM",
        "Standard system deployment & testing",
        "14-day post-launch optimization"
      ],
      idealFor: "Clinics, local service firms, single-outlet restaurants."
    },
    {
      tier: "GROWTH PLATFORM",
      popular: true,
      subtitle: "For scaling businesses needing multi-channel automation & custom portals.",
      scope: "Multi-Tool Orchestration",
      features: [
        "Multi-channel AI Agent (WhatsApp + Web + Voice)",
        "n8n / Webhook workflow pipeline & CRM sync",
        "High-performance Next.js custom web portal",
        "Automated multi-stage lead follow-ups",
        "Admin control dashboard & analytics",
        "30-day dedicated engineering support"
      ],
      idealFor: "Real estate firms, e-commerce brands, growing academies."
    },
    {
      tier: "SCALE ENTERPRISE",
      subtitle: "For businesses requiring full custom SaaS, apps, or multi-outlet ecosystems.",
      scope: "Full-Stack Infrastructure",
      features: [
        "Full bespoke software architecture (Web + Mobile App)",
        "Complex database modeling & multi-tenant auth",
        "Custom LLM fine-tuning & vector search RAG",
        "High-concurrency cloud deployment (Docker/AWS)",
        "Custom API microservices & external sync",
        "Continuous SLA maintenance & monitoring"
      ],
      idealFor: "SaaS startups, enterprise chains, diagnostic laboratories."
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            Transparent Architecture Scopes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            EVERY BUSINESS HAS A <span className="text-gradient-blue">DIFFERENT WORKFLOW</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            We avoid artificial &quot;fixed pricing tiers&quot; because real enterprise systems are shaped by your database, volume, and APIs. Tell us what you want to build, and we will formulate a precise scope and estimate.
          </p>
        </div>

        {/* Packages Grid in Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-white border-2 border-blue-500 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.22)] md:-translate-y-2'
                  : 'bg-white/90 border border-slate-200/90 shadow-sm hover:border-slate-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-blue-600 text-white font-extrabold text-[10px] uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-white" />
                  Most Requested Tier
                </div>
              )}

              <div>
                <span className="text-xs font-mono text-blue-700 uppercase tracking-widest block font-bold">
                  {pkg.tier}
                </span>

                <div className="mt-2 text-base font-bold text-slate-900">
                  {pkg.scope}
                </div>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  {pkg.subtitle}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1 font-bold">
                    System Architecture Includes:
                  </span>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 space-y-3.5">
                <div className="text-[11px] text-slate-600">
                  <span className="font-mono text-blue-700 uppercase block text-[10px] font-bold">Best Suited For:</span>
                  {pkg.idealFor}
                </div>

                <Link
                  href={`/contact?scope=${encodeURIComponent(pkg.tier)}`}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:scale-102 active:scale-98'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>Get Custom Quote →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp fast quote helper */}
        <div className="text-center">
          <p className="text-xs text-slate-600 font-normal">
            Need an immediate feasibility estimate?{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700 font-bold inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Discuss your technical requirements directly on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
