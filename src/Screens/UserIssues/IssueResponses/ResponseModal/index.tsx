import { memo } from "react";
import { Animated, KeyboardAvoidingView } from "react-native";
import { useController } from "Hooks/Generics/useController";
import type { Propless } from "Types/React";
import { Controller } from "./Controller";
import { Input } from "./Input";
import { IssueContainer } from "./IssueContainer";
import { Messages } from "./Messages";
import { Styles } from "./Styles";

const KeyboardView = Animated.createAnimatedComponent(KeyboardAvoidingView);

export const ResponseModal = memo(
  function ResponseModal(_: Propless) {
    const controller = useController(new Controller());
    return (
      <KeyboardView
        behavior="padding"
        keyboardVerticalOffset={120}
        style={[
          Styles.container,
          {
            backgroundColor: controller.contentOpacity.interpolate(
              Controller.BACKGROUND_TRANSITION,
            ),
          },
        ]}>
        <IssueContainer controller={controller} />
        <Animated.View
          style={[
            Styles.content,
            {
              opacity: controller.contentOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}>
          <Messages />
          <Input />
        </Animated.View>
      </KeyboardView>
    );
  },
  () => true,
);
