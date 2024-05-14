import { memo, useMemo } from "react";
import { Text, View } from "react-native";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";
import { useDimensions } from "./useDimensions";

export const CalendarFill = memo(
  function CalendarFill({
    color = "#fff",
    stroke = CoreTheme.LIGHT_BLACK,
  }: Props) {
    const { day, fontSize, borderWidth, borderRadius, onLayout } =
      useDimensions();
    const innerRadius = useMemo(() => borderRadius / 4, [borderRadius]);
    return (
      <View
        onLayout={onLayout}
        style={[Styles.container, Styles.containerFill]}>
        <View
          style={[Styles.tick, Styles.tick1, { backgroundColor: stroke }]}
        />
        <View
          style={[Styles.tick, Styles.tick2, { backgroundColor: stroke }]}
        />
        <View style={[Styles.main, { borderRadius }]}>
          <View
            style={[
              Styles.top,
              {
                backgroundColor: stroke,
                marginBottom: borderWidth,
                borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,
                borderBottomLeftRadius: innerRadius,
                borderBottomRightRadius: innerRadius,
              },
            ]}
          />
          <View
            style={[
              Styles.calendar,
              {
                backgroundColor: stroke,
                borderTopLeftRadius: innerRadius,
                borderTopRightRadius: innerRadius,
                borderBottomLeftRadius: borderRadius,
                borderBottomRightRadius: borderRadius,
              },
            ]}>
            <Text style={[Styles.text, { color, fontSize }]}>{day}</Text>
          </View>
        </View>
      </View>
    );
  },
  (pp, np) => pp.stroke === np.stroke && pp.color === np.color,
);

interface Props extends Stroke {
  color?: string;
}
