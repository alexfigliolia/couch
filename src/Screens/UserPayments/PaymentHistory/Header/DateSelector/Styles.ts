import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";

const BORDER_RADIUS = Screen.H6 * 2;
const BUTTON_VERTICAL_PADDING = Screen.P / 2;

export const Styles = StyleSheet.create({
  selector: {
    backgroundColor: "#fff",
    borderRadius: BORDER_RADIUS,
    ...UtilityStyles.center,
    ...UtilityStyles.shadow,
  },
  gradient: {
    borderRadius: BORDER_RADIUS,
    padding: 1,
    ...UtilityStyles.fillAndCenter,
  },
  gradientInner: {
    backgroundColor: "#fff",
    borderRadius: BORDER_RADIUS,
  },
  touchable: {
    ...UtilityStyles.fillAndCenter,
    borderRadius: BORDER_RADIUS,
    paddingTop: BUTTON_VERTICAL_PADDING,
    paddingBottom: BUTTON_VERTICAL_PADDING,
    paddingLeft: Screen.H2,
    paddingRight: Screen.H2,
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: Screen.H5,
    textTransform: "uppercase",
  },
});
