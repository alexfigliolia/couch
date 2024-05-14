import { memo } from "react";
import type { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native";
import type { LinearGradientProps } from "react-native-linear-gradient";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Styles } from "./Styles";

export const GradientText = memo(function GradientText({
  text,
  style,
  ...rest
}: GradientTextProps) {
  return (
    <MaskedView maskElement={<Text style={style}>{text}</Text>}>
      <LinearGradient {...rest}>
        <Text style={[style, Styles.invisible]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
});

export interface GradientTextProps extends LinearGradientProps {
  text: string;
  colors: string[];
  style?: StyleProp<TextStyle>;
}
