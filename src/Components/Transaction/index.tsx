import { memo } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LeaseFill } from "Icons/Lease";
import type { ITransaction } from "Models/Transactions";
import { CoreTheme } from "Themes/Core";
import { Dates } from "Tools/Dates";
import { Numbers } from "Tools/Numbers";
import { Styles } from "./Styles";

export const Transaction = memo(function Transaction({
  id,
  date,
  bank,
  amount,
  description,
  theme = CoreTheme.UI_GRADIENT_BRIGHT,
}: Props) {
  return (
    <View key={id} style={Styles.container}>
      <View style={Styles.icon}>
        <LinearGradient
          colors={theme}
          end={{ x: 1, y: 1 }}
          start={{ x: 0, y: 0 }}
          style={Styles.iconGradient}>
          <LeaseFill stroke="#fff" />
        </LinearGradient>
      </View>
      <View style={Styles.details}>
        <Text style={Styles.bank}>{bank}</Text>
        <Text style={Styles.description}>{description}</Text>
      </View>
      <View style={Styles.meta}>
        <Text style={[Styles.amount, { color: theme[1] }]}>
          -{Numbers.formatCurrency(amount)}
        </Text>
        <Text style={Styles.date}>{Dates.format(new Date(date))}</Text>
      </View>
    </View>
  );
});

interface Props extends Omit<ITransaction, "bankId"> {
  bank: string;
  theme?: string[];
}
