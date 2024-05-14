import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  toggle: {
    backgroundColor: "#fff",
    height: Screen.H1,
    borderRadius: Screen.H1,
  },
  toggleActive: {
    opacity: 0.5,
  },
  label: {
    color: CoreTheme.LIGHT_BLACK,
    paddingLeft: Screen.P,
    paddingRight: Screen.P,
  },
});
