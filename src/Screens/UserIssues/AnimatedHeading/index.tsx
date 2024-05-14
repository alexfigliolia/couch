import { memo, useEffect, useMemo, useRef } from "react";
import { Animated, Easing, Text, useAnimatedValue, View } from "react-native";
import { useIssues } from "State/Issues";
import { IssueTheme } from "Themes/Issues";
import type { Propless } from "Types/React";
import { Styles, TEXT_HEIGHT } from "./Styles";

export const AnimatedHeading = memo(
  function AnimatedHeading(_: Propless) {
    const previous = useRef(0);
    const animator = useAnimatedValue(0);
    const active = useIssues(state => state.queuedType || state.activeType);
    const activeIndex = useMemo(
      () => IssueTheme.ISSUE_KEYS.indexOf(active),
      [active],
    );
    const animation = useMemo(() => {
      const inputRange: number[] = [];
      const outputRange: number[] = [];
      IssueTheme.ISSUE_KEYS.forEach((_, i) => {
        inputRange.push(i);
        outputRange.push(i * -TEXT_HEIGHT);
      });
      return { inputRange, outputRange };
    }, []);

    useEffect(() => {
      Animated.timing(animator, {
        duration: Math.abs(activeIndex - previous.current) * 700,
        toValue: activeIndex,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }).start();
      previous.current = activeIndex;
    }, [activeIndex, animator]);

    return (
      <View style={Styles.container}>
        <View style={Styles.line} />
        <Text style={Styles.name}>Your&nbsp;</Text>
        <View style={Styles.textContainer}>
          <Animated.View
            style={[
              Styles.window,
              {
                transform: [{ translateY: animator.interpolate(animation) }],
              },
            ]}>
            {IssueTheme.ISSUE_KEYS.map(key => {
              return (
                <Text key={key} style={Styles.name}>
                  {IssueTheme.displayName(key)}
                </Text>
              );
            })}
          </Animated.View>
        </View>
      </View>
    );
  },
  () => true,
);
