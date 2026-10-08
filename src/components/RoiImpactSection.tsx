'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Clock, Users, DollarSign, CheckCircle2 } from 'lucide-react';

export default function RoiImpactSection() {
  const [weeklyManualHours, setWeeklyManualHours] = useState(25);
  const [teamMembers, setTeamMembers] = useState(4);
  const [hourlyWage, setHourlyWage] = useState(25);

  const totalMonthlyHoursWasted = weeklyManualHours * 4.33;
  const estimatedMonthlyCost = Math.round(weeklyManualHours * teamMembers * hourlyWage * 4.33);
  const estimatedAutomatedSavings = Math.round(estimatedMonthlyCost * 0.75);

  return (
    <section className="relative py-20 sm:py-28 bg-[#02050c] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Explanatory Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              Operational Economics
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              TURN MANUAL WORK INTO <span className="text-gradient-cyan">AUTOMATED WORKFLOWS</span>.
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              We do not claim arbitrary &quot;300% growth overnight.&quot; Instead, our engineering focuses on concrete mathematical leverage: replacing repetitive human hours with autonomous software pipelines that operate 24/7 with zero lag.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Sub-3-Second Inbound Lead Response</h4>
                  <p className="text-xs text-gray-400">Captures prospects while their intent is hot, preventing lead drift to competitors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Copy-Paste Data Drift</h4>
                  <p className="text-xs text-gray-400">Automated webhooks keep PostgreSQL, HubSpot, and WhatsApp completely in sync.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Reclaimed High-Value Team Time</h4>
                  <p className="text-xs text-gray-400">Your staff shifts from manual dispatching to closing qualified clients and servicing customers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Workload Calculator */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#090e1b] to-[#04060d] border border-cyan-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  Workflow Workload Calculator
                </h3>
                <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  Interactive Estimator
                </span>
              </div>

              <div className="space-y-5">
                {/* Hours Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-gray-300">Repetitive Tasks per Employee (Hours / Week):</span>
                    <span className="text-cyan-400 font-bold">{weeklyManualHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weeklyManualHours}
                    onChange={(e) => setWeeklyManualHours(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                {/* Team Members Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-gray-300">Affected Team Members:</span>
                    <span className="text-cyan-400 font-bold">{teamMembers} people</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={teamMembers}
                    onChange={(e) => setTeamMembers(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                {/* Result Cards */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">Monthly Manual Hours</span>
                    <div className="text-xl font-black text-white mt-1">
                      {Math.round(totalMonthlyHoursWasted * teamMembers)} <span className="text-xs font-normal text-gray-400">hrs</span>
                    </div>
                    <span className="text-[10px] text-red-400 mt-1 block">Lost in repetitive tasks</span>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase block">Estimated Labor Value</span>
                    <div className="text-xl font-black text-cyan-300 mt-1">
                      ~${estimatedAutomatedSavings.toLocaleString()} <span className="text-xs font-normal text-gray-400">/ mo</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 mt-1 block">Reclaimed for core growth</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)]"
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
