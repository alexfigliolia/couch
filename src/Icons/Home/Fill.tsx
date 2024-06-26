import { memo } from "react";
import { G, Path, Svg } from "react-native-svg";
import { CoreTheme } from "Themes/Core";
import type { Stroke } from "Types/SVG";
import { Styles } from "./Styles";

export const HomeFill = memo(
  function HomeFill({ stroke = CoreTheme.LIGHT_BLACK }: Stroke) {
    return (
      <Svg style={Styles.container} viewBox="0 0 32 32">
        <G fill="none" fillRule="evenodd">
          <Path d="m0 0h32v32h-32z" />
          <Path
            d="m14.0787368 1.72185281c1.1290109-.96461213 2.8034221-.96220407 3.9295901.00565135l12.6157966 10.84231384c.8740064.7511418 1.3758765 1.8399284 1.3758765 2.9849077v16.4452743l-10-.001v-5.999c0-3.2383969-2.5655749-5.8775718-5.7750617-5.9958615l-.2249383-.0041385c-3.3137085 0-6 2.6862915-6 6v5.999l-10 .001v-16.4400602c0-1.1489958.50538353-2.241192 1.38466997-2.9924428zm1.9212632 7.27814719c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4 4-1.790861 4-4-1.790861-4-4-4z"
            fill={stroke}
            fillRule="nonzero"
          />
        </G>
      </Svg>
    );
  },
  (pp, np) => pp.stroke === np.stroke,
);
