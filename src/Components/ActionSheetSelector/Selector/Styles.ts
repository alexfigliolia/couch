import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

const FONT_SIZE = Screen.P * 0.9;
const TEXT_PADDING = Screen.P * 0.9 * 2;
export const TRANSLATE_DISTANCE = Screen.H1 * 3;

export const Styles = StyleSheet.create({
  button: {
    minWidth: "30%",
    height: TEXT_PADDING + FONT_SIZE,
    borderRadius: Screen.H1,
    backgroundColor: "#fff",
  },
  active: {
    ...UtilityStyles.shadow,
    backgroundColor: "#fff",
  },
  gradient: {
    borderColor: CoreTheme.DARKER_BACKGROUND,
    borderWidth: 2,
    borderRadius: Screen.H1,
    ...UtilityStyles.fillAndCenter,
  },
  gradientActive: {
    borderColor: "transparent",
  },
  gradientInner: {
    borderRadius: Screen.H1,
    ...UtilityStyles.fillAndCenter,
  },
  buttonText: {
    color: CoreTheme.LIGHT_BLACK,
    fontWeight: "700",
    fontSize: FONT_SIZE,
    textTransform: "uppercase",
    paddingLeft: Screen.H5,
    paddingRight: Screen.H5,
  },
  textActive: {
    color: "#fff",
  },
});
