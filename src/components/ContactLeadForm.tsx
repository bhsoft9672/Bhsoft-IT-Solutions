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
    <div className="relative p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xl backdrop-blur-xl">
      <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {status === 'success' ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Consultation Request Received!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. An engineer from BHSOFT will review your project details and contact you within 24 hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi BHSOFT, I just submitted an inquiry for ${formData.business || 'my business'}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm"
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
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
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
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-normal"
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                Business / Company Name
              </label>
              <input
                id="business"
                name="business"
                type="text"
                value={formData.business}
                onChange={handleChange}
                placeholder="e.g. Acme Health or Startup Inc"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-normal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
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
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-normal"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 89... or +1 (555)..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-normal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
              >
                <option value="ai-agents">AI Calling Agents & Phone Receptionists</option>
                <option value="automation">Business Workflow Automation (n8n)</option>
                <option value="web-development">High-Performance Website Development</option>
                <option value="app-development">Mobile App (iOS & Android)</option>
                <option value="custom-software">Custom Software & Admin SaaS</option>
                <option value="api-integration">API & Tool Integration</option>
                <option value="crm">Custom CRM & Lead Systems</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                Estimated Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
              >
                <option value="starter">Starter / Focused Automation ($500 - $1,500 / ₹40k - ₹1.2L)</option>
                <option value="growth">Growth Platform ($1,500 - $4,000 / ₹1.2L - ₹3.2L)</option>
                <option value="scale">Enterprise / Full Custom Suite ($4,000+ / ₹3.2L+)</option>
                <option value="consultation">Need Consultation First</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
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
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none font-normal"
            />
          </div>

          {status === 'error' && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-102 active:scale-98"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Processing Requirement...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-white" />
                <span>REQUEST A FREE CONSULTATION →</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
