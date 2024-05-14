import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  container: {
    ...UtilityStyles.fillAndCenter,
  },
  background: {
    ...UtilityStyles.fill,
    overflow: "visible",
  },
  foreground: {
    ...UtilityStyles.fill,
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "visible",
    shadowColor: CoreTheme.BLACK,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
    transform: [
      {
        rotateZ: "-90deg",
      },
    ],
  },
  number: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    ...UtilityStyles.center,
  },
  numberText: {
    fontWeight: "500",
  },
});
