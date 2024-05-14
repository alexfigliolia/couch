import { memo } from "react";
import { Animated } from "react-native";
import { CloserButton } from "Components/CloserButton";
import { Styles } from "./Styles";

export const CloseButton = memo(function CloseButton({
  color,
  onPress,
  animator,
}: Props) {
  return (
    <Animated.View
      style={[
        Styles.container,
        {
          transform: [
            {
              scale: animator.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        },
      ]}>
      <CloserButton onPress={onPress} stroke={color} style={Styles.inner} />
    </Animated.View>
  );
});

interface Props {
  color: string;
  onPress: () => void;
  animator: Animated.Value;
}
