import { memo } from "react";
import { Text, View } from "react-native";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";
import { useDimensions } from "./useDimensions";

export const CalendarStroke = memo(
  function CalendarStroke({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    const { day, fontSize, borderWidth, borderRadius, onLayout } =
      useDimensions();
    return (
      <View style={Styles.container} onLayout={onLayout}>
        <View
          style={[Styles.tick, Styles.tick1, { backgroundColor: stroke }]}
        />
        <View
          style={[Styles.tick, Styles.tick2, { backgroundColor: stroke }]}
        />
        <View
          style={[
            Styles.main,
            { borderWidth, borderColor: stroke, borderRadius },
          ]}>
          <View
            style={[
              Styles.top,
              { borderBottomWidth: borderWidth, borderBottomColor: stroke },
            ]}
          />
          <View style={Styles.calendar}>
            <Text style={[Styles.text, { color: stroke, fontSize }]}>
              {day}
            </Text>
          </View>
        </View>
      </View>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
