'use client';

import React from 'react';
import Link from 'next/link';
import { 
  XCircle, 
  CheckCircle, 
  ArrowRight, 
  Cpu, 
  Workflow, 
  Zap, 
  TrendingUp,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export default function BusinessProblemSection() {
  const problems = [
    { title: "Missed Inbound Calls", desc: "Calls ring when staff is busy or after hours, abandoning high-intent leads to competitors." },
    { title: "Delayed Follow-Ups", desc: "Inquiries take 4-24 hours to get answered, by which time buyer intent has cooled down." },
    { title: "Manual Data Entry", desc: "Copy-pasting names, phone numbers, and notes across WhatsApp, spreadsheets, and CRMs." },
    { title: "Lost & Untracked Leads", desc: "No central pipeline visibility leads to forgotten inquiries and zero accountability." },
    { title: "Appointment Friction", desc: "Back-and-forth messaging to pick an open date leads to high drop-off rates and no-shows." },
    { title: "Disconnected Tools", desc: "Your website, WhatsApp, email, accounting, and database operate in isolated silos." }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#02050c] border-y border-white/5 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            The Operational Bottleneck
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            YOUR BUSINESS SHOULDN&apos;T DEPEND ON <span className="text-gradient">MANUAL WORK</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
            Every minute spent answering repetitive questions, chasing invoices, or re-typing lead data is time taken away from strategic growth and client satisfaction.
          </p>
        </div>

        {/* Problems Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {problems.map((prob, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white/[0.02] border border-red-500/20 hover:border-red-500/40 transition-colors"
            >
              <div className="flex items-center gap-2.5 text-red-400 text-sm font-bold mb-1.5">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{prob.title}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Visual: Manual -> AI + Automation -> Faster Ops -> Scale */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#060a14] via-[#091224] to-[#060a14] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1">
              THE TRANSFORMATION FORMULA
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              WE AUTOMATE THE WORK BEHIND YOUR BUSINESS.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold mb-2">
                01
              </div>
              <span className="text-xs font-mono text-gray-400 uppercase">Input</span>
              <h4 className="text-sm font-bold text-white mt-1">Manual Bottleneck</h4>
              <p className="text-[11px] text-gray-400 mt-1">Fragmented tools, slow manual updates</p>
            </div>

            <div className="p-5 rounded-xl bg-cyan-950/30 border border-cyan-500/40 text-center flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.1)]">
              <div className="w-10 h-10 rounded-lg bg-cyan-400 text-black flex items-center justify-center font-bold mb-2 shadow-[0_0_10px_#00F0FF]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-cyan-300 uppercase">Engine</span>
              <h4 className="text-sm font-bold text-white mt-1">AI + Automation</h4>
              <p className="text-[11px] text-gray-300 mt-1">Autonomous agents, n8n, unified APIs</p>
            </div>

            <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-center flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-purple-300 uppercase">Velocity</span>
              <h4 className="text-sm font-bold text-white mt-1">Faster Operations</h4>
              <p className="text-[11px] text-gray-400 mt-1">Sub-second responses, zero dropped leads</p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-emerald-300 uppercase">Outcome</span>
              <h4 className="text-sm font-bold text-white mt-1">Compound Growth</h4>
              <p className="text-[11px] text-gray-400 mt-1">Higher close rate & lower overhead</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(0,240,255,0.35)]"
            >
              <span>Automate My Business Workflow Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
