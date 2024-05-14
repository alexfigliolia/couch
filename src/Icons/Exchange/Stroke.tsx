import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const ExchangeStroke = memo(
  function ExchangeStroke({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg style={Styles.container} viewBox="0 0 24 24" fill="none">
        <Path
          d="M17.757 7.19271C16.3812 5.54691 14.3129 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 12.5121 4.55133 13.0123 4.64913 13.4956M19.3004 10.2738C19.4309 10.828 19.5 11.4059 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C9.61377 19.5 7.48782 18.3856 6.1142 16.6489"
          stroke={stroke}
          strokeLinecap="round"
        />
        <Path
          d="M18.125 5.5V7.5H16.125"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.875 16.5L5.875 16.5V18.5"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M12 8V16" stroke={stroke} strokeLinecap="round" />
        <Path
          d="M13.8102 10.1516C13.6905 9.62158 13.0066 9.0317 12.0063 9.03169C11.0061 9.03168 10.2366 9.68143 10.2366 10.5022C10.2366 12.3659 13.947 11.4084 13.947 13.5713C13.947 14.3531 13.0065 15.0161 12.0063 15.0161C11.0062 15.0161 10.3135 14.4006 10.1084 13.7423"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
