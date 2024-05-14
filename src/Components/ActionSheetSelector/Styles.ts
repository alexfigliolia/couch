import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";

const HEADING_PADDING = Screen.P / 2;

export const Styles = StyleSheet.create({
  sheet: {
    shadowColor: CoreTheme.LIGHT_BLACK,
    shadowOpacity: 0.1,
  },
  closer: {
    position: "absolute",
    top: 5,
    right: 5,
    height: 55,
    width: 55,
    zIndex: 2,
  },
  container: {
    width: "85%",
    alignSelf: "center",
    paddingBottom: Screen.H1,
    overflow: "visible",
  },
  scrollViewContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: Screen.H1,
  },
  heading: {
    width: "85%",
    alignSelf: "center",
    paddingTop: HEADING_PADDING,
    paddingBottom: HEADING_PADDING,
  },
});
