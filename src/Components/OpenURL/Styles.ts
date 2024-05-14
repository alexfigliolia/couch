import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  content: {
    width: "90%",
    alignSelf: "center",
  },
  heading: {
    paddingTop: Screen.P,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  closer: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 10,
  },
  mainContent: {
    paddingBottom: Screen.H1,
  },
  text: {
    lineHeight: Screen.H1 * 0.9,
    fontSize: Screen.H4,
    color: CoreTheme.LIGHT_BLACK,
  },
  button: {
    marginTop: Screen.H1,
    marginBottom: Screen.P / 2,
    width: "100%",
    height: Screen.H1 * 1.6,
    borderRadius: Screen.H1,
    shadowColor: CoreTheme.UI_GRADIENT_BRIGHT[1],
    shadowOpacity: 0.5,
    shadowRadius: Screen.P / 2,
    shadowOffset: { width: 0, height: Screen.P / 3 },
  },
  buttonInner: {
    ...UtilityStyles.fillAndCenter,
    borderRadius: Screen.H1,
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: Screen.H4,
  },
});
