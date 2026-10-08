'use client';

import React, { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Check if user already saw loader this session to respect repeat navigation
    const hasLoaded = sessionStorage.getItem('bhsoft_loaded');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer1 = setTimeout(() => {
      setFade(true);
    }, 1800);

    const timer2 = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('bhsoft_loaded', 'true');
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing 3D-style Core loader ring */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-400 animate-spin" />
          <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#00F0FF]" />
        </div>

        {/* Brand Text */}
        <div className="text-center space-y-2">
          <div className="text-2xl font-black tracking-wider text-white">
            BH<span className="text-cyan-400">SOFT</span>
          </div>
          <div className="text-xs font-mono tracking-[0.28em] text-cyan-400/80 uppercase">
            BUILD • AUTOMATE • SCALE
          </div>
        </div>
      </div>
    </div>
  );
}
