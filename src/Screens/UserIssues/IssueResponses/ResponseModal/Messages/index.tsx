import { memo, useEffect, useMemo } from "react";
import { ScrollView, Text } from "react-native";
import { useController } from "Hooks/Generics/useController";
import { useUnmount } from "Hooks/Generics/useUnmount";
import { useActiveIssue } from "Hooks/Issues/useActiveIssue";
import type { Propless } from "Types/React";
import { Controller } from "./Controller";
import { Message } from "./Message";
import { Styles } from "./Styles";

export const Messages = memo(
  function Messages(_: Propless) {
    const controller = useController(new Controller());
    const [activeIssue, theme] = useActiveIssue();
    const responses = useMemo(
      () => activeIssue?.responses ?? [],
      [activeIssue],
    );

    useEffect(() => {
      controller.scrollToEnd();
    }, [responses.length, controller]);

    useUnmount(() => {
      controller.unmount();
    });

    return (
      <ScrollView ref={controller.registerNode} style={Styles.container}>
        {responses.length ? (
          responses.map((response, i) => {
            return (
              <Message
                {...response}
                theme={theme}
                key={response.id}
                last={i === responses.length - 1}
              />
            );
          })
        ) : (
          <Text style={Styles.noMessages}>Send the first message</Text>
        )}
      </ScrollView>
    );
  },
  () => true,
);
