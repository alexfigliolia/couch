import { memo } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type { Controller } from "Components/PaymentMethod/Controller";
import { PaymentMethods } from "State/PaymentMethods";
import { CardStyles } from "../CardStyles";
import { CloseButton } from "../CloseButton";
import { Styles } from "./Styles";
/* eslint-disable react-native/no-inline-styles */

export const Back = memo(function Back({
  name,
  colors,
  confirming,
  controller,
  deletePayment,
}: Props) {
  return (
    <Animated.View
      style={[
        Styles.container,
        {
          pointerEvents: confirming ? "auto" : "none",
          transform: [
            {
              rotateX: controller.rotateX.interpolate({
                inputRange: [0, 1],
                outputRange: ["-180deg", "0deg"],
              }),
            },
          ],
        },
      ]}>
      <LinearGradient colors={colors} style={CardStyles.gradient}>
        <CloseButton
          color={colors[1]}
          animator={controller.translateY}
          onPress={PaymentMethods.cancelDeletion}
        />
        <View style={CardStyles.content}>
          <Text style={Styles.text}>
            Are you sure you wish to delete{" "}
            <Text style={Styles.bold}>{name}</Text>?
          </Text>
          <TouchableOpacity style={Styles.button} onPress={deletePayment}>
            <Text style={[Styles.buttonText, { color: colors[1] }]}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animated.View>
  );
});

interface Props {
  name: string;
  colors: string[];
  confirming: boolean;
  controller: Controller;
  deletePayment: () => void;
}
