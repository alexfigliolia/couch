import { Screen } from "./Screen";

export class UserBalance {
  public static readonly GRAPH_DIMENSIONS = Screen.WIDTH * 0.65;
  public static readonly GRAPH_MARGIN_TOP = 30;
  public static readonly GRAPH_MARGIN_BOTTOM = 33;
  public static readonly GRAPH_SPACE =
    this.GRAPH_DIMENSIONS + this.GRAPH_MARGIN_TOP + this.GRAPH_MARGIN_BOTTOM;
  public static readonly NUMBER_SIZE = this.GRAPH_DIMENSIONS / 6.5;
  public static readonly NUMBER_LETTER_SPACING = this.NUMBER_SIZE * -0.025;
  public static readonly NUMBER_TEXT_SHADOW = this.NUMBER_SIZE / 10;
  public static readonly SUBTEXT_SIZE = this.GRAPH_DIMENSIONS / 15;
  public static readonly SUBTEXT_LETTER_SPACING = this.SUBTEXT_SIZE * -0.025;
  public static readonly STROKE_WIDTH = this.GRAPH_DIMENSIONS / 25;
  public static readonly SECTION_SHADOW = this.STROKE_WIDTH / 2;
}
