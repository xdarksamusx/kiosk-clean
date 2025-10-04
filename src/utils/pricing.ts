import type { Service } from "../context/booking-types";

export function quoteCents(service: Service, weightLbs: number): number {
  const w = Math.max(0, Math.ceil(weightLbs));
  if (service === "domestic") {
    return Math.round(800 + 125 * w);
  }
  const base = 1500 + 210 * w;
  return Math.round(base * 1.05);
}
