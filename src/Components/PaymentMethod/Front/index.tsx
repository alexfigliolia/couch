import { memo } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type { Controller } from "Components/PaymentMethod/Controller";
import { UtilityStyles } from "Styles/Utility";
import { CardStyles } from "../CardStyles";
import { CloseButton } from "../CloseButton";
import { TextContent } from "./TextContent";
/* eslint-disable react-native/no-inline-styles */

export const Front = memo(function Front({
  name,
  colors,
  confirming,
  controller,
}: Props) {
  return (
    <Animated.View
      style={[
        CardStyles.cardFace,
        {
          pointerEvents: confirming ? "none" : "auto",
          transform: [
            {
              rotateX: controller.rotateX.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "180deg"],
              }),
            },
          ],
        },
      ]}>
      <LinearGradient colors={colors} style={CardStyles.gradient}>
        <CloseButton
          color={colors[1]}
          onPress={controller.select}
          animator={controller.translateY}
        />
        <TouchableOpacity
          style={UtilityStyles.fillAndCenter}
          onPress={controller.select}>
          <View style={CardStyles.content}>
            <TextContent
              name={name}
              date={new Date()}
              animator={controller.translateY}
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  );
});

interface Props {
  name: string;
  colors: string[];
  confirming: boolean;
  controller: Controller;
}
