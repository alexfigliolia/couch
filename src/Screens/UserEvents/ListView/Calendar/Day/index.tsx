import { memo, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { UtilityStyles } from "Styles/Utility";
import { Styles } from "./Styles";

export const Day = memo(function Day({ fade, events, day, onPress }: Props) {
  const select = useCallback(() => {
    onPress(day);
  }, [onPress, day]);

  return (
    <View style={Styles.day}>
      <View
        style={[
          Styles.dayInner,
          fade ? Styles.fadeDay : undefined,
          events ? Styles.border : undefined,
        ]}>
        {events ? (
          <TouchableOpacity
            onPress={select}
            style={UtilityStyles.fillAndCenter}>
            <Text style={[Styles.dayText, fade ? Styles.fadeText : undefined]}>
              {day}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={[Styles.dayText, fade ? Styles.fadeText : undefined]}>
            {day}
          </Text>
        )}
      </View>
    </View>
  );
});

interface Props {
  day: number;
  fade?: boolean;
  events?: boolean;
  onPress: (day: number) => void;
}
