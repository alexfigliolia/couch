import { memo } from "react";
import { View } from "react-native";
import { Heading } from "Components/Heading";
import { Transaction } from "Components/Transaction";
import { useTransactionsByBank } from "Hooks/Banking/useTransactionsByBank";
import { usePaymentMethods } from "State/PaymentMethods";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const PaymentList = memo(
  function PaymentList(_: Propless) {
    const transactions = useTransactionsByBank();
    const activeTheme = usePaymentMethods(state => state.activeTheme);
    return (
      <View style={Styles.container}>
        <Heading text="Recent Transactions" style={Styles.heading} />
        {transactions.map(({ id, bank, date, description, amount }) => {
          return (
            <Transaction
              key={id}
              id={id}
              date={date}
              bank={bank}
              amount={amount}
              theme={activeTheme}
              description={description}
            />
          );
        })}
      </View>
    );
  },
  () => true,
);
