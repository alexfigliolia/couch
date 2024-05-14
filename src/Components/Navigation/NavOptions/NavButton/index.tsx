import type { ReactNode } from "react";
import { memo, useCallback, useMemo } from "react";
import type { TextStyle } from "react-native";
import { IconButton } from "Components/IconButton";
import { useLocation, useNavigate } from "Tools/Router";

export const NavButton = memo(
  function NavButton({ label, route, colors, children }: Props) {
    const navigate = useNavigate();
    const location = useLocation();

    const active = useMemo(() => location.startsWith(route), [location, route]);

    const activeTextStyles = useMemo<TextStyle>(
      () => ({ color: colors[1] }),
      [colors],
    );

    const nav = useCallback(() => {
      navigate(route);
    }, [navigate, route]);

    return (
      <IconButton
        label={label}
        onPress={nav}
        textStyle={active ? activeTextStyles : undefined}>
        {children(active)}
      </IconButton>
    );
  },
  (pp, np) => pp.route === np.route,
);

interface Props {
  label: string;
  route: string;
  colors: string[];
  children: (active: boolean) => ReactNode;
}
