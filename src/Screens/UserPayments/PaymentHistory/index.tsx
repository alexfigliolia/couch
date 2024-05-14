import { Fragment, memo } from "react";
import { PageScrollView } from "Components/PageScrollView";
import { Transaction } from "Components/Transaction";
import { useTransactionsByDate } from "Hooks/Banking/useTransactionsByDate";
import type { Propless } from "Types/React";
import { Header } from "./Header";
import { MonthSelector } from "./MonthSelector";
import { Styles } from "./Styles";
import { YearSelector } from "./YearSelector";

export const PaymentHistory = memo(
  function PaymentHistory(_: Propless) {
    const { transactions, setDate, date } = useTransactionsByDate();
    return (
      <Fragment>
        <PageScrollView style={Styles.container}>
          <Header date={date} />
          {transactions.map(({ id, bank, date, description, amount }) => {
            return (
              <Transaction
                key={id}
                id={id}
                bank={bank}
                date={date}
                amount={amount}
                description={description}
              />
            );
          })}
        </PageScrollView>
        <MonthSelector date={date} setDate={setDate} />
        <YearSelector date={date} setDate={setDate} />
      </Fragment>
    );
  },
  () => true,
);
