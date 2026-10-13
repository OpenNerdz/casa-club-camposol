// The venue runs on Spanish time, whatever timezone the visitor is in.
const TZ = 'Europe/Madrid';

/** ISO weekday in Spain: 1 = Monday … 7 = Sunday. */
export function madridWeekday(d = new Date()): number {
  const w = new Intl.DateTimeFormat('en-GB', { weekday: 'short', timeZone: TZ }).format(d);
  return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(w) + 1;
}

/** Today's date in Spain as YYYY-MM-DD. */
export function madridDate(d = new Date()): string {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(d).map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}`;
}
