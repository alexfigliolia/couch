import type { RefObject } from "react";
import { memo, useCallback, useState } from "react";
import type { TextInputProps } from "react-native";
import {
  Animated,
  LayoutAnimation,
  TextInput,
  useAnimatedValue,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { CoreTheme } from "Themes/Core";
import { Styles } from "./Styles";

export const Input = memo(function Input({
  style,
  nodeRef,
  placeholder,
  placeholderTextColor,
  theme = CoreTheme.UI_GRADIENT_BRIGHT,
  ...rest
}: Props) {
  const scale = useAnimatedValue(0);
  const [focused, setFocused] = useState(false);

  const animate = useCallback(
    (toValue: 1 | 0) => {
      Animated.timing(scale, {
        toValue,
        duration: 300,
        useNativeDriver: true,
      }).start();
    },
    [scale],
  );

  const onFocus = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setFocused(true);
    animate(1);
  }, [animate]);

  const onBlur = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setFocused(false);
    animate(0);
  }, [animate]);

  return (
    <View style={Styles.container}>
      <TextInput
        {...rest}
        ref={nodeRef}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[focused ? Styles.inputFocused : Styles.input, style]}
      />
      <Animated.View
        style={[
          Styles.line,
          {
            transform: [
              {
                scaleX: scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
            backgroundColor: theme[1],
            shadowColor: theme[1],
          },
        ]}>
        <LinearGradient
          colors={theme}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={Styles.lineInner}
        />
      </Animated.View>
    </View>
  );
});

interface Props extends TextInputProps {
  theme?: string[];
  nodeRef: RefObject<TextInput>;
}
