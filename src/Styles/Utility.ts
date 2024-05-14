import type { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { CoreTheme } from "Themes/Core";

const fill: ViewStyle = {
  flex: 1,
  width: "100%",
  height: "100%",
};

const center: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};

export const UtilityStyles = StyleSheet.create({
  fill,
  center,
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2.5 },
  },
  lightShadow: {
    shadowColor: CoreTheme.LIGHT_BLACK,
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    shadowOffset: { width: 0, height: 1 },
  },
  deepShadow: {
    shadowColor: CoreTheme.GRAY_TEXT,
    shadowOpacity: 0.1,
    shadowRadius: 7.5,
    shadowOffset: { width: 0, height: 2.5 },
  },
  fillAndCenter: {
    ...fill,
    ...center,
  },
});
