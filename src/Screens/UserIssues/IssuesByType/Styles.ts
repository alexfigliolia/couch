import { StyleSheet } from "react-native";
import { IssueTheme } from "Themes/Issues";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 20,
    overflow: "hidden",
  },
  inner: {
    width: "90%",
    alignSelf: "center",
  },
  issueScroller: {
    width: IssueTheme.ISSUE_SIZE,
    overflow: "visible",
  },
  issue: {
    width: IssueTheme.ISSUE_SIZE,
  },
});
