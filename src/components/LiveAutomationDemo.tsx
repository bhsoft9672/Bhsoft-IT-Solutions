'use client';

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
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
    <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl overflow-hidden">
      {/* Light background subtle accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
              Live Interactive Simulation
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Incoming Lead Automation Pipeline
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 font-normal">
            Click &quot;Run Automation Demo&quot; to see real-time message handling, AI parsing, CRM sync, and dispatch.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider disabled:opacity-40 transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{isRunning ? "Simulating Pipeline..." : "Run Automation Demo"}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
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
                className={`relative p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-blue-50/80 border-blue-500 shadow-sm"
                    : isCompleted
                    ? "bg-emerald-50/50 border-emerald-200 hover:border-emerald-300"
                    : "bg-slate-50/50 border-slate-200/80 opacity-70 hover:opacity-100"
                }`}
              >
                {/* Step indicator */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                    isCompleted
                      ? "bg-emerald-600 text-white"
                      : isCurrent
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.id}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-blue-700' : 'text-slate-800'}`}>
                      {step.label}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-semibold">
                      {step.system}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    {step.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Live Telemetry / Chat Display in Light SaaS Style */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="h-full rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-mono text-slate-800 font-bold">BHSOFT AGENT TELEMETRY</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 border border-blue-200 font-bold">
                  Step {activeStep + 1} of 6
                </span>
              </div>

              {/* Chat & State Log preview */}
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs">
                  <div className="text-[10px] text-slate-500 mb-1 flex items-center gap-1 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Incoming Payload:
                  </div>
                  &quot;Hi BHSOFT, I want to book an appointment to automate our WhatsApp customer support.&quot;
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900">
                  <div className="text-[10px] text-blue-700 mb-1 flex items-center gap-1 font-bold">
                    <Sparkles className="w-3 h-3 text-blue-600" /> Agent Execution State:
                  </div>
                  {activeStep === 0 && "› Listening on Webhook channel. Payload authenticated."}
                  {activeStep === 1 && "› Intent confidence: 0.98. Routing to automated scheduling flow."}
                  {activeStep === 2 && "› Reading calendar availability: Slot matched (Tomorrow, 15:00 IST)."}
                  {activeStep === 3 && "› Generating unique Google Meet link and appointment token."}
                  {activeStep === 4 && "› Updating CRM customer record & tagging lead as high-intent."}
                  {activeStep === 5 && "› Dispatched confirmation message + WhatsApp webhook completed in 1.4s."}
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <div className="text-[10px] text-emerald-700 mb-1 font-bold">Impact Metric:</div>
                  Zero manual labor required. Total processing time: ~1.4 seconds vs 4+ hours manual delay.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
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
