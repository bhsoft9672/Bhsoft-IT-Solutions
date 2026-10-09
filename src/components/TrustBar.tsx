'use client';

import React from 'react';
import { 
  Bot, 
  Workflow, 
  Globe, 
  Smartphone, 
  Cloud, 
  Users, 
  Network, 
  Database,
  Cpu
} from 'lucide-react';

const BADGES = [
  { name: 'AI CALLING AGENTS', icon: Bot },
  { name: 'BUSINESS AUTOMATION', icon: Workflow },
  { name: 'WEB DEVELOPMENT', icon: Globe },
  { name: 'MOBILE APPS', icon: Smartphone },
  { name: 'CLOUD & DEVOPS', icon: Cloud },
  { name: 'CRM SYSTEMS', icon: Users },
  { name: 'API INTEGRATION', icon: Network },
  { name: 'DATABASE ARCHITECTURE', icon: Database },
  { name: 'SPEECH & TELEPHONY APIS', icon: Cpu },
];

export default function TrustBar() {
  return (
    <div className="relative py-7 bg-white/70 backdrop-blur-md border-y border-slate-200/80 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 mb-3.5 text-center">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500 font-bold">
          TECHNOLOGY THAT TURNS BUSINESS PROBLEMS INTO DIGITAL SOLUTIONS
        </span>
      </div>

      {/* Marquee loop */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-6 shrink-0">
          {[...BADGES, ...BADGES].map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors whitespace-nowrap shadow-xs"
              >
                <Icon className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-mono font-bold tracking-wider">{badge.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
