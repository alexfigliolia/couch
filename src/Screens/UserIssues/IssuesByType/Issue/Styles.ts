import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const X_DISTANCE = Screen.WIDTH / 3;

export const Styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: Screen.P,
    ...UtilityStyles.shadow,
    backgroundColor: CoreTheme.UI_COLORS[1][0],
  },
  gradient: {
    borderRadius: Screen.P,
  },
  gradientInner: {
    padding: Screen.H5,
    ...UtilityStyles.fill,
  },
  heading: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    height: Screen.H2,
    width: Screen.H2,
  },
  date: {
    fontSize: Screen.H6,
    color: "#fff",
    fontWeight: "700",
  },
  description: {
    padding: 10,
    marginBottom: 10,
    paddingTop: Screen.P,
    paddingBottom: Screen.P,
    borderRadius: Screen.P / 2,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  title: {
    fontSize: Screen.H3,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  descriptionText: {
    fontSize: Screen.H5,
    color: "#fff",
    fontWeight: "400",
    marginTop: 20,
  },
});
