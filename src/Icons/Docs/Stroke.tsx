import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const DocsStroke = memo(
  function DocsStroke({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg style={Styles.container} viewBox="0 0 24 24" fill="none">
        <Path
          d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <Path
          d="M12 6L12 8M12 8L12 10M12 8H9.99998M12 8L14 8"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M8 14H16"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M9 18H15"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
