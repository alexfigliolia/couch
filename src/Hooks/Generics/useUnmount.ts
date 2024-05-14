import { useLayoutEffect } from "react";

export const useUnmount = (callback: () => void) => {
  useLayoutEffect(() => {
    return () => {
      callback();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
