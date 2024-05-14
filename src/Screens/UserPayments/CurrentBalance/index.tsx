import { memo } from "react";
import { ParallaxScrollView } from "Components/ParallaxScrollView";
import type { Propless } from "Types/React";
import { BalanceBreakdown } from "./BalanceBreakdown";
import { Key } from "./Key";
import { Styles } from "./Styles";

export const CurrentBalance = memo(
  function CurrentBalance(_: Propless) {
    return (
      <ParallaxScrollView
        style={Styles.parallax}
        ParallaxChildren={BalanceBreakdown}>
        <Key />
      </ParallaxScrollView>
    );
  },
  () => true,
);
