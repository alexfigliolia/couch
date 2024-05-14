import { State } from "@figliolia/galena";
import type { IModals } from "./types";

export class ModalsModel extends State<IModals> {
  constructor() {
    super("Modals", {
      openURL: false,
      calendar: false,
      addIssue: false,
      docViewer: false,
      issueViewer: false,
    });
  }

  public openAddIssue = () => {
    this.update(state => {
      state.addIssue = true;
    });
  };

  public closeAddIssue = () => {
    this.update(state => {
      state.addIssue = false;
    });
  };

  public openDocViewer = () => {
    this.update(state => {
      state.docViewer = true;
    });
  };

  public closeDocViewer = () => {
    this.update(state => {
      state.docViewer = false;
    });
  };

  public openIssueViewer = () => {
    this.update(state => {
      state.issueViewer = true;
    });
  };

  public closeIssueViewer = () => {
    this.update(state => {
      state.issueViewer = false;
    });
  };

  public openCalendar = () => {
    this.update(state => {
      state.calendar = true;
    });
  };

  public closeCalendar = () => {
    this.update(state => {
      state.calendar = false;
    });
  };

  public openURL = () => {
    this.update(state => {
      state.openURL = true;
    });
  };

  public closeOpenURL = () => {
    this.update(state => {
      state.openURL = false;
    });
  };

  public modalOpen() {
    const values = Object.values(this.getState());
    for (const v of values) {
      if (v) {
        return true;
      }
    }
    return false;
  }
}
