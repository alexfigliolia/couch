import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { Screen } from "Dimensions/Screen";
import type { ICalendar } from "Models/Schedule";
import { Dates } from "Tools/Dates";

export class Controller {
  public static DIMENSIONS = Screen.WIDTH * 0.9;
  public static lastScrollIndex: number | null = null;
  private heightCache = new Array<number>(Dates.months.length).fill(0);
  public currentIndex = Controller.lastScrollIndex ?? new Date().getMonth();

  public getHeight(index: number) {
    return this.heightCache[index];
  }

  public setHeight(index: number, height: number) {
    this.heightCache[index] = height;
  }

  public static keyExtractor = (item: ICalendar) => {
    return item.month.toString();
  };

  public static getItemLayout = (
    _: ArrayLike<ICalendar> | null | undefined,
    index: number,
  ) => {
    return { length: this.DIMENSIONS, offset: index * this.DIMENSIONS, index };
  };

  public computeNext(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const { targetContentOffset, contentOffset } = e.nativeEvent;
    const position = targetContentOffset?.x || contentOffset.x;
    if (position < 0) {
      return -1;
    }
    const nextPosition = Math.min(
      11,
      Math.ceil(position / Controller.DIMENSIONS),
    );
    Controller.lastScrollIndex = nextPosition;
    return nextPosition;
  }
}
