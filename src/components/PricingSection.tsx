'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';
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
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            Transparent Architecture Scopes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            EVERY BUSINESS HAS A <span className="text-gradient-cyan">DIFFERENT WORKFLOW</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
            We avoid artificial &quot;fixed pricing tiers&quot; because real enterprise systems are shaped by your database, volume, and APIs. Tell us what you want to build, and we will formulate a precise scope and estimate.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#0e172a] to-[#060a15] border-2 border-cyan-400 shadow-[0_0_40px_rgba(0,240,255,0.2)] md:-translate-y-2'
                  : 'bg-gradient-to-b from-[#0a0f1d]/90 to-[#04060d]/90 border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-black font-extrabold text-[10px] uppercase tracking-wider shadow-[0_0_15px_#00F0FF] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-black" />
                  Most Requested Tier
                </div>
              )}

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                  {pkg.tier}
                </span>

                <div className="mt-2 text-sm font-semibold text-white">
                  {pkg.scope}
                </div>

                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {pkg.subtitle}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">
                    System Architecture Includes:
                  </span>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5 space-y-3">
                <div className="text-[11px] text-gray-400">
                  <span className="font-mono text-cyan-400 uppercase block text-[10px]">Best Suited For:</span>
                  {pkg.idealFor}
                </div>

                <Link
                  href={`/contact?scope=${encodeURIComponent(pkg.tier)}`}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    pkg.popular
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
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
          <p className="text-xs text-gray-400">
            Need an immediate feasibility estimate?{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300 font-medium inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              Discuss your technical requirements directly on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
