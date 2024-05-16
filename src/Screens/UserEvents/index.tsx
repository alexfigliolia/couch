import { memo } from "react";
import { ScrollView, View } from "react-native";
import type { Propless } from "Types/React";
import { CalendarView } from "./CalendarView";
import { EventList } from "./EventList";
import { Styles } from "./Styles";

export const UserEvents = memo(
  function UserEvents(_: Propless) {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.content}>
          <CalendarView />
          <EventList />
        </View>
      </ScrollView>
    );
  },
  () => true,
);
