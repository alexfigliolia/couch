import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";

export const Styles = StyleSheet.create({
  heading: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  headingText: {
    fontWeight: "700",
    fontSize: Screen.H1,
  },
  list: {
    width: "90%",
    alignSelf: "center",
    gap: Screen.P,
    paddingBottom: 100,
  },
});
