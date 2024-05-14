import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: Screen.PADDING,
    borderRadius: 5,
    backgroundColor: "#fff",
    position: "relative",
    ...UtilityStyles.lightShadow,
  },
  title: {
    fontSize: Screen.H4,
    fontWeight: "500",
    color: CoreTheme.BLACK,
    marginBottom: 5,
  },
  date: {
    fontSize: Screen.P * 0.9,
    color: CoreTheme.GRAY_TEXT,
    fontWeight: "600",
    marginBottom: 10,
  },
  description: {
    marginTop: 0,
    fontSize: Screen.P,
    fontWeight: "400",
    color: CoreTheme.GRAY_TEXT,
  },
});
