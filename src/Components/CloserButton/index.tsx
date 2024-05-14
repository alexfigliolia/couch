import { memo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native";
import { Close } from "Icons/Close";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const CloserButton = memo(function CloserButton({
  style,
  onPress,
  stroke = "#fff",
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.closer, style]}>
      <Close stroke={stroke} />
    </TouchableOpacity>
  );
});

interface Props extends Stroke {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
