// robots.txt built from the configured site URL and base path, so a change of domain cannot leave
// it pointing at the wrong sitemap. Staging builds (PUBLIC_NOINDEX=1) ask crawlers to stay out.
import type { APIRoute } from 'astro';
import { base } from '../i18n/utils';

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://casaclubcamposolgolf.com')).origin;
  const body = import.meta.env.PUBLIC_NOINDEX === '1'
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nSitemap: ${origin}${base}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
