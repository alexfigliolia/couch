import { memo, useMemo } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type { IEvent } from "Models/Schedule";
import { CoreTheme } from "Themes/Core";
import { Dates } from "Tools/Dates";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const Event = memo(function Event({
  end,
  date,
  start,
  title,
  description,
  theme = CoreTheme.UI_GRADIENT,
}: Props) {
  const width = useMemo(
    () => Controller.computeWidth(start, end),
    [start, end],
  );
  const marginLeft = useMemo(
    () => Controller.computeLeftMargin(start),
    [start],
  );
  const endTime = useMemo(() => Controller.displayTime(end), [end]);
  const startTime = useMemo(() => Controller.displayTime(start), [start]);

  return (
    <View style={Styles.container}>
      <View style={Styles.heading}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.date}>{Dates.format(new Date(date))}</Text>
      </View>
      <Text style={Styles.description}>{description}</Text>
      <View
        style={[
          Styles.duration,
          { backgroundColor: theme[0], shadowColor: theme[1] },
        ]}>
        <LinearGradient
          colors={theme}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={Styles.durationGradient}>
          <Text style={Styles.durationText}>
            {startTime} - {endTime}
          </Text>
        </LinearGradient>
      </View>
      <View style={Styles.positioner}>
        <View
          style={[
            Styles.bar,
            {
              width,
              marginLeft,
              shadowColor: theme[1],
            },
          ]}>
          <LinearGradient
            colors={theme}
            end={{ x: 1, y: 0 }}
            start={{ x: 0, y: 0 }}
            style={Styles.gradient}
          />
        </View>
      </View>
      <View style={Styles.ticks}>
        <Text style={Styles.tickText}>12am</Text>
        <Text style={Styles.tickText}>12pm</Text>
        <Text style={Styles.tickText}>12am</Text>
      </View>
    </View>
  );
});

interface Props extends IEvent {
  theme?: string[];
}
