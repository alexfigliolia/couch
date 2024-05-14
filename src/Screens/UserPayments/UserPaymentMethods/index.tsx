import { memo, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { PaymentMethod } from "Components/PaymentMethod";
import { UserPayments } from "Dimensions/UserPayments";
import { usePaymentMethods } from "State/PaymentMethods";
import { UtilityStyles } from "Styles/Utility";
import type { Propless } from "Types/React";
import { CombinedPaymentList } from "./CombinedPaymentList";
import { PaymentActions } from "./PaymentActions";
import { Styles } from "./Styles";

export const UserPaymentMethods = memo(
  function UserPaymentMethods(_: Propless) {
    const banks = usePaymentMethods(state => state.banks);
    const active = usePaymentMethods(state => state.active);
    const total = useMemo(() => banks.size, [banks]);
    const height = useMemo(
      () =>
        active === -1
          ? UserPayments.CARD_HEIGHT +
            (total - 1) * UserPayments.TRANSLATE_DISTANCE
          : UserPayments.CARD_HEIGHT + 30,
      [active, total],
    );

    return (
      <ScrollView
        style={Styles.scrollView}
        contentContainerStyle={UtilityStyles.center}>
        <View style={Styles.container}>
          <View style={[Styles.methods, { height }]}>
            {banks.map(({ id, name }, _, i) => {
              return (
                <PaymentMethod
                  id={id}
                  key={id}
                  index={i}
                  name={name}
                  total={total}
                />
              );
            })}
          </View>
          <PaymentActions />
          <CombinedPaymentList />
        </View>
      </ScrollView>
    );
  },
  () => true,
);
