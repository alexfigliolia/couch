import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  keyItem: {
    width: "100%",
    paddingLeft: "7.5%",
    paddingRight: "7.5%",
    paddingTop: Screen.H3,
    paddingBottom: Screen.H3,
    borderBottomWidth: 1,
    borderBottomColor: CoreTheme.BACKGROUND_GRAY,
  },
  keyLabels: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Screen.P / 2,
  },
  bar: {
    width: "100%",
    height: Screen.H3,
    backgroundColor: CoreTheme.BACKGROUND_GRAY,
    borderRadius: Screen.H3,
    padding: Screen.H3 / 2.75,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  marker: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: Screen.H3,
    shadowOpacity: 1,
    shadowRadius: Screen.H3 / 4,
    shadowOffset: { width: 0, height: Screen.H3 / 7 },
  },
  markerInner: {
    width: "100%",
    height: "100%",
    borderRadius: Screen.P,
  },
  markerLabel: {
    fontWeight: "700",
    color: CoreTheme.GRAY_TEXT,
    fontSize: Screen.H5,
  },
  amount: {
    fontWeight: "700",
    color: CoreTheme.GRAY_TEXT,
    fontSize: Screen.H5,
  },
});
