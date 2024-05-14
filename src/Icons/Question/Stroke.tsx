import { memo } from "react";
import { Circle, Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const QuestionStroke = memo(
  function QuestionStroke({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg viewBox="0 0 24 24" fill="none" style={Styles.container}>
        <Circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="1.5" />
        <Path
          d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Circle cx="12" cy="16" r="1" fill={stroke} />
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
