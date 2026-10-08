import React from 'react';
import { Metadata } from 'next';
import ContactLeadForm from '@/components/ContactLeadForm';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free AI & Software Architecture Consultation',
  description: 'Connect with BHSOFT IT SOLUTION engineers. Submit your project requirements or chat directly over WhatsApp.'
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            Direct Engineering Channel
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            LET&apos;S BUILD <span className="text-gradient-cyan">SOMETHING USEFUL</span>.
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Have an idea, workflow or business problem? Tell us what needs to be built or automated. We will review your requirements and provide an initial architectural blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#090e1b] border border-white/10 space-y-4">
              <h2 className="text-lg font-bold text-white">Direct Communication</h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                We respect your time. When you reach out to BHSOFT, you speak directly with technical leads, not commission-driven salespeople.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block font-bold">Fast Response Channel</span>
                    <span className="text-sm font-medium text-white">WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Official Mail</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-white hover:text-cyan-400 transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Direct Phone</span>
                    <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`} className="text-sm text-white hover:text-cyan-400 transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm text-white">{SITE_CONFIG.location}</span>
                    <span className="text-xs text-gray-400 block">{SITE_CONFIG.locationNote}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center gap-3 text-xs text-gray-300">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Full confidentiality & NDAs signed prior to deep code or architecture audits.</span>
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
