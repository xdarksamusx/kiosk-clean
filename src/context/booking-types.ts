export type Service = "DOMESTIC" | "INTERNATIONAL";

export interface BookingState {
  service: Service | null;
  weight: number | null;
  date: string | null;
  confirmation?: string | null;

  name?: string;
  phone?: string;
}
