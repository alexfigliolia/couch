import type {
  GestureResponderEvent,
  PanResponderGestureState,
} from "react-native";
import { Animated, Easing, PanResponder } from "react-native";

export class Controller {
  public height = 0;
  private lastYPosition = 0;
  private close?: () => void;
  public translateY = new Animated.Value(0);
  public panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderMove: this.onDragMove.bind(this),
    onPanResponderRelease: this.onDragRelease.bind(this),
  });
  constructor(close?: () => void) {
    this.close = close;
  }

  public enter() {
    this.lastYPosition = 0;
    Animated.timing(this.translateY, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.out(Easing.exp),
    }).start();
  }

  public exit(duration = 300) {
    this.close?.();
    this.lastYPosition = this.height;
    Animated.timing(this.translateY, {
      duration,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  }

  public openFromLastYPosition() {
    Animated.timing(this.translateY, {
      toValue: 1,
      duration: this.deltaY / 4,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
    this.lastYPosition = 0;
  }

  public reset() {
    this.height = 0;
    this.lastYPosition = 0;
  }

  private onDragMove(
    _: GestureResponderEvent,
    state: PanResponderGestureState,
  ) {
    const nextPosition =
      1 - (this.height - (this.height - state.dy / this.height));
    this.translateY.setValue(nextPosition);
    this.lastYPosition = nextPosition;
  }

  private get deltaY() {
    return this.height - this.lastYPosition;
  }

  private onDragRelease(
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) {
    const { vy, dy } = gestureState;
    if (vy < 0 || dy < 50) {
      this.onDragMove(_, gestureState);
      return this.openFromLastYPosition();
    }
    this.exit(this.deltaY / 2);
  }
}
