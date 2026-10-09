'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function RoiImpactSection() {
  const [weeklyManualHours, setWeeklyManualHours] = useState(25);
  const [teamMembers, setTeamMembers] = useState(4);
  const [hourlyWage] = useState(25);

  const totalMonthlyHoursWasted = weeklyManualHours * 4.33;
  const estimatedMonthlyCost = Math.round(weeklyManualHours * teamMembers * hourlyWage * 4.33);
  const estimatedAutomatedSavings = Math.round(estimatedMonthlyCost * 0.75);

  return (
    <section className="relative py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Explanatory Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono uppercase tracking-wider font-bold shadow-xs">
              <Calculator className="w-3.5 h-3.5" />
              Operational Economics
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              TURN MANUAL WORK INTO <span className="text-gradient-blue">AUTOMATED WORKFLOWS</span>.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We do not claim arbitrary &quot;300% growth overnight.&quot; Instead, our engineering focuses on concrete mathematical leverage: replacing repetitive human hours with autonomous software pipelines that operate 24/7 with zero lag.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sub-3-Second Inbound Lead Response</h4>
                  <p className="text-xs text-slate-600 font-normal">Captures prospects while their intent is hot, preventing lead drift to competitors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Copy-Paste Data Drift</h4>
                  <p className="text-xs text-slate-600 font-normal">Automated webhooks keep PostgreSQL, HubSpot, and WhatsApp completely in sync.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Reclaimed High-Value Team Time</h4>
                  <p className="text-xs text-slate-600 font-normal">Your staff shifts from manual dispatching to closing qualified clients and servicing customers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Workload Calculator in Light Theme */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  Workflow Workload Calculator
                </h3>
                <span className="text-[10px] font-mono text-blue-700 font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                  Interactive Estimator
                </span>
              </div>

              <div className="space-y-6">
                {/* Hours Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-700 font-semibold">Repetitive Tasks per Employee (Hours / Week):</span>
                    <span className="text-blue-600 font-bold text-sm">{weeklyManualHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weeklyManualHours}
                    onChange={(e) => setWeeklyManualHours(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                {/* Team Members Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-700 font-semibold">Affected Team Members:</span>
                    <span className="text-blue-600 font-bold text-sm">{teamMembers} people</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={teamMembers}
                    onChange={(e) => setTeamMembers(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                {/* Result Cards in Light Theme */}
                <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">Monthly Manual Hours</span>
                    <div className="text-2xl font-black text-slate-900 mt-1">
                      {Math.round(totalMonthlyHoursWasted * teamMembers)} <span className="text-xs font-normal text-slate-500">hrs</span>
                    </div>
                    <span className="text-[10px] text-rose-600 mt-1 block font-semibold">Lost in repetitive tasks</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                    <span className="text-[10px] font-mono text-blue-700 uppercase block font-bold">Estimated Labor Value</span>
                    <div className="text-2xl font-black text-blue-700 mt-1">
                      ~${estimatedAutomatedSavings.toLocaleString()} <span className="text-xs font-normal text-slate-500">/ mo</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 mt-1 block font-semibold">Reclaimed for core growth</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:scale-105 active:scale-95"
                  >
                    <span>Request Operational Audit & Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
