'use client';

import React from 'react';
import { ShieldCheck, Clock, Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            Integrity & Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            VERIFIED CLIENT <span className="text-gradient-blue">FEEDBACK POLICY</span>.
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Unlike agencies that populate fake 5-star testimonials with stock photos, BHSOFT displays only verified client feedback and authentic case studies.
          </p>
        </div>

        {/* Transparency Notice Box in Light Theme */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-slate-50/80 border border-slate-200 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
            <Clock className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-slate-900 tracking-wide">
            CLIENT FEEDBACK & VIDEO REVIEWS COMING SOON
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto font-normal">
            We are compiling verified post-deployment case study interviews with the founders and operations heads of our recent production launches (including Maira Rugs, Shubh Life Clinic Voice AI, AI Cold Caller, Ideal Path Labs, FashionTXT, and Swadhub).
          </p>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Genuine Reviews
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Star className="w-4 h-4 text-blue-600" /> Live Project Inspections
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
