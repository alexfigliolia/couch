import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";
import { Colors } from "Tools/Colors";

export const Styles = StyleSheet.create({
  title: {
    fontSize: Screen.H1 * 1.15,
    fontWeight: "700",
    textAlign: "left",
    marginTop: 20,
    marginBottom: 10,
    color: CoreTheme.LIGHT_BLACK,
    textShadowRadius: 5,
    textShadowColor: Colors.RGBToRGBA(CoreTheme.UI_GRADIENT_BRIGHT[0], 0.2),
    textShadowOffset: { height: 1.5, width: 0 },
  },
  subTitle: {
    fontSize: Screen.H4,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 30,
    color: CoreTheme.GRAY_TEXT,
  },
  titleInput: {
    height: 45,
  },
  descriptionInput: {
    height: 150,
    paddingTop: 15,
    paddingBottom: 15,
  },
  button: {
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: CoreTheme.UI_GRADIENT[0],
    shadowColor: CoreTheme.UI_GRADIENT[0],
    shadowOpacity: 0.5,
    shadowRadius: 7,
    alignSelf: "flex-end",
    shadowOffset: { height: 5, width: 0 },
  },
  touchable: {
    borderRadius: 100,
    minWidth: 150,
  },
  touchableInner: {
    padding: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: Screen.H4,
    fontWeight: "700",
  },
});
