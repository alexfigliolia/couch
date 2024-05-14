import { Animated, Easing } from "react-native";
import type { Circle } from "react-native-svg";
import { Debouncer } from "Tools/Debouncer";

export class Controller {
  public animatedValue = new Animated.Value(0);
  public Debouncer = new Debouncer(this.animate.bind(this));

  public animate(duration: number) {
    Animated.timing(this.animatedValue, {
      duration,
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.out(Easing.exp),
    }).start();
  }

  public computeProgress(node: Circle, progress: number) {
    const circumference = node.getTotalLength() || 0;
    return [circumference, circumference - (progress * circumference) / 100];
  }
}
