import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";

const DAY_SIZE = Screen.P * 2.75;

export const Styles = StyleSheet.create({
  day: {
    width: "14.3%",
    ...UtilityStyles.center,
  },
  dayInner: {
    height: DAY_SIZE,
    width: DAY_SIZE,
    borderRadius: DAY_SIZE / 2,
    borderWidth: 1,
    borderColor: "transparent",
    ...UtilityStyles.center,
  },
  fadeDay: {
    opacity: 0.25,
  },
  border: {
    borderColor: "#fff",
  },
  dayText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: Screen.H5,
  },
  fadeText: {
    fontWeight: "500",
  },
});
