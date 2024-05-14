import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const RulesFill = memo(
  function RulesFill({ stroke = CoreTheme.BLACK }: Stroke) {
    return (
      <Svg style={Styles.container} viewBox="0 0 15 15" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 0C2.67157 0 2 0.671573 2 1.5V4H1V5H2V10H1V11H2V13.5C2 14.3284 2.67157 15 3.5 15H12.5C13.3284 15 14 14.3284 14 13.5V1.5C14 0.671573 13.3284 0 12.5 0H3.5ZM6 5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5C10 6.10457 9.10457 7 8 7C6.89543 7 6 6.10457 6 5ZM5 10.9999C5 9.343 6.34318 8 8 8C9.65685 8 11 9.34315 11 11V12H5V10.9999Z"
          fill={stroke}
        />
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
