import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    width: Screen.FLOATING_BUTTON_SIZE,
    height: Screen.FLOATING_BUTTON_SIZE,
    position: "absolute",
    bottom: Screen.FLOATING_BUTTON_BORDER_RADIUS / 2,
    left: Screen.HORIZONAL_CENTER - Screen.FLOATING_BUTTON_BORDER_RADIUS,
    backgroundColor: "#fff",
    borderRadius: Screen.FLOATING_BUTTON_BORDER_RADIUS,
    shadowOpacity: 0.75,
    shadowRadius: 7.5,
    shadowOffset: { width: 0, height: 2.5 },
  },
  gradient: {
    borderRadius: Screen.FLOATING_BUTTON_BORDER_RADIUS,
    ...UtilityStyles.fill,
  },
  touchable: {
    ...UtilityStyles.fillAndCenter,
    padding: Screen.FLOATING_BUTTON_SIZE / 5,
  },
});
