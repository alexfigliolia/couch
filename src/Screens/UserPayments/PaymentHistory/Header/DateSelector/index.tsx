import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { CoreTheme } from "Themes/Core";
import { Styles } from "./Styles";

export const DateSelector = memo(function DateSelector({
  text,
  onPress,
}: Props) {
  return (
    <View style={Styles.selector}>
      <LinearGradient
        colors={CoreTheme.UI_GRADIENT_BRIGHT}
        style={Styles.gradient}>
        <TouchableOpacity onPress={onPress} style={Styles.touchable}>
          <Text style={Styles.text}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
});

interface Props {
  text: string;
  onPress: () => void;
}
