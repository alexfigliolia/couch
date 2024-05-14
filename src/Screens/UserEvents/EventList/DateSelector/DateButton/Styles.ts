import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  day: {
    width: Screen.H1 * 1.75,
    marginRight: Screen.P,
    backgroundColor: "#fff",
    borderRadius: 5,
    ...UtilityStyles.shadow,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    shadowColor: CoreTheme.LIGHT_GRAY_TEXT,
  },
  activeDay: {
    shadowOpacity: 0.45,
  },
  gradient: {
    borderRadius: 5,
  },
  touchable: {
    paddingTop: Screen.P * 0.75,
    paddingBottom: Screen.P * 0.75,
  },
  dayName: {
    fontWeight: "600",
    color: CoreTheme.LIGHT_BLACK,
    fontSize: Screen.P * 0.85,
    textTransform: "uppercase",
  },
  dayNumber: {
    fontWeight: "300",
    color: CoreTheme.LIGHT_BLACK,
    fontSize: Screen.H1,
  },
  activeDayName: {
    color: "#fff",
    fontWeight: "600",
  },
  activeDayNumber: {
    color: "#fff",
    fontWeight: "400",
  },
});
