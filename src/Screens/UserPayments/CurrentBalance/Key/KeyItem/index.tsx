import { memo } from "react";
import { Animated, Easing, Text, useAnimatedValue, View } from "react-native";
import { AnimatedNumber } from "react-native-counter-animation";
import LinearGradient from "react-native-linear-gradient";
import { useMount } from "Hooks/Generics/useMount";
import { Numbers } from "Tools/Numbers";
import { Styles } from "./Styles";

export const KeyItem = memo(function KeyItem({
  label,
  value,
  total,
  colors,
}: Props) {
  const width = useAnimatedValue(0);

  useMount(() => {
    Animated.timing(width, {
      toValue: 1,
      delay: 500,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.circle),
    }).start();
  });

  return (
    <View style={Styles.keyItem}>
      <View style={Styles.keyLabels}>
        <Text style={Styles.markerLabel}>{label}</Text>
        <AnimatedNumber
          delay={500}
          duration={1000}
          style={Styles.amount}
          easing={Easing.out(Easing.circle)}
          value={Numbers.formatCurrency(value)}
        />
      </View>
      <View style={Styles.bar}>
        <Animated.View
          style={[
            Styles.marker,
            {
              shadowColor: colors[1],
              width: width.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", `${(value / total) * 100}%`],
              }),
            },
          ]}>
          <LinearGradient
            colors={colors}
            end={{ x: 0, y: 0 }}
            start={{ x: 1, y: 0 }}
            style={Styles.markerInner}
          />
        </Animated.View>
      </View>
    </View>
  );
});

interface Props {
  label: string;
  value: number;
  total: number;
  colors: string[];
}
