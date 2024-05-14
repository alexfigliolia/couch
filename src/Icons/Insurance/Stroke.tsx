import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const InsuranceStroke = memo(
  function InsuranceStroke({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg style={Styles.container} viewBox="0 0 24 24" fill="transparent">
        <Path
          d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <Path
          d="M12 13.5V16.5M13.4997 13.0976C12.0651 13.9259 10.2306 13.4344 9.40236 11.9997C8.57407 10.5651 9.06561 8.73065 10.5003 7.90236C11.085 7.56473 11.7363 7.4464 12.3587 7.52185C13.2632 7.63149 14.107 8.1504 14.5976 9.00025C15.0883 9.8501 15.1158 10.8403 14.7585 11.6785C14.5126 12.2552 14.0845 12.76 13.4997 13.0976Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
