import type { ScrollView } from "react-native";
import { ScrollRestoration } from "Tools/ScrollRestoration";
import { useController } from "./useController";

export const useScrollRestoration = <V extends ScrollView, K>(
  direction: "x" | "y",
) => {
  return useController(new ScrollRestoration<V, K>(direction));
};
