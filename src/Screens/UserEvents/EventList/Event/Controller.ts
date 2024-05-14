import type { DimensionValue } from "react-native";

export class Controller {
  public static computeWidth(start: number, end: number) {
    return `${((end - start) / 24) * 100}%` as DimensionValue;
  }

  public static computeLeftMargin(start: number) {
    return `${(start / 24) * 100}%` as DimensionValue;
  }

  public static displayTime(start: number) {
    const postFix = start < 12 ? "am" : "pm";
    const modulo = start % 12;
    const time = modulo === 0 ? 12 : modulo;
    return `${time}${postFix}`;
  }
}
