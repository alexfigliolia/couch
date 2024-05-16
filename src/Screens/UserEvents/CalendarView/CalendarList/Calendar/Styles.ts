import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { Controller } from "../Controller";

export const Styles = StyleSheet.create({
  container: {
    width: Controller.DIMENSIONS,
  },
  inner: {
    width: "100%",
    paddingTop: Screen.H2,
    paddingBottom: Screen.H2,
  },
  heading: {
    width: "90%",
    alignSelf: "center",
    marginBottom: Screen.H1,
  },
  year: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: Screen.H4,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    opacity: 0.85,
  },
  month: {
    fontSize: Screen.H1,
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
  },
  grid: {
    width: "90%",
    alignSelf: "center",
  },
  dayNames: {
    marginBottom: Screen.H3,
  },
  dayName: {
    color: "#fff",
    fontWeight: "800",
    fontSize: Screen.H4,
  },
  row: {
    width: "100%",
    marginBottom: Screen.P / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  day: {
    width: "14.3%",
    ...UtilityStyles.center,
  },
});
