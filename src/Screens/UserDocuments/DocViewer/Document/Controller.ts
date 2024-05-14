import { Animated, Easing } from "react-native";
import { Documents } from "State/Documents";

export class Controller {
  private index = 0;
  private isLast = false;
  public scale = new Animated.Value(0);
  public opacity = new Animated.Value(0);
  public translateY = new Animated.Value(0);
  private animation: null | Animated.CompositeAnimation = null;

  public register(index: number, isLast: boolean) {
    this.index = index;
    this.isLast = isLast;
  }

  private wrapTransition(animation: Animated.CompositeAnimation) {
    if (this.animation) {
      this.animation.stop();
    }
    this.animation = animation;
    return new Promise<void>(resolve => {
      animation.start(() => {
        this.animation = null;
        resolve();
      });
    });
  }

  public activate() {
    void this.wrapTransition(
      Animated.sequence([
        Animated.delay(100 + this.index * 70),
        Animated.parallel([
          Animated.timing(this.opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(this.translateY, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
        ]),
      ]),
    );
  }

  public onPressIn = () => {
    Animated.spring(this.scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  public onPressOut = () => {
    Animated.spring(this.scale, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  public deactivate() {
    void this.wrapTransition(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(this.translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
        ]),
      ]),
    ).then(() => {
      if (this.isLast) {
        Documents.activateType();
      }
    });
  }
}
