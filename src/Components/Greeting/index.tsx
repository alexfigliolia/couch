import { memo, useEffect, useMemo } from "react";
import { Animated, Text, useAnimatedValue } from "react-native";
import { useSafeInset } from "Hooks/Generics/useSafeInset";
import { Modals, useModals } from "State/Modals";
import { Screen } from "State/Screen";
import { UtilityStyles } from "Styles/Utility";
import { CoreTheme } from "Themes/Core";
import { Colors } from "Tools/Colors";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const Greeting = memo(
  function Greeting(_: Propless) {
    const BG = useAnimatedValue(0);
    const paddingTop = useSafeInset("top", 20);
    const modalOpen = useModals(() => Modals.modalOpen());
    const shadow = useMemo(
      () => Colors.RGBToRGBA(CoreTheme.UI_GRADIENT_BRIGHT[1], 0.3),
      [],
    );

    useEffect(() => {
      Animated.timing(BG, {
        toValue: modalOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [modalOpen, BG]);

    return (
      <Animated.View
        onLayout={Screen.setGreetingHeight}
        style={[
          Styles.container,
          {
            paddingTop,
            backgroundColor: BG.interpolate({
              inputRange: [0, 1],
              outputRange: ["rgba(255,255,255,0.75)", "#fff"],
            }),
          },
          modalOpen ? UtilityStyles.shadow : UtilityStyles.lightShadow,
        ]}>
        <Text style={[Styles.text, { textShadowColor: shadow }]}>
          Welcome back, Alex
        </Text>
      </Animated.View>
    );
  },
  () => true,
);
