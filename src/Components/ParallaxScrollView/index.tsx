import type { ComponentType } from "react";
import { memo, useMemo, useState } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Animated, useAnimatedValue, View } from "react-native";
import { Styles as PSVStyles } from "Components/PageScrollView/Styles";
import { UtilityStyles } from "Styles/Utility";
import type { OptionalChildren } from "Types/React";
import { Styles } from "./Styles";

export const ParallaxScrollView = memo(
  function ParallaxScrollView({ style, children, ParallaxChildren }: Props) {
    const [size, setSize] = useState(20);
    const scrollAnim = useAnimatedValue(0);
    const scaleBoundary = useMemo(() => size * 0.3, [size]);
    const opacityBoundary = useMemo(() => size * 1.25, [size]);
    return (
      <Animated.ScrollView
        style={PSVStyles.container}
        contentContainerStyle={UtilityStyles.center}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
          { useNativeDriver: true },
        )}>
        <View style={[PSVStyles.inner, style]}>
          <Animated.View
            style={[
              Styles.parallaxChildren,
              {
                opacity: scrollAnim.interpolate({
                  inputRange: [0, scaleBoundary, opacityBoundary],
                  outputRange: [1, 1, 0],
                  extrapolate: "clamp",
                }),
                transform: [
                  {
                    scale: scrollAnim.interpolate({
                      inputRange: [-scaleBoundary, 0, scaleBoundary],
                      outputRange: [1.1, 1, 0.85],
                      extrapolate: "clamp",
                    }),
                  },
                  {
                    translateY: scrollAnim.interpolate({
                      inputRange: [-scaleBoundary, 0, scaleBoundary, size * 2],
                      outputRange: [
                        opacityBoundary * -0.135,
                        1,
                        size * 0.15,
                        size * -0.135,
                      ],
                      extrapolate: "extend",
                    }),
                  },
                ],
              },
            ]}>
            <ParallaxChildren onSize={setSize} />
          </Animated.View>
          {children}
        </View>
      </Animated.ScrollView>
    );
  },
  () => true,
);

export interface OnSizeProp {
  onSize: (size: number) => void;
}

interface Props extends OptionalChildren {
  style?: StyleProp<ViewStyle>;
  ParallaxChildren: ComponentType<OnSizeProp>;
}
