import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

export const BaseStyles = StyleSheet.create({
  base: {
    width: "100%",
    borderRadius: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
    color: CoreTheme.BLACK,
    fontWeight: "700",
    borderBottomWidth: 2,
    borderBottomColor: CoreTheme.LIGHTER_GRAY_TEXT,
  },
});

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  input: {
    ...BaseStyles.base,
  },
  inputFocused: {
    ...BaseStyles.base,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  line: {
    height: 2,
    borderRadius: 1,
    width: "100%",
    position: "absolute",
    bottom: 20,
    left: 0,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 2.5, width: 0 },
  },
  lineInner: {
    ...UtilityStyles.fill,
    borderRadius: 1,
  },
});
