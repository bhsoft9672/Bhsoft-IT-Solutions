'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Phone, 
  ExternalLink, 
  CheckCheck, 
  Bot, 
  User, 
  ChevronDown, 
  RotateCcw,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';
import { 
  CHATBOT_WELCOME_MESSAGE, 
  CHATBOT_INITIAL_CHIPS, 
  findChatbotResponse 
} from '@/data/chatbotKnowledge';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  ctaUrl?: string;
  ctaText?: string;
}

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: CHATBOT_WELCOME_MESSAGE,
      timestamp: 'Just now',
      quickReplies: CHATBOT_INITIAL_CHIPS,
    },
  ]);

  // Lead capture inline state
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadPhone, setLeadPhone] = useState('');
  const [leadName, setLeadName] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate natural AI thinking time
    setTimeout(() => {
      const response = findChatbotResponse(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: response.quickReplies,
        ctaUrl: response.ctaUrl,
        ctaText: response.ctaText,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'bot',
        text: CHATBOT_WELCOME_MESSAGE,
        timestamp: 'Just now',
        quickReplies: CHATBOT_INITIAL_CHIPS,
      },
    ]);
    setLeadCaptured(false);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadPhone.trim()) return;

    setIsSubmittingLead(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim() || 'WhatsApp Chat Visitor',
          phone: leadPhone.trim(),
          email: `${leadPhone.trim().replace(/[^0-9]/g, '')}@whatsapp.lead`,
          service: 'WhatsApp AI Chat Inquiry',
          message: `Visitor requested consultation via WhatsApp Chatbot. Phone: ${leadPhone}`,
        }),
      });

      setLeadCaptured(true);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-lead-${Date.now()}`,
          sender: 'bot',
          text: `🎉 **Thank you ${leadName ? leadName : ''}!**\n\nOur engineering team will call you back at **${leadPhone}** within 30 minutes. You can also message us directly on WhatsApp right now:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          ctaUrl: `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi BHSOFT, my name is ${leadName || 'Visitor'} (${leadPhone}). I want to discuss my project.`)}`,
          ctaText: 'Open Official WhatsApp Now',
        },
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <aside aria-label="WhatsApp Assistant" className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button (when closed) */}
      {!isOpen && (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open BHSOFT WhatsApp Chatbot"
            className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] text-slate-950 font-bold text-xs shadow-[0_6px_28px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_36px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/30 cursor-pointer"
          >
            <div className="relative">
              <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
              )}
            </div>
            <span className="font-extrabold tracking-wide text-slate-950">Chat with AI</span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
            </span>
          </button>

          {/* Hover Tooltip */}
          <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-[11px] font-medium py-1 px-3 rounded-lg shadow-lg">
            24/7 AI Assistant • Ask Anything!
          </div>
        </div>
      )}

      {/* Expandable WhatsApp Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[560px] max-h-[82vh] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Authentic WhatsApp Dark Green Header */}
          <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white p-0.5 overflow-hidden border border-white/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SITE_CONFIG.logoImage}
                    alt="BHSOFT Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold tracking-tight text-white">
                    BHSOFT AI Assistant
                  </h3>
                  <span title="Verified Assistant">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  </span>
                </div>
                <span className="text-[11px] text-emerald-200 font-mono flex items-center gap-1">
                  Online • Typically replies instantly
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
                aria-label="Minimize chat"
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub-header Direct WhatsApp Banner */}
          <div className="bg-[#128C7E] px-3.5 py-1.5 flex items-center justify-between text-[11px] text-white font-medium border-t border-white/10">
            <span>Official WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline font-bold flex items-center gap-0.5"
            >
              <span>Switch to App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* WhatsApp Chat Message Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#efeae2] bg-opacity-70 [background-image:radial-gradient(#d1d7db_1px,transparent_1px)] [background-size:16px_16px]">
            {/* Encryption notice badge */}
            <div className="text-center my-1">
              <span className="inline-block bg-[#ffeecd] text-[#54656f] text-[10px] font-medium py-1 px-3 rounded-lg shadow-2xs">
                🔒 Messages are generated 24/7 by BHSOFT AI Engineering Engine.
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs shadow-xs relative ${
                    msg.sender === 'user'
                      ? 'bg-[#d9fdd3] text-slate-900 rounded-tr-xs'
                      : 'bg-white text-slate-800 rounded-tl-xs border border-slate-200/60'
                  }`}
                >
                  {/* Message Text with simple formatting */}
                  <div className="whitespace-pre-wrap leading-relaxed space-y-1.5">
                    {msg.text.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx}>
                        {para.split('**').map((chunk, cIdx) =>
                          cIdx % 2 === 1 ? (
                            <strong key={cIdx} className="font-bold text-slate-950">
                              {chunk}
                            </strong>
                          ) : (
                            chunk
                          )
                        )}
                      </p>
                    ))}
                  </div>

                  {/* Optional CTA Button inside bot message */}
                  {msg.ctaUrl && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100">
                      <a
                        href={msg.ctaUrl}
                        target={msg.ctaUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] shadow-xs transition-colors"
                      >
                        <span>{msg.ctaText || 'Learn More'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* Timestamp & double ticks */}
                  <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-400 font-mono">
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'user' && (
                      <CheckCheck className="w-3 h-3 text-blue-500 inline" />
                    )}
                  </div>
                </div>

                {/* Quick Reply Chips below bot message */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.quickReplies.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        onClick={() => handleSendMessage(chip)}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-2xs hover:scale-105 active:scale-95 transition-all text-left cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-2xl rounded-tl-xs shadow-xs w-20 border border-slate-200/60">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            {/* Quick In-Chat Lead Form */}
            {!leadCaptured && messages.length >= 3 && (
              <div className="p-3 bg-white rounded-2xl border border-blue-200 shadow-xs space-y-2 mt-2">
                <span className="text-[11px] font-bold text-blue-700 block">
                  📞 Need a quick callback or custom quote?
                </span>
                <form onSubmit={handleSubmitLead} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                  />
                  <div className="flex gap-1.5">
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Phone Number"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="flex-1 text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                    />
                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      {isSubmittingLead ? '...' : 'Request'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Type your question or query..."
              className="flex-1 text-xs px-3.5 py-2.5 rounded-full bg-slate-100 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-200 outline-none transition-all"
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim()}
              aria-label="Send message"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                inputText.trim()
                  ? 'bg-[#25D366] text-slate-950 shadow-sm hover:scale-105 active:scale-95 cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
