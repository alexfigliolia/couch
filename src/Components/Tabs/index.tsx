import { memo, useMemo, useRef, useState } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Animated, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useController } from "Hooks/Generics/useController";
import { useMount } from "Hooks/Generics/useMount";
import { useUpdate } from "Hooks/Generics/useOnUpdate";
import { CoreTheme } from "Themes/Core";
import type { ITab } from "./Controller";
import { Controller } from "./Controller";
import { Styles } from "./Styles";
import { Tab } from "./Tab";

function TabsComponent<T extends ITab>({
  tabs,
  active,
  style,
  theme = CoreTheme.UI_GRADIENT_BRIGHT,
}: Props<T>) {
  const prev = useRef(active);
  const [layout, setLayout] = useState(Controller.initialState);
  const [activeTheme, setTheme] = useState(tabs[active].theme || theme);
  const controller = useController(new Controller(tabs, setLayout));

  const pressHandlers = useMemo(() => {
    return tabs.map(({ onPress }, i) => {
      return () => onPress(i);
    });
  }, [tabs]);

  useMount(() => {
    controller.width.setValue(active);
    controller.translation.setValue(active);
  });

  useUpdate(() => {
    controller.activate(active);
    setTheme(tabs[active].theme || theme);
    prev.current = active;
  }, [controller, active]);

  return (
    <View style={[Styles.container, style]}>
      <Animated.View
        style={[
          Styles.slider,
          {
            width: controller.width.interpolate(layout.width),
            transform: [
              {
                translateX: controller.translation.interpolate(
                  layout.translation,
                ),
              },
            ],
          },
        ]}>
        <LinearGradient
          colors={activeTheme}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 1 }}
          style={Styles.gradient}
        />
      </Animated.View>
      {tabs.map(({ text }, index) => {
        return (
          <Tab
            key={text}
            text={text}
            index={index}
            hitSlop={layout.hitSlop}
            active={active === index}
            measure={controller.onLayout}
            onPress={pressHandlers[index]}
          />
        );
      })}
    </View>
  );
}

export const Tabs = memo(TabsComponent, (pp, np) => pp.active === np.active);

interface Props<T extends ITab> {
  active: number;
  theme?: string[];
  readonly tabs: T[];
  style?: StyleProp<ViewStyle>;
}
