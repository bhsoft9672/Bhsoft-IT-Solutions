'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import AiVideoShowcaseSection from '@/components/AiVideoShowcaseSection';
import ServicesSection from '@/components/ServicesSection';
import BusinessProblemSection from '@/components/BusinessProblemSection';
import AutomationWorkflow3D from '@/components/AutomationWorkflow3D';
import IndustrySolutionsSection from '@/components/IndustrySolutionsSection';
import SelectedWorkSection from '@/components/SelectedWorkSection';
import LiveAutomationDemo from '@/components/LiveAutomationDemo';
import TechnologySection from '@/components/TechnologySection';
import ProcessSection from '@/components/ProcessSection';
import WhyBhsoftSection from '@/components/WhyBhsoftSection';
import RoiImpactSection from '@/components/RoiImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import ContactLeadForm from '@/components/ContactLeadForm';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* 1. Full-Screen 3D Hero */}
      <HeroSection />

      {/* 2. Trust Bar Immediately Below Hero */}
      <TrustBar />

      {/* 2.5 Featured Interactive Live AI & Video Showcase */}
      <AiVideoShowcaseSection />

      {/* 3. Services Section with Interactive 3D/Modal Experience */}
      <ServicesSection />

      {/* 4. Business Problem vs AI Transformation Section */}
      <BusinessProblemSection />

      {/* 5. Interactive 3D Workflow Architecture */}
      <section id="workflow" className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AutomationWorkflow3D />
        </div>
      </section>

      {/* 6. Live Automation Demo Simulation */}
      <section className="relative py-20 sm:py-28 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              SEE AUTOMATION <span className="text-gradient-blue">IN ACTION</span>.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Watch how an incoming prospect is captured, understood by our AI agent, booked into the calendar, and synced to the CRM within 1.5 seconds.
            </p>
          </div>
          <LiveAutomationDemo />
        </div>
      </section>

      {/* 7. Industry Solutions */}
      <IndustrySolutionsSection />

      {/* 8. Selected Work & Production Platforms */}
      <SelectedWorkSection />

      {/* 9. Technology Ecosystem */}
      <TechnologySection />

      {/* 10. Engineering Process Timeline */}
      <ProcessSection />

      {/* 11. Why Businesses Choose BHSOFT */}
      <WhyBhsoftSection />

      {/* 12. ROI & Workload Economics */}
      <RoiImpactSection />

      {/* 13. Verified Feedback & Policy Notice */}
      <TestimonialsSection />

      {/* 14. Architecture Scopes & Pricing */}
      <PricingSection />

      {/* 15. FAQ Section */}
      <FAQSection />

      {/* 16. Contact Section & Direct Consultation Form */}
      <section id="contact" className="relative py-24 sm:py-32 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-bold shadow-xs">
                Direct Communication Channels
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
                LET&apos;S BUILD <br />
                <span className="text-gradient-blue">SOMETHING USEFUL</span>.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Have an idea, workflow or business problem? Tell us what needs to be built or automated. We will review your requirements and provide an architectural roadmap.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-all group shadow-2xs"
                >
                  <MessageSquare className="w-5 h-5 shrink-0 fill-emerald-600 text-emerald-600" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider block font-bold text-emerald-700">Fastest Response</span>
                    <span className="text-sm text-slate-900 font-bold">WhatsApp Us: {SITE_CONFIG.whatsappDisplay}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">Official Support Email</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-slate-900 hover:text-blue-600 transition-colors font-bold">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">Direct Phone Line</span>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-sm text-slate-900 hover:text-blue-600 transition-colors font-bold">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">Headquarters & Service</span>
                    <span className="text-sm text-slate-900 font-bold">{SITE_CONFIG.location}</span>
                    <span className="text-xs text-slate-500 block font-normal">{SITE_CONFIG.locationNote}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-xs text-blue-900 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-medium">Non-Disclosure & Enterprise Data Confidentiality Guaranteed.</span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* 17. Final Grand Call to Action */}
      <FinalCtaSection />
    </main>
  );
}
