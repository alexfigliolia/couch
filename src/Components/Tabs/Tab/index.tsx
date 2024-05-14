import { memo, useCallback } from "react";
import type { LayoutChangeEvent } from "react-native";
import { Animated, TouchableOpacity, useAnimatedValue } from "react-native";
import { useMount } from "Hooks/Generics/useMount";
import { useUpdate } from "Hooks/Generics/useOnUpdate";
import { CoreTheme } from "Themes/Core";
import { Styles } from "./Styles";

export const Tab = memo(function Tab({
  text,
  index,
  active,
  hitSlop,
  onPress,
  measure,
  textColor = CoreTheme.LIGHT_BLACK,
}: Props) {
  const font = useAnimatedValue(0);

  useMount(() => {
    if (active) {
      font.setValue(1);
    }
  });

  useUpdate(() => {
    Animated.timing(font, {
      toValue: active ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [active, font]);

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      measure(index, e);
    },
    [index, measure],
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      onLayout={onLayout}
      hitSlop={{
        left: hitSlop,
        right: hitSlop,
      }}>
      <Animated.Text
        numberOfLines={1}
        style={[
          Styles.text,
          {
            color: font.interpolate({
              inputRange: [0, 1],
              outputRange: [textColor, "#fff"],
            }),
          },
        ]}>
        {text}
      </Animated.Text>
    </TouchableOpacity>
  );
});

interface Props {
  text: string;
  index: number;
  hitSlop: number;
  active: boolean;
  textColor?: string;
  onPress: () => void;
  measure: (index: number, event: LayoutChangeEvent) => void;
}
