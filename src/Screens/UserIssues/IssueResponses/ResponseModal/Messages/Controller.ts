import type { ScrollView } from "react-native";
import { ResponseEmitter } from "../Emitter";

export class Controller {
  ID: string;
  scrollView: ScrollView | null = null;
  constructor() {
    this.ID = ResponseEmitter.on("scrollToEnd", timout => {
      this.scrollToEnd(timout);
    });
  }

  public unmount() {
    ResponseEmitter.off("scrollToEnd", this.ID);
  }

  public registerNode = (node: ScrollView) => {
    this.scrollView = node;
  };

  public scrollToEnd(timeout = 0) {
    setTimeout(() => {
      if (!this.scrollView) {
        return;
      }
      this.scrollView.scrollToEnd();
    }, timeout);
  }
}
