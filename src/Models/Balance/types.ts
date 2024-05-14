import type { Datum } from "Types/Graphs";

export interface IBalance {
  due: Date;
  total: number;
  breakdown: Datum[];
}
