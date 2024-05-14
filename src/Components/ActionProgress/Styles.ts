import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";

export const Styles = StyleSheet.create({
  progress: {
    flex: 1,
  },
  progressBG: {
    width: "100%",
    padding: 3,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  progressInner: {
    width: "100%",
    height: "100%",
    borderRadius: 2.5,
    backgroundColor: "#fff",
    shadowColor: "#fff",
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    shadowOffset: { height: 1, width: 0 },
  },
  progressText: {
    color: "#fff",
    fontSize: Screen.P * 0.85,
    fontWeight: "700",
    fontStyle: "italic",
    marginLeft: 5,
    textAlign: "left",
    marginBottom: 3.5,
  },
  complete: {
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
