export type Service = "domestic" | "international";

export interface BookingState {
  service: Service | null;
  weight: number | null;
  date: string | null;
  time: string | null;
  confirmation?: string | null;
  amountCents: number | null;
  name?: string;
  phone?: string;
}
