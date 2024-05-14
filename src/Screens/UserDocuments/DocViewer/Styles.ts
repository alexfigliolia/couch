import { StyleSheet } from "react-native";
import { Screen } from "Dimensions/Screen";
import { CoreTheme } from "Themes/Core";
import { DocumentsTheme } from "Themes/Documents";

export const Styles = StyleSheet.create({
  heading: {
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    marginTop: 0,
    justifyContent: "center",
  },
  headingInner: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: DocumentsTheme.SCROLL_VIEW_MARGIN,
    paddingRight: DocumentsTheme.SCROLL_VIEW_MARGIN,
  },
  headingText: {
    textAlign: "left",
    fontSize: Screen.H1 * 1.1,
    color: CoreTheme.LIGHT_BLACK,
    userSelect: "none",
  },
  container: {
    width: "100%",
    paddingLeft: DocumentsTheme.SCROLL_VIEW_MARGIN,
    paddingRight: DocumentsTheme.SCROLL_VIEW_MARGIN,
  },
  closer: {
    zIndex: 2,
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    height: 40,
    width: 40,
  },
  scrollView: {
    alignSelf: "flex-start",
    width: DocumentsTheme.SCROLL_VIEW_WIDTH,
    flexDirection: "row",
    overflow: "visible",
    marginBottom: 30,
  },
});
