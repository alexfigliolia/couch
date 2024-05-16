import { memo, useCallback, useMemo } from "react";
import type { LayoutChangeEvent } from "react-native";
import { Text, View } from "react-native";
import type { ICalendar } from "Models/Schedule";
import { Schedule } from "State/Schedule";
import { Dates } from "Tools/Dates";
import { Controller } from "./Controller";
import { Day } from "./Day";
import { Styles } from "./Styles";

export const Calendar = memo(
  function Calendar({ month, year, events, cacheHeight }: Props) {
    const monthName = useMemo(
      () => Dates.month(new Date(year, month, 1)),
      [month, year],
    );
    const rows = useMemo(() => {
      return Controller.createGrid(year, month);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [month, year, events]);

    const onLayout = useCallback(
      (e: LayoutChangeEvent) => {
        cacheHeight?.(month, e.nativeEvent.layout.height);
      },
      [cacheHeight, month],
    );

    const onPress = useCallback(
      (day: number) => {
        Schedule.setEvents(month, day);
      },
      [month],
    );

    return (
      <View style={Styles.container}>
        <View onLayout={onLayout} style={Styles.inner}>
          <View style={Styles.heading}>
            <Text style={Styles.year}>{year}</Text>
            <Text style={Styles.month}>{monthName}</Text>
          </View>
          <View style={Styles.grid}>
            <View style={[Styles.row, Styles.dayNames]}>
              {rows[0].map(({ date, day }) => {
                return (
                  <View key={day} style={Styles.day}>
                    <Text style={Styles.dayName}>{Dates.day(date)[0]}</Text>
                  </View>
                );
              })}
            </View>
            {rows.map((row, i) => {
              return (
                <View key={i} style={Styles.row}>
                  {row.map(({ day, fade, events }) => {
                    return (
                      <Day
                        key={day}
                        day={day}
                        fade={fade}
                        events={events}
                        onPress={onPress}
                      />
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  },
  () => true,
);

interface Props extends ICalendar {
  cacheHeight?: (month: number, height: number) => void;
}
