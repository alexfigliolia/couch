import { useMemo } from "react";
import { useIssues } from "State/Issues";

export const usePendingIssues = () => {
  const issues = useIssues(state => state.issues);
  return useMemo(
    () => issues.filter(issue => issue.status !== "complete"),
    [issues],
  );
};
