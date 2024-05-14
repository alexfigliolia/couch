import { useEffect, useRef } from "react";

export const useUpdate = (callback: () => void, dependencies: any[]) => {
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
