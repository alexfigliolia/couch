import { Animated, Easing, LayoutAnimation } from "react-native";
import { Issues } from "State/Issues";
import { Animation } from "./Animation";

export class Controller {
  private last: boolean;
  public scale = new Animated.Value(0);
  public opacity = new Animated.Value(0);
  constructor(last: boolean) {
    this.last = last;
  }

  public setLast(last: boolean) {
    this.last = last;
  }

  public enter() {
    Animated.timing(this.opacity, {
      toValue: 1,
      delay: 100,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.in(Easing.ease),
    }).start();
  }

  public exit() {
    Animated.timing(this.opacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.in(Easing.ease),
    }).start(() => {
      if (this.last) {
        LayoutAnimation.configureNext(new Animation());
        Issues.activateType();
      }
    });
  }

  public grow = () => {
    Animated.spring(this.scale, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  public shrink = () => {
    Animated.spring(this.scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
}
