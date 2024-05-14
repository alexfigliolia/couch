import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  slider: {
    position: "absolute",
    top: 0,
    left: "5%",
    width: Screen.NAV_BUTTON_SIZE,
    height: 3,
    borderRadius: 2.5,
    backgroundColor: CoreTheme.UI_GRADIENT_BRIGHT[1],
  },
});
