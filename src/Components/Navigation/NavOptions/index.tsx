import { memo } from "react";
import { View } from "react-native";
import { UserRoutes } from "Routing";
import type { Propless } from "Types/React";
import { NavButton } from "./NavButton";
import { NavIcon } from "./NavIcon";
import Styles from "./Styles";
/* eslint-disable react/no-children-prop */

export const NavOptions = memo(
  function NavOptions(_: Propless) {
    return (
      <View style={Styles.container}>
        {UserRoutes.iterate(
          ({ name, route, theme, icon: Icon, activeIcon: ActiveIcon }) => {
            return (
              <NavButton
                key={name}
                label={name}
                route={route}
                colors={theme}
                children={active => (
                  <NavIcon
                    Icon={Icon}
                    active={active}
                    ActiveIcon={ActiveIcon}
                    stroke={theme[1]}
                  />
                )}
              />
            );
          },
        )}
      </View>
    );
  },
  () => true,
);
