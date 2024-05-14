import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

const fontSize = Screen.NAV_BUTTON_SIZE / 4.5;

export default StyleSheet.create({
  container: {
    ...UtilityStyles.center,
    width: Screen.NAV_BUTTON_SIZE,
    maxWidth: Screen.NAV_BUTTON_SIZE,
    flexDirection: "column",
  },
  touchable: {
    height: Screen.NAV_BUTTON_SIZE,
    width: Screen.NAV_BUTTON_SIZE,
    ...UtilityStyles.center,
    padding: Screen.P * 0.7,
  },
  text: {
    fontSize: fontSize,
    fontWeight: "700",
    color: CoreTheme.GRAY_TEXT,
    width: "120%",
    textAlign: "center",
  },
});
