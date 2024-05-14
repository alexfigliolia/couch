import { memo, useCallback, useMemo, useState } from "react";
import type {
  LayoutChangeEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Animated, Text, View } from "react-native";
import { useController } from "Hooks/Generics/useController";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const SwipeToAction = memo(function SwipeToAction({
  label,
  labelStyle,
  backgroundStyle,
  foregroundStyle,
}: Props) {
  const controller = useController(new Controller());
  const [tabWidth, setTabWidth] = useState<number>(40);
  const [containerWidth, setContainerWidth] = useState<"auto" | number>("auto");

  const distance = useMemo(
    () => (containerWidth === "auto" ? 0 : containerWidth - tabWidth),
    [containerWidth, tabWidth],
  );

  const layoutGenerator = useCallback(
    <T extends (width: number) => void>(
      action: T,
      key: "tabWidth" | "containerWidth",
    ) => {
      return (e: LayoutChangeEvent) => {
        const { width } = e.nativeEvent.layout;
        action(width);
        controller[key] = width;
      };
    },
    [controller],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onTabLayout = useCallback(layoutGenerator(setTabWidth, "tabWidth"), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onContainerLayout = useCallback(
    layoutGenerator(setContainerWidth, "containerWidth"),
    [],
  );

  return (
    <View
      onLayout={onContainerLayout}
      style={[Styles.container, backgroundStyle]}>
      <View style={Styles.inner}>
        <Animated.View
          onLayout={onTabLayout}
          {...controller.panResponder.panHandlers}
          style={[
            Styles.draggable,
            foregroundStyle,
            {
              transform: [
                {
                  translateX: controller.translateX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, distance],
                  }),
                },
              ],
            },
          ]}
        />
        {label && (
          <View style={Styles.label}>
            <Text style={(Styles.labelText, [labelStyle])}>{label}</Text>
          </View>
        )}
      </View>
    </View>
  );
});

interface Props {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  backgroundStyle?: StyleProp<ViewStyle>;
  foregroundStyle?: StyleProp<ViewStyle>;
}
