import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.metaTitle,
    template: `%s | ${SITE_CONFIG.shortName} IT SOLUTION`
  },
  description: SITE_CONFIG.metaDescription,
  keywords: [
    'AI automation company India',
    'AI agent development company',
    'AI voice calling agent',
    'WhatsApp automation services',
    'website development company Jaipur',
    'custom software development India',
    'business automation Jaipur',
    'n8n workflow automation',
    'e-commerce website development',
    'mobile app development India',
    'AI calling agent solutions',
    'CRM development India'
  ],
  authors: [{ name: 'BHSOFT IT SOLUTION', url: SITE_CONFIG.siteUrl }],
  creator: 'BHSOFT IT SOLUTION',
  publisher: 'BHSOFT IT SOLUTION',
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.companyName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/bhsoft-logo.png',
        width: 1200,
        height: 630,
        alt: 'BHSOFT IT SOLUTION - AI Agents, Automation & Software Engineering'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    images: ['/bhsoft-logo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#f8fafc] text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <JsonLd type="global" />
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
