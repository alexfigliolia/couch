import type { LayoutChangeEvent, LayoutRectangle } from "react-native";
import { State } from "@figliolia/galena";
import { Screen } from "Dimensions/Screen";
import type { IScreen } from "./types";

export class ScreenModel extends State<IScreen> {
  constructor() {
    super("Screen", {
      greetingHeight: 0,
      navigationHeight: 0,
    });
  }

  public setNavHeight = this.createLayoutCache("navigationHeight", "height");
  public setGreetingHeight = this.createLayoutCache("greetingHeight", "height");

  public getContentArea() {
    const { greetingHeight, navigationHeight } = this.getState();
    return Screen.HEIGHT - (greetingHeight + navigationHeight);
  }

  private createLayoutCache<
    K extends keyof IScreen,
    P extends keyof LayoutRectangle,
  >(dimension: K, layout: P) {
    return (e: LayoutChangeEvent) => {
      this.update(state => {
        state[dimension] = e.nativeEvent.layout[layout];
      });
    };
  }
}
