import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 2,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ddText: {
    fontSize: Screen.H1,
    fontWeight: "600",
    color: CoreTheme.LIGHT_BLACK,
    marginRight: Screen.P / 4,
  },
  icon: {
    width: Screen.H2,
    height: Screen.H2,
  },
  selector: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "#fff",
    top: "120%",
    left: 0,
    width: Screen.WIDTH / 2,
    maxWidth: 300,
    borderRadius: Screen.P / 2,
    ...UtilityStyles.shadow,
  },
  months: {
    padding: Screen.P,
    width: Screen.WIDTH / 2,
    maxWidth: 300,
  },
  year: {
    textAlign: "center",
    marginBottom: Screen.P,
    color: CoreTheme.LIGHT_BLACK,
    fontWeight: "800",
    fontSize: Screen.H3,
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Screen.P / 2,
  },
});
