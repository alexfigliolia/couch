import { StyleSheet } from "react-native";
import { UserPayments } from "Dimensions/UserPayments";
import { UtilityStyles } from "Styles/Utility";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: UserPayments.CARD_HEIGHT,
    maxWidth: UserPayments.CARD_WIDTH,
    ...UtilityStyles.center,
    marginBottom: 20,
    position: "absolute",
    top: 0,
    left: 0,
  },
  inner: {
    ...UtilityStyles.fill,
    position: "relative",
    transform: [{ perspective: 10 }],
  },
});
