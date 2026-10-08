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
  { name: 'AI AGENTS', icon: Bot },
  { name: 'BUSINESS AUTOMATION', icon: Workflow },
  { name: 'WEB DEVELOPMENT', icon: Globe },
  { name: 'MOBILE APPS', icon: Smartphone },
  { name: 'CLOUD & DEVOPS', icon: Cloud },
  { name: 'CRM SYSTEMS', icon: Users },
  { name: 'API INTEGRATION', icon: Network },
  { name: 'DATABASE ARCHITECTURE', icon: Database },
  { name: 'LLM & SPEECH APIS', icon: Cpu },
];

export default function TrustBar() {
  return (
    <div className="relative py-8 bg-[#02050c] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-xs font-mono tracking-widest uppercase text-gray-400 font-semibold">
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.02] border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors whitespace-nowrap"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold tracking-wider">{badge.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
