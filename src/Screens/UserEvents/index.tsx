import { memo } from "react";
import { ScrollView, View } from "react-native";
import { UtilityStyles } from "Styles/Utility";
import type { Propless } from "Types/React";
import { EventList } from "./EventList";

export const UserEvents = memo(
  function UserEvents(_: Propless) {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={UtilityStyles.fill}>
          <EventList />
        </View>
      </ScrollView>
    );
  },
  () => true,
);
