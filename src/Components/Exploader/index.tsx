import { memo, useEffect } from "react";
import { Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Screen } from "Dimensions/Screen";
import { useController } from "Hooks/Generics/useController";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const Exploader = memo(
  function Exploader({
    visible,
    range = Screen.EXPLOADER_RANGE,
    size = Screen.FLOATING_BUTTON_SIZE,
    theme = CoreTheme.UI_GRADIENT_BRIGHT,
    bottom = Screen.FLOATING_BUTTON_BORDER_RADIUS / 2,
    left = Screen.FLOATING_BUTTON_HORIZONTAL_POSITION,
    borderRadius = Screen.FLOATING_BUTTON_BORDER_RADIUS,
    transitionDuration = Screen.EXPLOADER_TRANSITION_DURATION,
  }: Props) {
    const controller = useController(new Controller());
    controller.registerDuration(transitionDuration);

    useEffect(() => {
      if (visible) {
        controller.open();
      } else {
        controller.close();
      }
    }, [visible, controller]);

    return (
      <Animated.View
        style={[
          Styles.container,
          {
            left,
            bottom,
            width: size,
            height: size,
            borderRadius,
            ...UtilityStyles.shadow,
            opacity: controller.opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
            transform: [
              {
                scale: controller.scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, range],
                }),
              },
            ],
          },
        ]}>
        <LinearGradient
          colors={theme}
          style={[UtilityStyles.fill, { borderRadius }]}>
          <Animated.View
            style={[
              Styles.inner,
              {
                opacity: controller.color.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ]}
          />
        </LinearGradient>
      </Animated.View>
    );
  },
  (pp, np) => pp.visible === np.visible,
);

interface Props {
  size?: number;
  left?: number;
  range?: number;
  bottom?: number;
  theme?: string[];
  visible: boolean;
  borderRadius?: number;
  transitionDuration?: number;
}
