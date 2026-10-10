'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Image as ImageIcon, Volume2, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '@/data/siteData';

interface ProjectMediaCardProps {
  project: ProjectItem;
  variant?: 'card' | 'featured' | 'detail';
}

export default function ProjectMediaCard({ project, variant = 'card' }: ProjectMediaCardProps) {
  // activeView can be 'image' or 'video'
  const [activeView, setActiveView] = useState<'image' | 'video'>('image');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(35);
  const [simStep, setSimStep] = useState<number>(0);

  // Auto-progress simulation when playing video view
  useEffect(() => {
    if (activeView !== 'video' || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 3));
      setSimStep((prev) => (prev + 1) % 4);
    }, 700);

    return () => clearInterval(interval);
  }, [activeView, isPlaying]);

  const heightClass =
    variant === 'detail'
      ? 'h-80 sm:h-[450px]'
      : variant === 'featured'
      ? 'h-64 sm:h-80'
      : 'h-52 sm:h-56';

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 group select-none">
      {/* Top Toggle Switch Bar */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 shadow-lg">
        <button
          type="button"
          onClick={() => setActiveView('image')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
            activeView === 'image'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <ImageIcon className="w-3 h-3" />
          <span>Image</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveView('video');
            setIsPlaying(true);
          }}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
            activeView === 'video'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
          <span>Interactive Demo</span>
        </button>
      </div>

      {/* 1. IMAGE VIEW */}
      {activeView === 'image' && (
        <div className={`relative ${heightClass} w-full overflow-hidden bg-slate-100`}>
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              <span className="text-xs font-mono text-slate-500 font-bold">{project.title} Interface</span>
            </div>
          )}

          {/* Ethereal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Bottom Left Meta Badge */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
              {project.statusBadge}
            </span>
            {project.stats && project.stats[0] && (
              <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-cyan-300 bg-blue-950/80 backdrop-blur-md px-2 py-1 rounded-md border border-blue-400/20">
                {project.stats[0].label}: {project.stats[0].value}
              </span>
            )}
          </div>

          {/* Floating Hover Play Pill */}
          <button
            type="button"
            onClick={() => {
              setActiveView('video');
              setIsPlaying(true);
            }}
            className="absolute inset-0 m-auto w-32 h-10 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 border border-white/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Play Demo</span>
          </button>
        </div>
      )}

      {/* 2. INTERACTIVE ANIMATED VIDEO SIMULATION VIEW */}
      {activeView === 'video' && (
        <div className={`relative ${heightClass} w-full flex flex-col justify-between bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 text-white p-4 overflow-hidden border-b border-slate-800`}>
          {/* Top Video Telemetry Header */}
          <div className="flex items-center justify-between text-[10px] font-mono pr-28">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 font-bold uppercase tracking-wider">LIVE AI STREAM</span>
              <span className="text-slate-400 hidden sm:inline">• 60 FPS</span>
            </div>
            <span className="text-cyan-300 font-bold bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
              LATENCY: 420ms
            </span>
          </div>

          {/* Interactive Simulation Content Based on Project Type */}
          <div className="my-auto py-2">
            {/* Shubh Life Clinic Voice AI */}
            {project.slug === 'shubh-life-voice' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-2 px-3">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-cyan-400 animate-bounce" />
                    <span className="text-xs font-mono font-semibold text-white">Multilingual Patient Receptionist</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">Connected • Twilio Voice</span>
                </div>

                {/* Animated Sound Waveform */}
                <div className="flex items-center justify-center gap-1 sm:gap-1.5 py-1">
                  {[25, 60, 95, 45, 80, 30, 90, 70, 40, 85, 35, 75, 50, 90, 65, 30, 85, 40].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 sm:w-1.5 bg-gradient-to-t from-blue-500 to-cyan-300 rounded-full transition-all duration-300"
                      style={{
                        height: isPlaying ? `${(h * (0.3 + (simStep % 3) * 0.2))}px` : '6px',
                        opacity: isPlaying ? 1 : 0.4
                      }}
                    />
                  ))}
                </div>

                {/* Live Dialog Transcription */}
                <div className="bg-slate-900/80 border border-white/10 rounded-xl p-2 text-xs font-mono text-cyan-200">
                  {simStep === 0 && '🎙️ Patient: "Need appointment for Dr. Aris Cole tomorrow morning."'}
                  {simStep === 1 && '🤖 AI: "Checking Dr. Cole schedule... 10:30 AM is available. Confirm?"'}
                  {simStep === 2 && '🎙️ Patient: "Yes, please confirm."'}
                  {simStep === 3 && '✅ AI: "Booked! Instant confirmation and Google Maps link sent to WhatsApp."'}
                </div>
              </div>
            )}

            {/* AI Cold Caller */}
            {project.slug === 'ai-cold-caller' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-2 px-3">
                  <span className="text-xs font-mono text-indigo-300 font-bold">Predictive Dialer → Inbound Objection Engine</span>
                  <span className="text-[10px] font-mono text-emerald-400">800% Contact Rate</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[9px]">Prospect Objection:</span>
                    <span className="text-cyan-300">&quot;Too busy this quarter.&quot;</span>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/30">
                    <span className="text-blue-300 block text-[9px]">AI Dynamic Rebuttal:</span>
                    <span className="text-emerald-300">&quot;Understood! 15min audit async?&quot;</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 bg-white/5 p-1.5 px-3 rounded-lg">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3 h-3" /> Qualified Lead Created
                  </span>
                  <span>Synced to Salesforce in 180ms</span>
                </div>
              </div>
            )}

            {/* NotifyFlow Automation Engine */}
            {project.slug === 'notifyflow' && (
              <div className="space-y-2">
                <div className="flex items-center justify-around text-xs font-mono py-1 bg-white/5 border border-white/10 rounded-xl">
                  <span className="px-2 py-1 rounded bg-blue-500/30 text-blue-200 border border-blue-400/30">Stripe Webhook</span>
                  <span className="text-emerald-400 font-bold animate-pulse">➔</span>
                  <span className="px-2 py-1 rounded bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">n8n Engine</span>
                  <span className="text-emerald-400 font-bold animate-pulse">➔</span>
                  <span className="px-2 py-1 rounded bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">WhatsApp PDF</span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-200 bg-slate-900/90 border border-white/10 p-2 rounded-xl">
                  <span>Processed: <strong className="text-white">52,480 events</strong></span>
                  <span className="text-emerald-400 font-bold">Zero Dropped Packets</span>
                </div>

                <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Self-Hosted Docker Node</span>
                  <span>Speed: 1.4s Dispatch</span>
                </div>
              </div>
            )}

            {/* Maira Rugs */}
            {project.slug === 'mairarug-com' && (
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-2 px-3 text-left">
                  <span className="text-xs font-mono text-white font-bold">Tactile Weave & 3D Rug Visualizer</span>
                  <span className="text-[10px] font-mono text-cyan-300">600 KPSI Weave Density</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-slate-400 uppercase block">Dimension</span>
                    <span className="font-bold text-white">9 &times; 12 Ft</span>
                  </div>
                  <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-500/30">
                    <span className="text-[9px] text-blue-300 uppercase block">Material</span>
                    <span className="font-bold text-cyan-300">Pure Silk</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-slate-400 uppercase block">Routing</span>
                    <span className="font-bold text-emerald-400">VIP Concierge</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-300">
                  Sub-second image render with Cloudflare edge caching
                </div>
              </div>
            )}

            {/* Ideal Path Labs */}
            {project.slug === 'ideal-path-labs' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-2 px-3">
                  <span className="text-xs font-mono text-teal-300 font-bold">Diagnostic Test Booking & Home Sample</span>
                  <span className="text-[10px] font-mono text-emerald-400">Instant WhatsApp</span>
                </div>

                <div className="bg-slate-900/90 border border-white/10 rounded-xl p-2.5 text-xs font-mono space-y-1">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>1. Patient Test Selected:</span>
                    <span className="text-white font-bold">Full Body Wellness</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-300">
                    <span>2. Phlebotomist Dispatched:</span>
                    <span className="font-bold">Auto-Routed</span>
                  </div>
                  <div className="flex items-center justify-between text-cyan-300">
                    <span>3. Verified PDF Report:</span>
                    <span className="font-bold">Delivered via WhatsApp</span>
                  </div>
                </div>
              </div>
            )}

            {/* FashionTXT */}
            {project.slug === 'fashiontxt' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-2 px-3">
                  <span className="text-xs font-mono text-indigo-300 font-bold">Digital Runway & Editorial Catalog</span>
                  <span className="text-[10px] font-mono text-cyan-300">&lt;380ms Edge Load</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-[9px] text-slate-400 uppercase block">Collection</span>
                    <span className="font-bold text-white">AW26 Form</span>
                  </div>
                  <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-500/30 text-center">
                    <span className="text-[9px] text-blue-300 uppercase block">Inquiry Channel</span>
                    <span className="font-bold text-cyan-300">Direct VIP Link</span>
                  </div>
                </div>
              </div>
            )}

            {/* Swadhub */}
            {project.slug === 'swadhub' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-2 px-3">
                  <span className="text-xs font-mono text-amber-300 font-bold">Direct Digital Ordering & Table Booking</span>
                  <span className="text-[10px] font-mono text-emerald-400">0% Commission Fee</span>
                </div>

                <div className="bg-slate-900/90 border border-white/10 rounded-xl p-2 text-xs font-mono space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Customer Bill Generated:</span>
                    <span className="text-white font-bold">₹1,450 (Direct Checkout)</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-400">
                    <span>WhatsApp Kitchen Ticket:</span>
                    <span className="font-bold">Dispatched Instantly</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Video Player Control Bar */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                title={isPlaying ? 'Pause Demo' : 'Play Demo'}
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
              </button>
              <button
                type="button"
                onClick={() => setProgress(0)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                title="Rewind"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Video Progress Bar */}
            <div className="flex-1 mx-2">
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <span className="text-[9px] font-mono text-slate-400">
              00:{progress < 10 ? `0${progress}` : progress} / 01:00
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
