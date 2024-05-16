import { memo, useCallback, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Schedule } from "State/Schedule";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";
import { Dates } from "Tools/Dates";
import { Styles } from "./Styles";

export const DateButton = memo(
  function Date({ active, date }: Props) {
    const day = useMemo(() => date.getDate(), [date]);
    const dayOfWeek = useMemo(() => Dates.day(date), [date]);

    const activateDate = useCallback(() => {
      Schedule.activateDate(date);
    }, [date]);

    return (
      <View style={[Styles.day, active ? Styles.activeDay : undefined]}>
        <LinearGradient
          style={Styles.gradient}
          colors={active ? CoreTheme.UI_GRADIENT : ["#fff", "#fff"]}>
          <TouchableOpacity onPress={activateDate} style={Styles.touchable}>
            <View style={UtilityStyles.center}>
              <Text
                style={[
                  Styles.dayName,
                  active ? Styles.activeDayName : undefined,
                ]}>
                {dayOfWeek.slice(0, 3)}
              </Text>
              <Text
                style={[
                  Styles.dayNumber,
                  active ? Styles.activeDayNumber : undefined,
                ]}>
                {day}
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  },
  (pp, np) => {
    if (pp.date.toISOString() !== np.date.toISOString()) return false;
    return pp.active === np.active;
  },
);

interface Props {
  date: Date;
  active: boolean;
}
