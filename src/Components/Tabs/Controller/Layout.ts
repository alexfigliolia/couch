import { Screen } from "Dimensions/Screen";
import type { ITab, Position } from "./types";

export class Layout<T extends ITab> {
  public tabs: T[];
  protected whiteSpace = 0;
  protected positions: Position[] = [];
  public static readonly BORDER_WIDTH = 3;
  public static readonly TAB_WIDTH = Screen.WIDTH * 0.9 - this.BORDER_WIDTH * 2;
  constructor(tabs: T[]) {
    this.tabs = tabs;
  }

  public static get baseInterpolator() {
    return {
      inputRange: [0, 1],
      outputRange: [0, 1],
    };
  }

  protected resolveWhiteSpace() {
    let whiteSpace = Layout.TAB_WIDTH;
    for (const { width } of this.positions) {
      whiteSpace -= width;
    }
    this.whiteSpace = whiteSpace / this.tabs.length;
  }

  protected interpolateX = this.interpolation((inputRange, outputRange) => {
    const { length } = this.positions;
    for (let i = 0; i < length; i++) {
      inputRange.push(i);
      if (i === 0) {
        outputRange.push(0);
      } else {
        outputRange.push(
          this.positions[i].x - this.whiteSpace / 2 - Layout.BORDER_WIDTH,
        );
      }
    }
  });

  protected interpolateWidth = this.interpolation((inputRange, outputRange) => {
    const { length } = this.positions;
    for (let i = 0; i < length; i++) {
      inputRange.push(i);
      outputRange.push(this.positions[i].width + this.whiteSpace);
    }
  });

  protected interpolation<
    F extends (input: number[], output: number[]) => void,
  >(func: F) {
    return () => {
      const inputRange: number[] = [];
      const outputRange: number[] = [];
      func(inputRange, outputRange);
      return { inputRange, outputRange };
    };
  }
}
