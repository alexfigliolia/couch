import type { ComponentType } from "react";
import { memo } from "react";

export const LazyComponent = <T extends Record<string, any>>(
  loader: () => ComponentType<T>,
) => {
  let Loadable: null | ComponentType<any> = null;
  return memo(function LazyComponent(props: T) {
    if (!Loadable) {
      Loadable = loader();
    }
    return <Loadable {...props} />;
  });
};
