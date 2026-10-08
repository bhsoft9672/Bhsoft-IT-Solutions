import React from 'react';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
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
    <main className="min-h-screen">
      {/* 1. Full-Screen 3D Hero */}
      <HeroSection />

      {/* 2. Trust Bar Immediately Below Hero */}
      <TrustBar />

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
      <section className="relative py-20 sm:py-28 bg-[#02050c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              SEE AUTOMATION <span className="text-gradient-cyan">IN ACTION</span>.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2">
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
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                Direct Communication Channels
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                LET&apos;S BUILD <br />
                <span className="text-gradient-cyan">SOMETHING USEFUL</span>.
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Have an idea, workflow or business problem? Tell us what needs to be built or automated. We will review your requirements and provide an architectural roadmap.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider block font-bold">Fastest Response</span>
                    <span className="text-sm text-white font-medium">WhatsApp Us: {SITE_CONFIG.whatsappDisplay}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Official Support Email</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-white hover:text-cyan-400 transition-colors font-medium">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Direct Phone Line</span>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-sm text-white hover:text-cyan-400 transition-colors font-medium">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Headquarters & Service</span>
                    <span className="text-sm text-white">{SITE_CONFIG.location}</span>
                    <span className="text-xs text-gray-400 block">{SITE_CONFIG.locationNote}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center gap-3 text-xs text-gray-300">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Non-Disclosure & Enterprise Data Confidentiality Guaranteed.</span>
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
