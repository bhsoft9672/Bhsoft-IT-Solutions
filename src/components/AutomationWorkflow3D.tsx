'use client';

import React, { useState } from 'react';
import { 
  User, 
  MessageSquare, 
  Bot, 
  Database, 
  Calendar, 
  Send, 
  DollarSign, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import Workflow3DScene from './Workflow3DScene';

interface WorkflowNode {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  telemetry: string;
}

const WORKFLOW_NODES: WorkflowNode[] = [
  {
    id: 'customer',
    title: 'Customer',
    category: 'INBOUND PROSPECT',
    icon: User,
    description: 'Prospect lands on website, sends a WhatsApp message, or calls your business phone number.',
    telemetry: 'Multi-channel touchpoint active: WhatsApp, Web, Voice Line.'
  },
  {
    id: 'channel',
    title: 'WhatsApp / Web / Phone',
    category: 'COMMUNICATION GATEWAY',
    icon: MessageSquare,
    description: 'Unified communication gateway ingests raw message payloads and initiates secure session tracking.',
    telemetry: 'Cloud API Webhook verified. Latency: < 120ms.'
  },
  {
    id: 'agent',
    title: 'AI Agent',
    category: 'INTELLIGENCE CORE',
    icon: Bot,
    description: 'Autonomous LLM agent trained on your business documents understands intent and formulates custom contextual responses.',
    telemetry: 'GPT-4o fine-tuned model responding with zero manual delay.'
  },
  {
    id: 'qualify',
    title: 'Lead Qualification',
    category: 'DECISION ENGINE',
    icon: Sparkles,
    description: 'Scores the prospect based on budget, project timeline, and service requirements against qualification rules.',
    telemetry: 'Auto-scores: Score > 80 marks high priority.'
  },
  {
    id: 'crm',
    title: 'CRM Integration',
    category: 'DATA REPOSITORY',
    icon: Database,
    description: 'Syncs lead profile, conversational history, and intent metadata directly into your central CRM repository.',
    telemetry: 'PostgreSQL / HubSpot updated with complete audit trail.'
  },
  {
    id: 'booking',
    title: 'Appointment Booking',
    category: 'CALENDAR AUTOMATION',
    icon: Calendar,
    description: 'Checks real-time team availability and books a confirmed meeting slot without back-and-forth emails.',
    telemetry: 'Calendar slot locked & video room created automatically.'
  },
  {
    id: 'followup',
    title: 'Follow-Up Sequence',
    category: 'DRIP ENGINE',
    icon: Send,
    description: 'Automated WhatsApp, SMS, and email reminders ensure 0% no-show rate and maintain prospect warmth.',
    telemetry: 'Multi-touch reminders scheduled: 24h before & 1h before.'
  },
  {
    id: 'sale',
    title: 'Closed Deal / Sale',
    category: 'BUSINESS IMPACT',
    icon: DollarSign,
    description: 'Client converts faster, operations team saves hours, and customer experiences instant response satisfaction.',
    telemetry: 'Revenue realized with 90% reduction in manual sales cycle lag.'
  }
];

export default function AutomationWorkflow3D() {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(2);
  const selectedNode = WORKFLOW_NODES[selectedNodeIndex];

  return (
    <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl overflow-hidden">
      {/* Light background subtle blurs */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive 3D Workflow Architecture
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase">
          THE END-TO-END AUTONOMOUS PIPELINE
        </h3>
        <p className="text-sm text-slate-600 mt-2">
          Drag to rotate the real-time 3D pipeline in 360°. Click any 3D node or stage below to inspect our automated logic and live telemetry.
        </p>
      </div>

      {/* Interactive 3D WebGL Canvas Scene */}
      <Workflow3DScene
        selectedNodeIndex={selectedNodeIndex}
        onSelectNode={(idx) => setSelectedNodeIndex(idx)}
      />

      {/* Interactive Horizontal Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10 mb-8">
        {WORKFLOW_NODES.map((node, index) => {
          const Icon = node.icon;
          const isSelected = selectedNodeIndex === index;

          return (
            <div key={node.id} className="relative flex flex-col items-center">
              <button
                onClick={() => setSelectedNodeIndex(index)}
                className={`w-full group p-3.5 rounded-2xl border text-left flex flex-col justify-between h-36 transition-all duration-300 ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-500 shadow-md -translate-y-1'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-blue-700' : 'text-slate-400'}`}>
                    0{index + 1}
                  </span>
                  <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 group-hover:text-blue-600 border border-slate-200'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className={`text-[10px] font-mono tracking-wider uppercase line-clamp-1 font-semibold ${isSelected ? 'text-blue-700' : 'text-slate-500'}`}>
                    {node.category}
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5 group-hover:text-blue-600 transition-colors">
                    {node.title}
                  </div>
                </div>
              </button>

              {/* Connecting arrow indicator for desktop */}
              {index < WORKFLOW_NODES.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-300 pointer-events-none">
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Node Detailed Inspection Card in Light Theme */}
      <div className="relative p-6 sm:p-7 rounded-2xl bg-slate-50/90 border border-blue-200 shadow-sm backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
              {React.createElement(selectedNode.icon, { className: 'w-5 h-5' })}
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-blue-700 uppercase font-bold">
                {selectedNode.category}
              </span>
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                {selectedNode.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            Live System Telemetry Active
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div>
            <h5 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">
              Operational Logic:
            </h5>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {selectedNode.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h5 className="text-[11px] font-mono text-blue-700 uppercase tracking-wider mb-1 font-bold">
              Engine Performance & Telemetry:
            </h5>
            <p className="text-xs font-mono text-slate-600">
              {selectedNode.telemetry}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
