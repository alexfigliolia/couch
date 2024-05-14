import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

const BORDER_RADIUS = Screen.P / 2;
const BAR_PADDING = Screen.H5 / 3;
const DURATION_PADDING = BORDER_RADIUS / 2;

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: Screen.P,
    backgroundColor: "#fff",
    borderRadius: BORDER_RADIUS,
    ...UtilityStyles.deepShadow,
  },
  heading: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: BORDER_RADIUS,
  },
  title: {
    color: CoreTheme.BLACK,
    fontSize: Screen.H4,
    fontWeight: "600",
    marginRight: Screen.P / 4,
  },
  date: {
    color: CoreTheme.MID_GRAY_TEXT,
    fontSize: Screen.P * 0.9,
    fontWeight: "300",
    marginLeft: Screen.P / 4,
  },
  description: {
    fontSize: Screen.P,
    fontWeight: "400",
    color: CoreTheme.MID_GRAY_TEXT,
  },
  duration: {
    alignSelf: "flex-start",
    borderRadius: Screen.P * 1.5,
    marginBottom: Screen.P * 2,
    marginTop: Screen.P,
    backgroundColor: CoreTheme.BACKGROUND_GRAY,
    shadowOpacity: 0.5,
    shadowRadius: BORDER_RADIUS,
    shadowOffset: { width: 0, height: DURATION_PADDING },
  },
  durationGradient: {
    borderRadius: Screen.P,
  },
  durationText: {
    color: "#fff",
    fontSize: Screen.P * 0.9,
    padding: DURATION_PADDING,
    paddingLeft: Screen.P,
    paddingRight: Screen.P,
    fontWeight: "700",
  },
  positioner: {
    width: "100%",
    height: Screen.H5,
    backgroundColor: CoreTheme.BACKGROUND_GRAY,
    borderRadius: Screen.H5,
    padding: BAR_PADDING,
  },
  bar: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: Screen.H5,
    shadowOpacity: 1,
    shadowRadius: BAR_PADDING,
    shadowOffset: { width: 0, height: Screen.H5 / 6 },
  },
  gradient: {
    ...UtilityStyles.fill,
    borderRadius: Screen.H5,
  },
  ticks: {
    marginTop: BAR_PADDING,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  tickText: {
    fontSize: Screen.P * 0.7,
    color: CoreTheme.LIGHT_GRAY_TEXT,
  },
});
