import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";

export const Blob = memo(
  function Blob({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg viewBox="0 0 200 200">
        <Path
          fill={stroke}
          d="M33.1,-33.8C37.4,-20.9,31.7,-7.5,28.5,6.4C25.2,20.4,24.5,34.8,15.3,43.8C6.2,52.7,-11.3,56.3,-29.3,51.3C-47.2,46.3,-65.6,32.7,-65.5,19C-65.5,5.2,-47,-8.8,-33,-23.8C-19,-38.9,-9.5,-55,2.4,-56.9C14.4,-58.9,28.7,-46.6,33.1,-33.8Z"
          transform="translate(100 100)"
        />
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
