import { Animated, Easing } from "react-native";

export class Controller {
  public index = 0;
  public scale = new Animated.Value(0);
  public translate = new Animated.Value(0);
  public background = new Animated.Value(0);

  public registerIndex(index: number) {
    if (index !== this.index) {
      this.index = index;
    }
  }

  public show() {
    Animated.timing(this.translate, {
      toValue: 1,
      duration: 600,
      delay: this.index * 40,
      useNativeDriver: true,
      // @ts-ignore
      easing: Easing.out(Easing.back()),
    }).start();
  }

  public hide() {
    Animated.timing(this.translate, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  public activate() {
    Animated.parallel([
      Animated.timing(this.scale, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
        // @ts-ignore
        easing: Easing.out(Easing.back()),
      }),
      Animated.timing(this.background, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }

  public deactivate() {
    Animated.parallel([
      Animated.timing(this.scale, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(this.background, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }
}
