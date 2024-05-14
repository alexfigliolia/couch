import type { ReactNode } from "react";
import { memo, useCallback, useEffect, useState } from "react";
import type { LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";
import { Animated, View } from "react-native";
import { Screen } from "Dimensions/Screen";
import { useController } from "Hooks/Generics/useController";
import { useUnmount } from "Hooks/Generics/useUnmount";
import type { OptionalChildren } from "Types/React";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const ActionSheet = memo(function ActionSheet({
  style,
  close,
  header,
  active,
  children,
  bar = true,
}: Props) {
  const [height, setHeight] = useState(Screen.HEIGHT);
  const controller = useController(new Controller(close));

  useEffect(() => {
    if (active) {
      controller.enter();
    } else {
      controller.exit();
    }
  }, [active, controller]);

  useUnmount(() => {
    controller.reset();
  });

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const { height } = e.nativeEvent.layout;
      setHeight(height);
      controller.height = height;
    },
    [controller],
  );

  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        Styles.container,
        {
          transform: [
            {
              translateY: controller.translateY.interpolate({
                inputRange: [0, 1],
                outputRange: [height + 10, 0],
                extrapolate: "clamp",
              }),
            },
          ],
        },
        style,
      ]}>
      <View style={Styles.inner}>
        {bar && <View style={Styles.bar} />}
        <View style={Styles.heading} {...controller.panResponder.panHandlers}>
          {header}
        </View>
        {children}
      </View>
    </Animated.View>
  );
});

interface Props extends OptionalChildren {
  bar?: boolean;
  active: boolean;
  header?: ReactNode;
  close?: () => void;
  style?: StyleProp<ViewStyle>;
}
