import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    maxWidth: Screen.WIDTH / 2,
    backgroundColor: "#fff",
    borderRadius: Screen.P,
    marginLeft: Screen.P,
    marginBottom: Screen.P / 2,
  },
  containerMe: {
    alignSelf: "flex-end",
    marginLeft: 0,
    marginRight: Screen.P,
  },
  gradient: {
    borderRadius: Screen.P,
  },
  touchable: {
    width: "100%",
    padding: Screen.P,
  },
  from: {
    fontWeight: "700",
    fontSize: Screen.P,
    color: "#fff",
    marginBottom: Screen.P / 4,
  },
  messageMe: {
    color: CoreTheme.LIGHT_BLACK,
  },
  message: {
    color: "#fff",
    fontWeight: "400",
    fontSize: Screen.P,
  },
  date: {
    color: CoreTheme.LIGHT_GRAY_TEXT,
    fontSize: Screen.P * 0.8,
    marginLeft: Screen.P,
    marginBottom: Screen.P / 2,
    fontWeight: "600",
  },
  dateMe: {
    marginLeft: 0,
    marginRight: Screen.P,
    alignSelf: "flex-end",
  },
});
