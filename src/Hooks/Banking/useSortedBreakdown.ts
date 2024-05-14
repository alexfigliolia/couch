import { useMemo } from "react";
import { useBalanceGraph } from "./useBalanceGraph";

export const useSortedBreakdown = () => {
  const [data] = useBalanceGraph();
  return useMemo(() => {
    const copy = [...data];
    copy.sort((a, b) => b.value - a.value);
    return copy;
  }, [data]);
};
