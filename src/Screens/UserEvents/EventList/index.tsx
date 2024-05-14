import { memo } from "react";
import { View } from "react-native";
import { Heading } from "Components/Heading";
import { useSchedule } from "State/Schedule";
import { CoreTheme } from "Themes/Core";
import { Dates } from "Tools/Dates";
import type { Propless } from "Types/React";
import { DateSelector } from "./DateSelector";
import { Event } from "./Event";
import { Styles } from "./Styles";

export const EventList = memo(
  function EventList(_: Propless) {
    const date = useSchedule(state => state.activeDate);
    const events = useSchedule(state => state.activeEvents);
    return (
      <View style={Styles.container}>
        <DateSelector />
        <Heading text={Dates.format(date)} style={Styles.date} />
        <View style={Styles.inner}>
          {events.map((event, i) => {
            return <Event key={i} {...event} theme={CoreTheme.gradient(i)} />;
          })}
        </View>
      </View>
    );
  },
  () => true,
);
