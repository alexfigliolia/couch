import { useMemo } from "react";
import type { ITransaction } from "Models/Transactions";
import { useTransactions } from "State/Transactions";

export const useFilteredTransactions = (
  filter: (transaction: ITransaction) => boolean,
) => {
  const transactions = useTransactions(state => state.transactions);
  return useMemo(() => transactions.filter(filter), [transactions, filter]);
};
