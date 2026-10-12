import { site } from './site';
import { SITE_URL } from './site-url.mjs';
import type { Lang } from '../i18n/utils';

export function businessJsonLd(lang: Lang) {
  const base = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'BarOrPub'],
    '@id': `${SITE_URL}/#casaclub`,
    name: site.name,
    legalName: site.legalName,
    url: SITE_URL,
    telephone: site.phoneDisplay,
    email: site.email,
    image: `${SITE_URL}/images/og-default.jpg`,
    servesCuisine: ['Spanish', 'British', 'International'],
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: site.openingHours,
    sameAs: [site.social.facebook, site.social.facebookGolf].filter(Boolean),
    containedInPlace: { '@type': 'GolfCourse', '@id': `${SITE_URL}/#golf` },
  };
  const golf = {
    '@context': 'https://schema.org',
    '@type': 'GolfCourse',
    '@id': `${SITE_URL}/#golf`,
    name: 'Camposol Club de Golf',
    url: `${SITE_URL}${lang === 'es' ? '/es' : ''}/golf/`,
    telephone: site.golfPhoneDisplay,
    address: base.address,
    geo: base.geo,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Driving range', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Putting green', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Crazy golf', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Pro shop', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Buggy hire', value: true },
    ],
  };
  return [base, golf];
}
