import { Fragment, memo, useCallback, useMemo, useState } from "react";
import { LayoutAnimation, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type { IIssueResponse } from "Models/Issues";
import { CoreTheme } from "Themes/Core";
import { Dates } from "Tools/Dates";
import { ResponseEmitter } from "../../Emitter";
import { Styles } from "./Styles";

const DEFAULT_THEME = [
  CoreTheme.DARKER_BACKGROUND,
  CoreTheme.DARKER_BACKGROUND,
];

export const Message = memo(function Message({
  last,
  date,
  theme,
  message,
  from: fromUser,
}: Props) {
  const [tapped, setTapped] = useState(false);
  const fromMe = useMemo(() => fromUser === "me", [fromUser]);
  const gradient = useMemo(
    () => (fromMe ? DEFAULT_THEME : theme),
    [fromMe, theme],
  );

  const onPress = useCallback(() => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(400, "easeOut", "opacity"),
    );
    setTapped(!tapped);
    if (last) {
      ResponseEmitter.emit("scrollToEnd", 0);
    }
  }, [tapped, last]);

  return (
    <Fragment>
      <View style={[Styles.container, fromMe ? Styles.containerMe : undefined]}>
        <LinearGradient
          colors={gradient}
          end={{ x: 1, y: 1 }}
          start={{ x: 0, y: 0 }}
          style={Styles.gradient}>
          <TouchableOpacity onPress={onPress} style={Styles.touchable}>
            {!fromMe && <Text style={Styles.from}>{fromUser}</Text>}
            <Text
              style={[Styles.message, fromMe ? Styles.messageMe : undefined]}>
              {message}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      {tapped && (
        <Text style={[Styles.date, fromMe ? Styles.dateMe : undefined]}>
          {Dates.format(new Date(date))}
        </Text>
      )}
    </Fragment>
  );
});

interface Props extends IIssueResponse {
  last: boolean;
  theme: string[];
}
