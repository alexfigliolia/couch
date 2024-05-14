import { Animated, Easing } from "react-native";
import { Screen } from "Dimensions/Screen";
import { Issues } from "State/Issues";
import { Modals } from "State/Modals";

export class Controller {
  private yPosition = -Infinity;
  private translateDuration = 0;
  public translate = new Animated.Value(0);
  public cardOpacity = new Animated.Value(0);
  public contentOpacity = new Animated.Value(0);
  public static readonly CARD_ORIGIN_X = Screen.WIDTH * -0.025;
  public static readonly BACKGROUND_TRANSITION = {
    inputRange: [0, 1],
    outputRange: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
  };
  public register(y: number) {
    if (y === this.yPosition) {
      return;
    }
    this.yPosition = y;
    this.translateDuration = Math.max(300, Math.min(this.yPosition, 800));
  }

  public close = () => {
    void this.exit().then(() => {
      Issues.deactivateIssue();
      Modals.closeIssueViewer();
    });
  };

  public enter() {
    this.entranceTransition.start();
  }

  public exit() {
    return new Promise(resolve => {
      this.exitTransition.start(resolve);
    });
  }

  private get entranceTransition() {
    if (this.yPosition === 0) {
      return this.sliderEntraceTransition;
    }
    return this.cardEntranceTransition;
  }

  private get exitTransition() {
    if (this.yPosition === 0) {
      return this.sliderExitTransition;
    }
    return this.cardExitTransition;
  }

  private get cardEntranceTransition() {
    return Animated.parallel([
      Animated.timing(this.cardOpacity, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(this.translate, {
        toValue: 1,
        useNativeDriver: true,
        duration: this.translateDuration,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(this.contentOpacity, {
        toValue: 1,
        duration: 300,
        delay: this.translateDuration * 0.65,
        useNativeDriver: true,
      }),
    ]);
  }

  private get sliderEntraceTransition() {
    return Animated.parallel([
      Animated.timing(this.translate, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(this.cardOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(this.contentOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]);
  }

  private get cardExitTransition() {
    return Animated.parallel([
      Animated.timing(this.contentOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(this.translate, {
        toValue: 0,
        delay: 250,
        useNativeDriver: true,
        duration: this.translateDuration,
        easing: Easing.bezier(0.25, 1, 0.5, 1),
      }),
    ]);
  }

  private get sliderExitTransition() {
    return Animated.parallel([
      ...[this.contentOpacity, this.translate].map(animator =>
        Animated.timing(animator, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ),
      Animated.timing(this.cardOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);
  }
}
