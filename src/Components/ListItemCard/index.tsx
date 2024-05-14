import { memo } from "react";
import { Text, View } from "react-native";
import type { OptionalChildren } from "Types/React";
import { Styles } from "./Styles";

export const ListItemCard = memo(function ListItemCard({
  title,
  date,
  description,
  children,
}: Props) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
      {date && <Text style={Styles.date}>{date}</Text>}
      <Text style={Styles.description}>{description}</Text>
      {children}
    </View>
  );
});

interface Props extends OptionalChildren {
  title: string;
  date?: string;
  description: string;
}
