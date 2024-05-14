import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    ...UtilityStyles.fill,
    paddingTop: Screen.P,
    marginBottom: Screen.P / 2,
    overflow: "visible",
  },
  noMessages: {
    width: "100%",
    textAlign: "center",
    fontSize: Screen.H3,
    color: CoreTheme.LIGHT_GRAY_TEXT,
    fontStyle: "italic",
    marginTop: Screen.P,
  },
});
