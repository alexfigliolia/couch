import type { LayoutAnimationAnim } from "react-native";
import { LayoutAnimation } from "react-native";
import { AnimationConfig } from "Tools/AnimationConfig";

export class Animation extends AnimationConfig {
  public readonly duration: number = 150;

  public readonly update: LayoutAnimationAnim = {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeOut,
  };
}
