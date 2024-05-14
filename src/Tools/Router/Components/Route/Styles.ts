import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    ...UtilityStyles.fill,
  },
  inactive: {
    opacity: 0,
    right: "110%",
    pointerEvents: "none",
  },
});
