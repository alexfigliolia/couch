import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignSelf: "center",
    width: Screen.WIDTH * 0.9,
    backgroundColor: CoreTheme.UI_GRADIENT[1],
    ...UtilityStyles.shadow,
    overflow: "visible",
    // backfaceVisibility: "hidden",
  },
});
