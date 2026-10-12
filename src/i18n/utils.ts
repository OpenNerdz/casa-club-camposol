import { ui, type Lang, type UIKey } from './ui';

export const defaultLang: Lang = 'en';
export const langs: Lang[] = ['en', 'es'];

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
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
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/** The same page in the other language. */
export function switchLang(url: URL, to: Lang): string {
  const from = getLangFromUrl(url);
  let p = url.pathname;
  if (from !== defaultLang) p = p.replace(new RegExp(`^/${from}`), '') || '/';
  return localePath(to, p);
}
