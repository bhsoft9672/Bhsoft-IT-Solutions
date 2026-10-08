'use client';

import React from 'react';
import { ShieldCheck, Clock, Award, Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-[#02050c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Integrity & Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            VERIFIED CLIENT <span className="text-gradient-cyan">FEEDBACK POLICY</span>.
          </h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Unlike agencies that populate fake 5-star testimonials with stock photos, BHSOFT displays only verified client feedback and authentic case studies.
          </p>
        </div>

        {/* Transparency Notice Box */}
        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-[#090e1b] to-[#04060d] border border-white/10 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Clock className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white tracking-wide">
            CLIENT FEEDBACK & VIDEO REVIEWS COMING SOON
          </h3>

          <p className="text-xs text-gray-400 leading-relaxed max-w-lg mx-auto">
            We are compiling verified post-deployment case study interviews with the founders and operations heads of our recent production launches (including Ideal Path Labs, FashionTXT, and Swadhub).
          </p>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Genuine Reviews
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-cyan-400" /> Live Project Inspections
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
