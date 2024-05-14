import { State } from "@figliolia/galena";
import { Screen } from "State/Screen";
import { IssueTheme } from "Themes/Issues";
import type { IIssue, IIssues, IIssueType } from "./types";

export class IssuesModel extends State<IIssues> {
  constructor() {
    super("Issues", {
      queuedType: null,
      activeIssue: null,
      activeType: "repair",
      issues: IssuesModel.issues,
      activeIssueYPosition: 0,
    });
  }

  public get defaultTabIndex() {
    const { activeType } = this.getState();
    if (!activeType) {
      return 0;
    }
    return IssueTheme.ISSUE_KEYS.indexOf(activeType);
  }

  public activateIssue(issue: IIssue, Y = Screen.getState().greetingHeight) {
    this.update(state => {
      state.activeIssue = issue;
      state.activeIssueYPosition = Y;
    });
  }

  public deactivateIssue() {
    this.update(state => {
      state.activeIssue = null;
      state.activeIssueYPosition = 0;
    });
  }

  public activateType() {
    const { queuedType } = this.getState();
    if (queuedType === null) {
      return;
    }
    this.update(state => {
      state.activeType = queuedType;
      state.queuedType = null;
    });
  }

  public enqueue(nextType: IIssueType) {
    const { activeType } = this.getState();
    if (activeType === nextType) {
      return;
    }
    this.update(state => {
      state.queuedType = nextType;
    });
  }

  private static readonly repairs: IIssue[] = [
    {
      id: 1,
      title: "The toilet won't flush",
      description:
        "The pump appears to be disconnected from the chain. The chain is a little rusted and not latching properly",
      date: new Date().toISOString(),
      type: "repair",
      progress: 10,
      status: "pending",
      responses: [],
    },
    {
      id: 2,
      title: "The drain is clogged",
      description:
        "The sink is draining water slowly and I've tried using some hot water and solution. I think it needs a snake",
      date: new Date().toISOString(),
      type: "repair",
      progress: 75,
      status: "in-progress",
      responses: [
        {
          id: 9,
          date: new Date().toISOString(),
          from: "George Figliolia",
          message: "We have sent someone to your apartment to fix it!",
        },
      ],
    },
    {
      id: 3,
      title: "The dishwasher door is disconnected",
      description:
        "The dishwasher will no longer soft close. There appears to be a piece disconnected internally",
      date: new Date().toISOString(),
      type: "repair",
      progress: 100,
      status: "in-progress",
      responses: [
        {
          id: 4,
          date: new Date().toISOString(),
          from: "George Figliolia",
          message:
            "We have ordered the part that broke and we'll install it when it arrives",
        },
        {
          id: 5,
          date: new Date().toISOString(),
          from: "me",
          message: "Thank you, when is it planned to arrive",
        },
        {
          id: 6,
          date: new Date().toISOString(),
          from: "George Figliolia",
          message: "It'll arrive on the 20th",
        },
        {
          id: 7,
          date: new Date().toISOString(),
          from: "me",
          message: "Ok, thank you",
        },
        {
          id: 8,
          date: new Date().toISOString(),
          from: "George Figliolia",
          message: "Your dishwasher door is fixed! Thank you for your patience",
        },
        {
          id: 10,
          date: new Date().toISOString(),
          from: "me",
          message: "Thank you for your help!",
        },
      ],
    },
  ];

  private static readonly questions: IIssue[] = [
    {
      id: 4,
      title: "Is there a public restroom somewhere in the building",
      description: "",
      date: new Date().toISOString(),
      type: "question",
      progress: 0,
      status: "pending",
      responses: [
        {
          id: 3,
          date: new Date().toISOString(),
          from: "George Figliolia",
          message: "There is a public restroom in the lobby near the mailboxes",
        },
      ],
    },
    {
      id: 5,
      title: "What's my parking space number",
      description: "",
      date: new Date().toISOString(),
      type: "question",
      progress: 0,
      status: "pending",
      responses: [
        {
          id: 1,
          date: new Date().toISOString(),
          from: "Steve Figliolia",
          message: "Your parking space number is 44",
        },
      ],
    },
  ];

  private static readonly complaints: IIssue[] = [
    {
      id: 6,
      title: "Noise from upstairs",
      description:
        "The person above me is throwing parties pretty often. It's become difficult to get a good night's sleep",
      date: new Date().toISOString(),
      type: "complaint",
      progress: 0,
      status: "pending",
      responses: [
        {
          id: 2,
          date: new Date().toISOString(),
          from: "Steve Figliolia",
          message:
            "We'll talk to him about respecting quiet hours. Please report back in the next few days if the noise level does not decrease",
        },
      ],
    },
  ];

  private static readonly issues: IIssue[] = [
    ...this.repairs,
    ...this.complaints,
    ...this.questions,
  ];
}
