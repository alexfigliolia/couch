import { memo, useCallback, useEffect } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useController } from "Hooks/Generics/useController";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";
import { Controller } from "./Controller";
import { Styles, TRANSLATE_DISTANCE } from "./Styles";

export const Selector = memo(function Selector({
  value,
  index,
  select,
  visible,
  isActive,
}: Props) {
  const controller = useController(new Controller());
  controller.registerIndex(index);

  useEffect(() => {
    if (visible) {
      controller.show();
    } else {
      controller.hide();
    }
  }, [visible, controller]);

  useEffect(() => {
    if (isActive) {
      controller.activate();
    } else {
      controller.deactivate();
    }
  }, [isActive, controller]);

  const onPress = useCallback(() => {
    select(index);
  }, [index, select]);

  return (
    <Animated.View
      style={[
        Styles.button,
        isActive ? Styles.active : undefined,
        {
          opacity: controller.translate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: controller.translate.interpolate({
                inputRange: [0, 1],
                outputRange: [TRANSLATE_DISTANCE, 0],
              }),
            },
            {
              scale: controller.scale.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1],
              }),
            },
          ],
        },
      ]}>
      <LinearGradient
        colors={CoreTheme.UI_GRADIENT_BRIGHT}
        style={[Styles.gradient, isActive ? Styles.gradientActive : undefined]}>
        <Animated.View
          style={[
            Styles.gradientInner,
            {
              backgroundColor: controller.background.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  "rgba(255, 255, 255, 1)",
                  "rgba(255, 255, 255, 0)",
                ],
              }),
            },
          ]}>
          <TouchableOpacity
            onPress={onPress}
            style={UtilityStyles.fillAndCenter}>
            <Text
              numberOfLines={1}
              style={[
                Styles.buttonText,
                isActive ? Styles.textActive : undefined,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
});

interface Props {
  index: number;
  visible: boolean;
  isActive: boolean;
  value: string | number;
  select: (index: number) => void;
}
