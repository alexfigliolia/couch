export class Colors {
  public static readonly baseList = [
    "rgb(248, 83, 127)",
    "rgb(248, 179, 83)",
    "rgb(35, 220, 174)",
    "rgb(85, 217, 221)",
    "rgb(33, 186, 224)",
    "rgb(82, 115, 234)",
    "rgb(168, 82, 234)",
    "rgb(234, 82, 229)",
  ];

  public static readonly raisedList = [
    "rgb(228, 69, 69)",
    "rgb(247, 140, 69)",
    "rgb(84, 215, 150)",
    "rgb(32, 187, 230)",
    "rgb(30, 147, 237)",
    "rgb(105, 32, 230)",
    "rgb(194, 32, 230)",
    "rgb(233, 66, 150)",
  ];

  public static readonly gradientList = this.baseList.map((c, i) => [
    c,
    this.raisedList[i],
  ]);

  public static RGBToRGBA(color: string, alpha: number) {
    if (!color.startsWith("rgb(")) {
      throw new Error(
        `"RGBToRGBA: The color provided is not an rgb (${color})"`,
      );
    }
    const newColor = color.replace("rgb(", "rgba(");
    return newColor.replace(")", `, ${alpha})`);
  }

  public static getGradient(index: number) {
    return this.gradientList[index % this.gradientList.length];
  }
}
