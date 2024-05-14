import { memo, useMemo } from "react";
import { Animated, View } from "react-native";
import { Screen } from "Dimensions/Screen";
import { UserPayments } from "Dimensions/UserPayments";
import { useController } from "Hooks/Generics/useController";
import { useUpdate } from "Hooks/Generics/useOnUpdate";
import { useUnmount } from "Hooks/Generics/useUnmount";
import { usePaymentMethods } from "State/PaymentMethods";
import { Colors } from "Tools/Colors";
import { Back } from "./Back";
import { Controller } from "./Controller";
import { Front } from "./Front";
import { Styles } from "./Styles";

export const PaymentMethod = memo(
  function PaymentMethod({ id, index, name, total }: Props) {
    const active = usePaymentMethods(state => state.active);
    const confirming = usePaymentMethods(state => state.confirmDeletion === id);
    const isActive = active === id;
    const allInactive = active === -1;
    const controller = useController(
      new Controller({ id, index, isActive, confirming, allInactive }),
    );
    const colors = useMemo(() => Colors.getGradient(index), [index]);
    controller.setScope({ id, index, isActive, confirming, allInactive });
    controller.registerVisuals(total, colors);

    useUpdate(() => {
      controller.transitionY();
    }, [isActive, controller]);

    useUpdate(() => {
      controller.transitionX();
    }, [allInactive, isActive, controller]);

    useUpdate(() => {
      controller.flip();
    }, [controller, confirming]);

    useUnmount(() => {
      controller.clearQueue();
    });

    return (
      <Animated.View
        style={[
          Styles.container,
          {
            zIndex: index + 1,
            transform: [
              {
                translateY: controller.translateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [UserPayments.TRANSLATE_DISTANCE * index, 0],
                }),
              },
              {
                translateX: controller.translateX.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -Screen.WIDTH],
                }),
              },
            ],
          },
        ]}>
        <View style={Styles.inner}>
          <Front
            name={name}
            colors={colors}
            confirming={confirming}
            controller={controller}
          />
          <Back
            name={name}
            colors={colors}
            confirming={confirming}
            controller={controller}
            deletePayment={controller.animateDeletion}
          />
        </View>
      </Animated.View>
    );
  },
  (pp, np) => pp.index === np.index,
);

interface Props {
  id: number;
  name: string;
  total: number;
  index: number;
}
