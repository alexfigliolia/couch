import { memo, useCallback } from "react";
import { ActionSheetSelector } from "Components/ActionSheetSelector";
import { useTransactionDateRange } from "Hooks/Banking/useTransactionDateRange";
import { Transactions, useTransactions } from "State/Transactions";

export const YearSelector = memo(
  function YearSelector({ date, setDate }: Props) {
    const range = useTransactionDateRange();
    const active = useTransactions(state => state.yearsActive);

    const selectYear = useCallback(
      (index: number) => {
        const nextDate = new Date(date);
        nextDate.setFullYear(range[index]);
        setDate(nextDate);
      },
      [date, setDate, range],
    );

    return (
      <ActionSheetSelector
        items={range}
        active={active}
        title="Select a Year"
        selectItem={selectYear}
        value={date.getFullYear()}
        close={Transactions.closeYears}
      />
    );
  },
  (pp, np) => pp.date.toISOString() === np.date.toISOString(),
);

interface Props {
  date: Date;
  setDate: (date: Date) => void;
}
