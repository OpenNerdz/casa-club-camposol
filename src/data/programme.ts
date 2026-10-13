/**
 * The regular weekly programme. Shown on the home and What's On pages and in the
 * "Today at Casa Club" card, which picks today's row in Spanish time. CONFIRM with the team.
 * One-off highlights (tribute nights, Christmas) live in src/content/events.ts.
 *
 * day: ISO weekday, 1 = Monday … 7 = Sunday. `minor` items render in a quieter style.
 */
import type { Lang } from '../i18n/ui';

type Text = Record<Lang, string>;
export interface ProgrammeItem { title: Text; time?: string; note?: Text; minor?: boolean }
export interface ProgrammeDay { day: number; items: ProgrammeItem[] }

const menuDelDia: ProgrammeItem = { title: { en: 'Menú del día', es: 'Menú del día' }, note: { en: 'lunchtime', es: 'mediodía' }, minor: true };
const quiz: ProgrammeItem = { title: { en: 'Quiz night', es: 'Noche de quiz' }, time: '19:30' };
const quizSupper: ProgrammeItem = { title: { en: 'Full menu', es: 'Carta completa' }, note: { en: 'from 18:00', es: 'desde las 18:00' }, minor: true };

export const programme: ProgrammeDay[] = [
  { day: 1, items: [quiz, menuDelDia] },
  { day: 2, items: [{ title: { en: 'Funky Orange daytime disco', es: 'Funky Orange, sesión disco de tarde' }, note: { en: 'selected weeks', es: 'algunas semanas' } }, menuDelDia] },
  { day: 3, items: [menuDelDia] },
  { day: 4, items: [quiz, quizSupper, menuDelDia] },
  { day: 5, items: [
    { title: { en: 'Fish & chips', es: 'Fish & chips' } },
    { title: { en: 'Bingo', es: 'Bingo' }, time: '15:30' },
    { title: { en: 'Live music', es: 'Música en directo' }, time: '16:30–18:00' },
    menuDelDia,
  ] },
  { day: 6, items: [{ title: { en: 'Tribute & live music nights', es: 'Tributos y música en directo' }, note: { en: 'selected Saturdays', es: 'algunos sábados' } }] },
  { day: 7, items: [{ title: { en: 'Sunday carvery', es: 'Carvery dominical' }, note: { en: 'book ahead', es: 'con reserva' } }] },
];

export const dayNames: Record<Lang, { short: string[]; long: string[] }> = {
  en: { short: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], long: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
  es: { short: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], long: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] },
};
