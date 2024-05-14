// @refresh reset
import type { ReactNode } from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LayoutChangeEvent, StyleProp, TextStyle } from "react-native";
import { Animated, Text, View } from "react-native";
import { AnimatedNumber } from "react-native-counter-animation";
import { Circle, Svg } from "react-native-svg";
import { useController } from "Hooks/Generics/useController";
import { useUnmount } from "Hooks/Generics/useUnmount";
import { CoreTheme } from "Themes/Core";
import type { OptionalChildren } from "Types/React";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const ProgressRing = memo(function ProgressRing({
  children,
  onLayout,
  SVGChildren,
  numberStyles,
  progress = 100,
  animate = true,
  strokeWidth = 10,
  shadowOpacity = 0.2,
  stroke = CoreTheme.BLACK,
  shadowColor = CoreTheme.BLACK,
  backgroundStrokeWidth = strokeWidth,
  backgroundStroke = CoreTheme.BACKGROUND_GRAY,
}: Props) {
  const node = useRef<Circle>(null);
  const [fontSize, setFontSize] = useState(0);
  const [strokeLength, setStrokeLength] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const controller = useController(new Controller());
  const letterSpacing = useMemo(() => fontSize / -25, [fontSize]);

  useUnmount(() => {
    controller.Debouncer.clear();
  });

  useEffect(() => {
    if (!animate) {
      return;
    }
    const duration = (circumference - (circumference - strokeLength)) * 20;
    controller.Debouncer.execute(duration);
  }, [animate, strokeLength, circumference, controller]);

  const resize = useCallback(
    (e: LayoutChangeEvent) => {
      onLayout?.(e);
      setFontSize(e.nativeEvent.layout.width / 4);
      if (!node.current) {
        return;
      }
      const [circumference, pathLength] = controller.computeProgress(
        node.current,
        Math.max(progress, 2.5),
      );
      setStrokeLength(pathLength);
      setCircumference(circumference);
      if (!animate) {
        controller.animatedValue.setValue(1);
      }
    },
    [progress, controller, node, onLayout, animate],
  );

  return (
    <View style={Styles.container}>
      <Svg style={Styles.background} viewBox="0 0 100 100" fill="none">
        <Circle
          r="45"
          cx="50"
          cy="50"
          stroke={backgroundStroke}
          strokeWidth={backgroundStrokeWidth}
        />
      </Svg>
      <Svg
        style={[Styles.foreground, { shadowColor, shadowOpacity }]}
        viewBox="0 0 100 100"
        fill="none">
        <AnimatedCircle
          r="45"
          cx="50"
          cy="50"
          ref={node}
          stroke={stroke}
          onLayout={resize}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={controller.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [circumference, strokeLength],
          })}
        />
        {SVGChildren}
      </Svg>
      <View style={Styles.number}>
        {animate ? (
          <AnimatedNumber
            style={[
              Styles.numberText,
              numberStyles,
              {
                fontSize,
                marginLeft: letterSpacing,
                marginRight: letterSpacing,
              },
            ]}
            delay={200}
            duration={1000}
            value={`${progress}%`}
          />
        ) : (
          <Text
            style={[
              Styles.numberText,
              numberStyles,
              {
                fontSize,
                marginLeft: letterSpacing,
                marginRight: letterSpacing,
              },
            ]}>
            {progress}%
          </Text>
        )}
      </View>
      {children}
    </View>
  );
});

interface Props extends OptionalChildren {
  stroke?: string;
  animate?: boolean;
  progress?: number;
  strokeWidth?: number;
  shadowColor?: string;
  shadowOpacity?: number;
  SVGChildren?: ReactNode;
  backgroundStroke?: string;
  backgroundStrokeWidth?: number;
  numberStyles?: StyleProp<TextStyle>;
  onLayout?: (event: LayoutChangeEvent) => void;
}
