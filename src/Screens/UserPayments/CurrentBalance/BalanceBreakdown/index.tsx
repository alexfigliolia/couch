import { memo, useMemo } from "react";
import { View } from "react-native";
import { DonutChart } from "Components/DonutChart";
import { UserBalance } from "Dimensions/UserBalance";
import { useBalanceGraph } from "Hooks/Banking/useBalanceGraph";
import { useBalance } from "State/Balance";
import { Colors } from "Tools/Colors";
import { Dates } from "Tools/Dates";
import { Numbers } from "Tools/Numbers";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const BalanceBreakdown = memo(function BalanceBreakdown({
  onSize,
}: Props) {
  const [data, color] = useBalanceGraph();
  const due = useBalance(state => state.due);
  const total = useBalance(state => state.total);
  const dueText = useMemo(() => `Due on ${Dates.format(due)}`, [due]);
  const formatted = useMemo(() => Numbers.formatCurrency(total), [total]);
  const numberStyles = useMemo(
    () => Controller.selectNumberStyles(formatted.length),
    [formatted.length],
  );
  const subTextStyles = useMemo(
    () => Controller.selectSubTextStyles(dueText.length),
    [dueText.length],
  );
  const textShadowColor = useMemo(() => Colors.RGBToRGBA(color, 0.45), [color]);

  return (
    <View style={Styles.chart}>
      <DonutChart
        data={data}
        value={formatted}
        onLayout={onSize}
        strokeWidth={UserBalance.STROKE_WIDTH}
        subText={`Due on ${Dates.format(due)}`}
        subTextStyles={[Styles.balanceSubtext, subTextStyles]}
        numberStyles={[
          Styles.balanceText,
          numberStyles,
          { color, textShadowColor },
        ]}
      />
    </View>
  );
});

interface Props {
  onSize: (size: number) => void;
}
