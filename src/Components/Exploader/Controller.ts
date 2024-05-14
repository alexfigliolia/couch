import { Animated } from "react-native";

export class Controller {
  public transitionDuration = 0;
  public color = new Animated.Value(0);
  public scale = new Animated.Value(0);
  public opacity = new Animated.Value(0);

  public registerDuration(transitionDuration: number) {
    this.transitionDuration = transitionDuration;
  }

  public open() {
    Animated.sequence([
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(this.scale, {
          toValue: 1,
          useNativeDriver: true,
          duration: this.transitionDuration,
        }),
        Animated.timing(this.color, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
          delay: this.transitionDuration * 0.75,
        }),
      ]),
    ]).start();
  }

  public close() {
    Animated.sequence([
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(this.color, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(this.scale, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }
}
