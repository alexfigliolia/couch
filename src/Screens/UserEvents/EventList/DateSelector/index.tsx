import { memo, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { useSchedule } from "State/Schedule";
import { Dates } from "Tools/Dates";
import type { Propless } from "Types/React";
import { DateButton } from "./DateButton";
import { DropDown } from "./Dropdown";
import { Styles } from "./Styles";

export const DateSelector = memo(
  function DateSelector(_: Propless) {
    const date = useSchedule(state => state.activeDate);
    const year = useMemo(() => date.getFullYear(), [date]);
    const month = useMemo(() => date.getMonth(), [date]);
    const dates = useSchedule(state =>
      Object.keys(state.schedules[month].events),
    );

    return (
      <View style={Styles.container}>
        <DropDown />
        {dates.length > 1 && (
          <ScrollView
            horizontal
            pagingEnabled
            style={Styles.scrollView}
            showsHorizontalScrollIndicator={false}>
            {dates.map(day => {
              const scope = new Date(year, month, parseInt(day));
              const active = Dates.match(date, scope);
              return <DateButton key={day} date={scope} active={active} />;
            })}
          </ScrollView>
        )}
      </View>
    );
  },
  () => true,
);
