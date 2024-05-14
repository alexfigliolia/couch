import { Animated, Easing } from "react-native";
import { TaskQueue } from "@figliolia/task-queue";
import { Screen } from "Dimensions/Screen";
import { PaymentMethods } from "State/PaymentMethods";
import { CoreTheme } from "Themes/Core";

export class Controller {
  total = 0;
  id: number;
  index: number;
  isActive: boolean;
  confirming: boolean;
  allInactive: boolean;
  rotateX: Animated.Value;
  translateY: Animated.Value;
  translateX: Animated.Value;
  TaskQueue = new TaskQueue();
  colors = CoreTheme.UI_GRADIENT;
  public static readonly stagger = 20;
  public static easing = Easing.back(0);
  public static readonly transitionXDuration = 400;
  public static readonly textTranslation = -(
    100 -
    (Screen.H1 * 0.8 + Screen.H1 * 0.85)
  );
  constructor({ id, index, isActive, confirming, allInactive }: IController) {
    this.id = id;
    this.index = index;
    this.isActive = isActive;
    this.confirming = confirming;
    this.allInactive = allInactive;
    this.rotateX = new Animated.Value(confirming ? 1 : 0);
    this.translateY = new Animated.Value(isActive ? 1 : 0);
    this.translateX = new Animated.Value(isActive || allInactive ? 0 : 1);
  }

  public setScope({
    id,
    index,
    isActive,
    confirming,
    allInactive,
  }: IController) {
    this.id = id;
    this.index = index;
    this.isActive = isActive;
    this.confirming = confirming;
    this.allInactive = allInactive;
  }

  public registerVisuals(total: number, colors: string[]) {
    this.total = total;
    this.colors = colors;
  }

  public select = () => {
    PaymentMethods.selectBank(this.id);
    if (!this.isActive) {
      PaymentMethods.setActiveTheme(this.colors);
    }
  };

  public transitionY() {
    const delay = this.isActive ? 100 * this.total - 2 : 0;
    if (this.isActive) {
      this.TaskQueue.deferTask(() => {
        PaymentMethods.showActions();
      }, delay + 250);
    }
    Animated.spring(this.translateY, {
      delay,
      toValue: this.isActive ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }

  public transitionX() {
    const zero = this.allInactive || this.isActive;
    const stagger = this.index * Controller.stagger;
    const delay = zero ? 200 + stagger : stagger;
    const easing = zero ? Easing.out(Easing.cubic) : Easing.in(Easing.cubic);
    Animated.timing(this.translateX, {
      delay,
      easing,
      toValue: zero ? 0 : 1,
      useNativeDriver: true,
      duration: Controller.transitionXDuration,
    }).start();
  }

  public animateDeletion = () => {
    this.TaskQueue.deferTask(() => {
      PaymentMethods.hideActions();
    }, 100);
    Animated.timing(this.translateX, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start(PaymentMethods.deleteBank);
  };

  public flip() {
    Animated.timing(this.rotateX, {
      duration: 400,
      toValue: this.confirming ? 1 : 0,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  }

  public clearQueue() {
    this.TaskQueue.clearPendingTasks();
  }
}

interface IController {
  id: number;
  index: number;
  isActive: boolean;
  confirming: boolean;
  allInactive: boolean;
}
