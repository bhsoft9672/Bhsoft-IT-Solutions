'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
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
  const [selectedNode, setSelectedNode] = useState<WorkflowNode>(WORKFLOW_NODES[2]);

  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#090d19]/95 to-[#04060d]/95 border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
      {/* Background glow and subtle circuit styling */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive 3D Workflow Architecture
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          THE END-TO-END AUTONOMOUS PIPELINE
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          Click any stage of the pipeline to inspect how our AI systems turn incoming business problems into automated revenue.
        </p>
      </div>

      {/* Interactive Horizontal / Flow Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10 mb-8">
        {WORKFLOW_NODES.map((node, index) => {
          const Icon = node.icon;
          const isSelected = selectedNode.id === node.id;

          return (
            <div key={node.id} className="relative flex flex-col items-center">
              <button
                onClick={() => setSelectedNode(node)}
                className={`w-full group p-3.5 rounded-xl border text-left flex flex-col justify-between h-36 transition-all duration-300 ${
                  isSelected
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] -translate-y-1'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-gray-400'}`}>
                    0{index + 1}
                  </span>
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-400 text-black' : 'bg-white/5 text-gray-300 group-hover:text-cyan-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className={`text-[10px] font-mono tracking-wider uppercase line-clamp-1 ${isSelected ? 'text-cyan-300' : 'text-gray-400'}`}>
                    {node.category}
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5 group-hover:text-cyan-300 transition-colors">
                    {node.title}
                  </div>
                </div>
              </button>

              {/* Connecting arrow indicator for desktop */}
              {index < WORKFLOW_NODES.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-cyan-500/40 pointer-events-none">
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Node Detailed Glass Inspection Card */}
      <div className="relative p-6 sm:p-7 rounded-xl bg-[#03060f]/90 border border-cyan-500/30 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-400 text-black flex items-center justify-center font-bold shadow-[0_0_15px_#00F0FF]">
              {React.createElement(selectedNode.icon, { className: 'w-5 h-5' })}
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                {selectedNode.category}
              </span>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                {selectedNode.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Live System Telemetry Active
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div>
            <h5 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
              Operational Logic:
            </h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              {selectedNode.description}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
            <h5 className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
              Engine Performance & Telemetry:
            </h5>
            <p className="text-xs font-mono text-gray-300">
              {selectedNode.telemetry}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
