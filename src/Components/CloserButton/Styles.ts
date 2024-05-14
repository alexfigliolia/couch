import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  closer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 12.5,
    ...UtilityStyles.center,
  },
});
