import { memo, useCallback } from "react";
import { ActionSheetSelector } from "Components/ActionSheetSelector";
import { Transactions, useTransactions } from "State/Transactions";
import { Dates } from "Tools/Dates";

export const MonthSelector = memo(
  function MonthSelector({ date, setDate }: Props) {
    const active = useTransactions(state => state.monthsActive);

    const selectMonth = useCallback(
      (index: number) => {
        const nextDate = new Date(date);
        nextDate.setMonth(index);
        setDate(nextDate);
      },
      [date, setDate],
    );

    return (
      <ActionSheetSelector
        active={active}
        items={Dates.months}
        title="Select a Month"
        selectItem={selectMonth}
        close={Transactions.closeMonths}
        value={Dates.months[date.getMonth()]}
      />
    );
  },
  (pp, np) => pp.date.toISOString() === np.date.toISOString(),
);

interface Props {
  date: Date;
  setDate: (date: Date) => void;
}
