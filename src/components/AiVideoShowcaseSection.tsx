'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Maximize2,
  Tv
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

interface VideoDemoTab {
  id: string;
  tabTitle: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  metrics: { label: string; value: string }[];
  client: string;
  projectSlug: string;
}

const DEMO_TABS: VideoDemoTab[] = [
  {
    id: 'voice-agent',
    tabTitle: '🎙️ AI Voice Calling Agent',
    badge: 'Autonomous Telephony Engine',
    title: 'Shubh Life Clinic Multi-Lingual Voice Agent',
    subtitle: 'Human-like voice agent answering patient calls in <600ms, checking doctor schedules, and dispatching WhatsApp confirmations.',
    image: '/images/projects/shubh-voice-ai.jpg',
    category: 'Healthcare & Voice AI',
    client: 'Shubh Life Clinic',
    projectSlug: 'shubh-life-voice',
    metrics: [
      { label: 'First Ring Answer', value: '100%' },
      { label: 'Voice Latency', value: '<580ms' },
      { label: 'Resolution Rate', value: '94%' }
    ]
  },
  {
    id: 'cold-caller',
    tabTitle: '📞 AI Cold Caller & Sales',
    badge: 'Enterprise Outbound Dialer',
    title: 'Autonomous Outbound Sales & Lead Qualification Machine',
    subtitle: 'High-velocity predictive dialer holding natural context-aware conversations, addressing objections, and booking AE calendar demos.',
    image: '/images/projects/ai-cold-caller.jpg',
    category: 'B2B Sales Automation',
    client: 'Enterprise Sales Teams',
    projectSlug: 'ai-cold-caller',
    metrics: [
      { label: 'Contact Volume', value: '+800%' },
      { label: 'Cost Per Lead', value: '-65%' },
      { label: 'Objection Handling', value: 'Dynamic' }
    ]
  },
  {
    id: 'workflow-engine',
    tabTitle: '⚡ n8n Automation Engine',
    badge: 'Event-Driven Pipeline',
    title: 'NotifyFlow Omnichannel Business Process Orchestrator',
    subtitle: 'Self-hosted Docker n8n worker processing 50,000+ daily webhooks across Stripe, WhatsApp, CRM, and auto-invoicing in <1.8s.',
    image: '/images/projects/notifyflow-automation.jpg',
    category: 'Enterprise Operations',
    client: 'E-Commerce & SaaS Clients',
    projectSlug: 'notifyflow',
    metrics: [
      { label: 'Invoice Dispatch', value: '<1.8s' },
      { label: 'Staff Hours Saved', value: '35+ hrs/wk' },
      { label: 'Sync Accuracy', value: '99.9%' }
    ]
  },
  {
    id: 'maira-rugs',
    tabTitle: '✨ Luxury 3D E-Commerce',
    badge: 'Bespoke Retail Platform',
    title: 'Maira Rugs Global Storefront & Tactile Visualizer',
    subtitle: 'Ultra-luxury dark aesthetic e-commerce with custom rug dimension calculators, weave tactile zoom, and VIP WhatsApp concierge.',
    image: '/images/projects/maira-rugs.jpg',
    category: 'Luxury E-Commerce',
    client: 'Maira Rugs (mairarug.com)',
    projectSlug: 'mairarug-com',
    metrics: [
      { label: 'Edge Render Speed', value: '<450ms' },
      { label: 'Currencies Supported', value: '14+' },
      { label: 'Bespoke Inquiries', value: '+320%' }
    ]
  },
  {
    id: 'pathology-wa',
    tabTitle: '🏥 Clinical Diagnostic & WhatsApp',
    badge: 'Healthcare Portal',
    title: 'Ideal Path Labs Automated Report & Booking Hub',
    subtitle: 'Full-stack Next.js pathology catalog with instant home sample collection routing and automated PDF diagnostic report delivery.',
    image: '/images/projects/ideal-pathlabs.jpg',
    category: 'Diagnostics & Telehealth',
    client: 'Ideal Path Labs (idealpathlabs.com)',
    projectSlug: 'ideal-path-labs',
    metrics: [
      { label: 'WhatsApp Delivery', value: 'Instant' },
      { label: 'Booking Time', value: '<60s' },
      { label: 'Sample Tracking', value: 'Automated' }
    ]
  }
];

export default function AiVideoShowcaseSection() {
  const [activeTabId, setActiveTabId] = useState<string>('voice-agent');
  const [viewMode, setViewMode] = useState<'simulation' | 'screenshot'>('simulation');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [timelineSec, setTimelineSec] = useState<number>(18);
  const [simStep, setSimStep] = useState<number>(0);

  const activeDemo = DEMO_TABS.find((t) => t.id === activeTabId) || DEMO_TABS[0];

  // Auto-play timeline simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTimelineSec((prev) => (prev >= 60 ? 0 : prev + 1));
      setSimStep((prev) => (prev + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="video-showcase" className="relative py-24 sm:py-32 bg-slate-900 text-white overflow-hidden border-y border-slate-800">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <Tv className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Live Video Demos & System Screen Previews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            AI AGENTS &amp; AUTOMATION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
              IN LIVE ACTION
            </span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Watch real-time simulations of our autonomous telephony bots, workflow dispatch pipelines, and high-conversion client platforms built for production.
          </p>
        </div>

        {/* Top Category Tabs Switcher */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {DEMO_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTabId(tab.id);
                  setTimelineSec(0);
                  setIsPlaying(true);
                }}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/50 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:text-white'
                }`}
              >
                <span>{tab.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Video Player Display Container */}
        <div className="rounded-3xl bg-slate-950 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Top Video Bezel / Title Bar */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 border-l border-white/10 pl-3">
                {activeDemo.title}
              </span>
            </div>

            {/* View Mode Switcher: Live Simulation vs HD Screenshot */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-white/15">
                <button
                  type="button"
                  onClick={() => setViewMode('simulation')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'simulation'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
                  <span>Live Video Simulation</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('screenshot')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'screenshot'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>HD Interface Image</span>
                </button>
              </div>

              {/* Status Pill */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>60 FPS • 1080P HD</span>
              </div>
            </div>
          </div>

          {/* Player Screen Area */}
          <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* View Mode: Static Screenshot */}
            {viewMode === 'screenshot' && (
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeDemo.image}
                  alt={activeDemo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                      Production Snapshot • Verified Platform
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1">{activeDemo.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setViewMode('simulation')}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-lg"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Simulation Video</span>
                  </button>
                </div>
              </div>
            )}

            {/* View Mode: Live Animated Simulation */}
            {viewMode === 'simulation' && (
              <div className="w-full h-full flex flex-col justify-between space-y-6">
                {/* Live Stream Telemetry Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/30 font-bold">
                      {activeDemo.category}
                    </span>
                    <span className="text-slate-400">Client: <strong className="text-white">{activeDemo.client}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span>Telephony Protocol: SIP Trunking</span>
                    <span>• Latency: &lt;580ms</span>
                  </div>
                </div>

                {/* Main Video Simulation Stage Based on Active Tab */}
                <div className="max-w-4xl mx-auto w-full my-auto py-6">
                  {/* TAB 1: Shubh Life Clinic Voice AI */}
                  {activeDemo.id === 'voice-agent' && (
                    <div className="space-y-6 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold animate-pulse">
                        <PhoneCall className="w-4 h-4" />
                        <span>LIVE CALL IN PROGRESS: Sarah J. (Caller) ↔ Shubh Life AI Assistant</span>
                      </div>

                      {/* Giant dancing waveform */}
                      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 py-6">
                        {[20, 45, 80, 35, 95, 60, 85, 30, 100, 75, 40, 90, 50, 85, 65, 30, 90, 45, 75, 35, 80, 40].map((h, i) => (
                          <span
                            key={i}
                            className="w-1.5 sm:w-2 bg-gradient-to-t from-blue-600 via-cyan-400 to-indigo-300 rounded-full transition-all duration-300"
                            style={{
                              height: isPlaying ? `${Math.max(8, h * (0.35 + (simStep % 3) * 0.25))}px` : '10px',
                              opacity: isPlaying ? 1 : 0.4
                            }}
                          />
                        ))}
                      </div>

                      {/* Interactive Dialogue Transcript Window */}
                      <div className="max-w-2xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-5 text-left text-xs sm:text-sm font-mono space-y-3 backdrop-blur-md shadow-2xl">
                        <div className="flex items-start gap-2 text-slate-300">
                          <span className="text-cyan-400 font-bold shrink-0">Caller (Patient):</span>
                          <span>&quot;Hello, I have a persistent cough and fever. Can I schedule an appointment with Dr. Aris Cole tomorrow?&quot;</span>
                        </div>
                        <div className="flex items-start gap-2 text-emerald-300 border-t border-white/5 pt-2">
                          <span className="text-emerald-400 font-bold shrink-0">BHSOFT Voice AI:</span>
                          <span>&quot;Understood Sarah. Checking Dr. Cole&apos;s real-time calendar... Tomorrow at 10:30 AM is open. Would you like me to lock this slot?&quot;</span>
                        </div>
                        <div className="flex items-start gap-2 text-indigo-300 border-t border-white/5 pt-2">
                          <span className="text-indigo-400 font-bold shrink-0">Automated Pipeline:</span>
                          <span className="text-slate-300">Slot locked in Google Calendar • Instant WhatsApp confirmation PDF &amp; clinic address link dispatched to patient phone.</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: AI Cold Caller */}
                  {activeDemo.id === 'cold-caller' && (
                    <div className="space-y-6 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-mono font-bold">
                        <span>PREDICTIVE DIALER ACTIVE • 800% THROUGHPUT</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block">1. Contact &amp; Connect</span>
                          <div className="text-lg font-bold text-white mt-1">340 Prospects Today</div>
                          <p className="text-xs text-slate-400 mt-1">First ring connect with zero human dialing delay</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-500/40">
                          <span className="text-[10px] font-mono text-cyan-300 uppercase block">2. Objection Handling</span>
                          <div className="text-lg font-bold text-cyan-300 mt-1">Real-Time NLP</div>
                          <p className="text-xs text-slate-300 mt-1">Dynamically counters &quot;send an email&quot; or &quot;no budget&quot; with ROI data</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40">
                          <span className="text-[10px] font-mono text-emerald-300 uppercase block">3. CRM Sync</span>
                          <div className="text-lg font-bold text-emerald-300 mt-1">25 Booked Demos</div>
                          <p className="text-xs text-slate-300 mt-1">Direct calendar booking + Salesforce deal update</p>
                        </div>
                      </div>

                      {/* Sound Wave */}
                      <div className="flex items-center justify-center gap-2 py-2">
                        {[30, 60, 90, 40, 80, 50, 70, 30, 85, 45, 95, 60, 40].map((h, i) => (
                          <span
                            key={i}
                            className="w-1.5 bg-cyan-400 rounded-full animate-pulse"
                            style={{ height: `${h * 0.4}px`, animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: NotifyFlow n8n Engine */}
                  {activeDemo.id === 'workflow-engine' && (
                    <div className="space-y-6 text-center">
                      <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono">
                        <span className="px-3 py-1.5 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-200">
                          🛒 Inbound Stripe Webhook
                        </span>
                        <span className="text-emerald-400 font-bold animate-pulse text-lg">➔</span>
                        <span className="px-3 py-1.5 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">
                          🧠 n8n AI Reasoning Node
                        </span>
                        <span className="text-emerald-400 font-bold animate-pulse text-lg">➔</span>
                        <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-200">
                          💬 WhatsApp PDF Delivery
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">Daily Events</span>
                          <span className="text-xl font-bold text-white">52,480+</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">Dispatch Latency</span>
                          <span className="text-xl font-bold text-cyan-300">1.4s</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">Uptime</span>
                          <span className="text-xl font-bold text-emerald-300">99.98%</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">Manual Hours Saved</span>
                          <span className="text-xl font-bold text-indigo-300">35+ /wk</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: Maira Rugs */}
                  {activeDemo.id === 'maira-rugs' && (
                    <div className="space-y-6 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-mono font-bold">
                        <span>BESPOKE RUG WEAVE VISUALIZER &amp; GLOBAL CURRENCY</span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-left">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">Texture Detail</span>
                          <span className="text-lg font-bold text-white mt-1">600 KPSI Silk</span>
                          <p className="text-xs text-slate-400 mt-1">Zero-latency AVIF tactile rendering</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">Dimension Calculator</span>
                          <span className="text-lg font-bold text-cyan-300 mt-1">Custom Feet &amp; Meters</span>
                          <p className="text-xs text-slate-400 mt-1">Live yardage cost computation</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">VIP Gateway</span>
                          <span className="text-lg font-bold text-emerald-300 mt-1">WhatsApp Concierge</span>
                          <p className="text-xs text-slate-400 mt-1">Direct private consultation routing</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: Ideal Path Labs */}
                  {activeDemo.id === 'pathology-wa' && (
                    <div className="space-y-6 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs font-mono font-bold">
                        <span>CLINICAL DIAGNOSTIC FLOW &amp; WHATSAPP REPORT DISPATCH</span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-left">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">1. Patient Booking</span>
                          <span className="text-lg font-bold text-white mt-1">&lt;60 Seconds</span>
                          <p className="text-xs text-slate-400 mt-1">Search test packages &amp; pick time slot</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">2. Sample Collection</span>
                          <span className="text-lg font-bold text-cyan-300 mt-1">Home Phlebotomist</span>
                          <p className="text-xs text-slate-400 mt-1">Automated dispatch notification</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="text-xs font-mono text-slate-400 block">3. Report Delivery</span>
                          <span className="text-lg font-bold text-emerald-300 mt-1">Verified PDF</span>
                          <p className="text-xs text-slate-400 mt-1">Sent straight to patient&apos;s WhatsApp</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* KPI Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  {activeDemo.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-lg sm:text-2xl font-black text-white">{m.value}</span>
                      <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Video Player Scrub Bar & Controls */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-md"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  type="button"
                  onClick={() => setTimelineSec(0)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
                  title="Rewind"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Scrubber Progress Bar */}
              <div className="flex-1 mx-2 sm:mx-4">
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(timelineSec / 60) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">
                  00:{timelineSec < 10 ? `0${timelineSec}` : timelineSec} / 01:00
                </span>
                <Link
                  href={`/projects/${activeDemo.projectSlug}`}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors"
                >
                  <span>Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA to Test Live System */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all text-center"
          >
            Deploy This System For Your Business →
          </Link>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi BHSOFT, I saw your live AI demo on the website and want to test it for my business.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Test Live Voice Bot: {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
