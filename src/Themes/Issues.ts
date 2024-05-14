import { Screen } from "Dimensions/Screen";
import { QuestionFill } from "Icons/Question";
import { RepairFill } from "Icons/Repair";
import { WarningFill } from "Icons/Warning";
import type { IIssueState, IIssueType } from "Models/Issues";
import { CoreTheme } from "./Core";

export class IssueTheme {
  public static ISSUE_SIZE = Screen.WIDTH * 0.85;
  public static readonly ISSUE_DISPLAY_NAMES = {
    repair: "Repairs",
    question: "Questions",
    complaint: "Complaints",
  };
  public static readonly ISSUE_KEYS: IIssueType[] = [
    "repair",
    "question",
    "complaint",
  ];
  public static readonly ISSUE_TYPE_GRADIENTS = {
    repair: CoreTheme.UI_COLORS[0],
    question: CoreTheme.UI_COLORS[1],
    complaint: CoreTheme.UI_COLORS[2],
  };
  public static readonly ISSUE_COLORS = {
    repair: "Repairs",
    question: "Questions",
    complaint: "Complaints",
  };

  public static userFacingKey(key: IIssueState) {
    if (key === "in-progress") {
      return "in progress";
    }
    return key;
  }

  public static icon(type: IIssueType) {
    switch (type) {
      case "complaint":
        return WarningFill;
      case "question":
        return QuestionFill;
      case "repair":
      default:
        return RepairFill;
    }
  }

  public static displayName(type: IIssueType) {
    return this.ISSUE_DISPLAY_NAMES[type];
  }

  public static typeGradient(type: IIssueType) {
    return this.ISSUE_TYPE_GRADIENTS[type];
  }
}
