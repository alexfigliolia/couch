import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    ...UtilityStyles.fill,
    overflow: "visible",
  },
  inner: {
    ...UtilityStyles.fill,
    paddingTop: 30,
    paddingBottom: 100,
    position: "relative",
  },
});
