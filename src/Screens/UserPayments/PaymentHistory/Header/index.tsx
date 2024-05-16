import { memo } from "react";
import { View } from "react-native";
import { Heading } from "Components/Heading";
import { Transactions } from "State/Transactions";
import { Dates } from "Tools/Dates";
import { DateSelector } from "./DateSelector";
import { Styles } from "./Styles";

export const Header = memo(function Header({ date }: Props) {
  return (
    <View style={Styles.heading}>
      <Heading text="History" />
      <View style={Styles.selectors}>
        <DateSelector
          onPress={Transactions.openMonths}
          text={Dates.month(date)}
        />
        <DateSelector
          onPress={Transactions.openYears}
          text={date.getFullYear().toString()}
        />
      </View>
    </View>
  );
});

interface Props {
  date: Date;
}
