import type { TextStyle } from "react-native";
import { UserBalance } from "Dimensions/UserBalance";

export class Controller {
  public static selectNumberStyles(length: number): TextStyle {
    const nextSize = UserBalance.GRAPH_DIMENSIONS / (length * 0.65);
    const spacing = nextSize * -0.025;
    const shadow = nextSize / 15;
    return {
      fontSize: nextSize,
      marginLeft: spacing,
      marginRight: spacing,
      textShadowRadius: shadow,
      textShadowOffset: {
        height: shadow / 2,
        width: 0,
      },
    };
  }

  public static selectSubTextStyles(length: number): TextStyle {
    const nextSize = UserBalance.GRAPH_DIMENSIONS / (length * 0.8);
    return {
      fontSize: nextSize,
      letterSpacing: nextSize * -0.025,
    };
  }
}
