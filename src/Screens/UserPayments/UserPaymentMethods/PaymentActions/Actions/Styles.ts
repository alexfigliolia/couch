import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const Button = StyleSheet.create({
  base: {
    ...UtilityStyles.center,
    ...UtilityStyles.fill,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  baseInner: {
    ...UtilityStyles.center,
    ...UtilityStyles.fill,
  },
});

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonContainer: {
    width: "45%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 5,
    ...UtilityStyles.lightShadow,
  },
  makePrimary: {
    ...Button.base,
    backgroundColor: CoreTheme.UI_GRADIENT[1],
  },
  delete: {
    ...Button.base,
    padding: 3,
  },
  primaryInner: Button.baseInner,
  deleteWhite: {
    backgroundColor: "#fff",
    borderRadius: 4,
    ...Button.baseInner,
  },
  deleteInner: {
    ...Button.baseInner,
  },
  deleteText: {
    fontWeight: "700",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "700",
  },
  disabled: {
    opacity: 0.4,
  },
});
