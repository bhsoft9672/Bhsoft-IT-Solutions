'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_CATEGORIES, BLOG_POSTS_DATA, BlogPostItem } from '@/data/blogData';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Search, 
  Sparkles, 
  Calendar, 
  User, 
  Tag, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesCategory = selectedCategory === 'All Articles' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS_DATA.find((p) => p.featured) || BLOG_POSTS_DATA[0];
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi BHSOFT, I read your engineering blog and want to consult on our project.')}`;

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Engineering Insights &amp; Blueprints
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            BHSOFT <span className="text-gradient-blue">KNOWLEDGE HUB</span>.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
            Deep technical guides, architectural teardowns, and growth blueprints on Autonomous Voice AI, Next.js 16, Meta WhatsApp API, and enterprise automation in India and globally.
          </p>

          {/* Real-time Search Box */}
          <div className="relative max-w-lg mx-auto mt-8">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AI agents, Next.js, WhatsApp, pricing, SEO..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm text-slate-800 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {BLOG_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Post Banner (if on All and no search) */}
        {selectedCategory === 'All Articles' && !searchQuery && featuredPost && (
          <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white border border-blue-500/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-200">
                  FEATURED BLUEPRINT
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-blue-300 transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {featuredPost.excerpt}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
                >
                  <span>Read Full Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>By {featuredPost.author.name}</span>
                  <span>•</span>
                  <span>{featuredPost.publishDate}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-[0_16px_36px_-12px_rgba(37,99,235,0.16)] transition-all flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 p-7"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Author and Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] font-mono font-bold text-blue-700">
                      {post.author.avatar}
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-800 block leading-tight">{post.author.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{post.publishDate}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="p-2 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-colors shadow-2xs"
                    title="Read Article"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No articles match your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try different keywords or browse all categories.</p>
            <button
              onClick={() => { setSelectedCategory('All Articles'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Consultation Box */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
              Transform Your Operations
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Want to implement these exact architectures in your business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
              Book a 100% free 30-minute discovery call with our lead technical architects. We will audit your current workflow and provide a clear implementation blueprint.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 text-center transition-all hover:scale-105"
            >
              Book Free Discovery Call
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
