import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Cpu, ShieldCheck } from 'lucide-react';
import FinalCtaSection from '@/components/FinalCtaSection';

export const metadata: Metadata = {
  title: 'About Us | Engineering Autonomous AI & Software Systems',
  description: 'Learn about BHSOFT IT SOLUTION, our engineering ethos, AI-first architecture, and how we build enterprise software that eliminates manual work.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 bg-slate-50/50">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-grid-pattern-light">
        <div className="ambient-glow-light -top-20 left-1/3 w-96 h-96 bg-blue-400/15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-6 font-bold shadow-xs">
            Engineering Manifesto
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            WE BUILD TECHNOLOGY THAT <br />
            <span className="text-gradient-blue">SOLVES REAL BUSINESS PROBLEMS</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed font-normal">
            BHSOFT IT SOLUTION was created to bridge the chasm between raw software development and pragmatic enterprise automation. We believe modern businesses shouldn&apos;t run on manual copy-pasting, forgotten customer follow-ups, or brittle spreadsheets.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Business-First Mindset</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Code is simply the vehicle. The objective is business velocity, customer satisfaction, reduced overhead, and measurable ROI.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">AI-First Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We integrate autonomous intelligence at the foundational layer — enabling natural voice, chat, and automated decision-making across all digital touchpoints.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Production Reliability</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We build strictly on enterprise clouds (AWS, GCP, Vercel, Docker) with sub-second response times, automated retries, and hardened data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin & Approach */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase">OUR ENGINEERING DISCIPLINE</h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Traditional agencies often assemble generic WordPress templates or lock clients into expensive custom retainers with little regard for operational workflow.
            </p>
            <p>
              At <strong>BHSOFT</strong>, every engagement starts with workflow diagnostics. We uncover the friction: where are customer inquiries slowing down? Where is staff spending 20 hours a week on manual transcription?
            </p>
            <p>
              We then engineer a closed-loop system combining Next.js frontends, custom webhook queues (n8n), AI intelligence (OpenAI GPT-4o, Claude), and instant communication APIs (WhatsApp Cloud API, Twilio). The result is a resilient digital machine that works while your team sleeps.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <div className="text-sm font-bold text-slate-900">Want to see our architecture blueprint for your company?</div>
              <div className="text-xs text-slate-600 mt-0.5">We provide free operational consultations and system roadmaps.</div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shrink-0 shadow-md"
            >
              Consult an Architect →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
