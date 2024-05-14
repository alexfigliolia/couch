import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    padding: 7.5,
    borderRadius: 20,
    position: "relative",
    backgroundColor: CoreTheme.LIGHT_BLACK,
  },
  inner: {
    ...UtilityStyles.fill,
  },
  draggable: {
    height: "100%",
    width: 40,
    borderRadius: 40,
    backgroundColor: "#fff",
  },
  label: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "95%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  labelText: {
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: Screen.H6,
    color: "#fff",
  },
});
