'use client';

import React from 'react';
import Link from 'next/link';
import { 
  XCircle, 
  ArrowRight, 
  Cpu, 
  Zap, 
  TrendingUp,
  ShieldAlert
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
    <section className="relative py-20 sm:py-28 bg-white border-y border-slate-200/80 overflow-hidden">
      {/* Light Ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5" />
            The Operational Bottleneck
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            YOUR BUSINESS SHOULDN&apos;T DEPEND ON <span className="text-gradient-dark">MANUAL WORK</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Every minute spent answering repetitive questions, chasing invoices, or re-typing lead data is time taken away from strategic growth and client satisfaction.
          </p>
        </div>

        {/* Problems Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {problems.map((prob, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-50/80 border border-rose-200/80 hover:border-rose-300 transition-colors shadow-xs"
            >
              <div className="flex items-center gap-2.5 text-rose-600 text-sm font-bold mb-1.5">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{prob.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Visual: Manual -> AI + Automation -> Faster Ops -> Scale */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/60 to-violet-50/70 border border-blue-200 shadow-lg relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest font-bold block mb-1">
              THE TRANSFORMATION FORMULA
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              WE AUTOMATE THE WORK BEHIND YOUR BUSINESS.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center font-bold mb-2">
                01
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase font-semibold">Input</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">Manual Bottleneck</h4>
              <p className="text-[11px] text-slate-600 mt-1">Fragmented tools, slow manual updates</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-blue-300 text-center flex flex-col items-center justify-center shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-2 shadow-sm">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-blue-700 uppercase font-bold">Engine</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">AI + Automation</h4>
              <p className="text-[11px] text-slate-600 mt-1">Autonomous agents, n8n, unified APIs</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-violet-200 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 border border-violet-200 flex items-center justify-center font-bold mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-violet-700 uppercase font-semibold">Velocity</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">Faster Operations</h4>
              <p className="text-[11px] text-slate-600 mt-1">Sub-second responses, zero dropped leads</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-emerald-200 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-emerald-700 uppercase font-semibold">Outcome</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">Compound Growth</h4>
              <p className="text-[11px] text-slate-600 mt-1">Higher close rate & lower overhead</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:scale-105 active:scale-95"
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
