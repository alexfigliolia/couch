import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";

const padding = Screen.H5 * 0.75;

export const Styles = StyleSheet.create({
  text: {
    width: "auto",
    fontWeight: "500",
    paddingTop: padding,
    paddingBottom: padding,
    textAlign: "center",
    letterSpacing: -(Screen.H4 * 0.025),
    fontSize: Screen.H4,
  },
});
