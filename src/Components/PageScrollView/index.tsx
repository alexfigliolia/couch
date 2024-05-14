import { memo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { ScrollView, View } from "react-native";
import type { OptionalChildren } from "Types/React";
import { Styles } from "./Styles";

export const PageScrollView = memo(function PageScrollView({
  style,
  children,
}: Props) {
  return (
    <ScrollView style={Styles.container}>
      <View style={[Styles.inner, style]}>{children}</View>
    </ScrollView>
  );
});

interface Props extends OptionalChildren {
  style?: StyleProp<ViewStyle>;
}
