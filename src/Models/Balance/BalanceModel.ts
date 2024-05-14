import { State } from "@figliolia/galena";
import type { IBalance } from "./types";

export class BalanceModel extends State<IBalance> {
  constructor() {
    super("Balance", {
      total: 2900,
      due: new Date(),
      breakdown: [
        { label: "Water", value: 50 },
        { label: "Gas", value: 30 },
        { label: "Heating and Cooling", value: 250 },
        { label: "HOA", value: 570 },
        { label: "Rent", value: 2000 },
      ],
    });
  }
}
