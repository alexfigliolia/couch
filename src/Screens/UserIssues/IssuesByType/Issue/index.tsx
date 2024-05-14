import { memo, useCallback, useEffect, useMemo } from "react";
import { Animated, Text, TouchableWithoutFeedback, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ActionProgress } from "Components/ActionProgress";
import { useController } from "Hooks/Generics/useController";
import { useMount } from "Hooks/Generics/useMount";
import type { IIssue } from "Models/Issues";
import { Issues, useIssues } from "State/Issues";
import { Modals } from "State/Modals";
import { IssueTheme } from "Themes/Issues";
import { Dates } from "Tools/Dates";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const Issue = memo(function Issue({ last, ...issue }: Props) {
  const { type, date, title, status, progress, description } = issue;
  const nextType = useIssues(state => state.queuedType);
  const controller = useController(new Controller(last));
  const Icon = useMemo(() => IssueTheme.icon(type), [type]);
  const theme = useMemo(() => IssueTheme.typeGradient(type), [type]);
  controller.setLast(last);

  useMount(() => {
    controller.enter();
  });

  useEffect(() => {
    if (nextType !== null) {
      controller.exit();
    }
  }, [nextType, controller]);

  const onPress = useCallback(() => {
    Issues.activateIssue(issue);
    Modals.openIssueViewer();
  }, [issue]);

  return (
    <Animated.View
      style={[
        Styles.container,
        {
          opacity: controller.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              scale: controller.scale.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.95],
              }),
            },
          ],
        },
      ]}>
      <LinearGradient colors={theme} style={Styles.gradient}>
        <TouchableWithoutFeedback
          onPress={onPress}
          onPressOut={controller.grow}
          onPressIn={controller.shrink}>
          <View style={Styles.gradientInner}>
            <View style={Styles.heading}>
              <View style={Styles.icon}>
                <Icon stroke="#fff" />
              </View>
              <Text style={Styles.date}>{Dates.format(new Date(date))}</Text>
            </View>
            <View style={Styles.description}>
              <Text style={Styles.title}>{title}</Text>
              {description && (
                <Text style={Styles.descriptionText}>{description}</Text>
              )}
            </View>
            <ActionProgress label={status} progress={progress} />
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </Animated.View>
  );
});

interface Props extends IIssue {
  last: boolean;
}
