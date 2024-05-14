import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

const INPUT_MIN_HEIGHT = Screen.H1 * 1.35;
const BORDER_RADIUS = INPUT_MIN_HEIGHT / 2;
const INPUT_PADDING = Screen.P / 2;

export const Styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: INPUT_PADDING,
    paddingBottom: INPUT_PADDING,
  },
  input: {
    flex: 1,
    width: "100%",
    minHeight: INPUT_MIN_HEIGHT,
    paddingBottom: INPUT_PADDING,
    paddingTop: INPUT_PADDING,
    paddingLeft: Screen.P,
    paddingRight: Screen.P,
    borderRadius: BORDER_RADIUS,
    color: CoreTheme.LIGHT_BLACK,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    marginRight: INPUT_PADDING,
    borderColor: CoreTheme.LIGHTER_GRAY_TEXT,
  },
  button: {
    width: INPUT_MIN_HEIGHT,
    height: INPUT_MIN_HEIGHT,
    borderRadius: BORDER_RADIUS,
    ...UtilityStyles.lightShadow,
  },
  gradient: {
    ...UtilityStyles.fill,
    borderRadius: BORDER_RADIUS,
  },
});
