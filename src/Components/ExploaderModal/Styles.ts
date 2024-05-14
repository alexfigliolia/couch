import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    ...UtilityStyles.fill,
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 10,
  },
  inner: {
    width: "90%",
    height: "100%",
  },
});
