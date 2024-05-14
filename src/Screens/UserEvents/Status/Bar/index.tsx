import { memo, useLayoutEffect } from "react";
import { Animated, Text, useAnimatedValue, View } from "react-native";
import type { LinearGradientProps } from "react-native-linear-gradient";
import LinearGradient from "react-native-linear-gradient";
import { useDebouncer } from "Hooks/Generics/useDebouncer";
import { Styles } from "./Styles";

export const Bar = memo(
  function Bar({ progress, label, delay = 0, colors, ...rest }: Props) {
    const [_, color] = colors;
    const height = useAnimatedValue(0);
    const width = useAnimatedValue(0);

    const animate = useDebouncer(() => {
      Animated.parallel([
        Animated.timing(height, {
          toValue: 1,
          delay,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 1,
          delay,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    });

    useLayoutEffect(() => {
      animate();
    }, [animate]);

    return (
      <View style={Styles.container}>
        <View style={Styles.barContainer}>
          <Animated.View
            style={[
              Styles.bar,
              {
                width: width.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["50%", "100%"],
                }),
                height: height.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["5%", `${progress}%`],
                }),
                shadowColor: color,
              },
            ]}>
            <LinearGradient colors={colors} style={Styles.gradient} {...rest} />
          </Animated.View>
        </View>
        <Text style={[Styles.text, { color }]}>{label}</Text>
      </View>
    );
  },
  (pp, np) => pp.progress === np.progress,
);

interface Props extends LinearGradientProps {
  progress: number;
  label: string;
  delay?: number;
  colors: string[];
}
