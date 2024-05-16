import { memo, useEffect } from "react";
import { Animated, useAnimatedValue } from "react-native";
import { useSchedule } from "State/Schedule";
import type { Propless } from "Types/React";
import { CalendarList } from "./CalendarList";
import { Styles } from "./Styles";

export const CalendarView = memo(
  function CalendarView(_: Propless) {
    const animator = useAnimatedValue(0);
    const active = useSchedule(state => state.datePicker);

    useEffect(() => {
      Animated.spring(animator, {
        toValue: active ? 1 : 0,
        useNativeDriver: true,
      }).start();
    }, [active, animator]);

    return (
      <Animated.View
        style={[
          Styles.container,
          {
            transform: [
              // { scale: 0.5 },
              // { rotateX: "135deg" },
              { perspective: 1000 },
            ],
          },
        ]}>
        <CalendarList />
      </Animated.View>
    );
  },
  () => true,
);
