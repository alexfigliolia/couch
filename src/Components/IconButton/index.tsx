import { memo } from "react";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import type { OptionalChildren } from "Types/React";
import Styles from "./Styles";

export const IconButton = memo(function IconButton({
  style,
  label,
  onPress,
  children,
  textStyle,
}: Props) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={onPress} style={[Styles.touchable, style]}>
        {children}
      </TouchableOpacity>
      <Text numberOfLines={1} style={[Styles.text, textStyle]}>
        {label}
      </Text>
    </View>
  );
});

interface Props extends OptionalChildren {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
