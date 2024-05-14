import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";

export const TEXT_HEIGHT = Screen.H1 * 1.25;

export const Styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
    marginBottom: 20,
  },
  line: {
    height: TEXT_HEIGHT,
    width: 3,
    borderRadius: 1.5,
    backgroundColor: CoreTheme.LIGHT_BLACK,
    marginRight: Screen.P * 0.75,
  },
  textContainer: {
    height: TEXT_HEIGHT,
    maxHeight: TEXT_HEIGHT,
    overflow: "hidden",
  },
  window: {},
  name: {
    height: TEXT_HEIGHT,
    fontSize: Screen.H1,
    margin: 0,
    padding: 0,
    fontWeight: "700",
    color: CoreTheme.LIGHT_BLACK,
  },
});
