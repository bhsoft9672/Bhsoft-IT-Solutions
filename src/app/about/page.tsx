import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Users, Cpu, ShieldCheck, ArrowRight, Zap, Code2, Globe } from 'lucide-react';
import FinalCtaSection from '@/components/FinalCtaSection';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'About Us | Engineering Autonomous AI & Software Systems',
  description: 'Learn about BHSOFT IT SOLUTION, our engineering ethos, AI-first architecture, and how we build enterprise software that eliminates manual work.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-grid-pattern">
        <div className="ambient-glow -top-20 left-1/3 w-96 h-96 bg-cyan-500/10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6">
            Engineering Manifesto
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            WE BUILD TECHNOLOGY THAT <br />
            <span className="text-gradient-cyan">SOLVES REAL BUSINESS PROBLEMS</span>.
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            BHSOFT IT SOLUTION was created to bridge the chasm between raw software development and pragmatic enterprise automation. We believe modern businesses shouldn&apos;t run on manual copy-pasting, forgotten customer follow-ups, or brittle spreadsheets.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#090e1b] to-[#04060d] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Business-First Mindset</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Code is simply the vehicle. The objective is business velocity, customer satisfaction, reduced overhead, and measurable ROI.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#090e1b] to-[#04060d] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">AI-First Architecture</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We integrate autonomous intelligence at the foundational layer — enabling natural voice, chat, and automated decision-making across all digital touchpoints.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#090e1b] to-[#04060d] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Production Reliability</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We build strictly on enterprise clouds (AWS, GCP, Vercel, Docker) with sub-second response times, automated retries, and hardened data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin & Approach */}
      <section className="py-20 bg-[#02050c] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">OUR ENGINEERING DISCIPLINE</h2>
          </div>

          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 text-sm sm:text-base leading-relaxed">
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

          <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">Want to see our architecture blueprint for your company?</div>
              <div className="text-xs text-gray-400 mt-0.5">We provide free operational consultations and system roadmaps.</div>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider hover:bg-cyan-300 transition-colors shrink-0"
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
