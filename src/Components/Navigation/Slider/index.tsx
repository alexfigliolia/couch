import { memo, useEffect, useMemo } from "react";
import { Animated, useAnimatedValue } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UserRoutes } from "Routing/UserRoutes";
import { useLocation } from "Tools/Router";
import { Styles } from "./Styles";

export const Slider = memo(
  function Slider() {
    const path = useLocation();
    const animator = useAnimatedValue(0);

    const activeIndex = useMemo(() => UserRoutes.matchIndex(path), [path]);

    const whiteSpace = useMemo(
      () => (Screen.WIDTH * 0.9 - 5 * Screen.NAV_BUTTON_SIZE) / 4,
      [],
    );

    const interpolation = useMemo(() => {
      const inputRange: number[] = [];
      const outputRange: number[] = [];
      let pointer = 0;
      for (const _ of UserRoutes.list) {
        inputRange.push(pointer);
        outputRange.push(
          pointer * Screen.NAV_BUTTON_SIZE + pointer * whiteSpace,
        );
        pointer++;
      }
      return { inputRange, outputRange };
    }, [whiteSpace]);

    useEffect(() => {
      Animated.spring(animator, {
        toValue: activeIndex,
        useNativeDriver: true,
      }).start();
    }, [activeIndex, animator]);

    return (
      <Animated.View
        style={[
          Styles.slider,
          {
            transform: [
              {
                translateX: animator.interpolate(interpolation),
              },
            ],
          },
        ]}
      />
    );
  },
  () => true,
);
