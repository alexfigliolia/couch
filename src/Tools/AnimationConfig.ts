import {
  LayoutAnimation,
  type LayoutAnimationAnim,
  type LayoutAnimationConfig,
} from "react-native";

export class AnimationConfig implements LayoutAnimationConfig {
  public readonly duration: number = 300;
  public readonly create: LayoutAnimationAnim = {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  };
  public readonly update: LayoutAnimationAnim = {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  };
  public readonly delete: LayoutAnimationAnim = {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  };
}
