import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";

export const CardStyles = StyleSheet.create({
  cardFace: {
    ...UtilityStyles.fillAndCenter,
    backfaceVisibility: "hidden",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { height: 2.5, width: 0 },
  },
  gradient: {
    ...UtilityStyles.fillAndCenter,
    borderRadius: 10,
    position: "relative",
  },
  content: {
    width: "90%",
  },
});
