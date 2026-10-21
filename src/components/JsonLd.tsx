import React from 'react';
import { SITE_CONFIG } from '@/data/siteConfig';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface JsonLdProps {
  type?: 'global' | 'service' | 'project' | 'breadcrumbs';
  breadcrumbs?: BreadcrumbItem[];
  data?: Record<string, unknown>;
}

export default function JsonLd({ type = 'global', breadcrumbs, data }: JsonLdProps) {
  if (type === 'breadcrumbs' && breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.item.startsWith('http') ? crumb.item : `${SITE_CONFIG.siteUrl}${crumb.item}`,
      })),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    );
  }

  if (type === 'global') {
    const globalSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_CONFIG.siteUrl}/#organization`,
          name: SITE_CONFIG.companyName,
          alternateName: [SITE_CONFIG.shortName, 'BHSOFT', 'BHSOFT IT Solutions'],
          url: SITE_CONFIG.siteUrl,
          logo: {
            '@type': 'ImageObject',
            '@id': `${SITE_CONFIG.siteUrl}/#logo`,
            url: `${SITE_CONFIG.siteUrl}/bhsoft-logo.png`,
            caption: SITE_CONFIG.companyName
          },
          image: `${SITE_CONFIG.siteUrl}/bhsoft-logo.png`,
          description: SITE_CONFIG.metaDescription,
          email: SITE_CONFIG.email,
          telephone: SITE_CONFIG.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_CONFIG.address.streetAddress,
            addressLocality: SITE_CONFIG.address.addressLocality,
            addressRegion: SITE_CONFIG.address.addressRegion,
            postalCode: SITE_CONFIG.address.postalCode,
            addressCountry: SITE_CONFIG.address.addressCountry
          },
          areaServed: [
            { '@type': 'Country', name: 'India' },
            { '@type': 'AdministrativeArea', name: 'Rajasthan' },
            { '@type': 'City', name: 'Jaipur' },
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Arab Emirates' }
          ],
          sameAs: [
            'https://github.com/bhsoft9672',
            'https://wa.me/918920608191'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: SITE_CONFIG.phone,
            contactType: 'customer support',
            email: SITE_CONFIG.email,
            areaServed: ['IN', 'US', 'AE'],
            availableLanguage: ['English', 'Hindi']
          }
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${SITE_CONFIG.siteUrl}/#localbusiness`,
          name: SITE_CONFIG.companyName,
          image: `${SITE_CONFIG.siteUrl}/bhsoft-logo.png`,
          url: SITE_CONFIG.siteUrl,
          telephone: SITE_CONFIG.phone,
          email: SITE_CONFIG.email,
          priceRange: '₹₹ - ₹₹₹₹',
          currenciesAccepted: SITE_CONFIG.currenciesAccepted,
          paymentAccepted: SITE_CONFIG.paymentAccepted,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_CONFIG.address.streetAddress,
            addressLocality: SITE_CONFIG.address.addressLocality,
            addressRegion: SITE_CONFIG.address.addressRegion,
            postalCode: SITE_CONFIG.address.postalCode,
            addressCountry: SITE_CONFIG.address.addressCountry
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: SITE_CONFIG.geo.latitude,
            longitude: SITE_CONFIG.geo.longitude
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '20:00'
            }
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_CONFIG.siteUrl}/#website`,
          url: SITE_CONFIG.siteUrl,
          name: SITE_CONFIG.companyName,
          description: SITE_CONFIG.metaDescription,
          publisher: {
            '@id': `${SITE_CONFIG.siteUrl}/#organization`
          },
          inLanguage: 'en-US'
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
      />
    );
  }

  if (data) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }

  return null;
}
