import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.metaTitle,
    template: `%s | ${SITE_CONFIG.shortName} IT SOLUTION`
  },
  description: SITE_CONFIG.metaDescription,
  keywords: [
    'AI automation company',
    'AI agent development',
    'AI calling agent',
    'Business automation',
    'Website development',
    'App development',
    'Custom software development',
    'CRM development',
    'n8n automation',
    'WhatsApp automation',
    'AI solutions Jaipur',
    'Software development company India'
  ],
  authors: [{ name: 'BHSOFT IT SOLUTION' }],
  metadataBase: new URL('https://bhsoft.tech'),
  openGraph: {
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    url: 'https://bhsoft.tech',
    siteName: 'BHSOFT IT SOLUTION',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#030712] text-gray-100 antialiased selection:bg-cyan-400 selection:text-black">
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
