import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    ...UtilityStyles.fillAndCenter,
  },
});
