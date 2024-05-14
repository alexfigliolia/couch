import type { Dispatch } from "react";
import type { Animated } from "react-native";

export interface ITab {
  text: string;
  theme?: string[];
  onPress: (index: number) => void;
}

export interface Position {
  x: number;
  width: number;
}

export interface LayoutState {
  hitSlop: number;
  width: Interpolation;
  translation: Interpolation;
}

export type Dispatcher = Dispatch<React.SetStateAction<LayoutState>>;

export type Interpolation = Animated.InterpolationConfigType;
