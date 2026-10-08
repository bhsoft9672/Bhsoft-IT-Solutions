'use client';

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Bot, 
  Sparkles 
} from 'lucide-react';

interface AutomationStep {
  id: number;
  label: string;
  subtext: string;
  system: string;
  icon: string;
}

const STEPS: AutomationStep[] = [
  {
    id: 1,
    label: "Lead Inquiry Received",
    subtext: 'Prospect messages: "Hi BHSOFT, I want to book an appointment to automate our WhatsApp customer support."',
    system: "WhatsApp Cloud API / Webhook",
    icon: "MessageSquare"
  },
  {
    id: 2,
    label: "AI Intent Recognition",
    subtext: "Natural language parsing: Intent = 'Appointment Booking', Entity = 'WhatsApp Support Automation', Urgency = High.",
    system: "OpenAI GPT-4o Agent Engine",
    icon: "Bot"
  },
  {
    id: 3,
    label: "Calendar Live Availability",
    subtext: "Querying engineer availability for the week. Available slot identified: Tomorrow at 3:00 PM IST.",
    system: "Google Calendar & Calendly Sync",
    icon: "Calendar"
  },
  {
    id: 4,
    label: "Autonomous Booking & Hold",
    subtext: "Slot reserved. Video meeting link generated automatically.",
    system: "Booking Engine Microservice",
    icon: "Clock"
  },
  {
    id: 5,
    label: "CRM Pipeline Auto-Update",
    subtext: "Lead profile created, deal stage tagged 'Consultation Booked', intent summary attached to sales rep.",
    system: "Central CRM & PostgreSQL",
    icon: "Database"
  },
  {
    id: 6,
    label: "Multi-Channel Confirmation",
    subtext: "Instant WhatsApp confirmation with calendar invite and preparation checklist dispatched in 1.4s.",
    system: "Automated Dispatch System",
    icon: "CheckCircle2"
  }
];

export default function LiveAutomationDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && autoPlay) {
      timer = setTimeout(() => {
        if (activeStep < STEPS.length - 1) {
          setActiveStep(prev => prev + 1);
        } else {
          setIsRunning(false);
        }
      }, 1400);
    }
    return () => clearTimeout(timer);
  }, [isRunning, activeStep, autoPlay]);

  const handleStart = () => {
    setActiveStep(0);
    setIsRunning(true);
    setAutoPlay(true);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsRunning(false);
  };

  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#090e1a] to-[#04060d] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Live Interactive Simulation
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Incoming Lead Automation Pipeline
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Click &quot;Run Automation Demo&quot; to see real-time message handling, AI parsing, CRM sync, and dispatch.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-400 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-cyan-300 disabled:opacity-40 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            <Play className="w-3.5 h-3.5 fill-black" />
            <span>{isRunning ? "Simulating Pipeline..." : "Run Automation Demo"}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Reset Simulation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Pipeline Visualizer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left: Interactive Step Flow */}
        <div className="lg:col-span-7 space-y-3">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isCurrent = idx === activeStep && isRunning;
            const isSelected = idx === activeStep;

            return (
              <div
                key={step.id}
                onClick={() => {
                  setActiveStep(idx);
                  setAutoPlay(false);
                }}
                className={`relative p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-cyan-950/30 border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                    : isCompleted
                    ? "bg-white/[0.02] border-emerald-500/30 hover:border-emerald-500/50"
                    : "bg-white/[0.01] border-white/5 opacity-60 hover:opacity-100"
                }`}
              >
                {/* Step indicator */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                    isCompleted
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                      : isCurrent
                      ? "bg-cyan-500 text-black shadow-[0_0_10px_#00F0FF]"
                      : "bg-white/5 text-gray-400 border border-white/10"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.id}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-cyan-300' : 'text-gray-200'}`}>
                      {step.label}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {step.system}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {step.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Live Telemetry / Chat Display */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="h-full rounded-xl bg-[#03060f] border border-white/10 p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-gray-200 font-semibold">BHSOFT AGENT TELEMETRY</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Step {activeStep + 1} of 6
                </span>
              </div>

              {/* Chat & State Log preview */}
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-gray-300">
                  <div className="text-[10px] text-gray-400 mb-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Incoming Payload:
                  </div>
                  &quot;Hi BHSOFT, I want to book an appointment to automate our WhatsApp customer support.&quot;
                </div>

                <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-cyan-200">
                  <div className="text-[10px] text-cyan-400 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Agent Execution State:
                  </div>
                  {activeStep === 0 && "› Listening on Webhook channel. Payload authenticated."}
                  {activeStep === 1 && "› Intent confidence: 0.98. Routing to automated scheduling flow."}
                  {activeStep === 2 && "› Reading calendar availability: Slot matched (Tomorrow, 15:00 IST)."}
                  {activeStep === 3 && "› Generating unique Google Meet link and appointment token."}
                  {activeStep === 4 && "› Updating CRM customer record & tagging lead as high-intent."}
                  {activeStep === 5 && "› Dispatched confirmation message + WhatsApp webhook completed in 1.4s."}
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-emerald-300">
                  <div className="text-[10px] text-emerald-400 mb-1">Impact Metric:</div>
                  Zero manual labor required. Total processing time: ~1.4 seconds vs 4+ hours manual delay.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 hover:bg-cyan-400 hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Deploy This Workflow For Your Business →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
