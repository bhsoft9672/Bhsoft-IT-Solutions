import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Bot } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#030712]">
      <div className="text-center max-w-md space-y-5">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Bot className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
          404 — SYSTEM NODE NOT FOUND
        </span>

        <h1 className="text-3xl font-black text-white">
          PAGE NOT FOUND
        </h1>

        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          The requested system route does not exist or has been relocated to an updated microservice endpoint.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to BHSOFT Hub</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
