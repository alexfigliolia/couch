import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";

const CARD_GAPS = Screen.P / 2;
const ICON_SIZE = Screen.H1 * 0.85;

export const Styles = StyleSheet.create({
  issueCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: CARD_GAPS,
    ...UtilityStyles.lightShadow,
  },
  touchable: {
    width: "100%",
  },
  inner: {
    width: "100%",
    padding: Screen.P,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    alignSelf: "flex-start",
    height: ICON_SIZE,
    width: ICON_SIZE,
    marginRight: Screen.P * 0.75,
    marginLeft: -Screen.P / 6,
  },
  meta: {
    flex: 1,
  },
  type: {
    fontSize: Screen.P * 0.8,
    fontWeight: "800",
    marginBottom: Screen.P / 4,
    textTransform: "uppercase",
  },
  title: {
    fontSize: Screen.H5,
    fontWeight: "600",
    color: CoreTheme.LIGHT_BLACK,
  },
  description: {
    fontSize: Screen.P * 0.95,
    fontWeight: "400",
    color: CoreTheme.LIGHT_BLACK,
    marginTop: CARD_GAPS,
  },
  graph: {
    minWidth: "17.5%",
    width: "17.5%",
    marginLeft: CARD_GAPS,
  },
  percentage: {
    fontWeight: "600",
    color: CoreTheme.LIGHT_BLACK,
  },
});
