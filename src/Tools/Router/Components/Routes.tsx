import { memo, useContext, useMemo } from "react";
import { useInitialLayout } from "Hooks/Generics/useInitialLayout";
import type { OptionalChildren } from "Types/React";
import { RouterContext, RoutesContext } from "../Contexts";
import type { ITransitionName } from "../Transitions";

export const Routes = memo(function Routes({
  onMatch,
  children,
  transition,
}: Props) {
  const router = useContext(RouterContext);
  const parentTransition = useContext(RoutesContext);
  const ID = useMemo(() => router.registerRoutes(), [router]);
  const resolvedTransition = useMemo(
    () => transition || parentTransition,
    [transition, parentTransition],
  );

  useInitialLayout(() => {
    router.matchRoute(ID, onMatch);
  });

  return (
    <RoutesContext.Provider value={resolvedTransition}>
      {children}
    </RoutesContext.Provider>
  );
});

interface Props extends OptionalChildren {
  onMatch?: () => void;
  transition?: ITransitionName;
}
