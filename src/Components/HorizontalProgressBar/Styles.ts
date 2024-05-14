import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15,
  },
  label: {
    fontStyle: "italic",
    color: CoreTheme.LIGHT_BLACK,
    fontSize: Screen.P * 0.9,
    fontWeight: "600",
    marginLeft: 3.5,
    marginBottom: 3.5,
  },
  viz: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    minWidth: "10%",
    fontSize: Screen.P * 0.85,
    color: CoreTheme.LIGHT_GRAY_TEXT,
    fontStyle: "italic",
    fontWeight: "700",
    textAlign: "right",
  },
  progress: {
    width: "85%",
    height: 15,
    borderRadius: 7.5,
    backgroundColor: CoreTheme.BACKGROUND_GRAY,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 5,
    paddingRight: 5,
  },
  progressInner: {
    height: 7.5,
    borderRadius: 3.75,
    ...UtilityStyles.shadow,
  },
});
