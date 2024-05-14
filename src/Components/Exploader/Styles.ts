import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  inner: {
    ...UtilityStyles.fill,
    backgroundColor: "#fff",
  },
});
