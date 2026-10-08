'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function ContactLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: 'ai-agents',
    budget: '$1,000 - $3,000 / ₹80k - ₹2.5L',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setStatus('success');
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore confetti errors in restricted environments
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please reach out via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0e1628]/90 to-[#070b14]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {status === 'success' ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Consultation Request Received!</h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Thank you, <span className="text-white font-medium">{formData.name}</span>. An engineer from BHSOFT will review your project details and contact you within 24 hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi BHSOFT, I just submitted an inquiry for ${formData.business || 'my business'}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors"
            >
              Speed Up Via WhatsApp →
            </a>
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({
                  name: '',
                  business: '',
                  email: '',
                  phone: '',
                  service: 'ai-agents',
                  budget: '$1,000 - $3,000 / ₹80k - ₹2.5L',
                  message: ''
                });
              }}
              className="px-4 py-2 text-xs text-gray-400 hover:text-white transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Henderson"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                Business / Company Name
              </label>
              <input
                id="business"
                name="business"
                type="text"
                value={formData.business}
                onChange={handleChange}
                placeholder="e.g. Acme Health or Startup Inc"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                Work Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000 or +91 98..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1322] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="ai-agents">AI Agents (Chat, Voice, WhatsApp)</option>
                <option value="automation">Business Workflow Automation (n8n)</option>
                <option value="web-development">High-Performance Website Development</option>
                <option value="app-development">Mobile App (iOS & Android)</option>
                <option value="custom-software">Custom Software & Admin SaaS</option>
                <option value="api-integration">API & Tool Integration</option>
                <option value="crm">Custom CRM & Lead Systems</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                Estimated Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1322] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="starter">Starter / Focused Automation ($500 - $1,500 / ₹40k - ₹1.2L)</option>
                <option value="growth">Growth Platform ($1,500 - $4,000 / ₹1.2L - ₹3.2L)</option>
                <option value="scale">Enterprise / Full Custom Suite ($4,000+ / ₹3.2L+)</option>
                <option value="consultation">Need Consultation First</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
              Project / Workflow Description *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the manual bottleneck you want to eliminate or the digital system you need to build..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full relative group overflow-hidden py-3.5 px-6 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Processing Requirement...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                <span>REQUEST A FREE CONSULTATION →</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
