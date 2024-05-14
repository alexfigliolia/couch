import { StyleSheet } from "react-native";
import { UtilityStyles } from "Styles/Utility";
import { CardStyles } from "../CardStyles";

export const Styles = StyleSheet.create({
  container: {
    ...CardStyles.cardFace,
    position: "absolute",
    top: 0,
    left: 0,
    pointerEvents: "none",
  },
  text: {
    color: "#fff",
    fontSize: 17,
    lineHeight: 26,
    textAlign: "center",
  },
  bold: {
    fontWeight: "800",
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 100,
    height: 40,
    ...UtilityStyles.center,
    ...UtilityStyles.lightShadow,
  },
  buttonText: {
    fontWeight: "800",
  },
});
