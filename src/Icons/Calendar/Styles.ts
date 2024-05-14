import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "95%",
    position: "relative",
  },
  containerFill: {
    height: "92.5%",
  },
  tick: {
    height: "25%",
    width: "10%",
    position: "absolute",
    top: "-10%",
    borderRadius: 40,
  },
  tick1: {
    left: "30%",
  },
  tick2: {
    right: "30%",
  },
  main: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  top: {
    height: "25%",
    width: "100%",
  },
  calendar: {
    flex: 1,
    ...UtilityStyles.center,
  },
  text: {
    marginTop: "-5%",
    fontWeight: "700",
  },
});
