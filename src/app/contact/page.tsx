import React from 'react';
import { Metadata } from 'next';
import ContactLeadForm from '@/components/ContactLeadForm';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free AI & Software Architecture Consultation',
  description: 'Connect with BHSOFT IT SOLUTION engineers. Submit your project requirements or chat directly over WhatsApp.'
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <main className="min-h-screen pt-28 pb-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            Direct Engineering Channel
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase">
            LET&apos;S BUILD <span className="text-gradient-blue">SOMETHING USEFUL</span>.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Have an idea, workflow or business problem? Tell us what needs to be built or automated. We will review your requirements and provide an initial architectural blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900">Direct Communication</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We respect your time. When you reach out to BHSOFT, you speak directly with technical leads, not commission-driven salespeople.
              </p>

              <div className="space-y-3.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors shadow-2xs"
                >
                  <MessageSquare className="w-5 h-5 shrink-0 fill-emerald-600 text-emerald-600" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block font-bold text-emerald-700">Fast Response Channel</span>
                    <span className="text-sm font-bold text-slate-900">WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Official Support Email</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-slate-900 hover:text-blue-600 transition-colors font-bold">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Direct Phone</span>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-sm text-slate-900 hover:text-blue-600 transition-colors font-bold">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Location</span>
                    <span className="text-sm text-slate-900 font-bold">{SITE_CONFIG.location}</span>
                    <span className="text-xs text-slate-500 block font-normal">{SITE_CONFIG.locationNote}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-xs text-blue-900 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="font-medium">Full confidentiality & NDAs signed prior to deep code or architecture audits.</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <ContactLeadForm />
          </div>
        </div>
      </div>
    </main>
  );
}
