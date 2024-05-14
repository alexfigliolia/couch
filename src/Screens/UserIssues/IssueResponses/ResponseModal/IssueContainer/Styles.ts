import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  closer: {
    top: 0,
    right: 0,
    zIndex: 10,
    position: "absolute",
  },
  issueContainer: {
    width: "100%",
    zIndex: 2,
    backgroundColor: "#fff",
    ...UtilityStyles.shadow,
  },
  issueCard: {
    width: "90%",
    alignSelf: "center",
  },
});
