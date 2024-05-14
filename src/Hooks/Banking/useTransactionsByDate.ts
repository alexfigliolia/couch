import { isBefore } from "date-fns";
import { useCallback, useState } from "react";
import type { ITransaction } from "Models/Transactions";
import { useFilteredTransactions } from "./useFilteredTransactions";

export const useTransactionsByDate = (date = new Date()) => {
  const [currentDate, setDate] = useState(date);
  const filter = useCallback(
    (transaction: ITransaction) => {
      return isBefore(new Date(transaction.date), currentDate);
    },
    [currentDate],
  );
  const transactions = useFilteredTransactions(filter);
  return {
    setDate,
    transactions,
    date: currentDate,
  };
};
