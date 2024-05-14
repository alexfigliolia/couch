import { Animated } from "react-native";
import { Screen } from "Dimensions/Screen";

export class Controller {
  public scale = new Animated.Value(0);
  public opacity = new Animated.Value(0);

  public toggle(open: boolean) {
    if (open) {
      return this.open();
    }
    this.close();
  }

  public open() {
    Animated.sequence([
      Animated.timing(this.scale, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        delay: Screen.EXPLOADER_TRANSITION_DURATION * 0.75,
      }),
    ]).start();
  }
  public close() {
    Animated.sequence([
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: 300,
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
