import { Fragment, memo, useCallback, useMemo } from "react";
import { Animated } from "react-native";
import { CloserButton } from "Components/CloserButton";
import { IssueCard } from "Components/IssueCard";
import { useMount } from "Hooks/Generics/useMount";
import { useActiveIssue } from "Hooks/Issues/useActiveIssue";
import { useIssues } from "State/Issues";
import { useScreen } from "State/Screen";
import { Controller } from "../Controller";
import { Styles } from "./Styles";

export const IssueContainer = memo(
  function IssueContainer({ controller }: Props) {
    const greetingHeight = useScreen(state => state.greetingHeight);
    const issuePosition = useIssues(state => state.activeIssueYPosition);
    const yPosition = useMemo(
      () => issuePosition - greetingHeight,
      [issuePosition, greetingHeight],
    );
    const [activeIssue, [, color]] = useActiveIssue();
    controller.register(yPosition);

    useMount(() => {
      controller.enter();
    });

    const close = useCallback(() => {
      controller.close();
    }, [controller]);

    return (
      <Fragment>
        <Animated.View
          style={[
            Styles.closer,
            {
              opacity: controller.contentOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}>
          <CloserButton stroke={color} onPress={close} />
        </Animated.View>
        <Animated.View
          style={[
            Styles.issueContainer,
            {
              shadowOpacity: controller.translate.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.2],
              }),
              backgroundColor: controller.translate.interpolate(
                Controller.BACKGROUND_TRANSITION,
              ),
              opacity: controller.cardOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: controller.translate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [yPosition, 0],
                  }),
                },
              ],
            },
          ]}>
          {activeIssue && (
            <IssueCard
              truncate
              {...activeIssue}
              style={[
                Styles.issueCard,
                {
                  shadowOpacity: controller.translate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.1, 0],
                  }),
                  transform: [
                    {
                      translateX: controller.translate.interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          yPosition === 0 ? Controller.CARD_ORIGIN_X : 0,
                          Controller.CARD_ORIGIN_X,
                        ],
                      }),
                    },
                  ],
                },
              ]}
            />
          )}
        </Animated.View>
      </Fragment>
    );
  },
  () => true,
);

interface Props {
  controller: Controller;
}
