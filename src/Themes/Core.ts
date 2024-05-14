export class CoreTheme {
  public static readonly BLACK = "rgb(47, 42, 55)";
  public static readonly LIGHT_BLACK = "rgb(70, 63, 81)";
  public static readonly GRAY_TEXT = "rgb(106, 102, 110)";
  public static readonly MID_GRAY_TEXT = "rgb(159, 151, 169)";
  public static readonly LIGHT_GRAY_TEXT = "rgb(185, 178, 194)";
  public static readonly LIGHTER_GRAY_TEXT = "rgb(231, 227, 238)";
  public static readonly BACKGROUND_GRAY = "rgb(245, 245, 245)";
  public static readonly DARKER_BACKGROUND = "rgb(235, 235, 235)";
  public static UI_GRADIENT = ["rgb(117, 163, 255)", "rgb(96, 144, 240)"];
  public static UI_GRADIENT_BRIGHT = [
    "rgb(107, 161, 255)",
    "rgb(55, 145, 255)",
  ];
  public static readonly UI_COLORS = [
    ["rgb(117, 163, 255)", "rgb(96, 144, 240)"],
    ["rgb(117, 124, 255)", "rgb(88, 95, 226)"],
    ["rgb(177, 117, 255)", "rgb(189, 98, 237)"],
    ["rgb(222, 104, 198)", "rgb(223, 102, 199)"],
    ["rgb(232, 105, 122)", "rgb(217, 89, 89)"],
  ];

  public static gradient(index: number) {
    return this.UI_COLORS[index % this.UI_COLORS.length];
  }
}
