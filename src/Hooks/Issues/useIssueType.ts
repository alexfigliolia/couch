import { useMemo } from "react";
import type { IIssue, IIssueType } from "Models/Issues";
import { useIssues } from "State/Issues";
import { IssueTheme } from "Themes/Issues";

export const useIssueType = (): [
  type: IIssueType,
  name: string,
  scope: IIssue[],
  total: number,
] => {
  const issues = useIssues(state => state.issues);
  const active = useIssues(state => state.activeType);
  const scope = useMemo(() => {
    return issues.filter(issue => issue.type === active);
  }, [active, issues]);
  const displayName = useMemo(() => IssueTheme.displayName(active), [active]);
  return [active, displayName, scope, scope.length];
};
