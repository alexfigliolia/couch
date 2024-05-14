export interface ITransactions {
  minYear: number;
  maxYear: number;
  yearsActive: boolean;
  monthsActive: boolean;
  transactions: ITransaction[];
}

export interface ITransaction {
  id: string;
  date: string;
  bank: string;
  description: string;
  amount: number;
}
