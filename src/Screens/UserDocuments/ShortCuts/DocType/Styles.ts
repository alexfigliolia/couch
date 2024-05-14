import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    width: "47.5%",
    height: "auto",
    borderRadius: 7.5,
    backgroundColor: "#fff",
    ...UtilityStyles.shadow,
    shadowOpacity: 0.5,
  },
  gradient: {
    borderRadius: 7.5,
    position: "relative",
    ...UtilityStyles.fill,
    paddingTop: 15,
  },
  touchable: {
    ...UtilityStyles.fillAndCenter,
  },
  icon: {
    height: Screen.H1 * 2,
    width: Screen.H1 * 2,
    ...UtilityStyles.center,
    borderRadius: Screen.H1,
    borderColor: "#fff",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  title: {
    color: "#fff",
    fontSize: Screen.H3,
    fontWeight: "600",
    marginBottom: 5,
  },
  actionItem: {
    width: "100%",
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    ...UtilityStyles.center,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  actionInner: {
    width: "90%",
    minHeight: Screen.H1,
    flexDirection: "row",
    ...UtilityStyles.center,
  },
  dot: {
    height: Screen.H1,
    width: Screen.H1,
    borderRadius: Screen.H1 / 2,
    marginRight: Screen.P * 0.75,
    ...UtilityStyles.center,
  },
  dotText: {
    fontSize: Screen.P,
    fontWeight: "700",
    color: "#fff",
  },
  pending: {
    color: "#fff",
    fontSize: Screen.P,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
  },
});
