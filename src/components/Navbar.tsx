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
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with 3D Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-600/40 shadow-[0_4px_16px_rgba(37,99,235,0.25)] group-hover:scale-105 transition-transform bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SITE_CONFIG.logoImage}
                alt="BHSOFT IT SOLUTION Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                BHSOFT <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">IT SOLUTION</span>
              </span>
              <span className="text-[9px] text-slate-500 font-mono tracking-wider uppercase font-semibold">SOFTWARE • WEBSITES • AUTOMATION</span>
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
                className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-2"
                aria-expanded={servicesDropdown}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full -left-12 w-84 pt-2 z-50">
                  <div className="p-3 rounded-2xl bg-white/95 border border-slate-200 shadow-2xl backdrop-blur-xl space-y-1">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/services/${srv.id}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-6 h-6 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] font-mono text-blue-600 font-bold mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {srv.number}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 flex items-center gap-1">
                            {srv.title}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{srv.tagline}</p>
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
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-blue-600'
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
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.45)] hover:scale-105 active:scale-95 transition-all group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book Consultation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-2 border-t border-slate-200 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl">
            <div className="space-y-3 mb-6">
              <div className="text-xs font-mono text-blue-600 tracking-wider uppercase mb-2 font-bold">Services</div>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-blue-100">
                {SERVICES_DATA.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-slate-700 hover:text-blue-600 flex items-center justify-between py-1"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>

              <div className="text-xs font-mono text-blue-600 tracking-wider uppercase pt-3 mb-2 font-bold">Company</div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-blue-600 py-1.5"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
            >
              Book Free Consultation →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
