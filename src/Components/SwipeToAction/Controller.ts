import type {
  GestureResponderEvent,
  PanResponderGestureState,
} from "react-native";
import { Animated, PanResponder } from "react-native";

export class Controller {
  private lastX = 0;
  private tabWidth = 0;
  private containerWidth = 0;
  public translateX = new Animated.Value(0);
  public panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: this.onTouchMove.bind(this),
    onPanResponderRelease: this.onTouchEnd.bind(this),
  });

  private onTouchMove(
    _: GestureResponderEvent,
    state: PanResponderGestureState,
  ) {
    if (this.containerWidth === 0) {
      return;
    }
    const nextPosition =
      1 -
      (this.containerWidth -
        (this.containerWidth - state.dx / this.containerWidth));
    this.translateX.setValue(nextPosition);
    this.lastX = nextPosition;
  }

  private onTouchEnd(
    _: GestureResponderEvent,
    state: PanResponderGestureState,
  ) {
    if (this.containerWidth === 0) {
      return;
    }
    const { vx, dx } = state;
    if (vx < 0 || dx < this.tabWidth * 1.5) {
      this.onTouchMove(_, state);
      return this.animateToZero();
    }
    this.animateToOne();
  }

  private animateToZero() {
    Animated.timing(this.translateX, {
      toValue: 0,
      duration: this.lastX * 2,
      useNativeDriver: true,
    }).start();
  }

  private animateToOne() {
    Animated.timing(this.translateX, {
      toValue: 1,
      duration: (this.containerWidth - this.tabWidth - this.lastX) * 2,
      useNativeDriver: true,
    }).start();
  }
}
