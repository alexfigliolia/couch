import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const Send = memo(
  function Send({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg style={Styles.container} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 17L12 8"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 11L12 7L8 11"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
