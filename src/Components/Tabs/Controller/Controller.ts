import { Animated, type LayoutChangeEvent } from "react-native";
import { Layout } from "./Layout";
import type { Dispatcher, ITab, LayoutState } from "./types";

export class Controller<T extends ITab> extends Layout<T> {
  private dispatcher: Dispatcher;
  private memo = new Set<number>();
  public width = new Animated.Value(0);
  public translation = new Animated.Value(0);
  constructor(tabs: T[], dispatcher: Dispatcher) {
    super(tabs);
    this.dispatcher = dispatcher;
  }

  public static get initialState(): LayoutState {
    return {
      hitSlop: 0,
      width: this.baseInterpolator,
      translation: this.baseInterpolator,
    };
  }

  public activate(active: number) {
    Animated.parallel([
      Animated.spring(this.translation, {
        toValue: active,
        mass: 0.75,
        damping: 15,
        stiffness: 120,
        useNativeDriver: false,
      }),
      Animated.spring(this.width, {
        toValue: active,
        mass: 0.75,
        damping: 15,
        stiffness: 120,
        useNativeDriver: false,
      }),
    ]).start();
  }

  public onLayout = (index: number, event: LayoutChangeEvent) => {
    const { width, x } = event.nativeEvent.layout;
    this.positions[index] = { width, x };
    this.memo.add(index);
    if (this.memo.size === this.tabs.length) {
      this.resolveWhiteSpace();
      this.dispatcher({
        hitSlop: this.whiteSpace / 2,
        width: this.interpolateWidth(),
        translation: this.interpolateX(),
      });
    }
  };
}
