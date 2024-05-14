import { memo } from "react";
import { View } from "react-native";
import { LazyComponent } from "Components/LazyComponent";
import { Redirect } from "Components/Redirect";
import { useUnmount } from "Hooks/Generics/useUnmount";
import { PaymentMethods } from "State/PaymentMethods";
import { Route, Routes } from "Tools/Router";
import type { Propless } from "Types/React";
import { AddPaymentMethod } from "./AddPaymentMethod";
import { PaymentTabs } from "./PaymentTabs";
import { Styles } from "./Styles";

const UserPaymentMethods = LazyComponent(
  () => require("./UserPaymentMethods").UserPaymentMethods,
);
const PaymentHistory = LazyComponent(
  () => require("./PaymentHistory").PaymentHistory,
);
const CurrentBalance = LazyComponent(
  () => require("./CurrentBalance").CurrentBalance,
);

export const UserPayments = memo(
  function UserPayments(_: Propless) {
    useUnmount(() => {
      PaymentMethods.reset();
    });

    return (
      <View style={Styles.container}>
        <PaymentTabs />
        <View style={Styles.container}>
          <Routes>
            <Route path="/" Component={CurrentBalance} />
            <Route path="/history" Component={PaymentHistory} />
            <Route path="/banks" Component={UserPaymentMethods} />
            <Route path="/*" element={<Redirect to="/user-payments" />} />
          </Routes>
        </View>
        <AddPaymentMethod />
      </View>
    );
  },
  () => true,
);
