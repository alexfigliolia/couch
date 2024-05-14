export interface IIssues {
  issues: IIssue[];
  activeType: IIssueType;
  queuedType: IIssueType | null;
  activeIssue: null | IIssue;
  activeIssueYPosition: number;
}

export interface IIssue {
  id: number;
  title: string;
  description: string;
  date: string;
  progress: number;
  status: IIssueState;
  type: IIssueType;
  responses: IIssueResponse[];
}

export interface IIssueResponse {
  id: number;
  from: string;
  date: string;
  message: string;
}

export type IIssueState = "complete" | "in-progress" | "pending";

export type IIssueType = "repair" | "complaint" | "question";
