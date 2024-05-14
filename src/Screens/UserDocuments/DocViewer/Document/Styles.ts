import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UtilityStyles } from "Styles/Utility";
import { DocumentsTheme } from "Themes/Documents";

const BORDER_RADIUS = DocumentsTheme.TAB_WIDTH * 0.05;
const DOC_PADDING = DocumentsTheme.TAB_WIDTH * 0.05;
const ICON_SIZE = DocumentsTheme.TAB_WIDTH * 0.125;
const HORIZONTAL_PADDING = DOC_PADDING * 0.75;
const CONTENT_PADDING = DOC_PADDING * 1.75;
const BUTTON_PADDING = DOC_PADDING * 1.5;

export const Styles = StyleSheet.create({
  slide: {
    width: DocumentsTheme.SCROLL_VIEW_WIDTH,
    position: "relative",
    overflow: "visible",
  },
  tab: {
    width: DocumentsTheme.TAB_WIDTH,
    backgroundColor: "#fff",
    borderRadius: BORDER_RADIUS,
    ...UtilityStyles.shadow,
    ...UtilityStyles.center,
  },
  gradient: {
    ...UtilityStyles.fillAndCenter,
    padding: DOC_PADDING,
    paddingLeft: HORIZONTAL_PADDING,
    paddingRight: HORIZONTAL_PADDING,
    borderRadius: BORDER_RADIUS,
  },
  docDate: {
    color: "#fff",
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: DOC_PADDING,
    marginTop: DOC_PADDING * 0.1,
  },
  content: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: BORDER_RADIUS * 0.75,
    ...UtilityStyles.center,
    paddingTop: CONTENT_PADDING,
    paddingBottom: CONTENT_PADDING,
    paddingLeft: DOC_PADDING,
    paddingRight: DOC_PADDING,
  },
  docIcon: {
    alignSelf: "center",
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginBottom: DOC_PADDING,
  },
  docTitle: {
    fontSize: Screen.H2,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  docDescription: {
    width: "90%",
    fontSize: Screen.H5,
    color: "#fff",
    fontWeight: "400",
    textAlign: "center",
    marginTop: DOC_PADDING,
  },
  actions: {
    width: "97.5%",
    height: "auto",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: DOC_PADDING * 1.25,
    marginBottom: DOC_PADDING * 0.25,
  },
  button: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginLeft: BUTTON_PADDING,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    paddingLeft: BUTTON_PADDING,
    paddingRight: BUTTON_PADDING,
  },
});
