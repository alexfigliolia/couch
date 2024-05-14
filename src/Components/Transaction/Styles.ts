import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

const ICON_SIZE = Screen.H1 * 1.5;

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: Screen.P,
    borderRadius: Screen.P,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Screen.P,
    ...UtilityStyles.deepShadow,
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: CoreTheme.UI_GRADIENT[0],
    ...UtilityStyles.center,
    marginRight: Screen.P,
  },
  iconGradient: {
    padding: Screen.P * 0.5,
    borderRadius: ICON_SIZE / 2,
    ...UtilityStyles.fill,
  },
  details: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: Screen.P,
  },
  bank: {
    fontSize: Screen.H4,
    fontWeight: "500",
    color: CoreTheme.LIGHT_BLACK,
    marginBottom: Screen.P / 3,
  },
  description: {
    fontSize: Screen.P,
    fontWeight: "600",
    color: CoreTheme.LIGHT_GRAY_TEXT,
  },
  meta: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column-reverse",
  },
  amount: {
    fontSize: Screen.H4,
    fontWeight: "700",
    color: CoreTheme.UI_GRADIENT_BRIGHT[1],
  },
  date: {
    marginBottom: Screen.P / 2,
    fontWeight: "700",
    fontSize: Screen.P * 0.8,
    color: CoreTheme.LIGHT_GRAY_TEXT,
    paddingRight: Screen.P * 0.25,
  },
});
