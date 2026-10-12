import { ui, type Lang, type UIKey } from './ui';

export const defaultLang: Lang = 'en';
export const langs: Lang[] = ['en', 'es'];

/** Site base path without trailing slash ('' when hosted at the domain root). */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Prefix a root-relative path with the base path: withBase('/images/x.webp'). */
export const withBase = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;
/** Strip the base path from a pathname. */
const stripBase = (pathname: string) => (base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname);

export function getLangFromUrl(url: URL): Lang {
  const [, first] = stripBase(url.pathname).split('/');
  return (langs as string[]).includes(first) && first !== defaultLang ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/** Build a localised path: localePath('es', '/golf/') -> '/es/golf/' */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return withBase(lang === defaultLang ? clean : `/${lang}${clean}`);
}

/** The same page in the other language. */
export function switchLang(url: URL, to: Lang): string {
  const from = getLangFromUrl(url);
  let p = stripBase(url.pathname);
  if (from !== defaultLang) p = p.replace(new RegExp(`^/${from}`), '') || '/';
  return localePath(to, p);
}

const escapeHtml = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
/** Headline markup: *word* becomes <em>word</em> (set in the italic accent). Use with set:html. */
export const em = (s: string) => escapeHtml(s).replace(/\*(.+?)\*/g, '<em>$1</em>');
/** The same text with the emphasis markers removed, for meta tags and alt text. */
export const plain = (s: string) => s.replace(/\*(.+?)\*/g, '$1');
