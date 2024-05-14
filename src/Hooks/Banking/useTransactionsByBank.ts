import { useCallback } from "react";
import type { ITransaction } from "Models/Transactions";
import { useActiveBank } from "./useActiveBank";
import { useFilteredTransactions } from "./useFilteredTransactions";

export const useTransactionsByBank = () => {
  const bank = useActiveBank();
  const filter = useCallback(
    (transaction: ITransaction) => {
      return bank === "*" ? true : bank === transaction.bank;
    },
    [bank],
  );
  return useFilteredTransactions(filter);
};
