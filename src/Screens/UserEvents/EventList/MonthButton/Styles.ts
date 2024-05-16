import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    position: "relative",
    alignSelf: "flex-start",
  },
  inner: {
    flexDirection: "row",
    ...UtilityStyles.center,
  },
  icon: {
    width: Screen.H1 * 0.9,
    height: Screen.H1 * 0.9,
    marginLeft: Screen.P / 4,
  },
});
