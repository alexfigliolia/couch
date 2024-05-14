import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "auto",
    width: "100%",
    backgroundColor: "#fff",
    ...UtilityStyles.shadow,
    ...UtilityStyles.center,
    borderTopLeftRadius: Screen.H1,
    borderTopRightRadius: Screen.H1,
    shadowOffset: { height: -5, width: 0 },
  },
  inner: {
    ...UtilityStyles.fillAndCenter,
    position: "relative",
    overflow: "hidden",
  },
  bar: {
    position: "absolute",
    top: 7.5,
    left: "42.5%",
    width: "15%",
    height: 5,
    borderRadius: 2.5,
    backgroundColor: CoreTheme.DARKER_BACKGROUND,
  },
  heading: {
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    marginTop: 0,
    justifyContent: "center",
    minHeight: Screen.H1,
    zIndex: 2,
  },
});
