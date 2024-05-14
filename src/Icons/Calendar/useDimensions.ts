import { useCallback, useMemo, useState } from "react";
import type { LayoutChangeEvent } from "react-native";

export const useDimensions = () => {
  const [fontSize, setFontSize] = useState<number>();
  const borderWidth = useMemo(
    () => Math.max(2, (fontSize || 0) / 7),
    [fontSize],
  );
  const borderRadius = useMemo(
    () => Math.max(5, (fontSize || 0) / 2.5),
    [fontSize],
  );
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setFontSize(e.nativeEvent.layout.width * 0.45);
  }, []);
  const day = useMemo(() => new Date().getDate(), []);
  return { day, fontSize, borderWidth, borderRadius, onLayout };
};
