import { memo } from "react";
import { View } from "react-native";
import { UserBalance } from "Dimensions/UserBalance";
import { useSortedBreakdown } from "Hooks/Banking/useSortedBreakdown";
import { useBalance } from "State/Balance";
import { Screen as ScreenState, useScreen } from "State/Screen";
import type { Propless } from "Types/React";
import { KeyItem } from "./KeyItem";
import { Styles } from "./Styles";

export const Key = memo(
  function Key(_: Propless) {
    const breakdown = useSortedBreakdown();
    const total = useBalance(state => state.total);
    const contentArea = useScreen(() => ScreenState.getContentArea());
    const minHeight = contentArea - UserBalance.GRAPH_SPACE;
    return (
      <View style={[Styles.key, { minHeight }]}>
        {breakdown.map(({ label, value, stroke }) => {
          const colors = stroke as unknown as string[];
          return (
            <KeyItem
              key={label}
              label={label}
              value={value}
              total={total}
              colors={colors}
            />
          );
        })}
      </View>
    );
  },
  () => true,
);
