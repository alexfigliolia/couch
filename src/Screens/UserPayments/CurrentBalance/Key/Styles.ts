import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";

export const Styles = StyleSheet.create({
  key: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: Screen.P / 2,
    paddingBottom: Screen.P,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
