'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BLUEPRINT_CATEGORIES, 
  BLUEPRINTS_DATA, 
  BlueprintItem 
} from '@/data/blueprintsData';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  MessageSquare, 
  Clock, 
  Layers,
  Wrench,
  Droplets,
  Package,
  HeartHandshake,
  Navigation,
  Bike,
  Gift,
  Zap,
  ShoppingBag,
  Home,
  Shirt,
  Smile,
  Truck,
  Shield,
  Car,
  CreditCard,
  Activity,
  Building,
  Utensils,
  Cpu
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

const ICON_MAP: Record<string, React.ElementType> = {
  Wrench,
  Droplets,
  Package,
  HeartHandshake,
  Navigation,
  Bike,
  Gift,
  Zap,
  ShoppingBag,
  Home,
  Shirt,
  Smile,
  Layers,
  Truck,
  Shield,
  Sparkles,
  Car,
  CreditCard,
  Activity,
  Building,
  Utensils,
  Cpu,
};

export default function TrendingSolutionsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeBlueprint, setActiveBlueprint] = useState<BlueprintItem | null>(null);

  const filteredBlueprints = selectedCategory === 'all'
    ? BLUEPRINTS_DATA
    : BLUEPRINTS_DATA.filter((b) => b.category === selectedCategory);

  const whatsappBaseUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section id="blueprints" className="relative py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Turnkey Software Stacks
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              EXPLORE EVERY <span className="text-gradient-blue">BLUEPRINT</span>.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-3 leading-relaxed font-normal">
              Production-tested architecture blueprints engineered for rapid commercial deployment. Select any category to explore specifications, technology stacks, and deployment timelines.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 font-bold bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            Showing <span className="text-blue-600 font-black">{filteredBlueprints.length}</span> of 94 Blueprints
          </div>
        </div>

        {/* Category Filter Pills (matching user's reference image 1) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {BLUEPRINT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Blueprints Grid (4 columns like reference image 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBlueprints.map((item) => {
            const Icon = ICON_MAP[item.iconName] || Layers;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-[0_16px_36px_-12px_rgba(37,99,235,0.18)] transition-all flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* 3D Isometric Styled Header Thumbnail */}
                <div className={`relative h-44 w-full bg-gradient-to-br ${item.gradient} p-4 flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle isometric grid overlay */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px]" />
                  
                  {/* Glowing 3D Orb Effect */}
                  <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-white/20 blur-xl group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute top-2 -left-6 w-20 h-20 rounded-full bg-white/15 blur-lg" />

                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-md text-white/95 border border-white/20">
                      {item.categoryBadge}
                    </span>
                    {item.popular && (
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-yellow-400 text-slate-950 shadow-xs">
                        HOT
                      </span>
                    )}
                  </div>

                  {/* Center 3D Isometric Graphic Representation */}
                  <div className="relative my-auto flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-8 h-8 drop-shadow-md" />
                    </div>
                  </div>

                  {/* Bottom timeline badge */}
                  <div className="flex items-center justify-between z-10 text-[10px] font-mono text-white/80">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-white/70" /> {item.timeline}
                    </span>
                    <span>Ready Stack</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                    {item.techStack.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link (like user image 1: "View blueprint ->") */}
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setActiveBlueprint(item)}
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/btn cursor-pointer"
                    >
                      <span className="font-semibold">View blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Need a Custom Architecture?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Can&apos;t find your exact industry blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              We design custom enterprise blueprints tailored to your proprietary business workflows, databases, and operational requirements.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              Request Custom Blueprint
            </Link>
            <a
              href={`${whatsappBaseUrl}?text=${encodeURIComponent('Hi BHSOFT, I need a custom app architecture blueprint for my business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-emerald-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Blueprint Detail Modal */}
      {activeBlueprint && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="blueprint-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className={`p-6 bg-gradient-to-r ${activeBlueprint.gradient} text-white flex items-center justify-between`}>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 border border-white/20">
                  {activeBlueprint.categoryBadge} BLUEPRINT
                </span>
                <h3 id="blueprint-modal-title" className="text-2xl font-black mt-2">
                  {activeBlueprint.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" /> Typical Delivery: {activeBlueprint.timeline}
                </p>
              </div>

              <button
                onClick={() => setActiveBlueprint(null)}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
              <div>
                <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-2">
                  Architecture Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeBlueprint.description}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-3">
                  Key Modules &amp; Capabilities Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeBlueprint.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-2">
                  Production Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeBlueprint.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-mono">
                Full IP Ownership • Clean Documentation • 24/7 SLA
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi BHSOFT, I want to deploy the "${activeBlueprint.title}" blueprint for my business. Can we discuss pricing and timeline?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Deploy via WhatsApp</span>
                </a>

                <Link
                  href={`/contact?blueprint=${encodeURIComponent(activeBlueprint.title)}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <span>Book Consultation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
