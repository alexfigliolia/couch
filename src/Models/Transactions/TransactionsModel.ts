import { subDays } from "date-fns";
import { State } from "@figliolia/galena";
import type { ITransactions } from "./types";

export class TransactionsModel extends State<ITransactions> {
  constructor() {
    super("Transactions", {
      minYear: 2021,
      maxYear: 2024,
      yearsActive: false,
      monthsActive: false,
      transactions: TransactionsModel.transactions,
    });
  }

  public openYears = () => {
    this.update(state => {
      state.yearsActive = true;
      if (state.monthsActive) {
        state.monthsActive = false;
      }
    });
  };

  public closeYears = () => {
    this.update(state => {
      state.yearsActive = false;
    });
  };

  public openMonths = () => {
    this.update(state => {
      state.monthsActive = true;
      if (state.yearsActive) {
        state.yearsActive = false;
      }
    });
  };

  public closeMonths = () => {
    this.update(state => {
      state.monthsActive = false;
    });
  };

  private static readonly banks = [
    "TD Bank",
    "Bank of America",
    "Chase",
    "Wells Fargo",
    "Navy Federal Credit Union",
    "Citi Bank",
  ];

  private static get transactions() {
    let id = -1;
    return TransactionsModel.banks.flatMap(bank => {
      return Array.from({ length: 5 }, () => ({
        id: `${++id}`,
        bank,
        description: "Rent",
        date: subDays(new Date(), 1).toISOString(),
        amount: parseFloat((Math.random() * 5000).toPrecision(2)),
      }));
    });
  }
}
