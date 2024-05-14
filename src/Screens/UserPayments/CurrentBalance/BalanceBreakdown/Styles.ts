import { StyleSheet } from "react-native";
import { UserBalance } from "Dimensions/UserBalance";
import { CoreTheme } from "Themes/Core";

export const Styles = StyleSheet.create({
  chart: {
    height: UserBalance.GRAPH_DIMENSIONS,
    width: UserBalance.GRAPH_DIMENSIONS,
    marginBottom: UserBalance.GRAPH_MARGIN_BOTTOM,
  },
  balanceText: {
    fontWeight: "400",
    marginRight: UserBalance.NUMBER_LETTER_SPACING,
    marginLeft: UserBalance.NUMBER_LETTER_SPACING,
    fontSize: UserBalance.NUMBER_SIZE,
    color: CoreTheme.UI_GRADIENT[1],
    textShadowRadius: UserBalance.NUMBER_TEXT_SHADOW,
    textShadowOffset: { height: UserBalance.NUMBER_TEXT_SHADOW / 2, width: 0 },
  },
  balanceSubtext: {
    fontWeight: "600",
    letterSpacing: UserBalance.SUBTEXT_LETTER_SPACING,
    fontSize: UserBalance.SUBTEXT_SIZE,
    color: CoreTheme.GRAY_TEXT,
  },
});
