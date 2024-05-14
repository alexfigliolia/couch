import { memo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import type { HeadingProps } from "Components/Heading";
import { Heading } from "Components/Heading";
import { CoreTheme } from "Themes/Core";
import { Styles } from "./Styles";

export const DecorHeading = memo(function DecorHeading({
  style,
  type = "dot",
  containerStyle,
  color = CoreTheme.LIGHT_BLACK,
  ...rest
}: Props) {
  return (
    <View style={[Styles.container, containerStyle]}>
      <View
        style={[
          type === "dot" ? Styles.dot : Styles.line,
          { backgroundColor: color },
        ]}
      />
      <Heading {...rest} style={[style, { color }]} />
    </View>
  );
});

interface Props extends HeadingProps {
  type?: "dot" | "line";
  containerStyle?: StyleProp<ViewStyle>;
}
