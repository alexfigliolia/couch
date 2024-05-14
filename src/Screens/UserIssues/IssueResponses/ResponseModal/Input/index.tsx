import { memo, useCallback, useRef, useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useActiveIssue } from "Hooks/Issues/useActiveIssue";
import { Send } from "Icons/Send";
import { UtilityStyles } from "Styles/Utility";
import type { Propless } from "Types/React";
import { ResponseEmitter } from "../Emitter";
import { Styles } from "./Styles";

export const Input = memo(
  function Input(_: Propless) {
    const [, theme] = useActiveIssue();
    const input = useRef<TextInput>(null);
    const [message, setMessage] = useState("");
    const height = useRef<number | null>(null);

    const onFocus = useCallback(() => {
      ResponseEmitter.emit("scrollToEnd", 60);
    }, []);

    const onChange = useCallback((text: string) => {
      setMessage(text);
    }, []);

    const onLayout = useCallback((e: LayoutChangeEvent) => {
      const { height: nextHeight } = e.nativeEvent.layout;
      if (height.current === null) {
        height.current = nextHeight;
        return;
      }
      if (height.current < nextHeight) {
        ResponseEmitter.emit("scrollToEnd", 0);
      }
    }, []);

    const sendMessage = useCallback(() => {
      setMessage("");
      input.current?.clear();
      onFocus();
    }, [onFocus]);

    return (
      <View style={Styles.container}>
        <TextInput
          multiline
          ref={input}
          value={message}
          onFocus={onFocus}
          onLayout={onLayout}
          style={Styles.input}
          placeholder="Message"
          onChangeText={onChange}
        />
        <View style={Styles.button}>
          <LinearGradient
            colors={theme}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={Styles.gradient}>
            <TouchableOpacity
              onPress={sendMessage}
              style={UtilityStyles.fillAndCenter}>
              <Send stroke="#fff" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  },
  () => true,
);
