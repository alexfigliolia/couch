import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    ...UtilityStyles.fill,
    position: "relative",
    backgroundColor: CoreTheme.BACKGROUND_GRAY,
  },
});
