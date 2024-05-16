import { memo, useCallback, useMemo, useState } from "react";
import {
  Animated,
  TouchableOpacity,
  useAnimatedValue,
  View,
} from "react-native";
import { Heading } from "Components/Heading";
import { ChevronDown } from "Icons/ChevronDown";
import { useSchedule } from "State/Schedule";
import { Dates } from "Tools/Dates";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const MonthButton = memo(function MonthButton(_: Propless) {
  const animator = useAnimatedValue(0);
  const [open, setOpen] = useState(false);
  const activeDate = useSchedule(state => state.activeDate);
  const month = useMemo(() => Dates.month(activeDate), [activeDate]);

  const toggle = useCallback(() => {
    setOpen(!open);
    Animated.spring(animator, {
      toValue: open ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [open, animator]);

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.inner} onPress={toggle}>
        <Heading text={month} />
        <Animated.View
          style={[
            Styles.icon,
            {
              transform: [
                {
                  rotate: animator.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "-180deg"],
                  }),
                },
              ],
            },
          ]}>
          <ChevronDown />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
});
