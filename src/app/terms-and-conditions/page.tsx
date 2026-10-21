import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, FileCode2, CheckCircle2, ChevronRight, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Terms and Conditions | BHSOFT IT SOLUTION - Engineering & SLA Terms',
  description:
    'Review the terms of service, service-level agreements, intellectual property rights, and client engagement conditions for BHSOFT IT SOLUTION.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | BHSOFT IT SOLUTION',
    description: 'Contract terms, intellectual property ownership, and service agreements by BHSOFT IT SOLUTION.',
    url: `${SITE_CONFIG.siteUrl}/terms-and-conditions`,
    type: 'website',
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Terms and Conditions', item: '/terms-and-conditions' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      <JsonLd type="breadcrumbs" breadcrumbs={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Terms and Conditions</span>
        </nav>

        {/* Header */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4" /> Client Agreement & Service Standards
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Effective Date: January 1, 2026. Welcome to <strong>{SITE_CONFIG.companyName}</strong>. By accessing our website (
            <a href={SITE_CONFIG.siteUrl} className="text-blue-600 underline font-semibold">
              {SITE_CONFIG.domain}
            </a>
            ) or contracting our engineering team for software development, AI systems, or digital services, you agree to comply with the terms below.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <FileCode2 className="w-5 h-5 text-blue-600 shrink-0" />
              1. Scope of Engineering & Software Services
            </h2>
            <p>
              BHSOFT IT SOLUTION delivers end-to-end technology services including full-stack web and mobile application engineering, autonomous AI calling agents, WhatsApp automation, enterprise CRM implementations, and performance SEO. All client engagements are governed by individual Statements of Work (SOW) defining milestones, timelines, and deliverables.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              2. Intellectual Property Rights & Ownership
            </h2>
            <p>
              Unless otherwise specified in a formal Master Services Agreement (MSA):
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li><strong>Client Deliverables:</strong> Upon final milestone payment clearance, 100% of custom code, databases, design assets, and deployment keys transfer to the client.</li>
              <li><strong>Pre-Existing Frameworks:</strong> Open-source components, proprietary utility libraries, and reusable scaffolds developed by BHSOFT remain licensed under standard permissive licenses (MIT/Apache 2.0 or commercial grant).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Service Levels & Warranty Support</h2>
            <p>
              All production code delivered by BHSOFT IT SOLUTION includes a standard 30-day bug-fix warranty period post-deployment. We ensure code conforms to agreed architectural benchmarks, security best practices, and responsive design standards across major browsers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Third-Party API & Cloud Infrastructure Costs</h2>
            <p>
              Clients are responsible for their third-party operational fees (such as OpenAI/Anthropic model inference tokens, Twilio telephony charges, Meta WhatsApp Cloud API fees, Vercel/AWS cloud hosting, and domain registrations). BHSOFT assists in provisioning and cost-optimizing these accounts under the client&apos;s direct billing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Limitation of Liability & Governing Law</h2>
            <p>
              BHSOFT IT SOLUTION shall not be held liable for indirect, incidental, or consequential damages resulting from third-party cloud outages, telecom carrier restrictions, or external API disruptions. These terms are governed by the laws of India, with exclusive jurisdiction in the courts of Jaipur, Rajasthan.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Legal Contact & Official Notice</h2>
            <p>
              For legal inquiries, contracts, and dispute notices, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2 text-sm text-slate-800">
              <div className="font-bold text-slate-900">{SITE_CONFIG.companyName} - Contracts & Governance</div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-600 font-semibold hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
