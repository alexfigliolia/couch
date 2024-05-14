import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

const barWidth = Screen.WIDTH / 5.5;
const barHeight = Screen.HEIGHT / 4;
const borderRadius = barWidth / 2;

export const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  barContainer: {
    height: barHeight,
    width: barWidth,
    borderRadius,
    padding: 7.5,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: CoreTheme.DARKER_BACKGROUND,
  },
  bar: {
    width: "100%",
    borderRadius,
    backgroundColor: CoreTheme.LIGHT_BLACK,
    shadowColor: CoreTheme.LIGHT_BLACK,
    shadowOpacity: 0.75,
    shadowRadius: 10,
    shadowOffset: { height: 0, width: 0 },
  },
  gradient: {
    ...UtilityStyles.fill,
    borderRadius,
  },
  text: {
    fontWeight: "700",
    fontSize: 12,
    marginTop: 10,
    color: CoreTheme.LIGHT_GRAY_TEXT,
    textShadowColor: "rgba(0,0,0,0.1)",
    textShadowRadius: 2.5,
    textShadowOffset: { height: 1, width: 0 },
  },
});
