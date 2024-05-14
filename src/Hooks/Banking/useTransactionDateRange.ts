import { useMemo } from "react";
import { useTransactions } from "State/Transactions";

export const useTransactionDateRange = () => {
  const minYear = useTransactions(state => state.minYear);
  const maxYear = useTransactions(state => state.maxYear);
  const range = useMemo(() => {
    const range: number[] = [];
    for (let i = minYear; i <= maxYear; i++) {
      range.push(i);
    }
    return range;
  }, [minYear, maxYear]);
  return range;
};
