import { memo } from "react";
import type { StyleProp, TextStyle } from "react-native";
import { Animated, Easing, useAnimatedValue, View } from "react-native";
import { AnimatedNumber } from "react-native-counter-animation";
import type { ChartDatum } from "@figliolia/rn-donut-chart";
import { DonutChart as RNDonut } from "@figliolia/rn-donut-chart";
import { useMount } from "Hooks/Generics/useMount";
import { Styles } from "./Styles";

export const DonutChart = memo(function DonutChart({
  data,
  value,
  subText,
  onLayout,
  numberStyles,
  subTextStyles,
  strokeWidth = 10,
}: Props) {
  const opacity = useAnimatedValue(0);

  useMount(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: 2000,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  });

  return (
    <RNDonut
      data={data}
      duration={1200}
      onMeasure={onLayout}
      strokeWidth={strokeWidth}>
      <View style={Styles.textContainer}>
        <AnimatedNumber
          delay={500}
          stagger={70}
          value={value}
          duration={1200}
          style={numberStyles}
          easing={Easing.out(Easing.exp)}
        />
        {subText && (
          <Animated.Text
            style={[
              subTextStyles,
              {
                opacity: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ]}>
            {subText}
          </Animated.Text>
        )}
      </View>
    </RNDonut>
  );
});

interface Props {
  value: string;
  subText?: string;
  data: ChartDatum[];
  strokeWidth?: number;
  onLayout?: (size: number) => void;
  numberStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}
