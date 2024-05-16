import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 100,
    alignItems: "center",
  },
  content: {
    width: "90%",
  },
  date: {
    marginBottom: Screen.P,
    marginTop: Screen.P,
    color: CoreTheme.LIGHT_GRAY_TEXT,
    fontSize: Screen.H3,
  },
  inner: {
    width: "100%",
    alignSelf: "center",
    gap: Screen.P,
  },
});
