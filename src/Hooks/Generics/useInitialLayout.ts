import { useLayoutEffect, useRef } from "react";

export const useInitialLayout = (callback: () => void) => {
  const mounted = useRef(false);
  useLayoutEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      callback();
    }
  }, [callback]);
};
