import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";

export const Plus = memo(
  function Plus({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg viewBox="0 0 20 20" fill="none">
        <Path
          fill={stroke}
          fill-rule="evenodd"
          d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
        />
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
