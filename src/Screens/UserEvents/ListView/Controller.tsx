import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { Screen } from "Dimensions/Screen";
import type { ICalendar } from "Models/Schedule";

export class Controller {
  private heightCache = new Array<number>(12).fill(0);
  public static lastScrollIndex: number | null = null;
  public currentIndex = Controller.lastScrollIndex ?? new Date().getMonth();
  private lastScrollPosition = this.currentIndex * Screen.WIDTH;

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
    return { length: Screen.WIDTH, offset: index * Screen.WIDTH, index };
  };

  public computeNext(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const { targetContentOffset, contentOffset } = e.nativeEvent;
    const position = targetContentOffset?.x || contentOffset.x;
    if (position < 0) {
      return -1;
    }
    let nextPosition: number;
    if (position > this.lastScrollPosition) {
      nextPosition = Math.ceil(position / Screen.WIDTH);
    } else {
      nextPosition = Math.floor(position / Screen.WIDTH);
    }
    this.lastScrollPosition = position;
    Controller.lastScrollIndex = nextPosition;
    return nextPosition;
  }
}
