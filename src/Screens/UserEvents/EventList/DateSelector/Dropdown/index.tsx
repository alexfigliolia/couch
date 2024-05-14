import { memo, useCallback, useMemo, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  useAnimatedValue,
  View,
} from "react-native";
import { ChevronDown } from "Icons/ChevronDown";
import { useSchedule } from "State/Schedule";
import { Dates } from "Tools/Dates";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const DropDown = memo(
  function DropDown(_: Propless) {
    const animator = useAnimatedValue(0);
    const [open, setOpen] = useState(false);
    const thisYear = useMemo(() => new Date().getFullYear(), []);
    const date = useSchedule(state => state.activeDate);
    const year = useMemo(() => date.getFullYear(), [date]);
    const month = useMemo(() => date.getMonth(), [date]);
    const monthName = useMemo(() => Dates.month(date.getMonth()), [date]);

    const toggle = useCallback(() => {
      setOpen(!open);
      Animated.timing(animator, {
        toValue: open ? 0 : 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }, [open, animator]);

    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={toggle}>
          <View style={Styles.dropdown}>
            <Text style={Styles.ddText}>{monthName}</Text>
            <View style={Styles.icon}>
              <ChevronDown />
            </View>
          </View>
        </TouchableOpacity>
        <Animated.View
          aria-hidden={!open}
          style={[
            Styles.selector,
            {
              opacity: animator.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: animator.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
              pointerEvents: open ? "auto" : "none",
            },
          ]}>
          <ScrollView horizontal pagingEnabled>
            {[thisYear - 1, thisYear, thisYear + 1].map(year => {
              return (
                <View key={year} style={Styles.months}>
                  <Text style={Styles.year}>{year}</Text>
                  <View style={Styles.options}>
                    {Dates.months.map(month => {
                      return (
                        <View key={month}>
                          <TouchableOpacity>
                            <Text>{month}</Text>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </Animated.View>
      </View>
    );
  },
  () => true,
);
