import type { LayoutAnimationAnim } from "react-native";
import { LayoutAnimation } from "react-native";
import { Controller } from "Components/PaymentMethod/Controller";
import { AnimationConfig } from "Tools/AnimationConfig";

export class Animation extends AnimationConfig {
  public override readonly create: LayoutAnimationAnim = {
    delay: 400,
    duration: 400,
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  };
  constructor(totalBanks: number) {
    super();
    this.create.delay =
      totalBanks * Controller.stagger + Controller.transitionXDuration;
  }
}
