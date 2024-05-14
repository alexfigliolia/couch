import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    ...UtilityStyles.center,
    paddingBottom: 20,
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.75)",
  },
  text: {
    fontSize: Screen.H1,
    fontWeight: "400",
    color: CoreTheme.UI_GRADIENT_BRIGHT[1],
    marginTop: 10,
    marginBottom: -4,
    textAlign: "center",
    textShadowRadius: Screen.H1 / 5,
    textShadowOffset: { height: Screen.H1 / 10, width: 0 },
  },
});
