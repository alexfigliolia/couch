import { Fragment, memo } from "react";
import { Animated, Text } from "react-native";
import { Controller } from "Components/PaymentMethod/Controller";
import { Dates } from "Tools/Dates";
import { Styles } from "./Styles";

export const TextContent = memo(function TextContent({
  name,
  date,
  animator,
}: Props) {
  return (
    <Fragment>
      <Animated.Text
        style={[
          Styles.bank,
          {
            transform: [
              {
                translateY: animator.interpolate({
                  inputRange: [0, 1],
                  outputRange: [Controller.textTranslation, 0],
                }),
              },
              {
                scale: animator.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          },
        ]}>
        {name}
      </Animated.Text>
      <Animated.Text
        style={[
          Styles.meta,
          {
            opacity: animator.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}>
        Added on <Text style={Styles.date}>{Dates.format(date)}</Text>
      </Animated.Text>
    </Fragment>
  );
});

interface Props {
  date: Date;
  name: string;
  animator: Animated.Value;
}
