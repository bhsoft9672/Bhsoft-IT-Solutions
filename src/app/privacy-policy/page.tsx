import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ChevronRight, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy | BHSOFT IT SOLUTION - Data Protection & Security',
  description:
    'Learn how BHSOFT IT SOLUTION collects, protects, uses, and processes enterprise and client data in compliance with IT Act & DPDP regulations.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | BHSOFT IT SOLUTION',
    description: 'Data protection, enterprise security, and privacy commitments by BHSOFT IT SOLUTION.',
    url: `${SITE_CONFIG.siteUrl}/privacy-policy`,
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Privacy Policy', item: '/privacy-policy' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      <JsonLd type="breadcrumbs" breadcrumbs={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" /> Legal Trust & Data Integrity
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Effective Date: January 1, 2026 • Last Updated: October 2026. This Privacy Policy outlines how{' '}
            <strong>{SITE_CONFIG.companyName}</strong> (&quot;BHSOFT&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles your data across our website (
            <a href={SITE_CONFIG.siteUrl} className="text-blue-600 underline font-semibold">
              {SITE_CONFIG.domain}
            </a>
            ) and our enterprise software consulting services.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-blue-600 shrink-0" />
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry, request a demonstration, or engage BHSOFT IT SOLUTION for custom software engineering, AI agent development, or automation workflows, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li><strong>Contact Information:</strong> Full name, corporate email address, WhatsApp/phone number, company name, and job title.</li>
              <li><strong>Project Requirements:</strong> Architecture specifications, desired feature scopes, technology stack preferences, and integration goals.</li>
              <li><strong>Technical Logs:</strong> IP address, browser type, operating system, device details, and site usage metrics collected anonymously via standard server diagnostics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-blue-600 shrink-0" />
              2. How We Use Collected Data
            </h2>
            <p>BHSOFT strictly utilizes gathered data to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Deliver custom engineering proposals & software architecture audits',
                'Build, deploy, and maintain contracted custom software solutions',
                'Authenticate client communications via WhatsApp and verified email',
                'Ensure server uptime, enterprise security, and fraud prevention',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-blue-600 shrink-0" />
              3. Non-Disclosure & Confidentiality
            </h2>
            <p>
              We treat client intellectual property, databases, API keys, AI model prompts, and proprietary business logic with institutional confidentiality. BHSOFT IT SOLUTION signs standard bilateral Non-Disclosure Agreements (NDAs) prior to auditing proprietary codebases or connecting production credentials.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Third-Party Integrations & Analytics</h2>
            <p>
              Our web systems may leverage vetted infrastructure providers (including Cloudflare, Vercel, Supabase, Google Cloud, AWS, Twilio, and Meta WhatsApp Cloud API) to deliver production services. Each third-party operates in compliance with international privacy protocols (SOC2, GDPR, ISO 27001). We never sell or broker customer data to brokers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Data Retention & Your Rights</h2>
            <p>
              In accordance with India&apos;s Digital Personal Data Protection (DPDP) Act and international privacy frameworks, you have the right to inspect, update, or request permanent deletion of your inquiry details and submitted project data at any time.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Privacy Officer & Contact Information</h2>
            <p>
              For privacy queries, data access requests, or security vulnerability disclosures, please reach our Data Protection team directly:
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2 text-sm text-slate-800">
              <div className="font-bold text-slate-900">{SITE_CONFIG.companyName} - Legal & Privacy Team</div>
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
