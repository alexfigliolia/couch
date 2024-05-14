import { createUseState } from "@figliolia/react-galena";
import { IssuesModel } from "Models/Issues";

export const Issues = new IssuesModel();
export const useIssues = createUseState(Issues);
