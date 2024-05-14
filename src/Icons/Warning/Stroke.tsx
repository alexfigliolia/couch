import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const WarningStroke = memo(
  function WarningStroke({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg viewBox="0 0 24 24" fill="none" style={Styles.container}>
        <Path
          d="M12 7.75V13"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.47998 18.15C3.50998 17.59 2.90997 16.55 2.90997 15.42V8.58003C2.90997 7.46003 3.50998 6.41999 4.47998 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 16.2V16.2999"
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
