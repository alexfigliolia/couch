import type { Insets } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useSafeInset = (
  dimension: Extract<keyof Insets, string>,
  minimum = 20,
) => {
  const insets = useSafeAreaInsets();
  return Math.max(minimum, insets[dimension]);
};
