import { memo } from "react";
import { Animated, View } from "react-native";
import { Heading } from "Components/Heading";
import { useSchedule } from "State/Schedule";
import { CoreTheme } from "Themes/Core";
import { Dates } from "Tools/Dates";
import type { Propless } from "Types/React";
import { DateSelector } from "./DateSelector";
import { Event } from "./Event";
import { MonthButton } from "./MonthButton";
import { Styles } from "./Styles";

export const EventList = memo(
  function EventList(_: Propless) {
    const { date, events, picker } = useSchedule(state => ({
      date: state.activeDate,
      picker: state.datePicker,
      events: state.activeEvents,
    }));
    return (
      <Animated.View style={Styles.container}>
        <View style={Styles.content}>
          <MonthButton />
          <DateSelector />
          <Heading text={Dates.format(date)} style={Styles.date} />
          <View style={Styles.inner}>
            {events.map((event, i) => {
              return <Event key={i} {...event} theme={CoreTheme.gradient(i)} />;
            })}
          </View>
        </View>
      </Animated.View>
    );
  },
  () => true,
);
