import { memo, useEffect } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Animated, Text, View } from "react-native";
import { LinearGradient, Stop } from "react-native-svg";
import { ProgressRing } from "Components/ProgressRing";
import { useController } from "Hooks/Generics/useController";
import type { IIssue } from "Models/Issues";
import { useIssues } from "State/Issues";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const IssueCard = memo(function IssueCard({
  style,
  truncate,
  pressable,
  ...issue
}: Props) {
  const { id, type, title, progress, description } = issue;
  const controller = useController(new Controller(issue, pressable));
  controller.register(issue, pressable);
  const active = useIssues(state => state.activeIssue?.id === id);

  const { Wrapper, Icon, gradient } = controller;
  const [color1, color2] = gradient;

  useEffect(() => {
    if (!active) {
      controller.show();
    }
  }, [active, controller]);

  return (
    <Animated.View
      ref={controller.cacheNode}
      style={[
        Styles.issueCard,
        {
          opacity: controller.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
        style,
      ]}>
      <Wrapper onPress={controller.onPress} style={Styles.touchable}>
        <View style={Styles.inner}>
          <View style={Styles.icon}>
            <Icon stroke={color1} />
          </View>
          <View style={Styles.meta}>
            <Text style={[Styles.type, { color: color2 }]}>{type}</Text>
            <Text style={Styles.title}>{title}</Text>
            {description && (
              <Text
                style={Styles.description}
                numberOfLines={truncate ? 2 : undefined}>
                {description}
              </Text>
            )}
          </View>
          <View style={Styles.graph}>
            <ProgressRing
              animate={false}
              strokeWidth={8}
              progress={progress}
              backgroundStrokeWidth={7}
              stroke={controller.stroke}
              numberStyles={[Styles.percentage, { color: color2 }]}
              SVGChildren={
                <LinearGradient
                  x1={0}
                  y1={1}
                  x2={0}
                  y2={0}
                  id={controller.gradientID}>
                  <Stop stopColor={color1} offset={0} />
                  <Stop stopColor={color2} offset={1} />
                </LinearGradient>
              }
            />
          </View>
        </View>
      </Wrapper>
    </Animated.View>
  );
});

interface Props extends IIssue {
  pressable?: boolean;
  truncate?: boolean;
  style?: StyleProp<ViewStyle>;
}
