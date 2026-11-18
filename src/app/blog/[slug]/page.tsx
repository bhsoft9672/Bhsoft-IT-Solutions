import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS_DATA, BlogPostItem } from '@/data/blogData';
import { SITE_CONFIG } from '@/data/siteConfig';
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  BookOpen, 
  ExternalLink 
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | BHSOFT IT SOLUTION',
    };
  }

  const postUrl = `${SITE_CONFIG.siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | BHSOFT IT SOLUTION`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-image.png'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.slug !== post.slug).slice(0, 3);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi BHSOFT, I read your article "${post.title}" and want to discuss this implementation.`)}`;

  return (
    <article className="min-h-screen bg-slate-50/50 pt-28 pb-24">
      {/* Blog Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: post.title,
            description: post.excerpt,
            image: `${SITE_CONFIG.siteUrl}/og-image.png`,
            datePublished: post.publishDate,
            author: {
              '@type': 'Person',
              name: post.author.name,
              jobTitle: post.author.role,
              worksFor: {
                '@type': 'Organization',
                name: SITE_CONFIG.companyName,
              },
            },
            publisher: {
              '@type': 'Organization',
              name: SITE_CONFIG.companyName,
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_CONFIG.siteUrl}/bhsoft-logo-small.webp`,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_CONFIG.siteUrl}/blog/${post.slug}`,
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${post.categoryColor}`}>
              {post.category}
            </span>
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.publishDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-sm">
                {post.author.avatar}
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 block">{post.author.name}</span>
                <span className="text-xs text-slate-500 font-medium">{post.author.role} • BHSOFT IT SOLUTION</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-emerald-600" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="py-10 text-slate-800 space-y-6 leading-relaxed text-sm sm:text-base">
          {post.content.split('\n\n').map((paragraph, idx) => {
            const trimmed = paragraph.trim();

            if (trimmed.startsWith('### ')) {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-black text-slate-900 mt-10 mb-4 pt-4 border-t border-slate-100">
                  {trimmed.replace('### ', '')}
                </h2>
              );
            }

            if (trimmed.startsWith('```')) {
              const code = trimmed.replace(/```[a-z]*\n?/g, '').trim();
              return (
                <pre key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-blue-300 font-mono text-xs overflow-x-auto border border-slate-800 shadow-md my-4">
                  <code>{code}</code>
                </pre>
              );
            }

            if (trimmed.startsWith('---')) {
              return <hr key={idx} className="my-8 border-slate-200" />;
            }

            if (trimmed.startsWith('1. ') || trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
              const lines = trimmed.split('\n');
              return (
                <ul key={idx} className="space-y-2.5 my-4 pl-2">
                  {lines.map((l, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2.5 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <span>{l.replace(/^[0-9]\.\s*|^-\s*|^•\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={idx} className="text-slate-600 leading-relaxed font-normal">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="py-6 border-t border-slate-200">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
            Article Tags
          </span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-mono px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-2xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
            {post.author.avatar}
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-base font-bold text-slate-900">
              Published by {post.author.name}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              BHSOFT IT SOLUTION is a senior digital engineering and AI automation collective based in Jaipur, Rajasthan. We build sub-600ms AI voice agents, modern Next.js platforms, WhatsApp automation pipelines, and custom enterprise software for companies across India and worldwide.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 font-mono inline-flex items-center gap-1"
              >
                <span>Learn more about BHSOFT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Conversion Consultation CTA Box */}
        <div className="my-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-white">
              ENGINEERING SPRINT
            </span>
            <h3 className="text-2xl font-black">
              Ready to deploy this architecture for your business?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-lg font-normal">
              Book a 100% free consultation with our lead technical architects. We will evaluate your workflow and provide a clear timeline and quotation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-blue-800 font-bold text-xs uppercase tracking-wider shadow-md text-center hover:bg-yellow-300 hover:text-slate-950 transition-all"
            >
              Book Free Call
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
              Related <span className="text-gradient-blue">Blueprints</span>
            </h3>
            <Link href="/blog" className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.slug}
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${rPost.categoryColor} inline-block mb-3`}>
                    {rPost.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${rPost.slug}`}>
                      {rPost.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 font-normal">
                    {rPost.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-slate-400">{rPost.readTime}</span>
                  <Link href={`/blog/${rPost.slug}`} className="text-blue-600 font-bold flex items-center gap-1 text-[11px]">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
