import { format, parseISO } from "date-fns";
export function combineDateTimeISO(
  dateISO: string | null,
  hhmm: string | null
): string | null {
  if (!dateISO || !hhmm) return null;
  const parts = hhmm.split(":");
  if (parts.length < 2) return null;
  const [h, m] = parts.map((n) => Number(n));
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  const d = new Date(dateISO);
  d.setHours(h, m, 0, 0);
  return d.toISOString();
}
