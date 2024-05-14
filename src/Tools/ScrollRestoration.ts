import type {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";

export class ScrollRestoration<T extends ScrollView, K> {
  scrollPosition = 0;
  direction: "x" | "y";
  scrollView: T | null = null;
  cache = new Map<K, number>();
  constructor(direction: "x" | "y") {
    this.direction = direction;
  }

  public cacheNode = (scrollView: T) => {
    this.scrollView = scrollView;
  };

  public onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.scrollPosition = e.nativeEvent.contentOffset[this.direction];
  };

  public cachePosition(key: K, compute: (position: number) => number = n => n) {
    this.cache.set(key, compute(this.scrollPosition));
  }

  public restorePosition(key: K, animated = false) {
    if (!this.scrollView) {
      return;
    }
    const position = this.cache.get(key) || 0;
    this.scrollView.scrollTo({
      animated,
      [this.direction]: position,
    });
  }
}
