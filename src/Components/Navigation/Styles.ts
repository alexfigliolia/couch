import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    zIndex: 20,
    width: "100%",
    position: "relative",
    ...UtilityStyles.center,
    backgroundColor: "#fff",
    paddingTop: 2.5,
    ...UtilityStyles.lightShadow,
    shadowOffset: { height: -2.5, width: 0 },
  },
  inner: {
    width: "90%",
  },
});
