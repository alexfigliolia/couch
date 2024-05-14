import { useMemo } from "react";
import type { IIssue } from "Models/Issues";
import { useIssues } from "State/Issues";
import { IssueTheme } from "Themes/Issues";

export const useActiveIssue = (): [issue: IIssue | null, theme: string[]] => {
  const activeIssue = useIssues(state => state.activeIssue);
  const theme = useMemo(
    () => IssueTheme.typeGradient(activeIssue?.type || "repair"),
    [activeIssue?.type],
  );
  return [activeIssue, theme];
};
