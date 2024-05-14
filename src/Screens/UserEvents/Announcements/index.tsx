import { memo } from "react";
import { View } from "react-native";
import { Heading } from "Components/Heading";
import { ListItemCard } from "Components/ListItemCard";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const Announcements = memo(function Announcements(_: Propless) {
  return (
    <View style={Styles.container}>
      <Heading text="Announcements" />
      <ListItemCard
        title="Administrator"
        description="Your fire alarms will be inspected on Tuesday, April 6th"
      />
      <ListItemCard
        title="Administrator"
        description="Your fire alarms will be inspected on Tuesday, April 6th"
      />
      <ListItemCard
        title="Administrator"
        description="Your fire alarms will be inspected on Tuesday, April 6th"
      />
      <ListItemCard
        title="Administrator"
        description="Your fire alarms will be inspected on Tuesday, April 6th"
      />
      <ListItemCard
        title="Administrator"
        description="Your fire alarms will be inspected on Tuesday, April 6th"
      />
    </View>
  );
});
