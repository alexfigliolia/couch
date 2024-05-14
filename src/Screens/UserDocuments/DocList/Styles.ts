import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

const ICON_POSITION = Screen.PADDING / 2;

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    rowGap: 15,
  },
  status: {
    position: "absolute",
    top: ICON_POSITION,
    right: ICON_POSITION,
    height: Screen.H1,
    width: Screen.H1,
    ...UtilityStyles.center,
  },
  signButton: {
    borderRadius: 5,
    marginTop: 10,
    overflow: "hidden",
    backgroundColor: CoreTheme.UI_GRADIENT[0],
  },
  buttonText: {
    width: "auto",
    fontSize: Screen.P,
    color: "#fff",
    fontWeight: "700",
    padding: 10,
  },
});
