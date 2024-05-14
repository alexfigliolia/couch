import type { LayoutAnimationAnim } from "react-native";
import { LayoutAnimation } from "react-native";
import { AnimationConfig } from "Tools/AnimationConfig";

export class Animation extends AnimationConfig {
  public override readonly delete: LayoutAnimationAnim = {
    duration: 200,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  };
}
