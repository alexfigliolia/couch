import { memo, useCallback, useMemo } from "react";
import {
  type StyleProp,
  Text,
  type TextStyle,
  TouchableOpacity,
  View,
  type ViewStyle,
} from "react-native";
import { UtilityStyles } from "Styles/Utility";
import { Styles } from "./Styles";

function ToggleGroupComponent<T extends Toggle>({
  active,
  style,
  toggles,
  onSelect,
}: Props<T>) {
  const onPress = useCallback(
    (index: number) => {
      return () => {
        onSelect(toggles[index]);
      };
    },
    [toggles, onSelect],
  );

  const pressHandlers = useMemo(
    () => toggles.map((_, i) => onPress(i)),
    [toggles, onPress],
  );

  return (
    <View style={[Styles.container, style]}>
      {toggles.map((toggle, i) => {
        return (
          <View
            key={toggle.key}
            style={[
              Styles.toggle,
              active === toggle.key ? Styles.toggleActive : undefined,
              toggle.style,
            ]}>
            <TouchableOpacity
              onPress={pressHandlers[i]}
              style={UtilityStyles.fillAndCenter}>
              <Text style={[Styles.label, toggle.textStyle]}>
                {toggle.label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

export const ToggleGroup = memo(ToggleGroupComponent);

export interface Toggle {
  key: string;
  label: string;
  style?: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

interface Props<T extends Toggle> {
  active: null | T["key"];
  toggles: T[];
  style?: StyleProp<ViewStyle>;
  onSelect: (toggle: Toggle) => void;
}
