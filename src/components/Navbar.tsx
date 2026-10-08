'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '@/data/siteData';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Workflow', href: '/#workflow' },
    { name: 'Projects', href: '/projects' },
    { name: 'Process', href: '/#process' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.45)] group-hover:scale-105 transition-transform bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SITE_CONFIG.logoImage}
                alt="BHSOFT IT SOLUTION Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                BHSOFT <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">IT SOLUTION</span>
              </span>
              <span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">SOFTWARE • WEBSITES • AUTOMATION</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
                aria-expanded={servicesDropdown}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full -left-12 w-80 pt-2 z-50">
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/10 shadow-2xl backdrop-blur-xl space-y-1">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/services/${srv.id}`}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[10px] font-mono text-cyan-400 font-semibold mt-0.5 group-hover:border-cyan-400">
                          {srv.number}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-200 group-hover:text-cyan-400 flex items-center gap-1">
                            {srv.title}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-gray-400 line-clamp-1">{srv.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 rounded-lg hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book Consultation
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-2 border-t border-white/10 bg-[#090d16]/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl">
            <div className="space-y-3 mb-6">
              <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">Services</div>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-white/10">
                {SERVICES_DATA.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-gray-300 hover:text-cyan-400 flex items-center justify-between py-1"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                  </Link>
                ))}
              </div>

              <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase pt-3 mb-2">Company</div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-gray-200 hover:text-cyan-400 py-1.5"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Book Free Consultation →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
