import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export class Screen {
  static readonly WIDTH = width;
  static readonly HEIGHT = height;
  static readonly HORIZONAL_CENTER = width / 2;
  static readonly H1 = width / 15;
  static readonly H2 = this.H1 * 0.75;
  static readonly H3 = this.H2 * 0.9;
  static readonly H4 = this.H3 * 0.9;
  static readonly H5 = this.H4 * 0.9;
  static readonly H6 = this.H5 * 0.9;
  static readonly P = this.H5;
  static readonly PADDING = this.P * 0.75;

  public static readonly FLOATING_BUTTON_SIZE = this.WIDTH / 6.5;
  public static readonly FLOATING_BUTTON_BORDER_RADIUS =
    this.FLOATING_BUTTON_SIZE / 2;
  public static readonly FLOATING_BUTTON_HORIZONTAL_POSITION =
    this.HORIZONAL_CENTER - this.FLOATING_BUTTON_BORDER_RADIUS;
  public static readonly EXPLOADER_RANGE =
    Math.max(this.WIDTH, this.HEIGHT) / this.FLOATING_BUTTON_BORDER_RADIUS;
  public static readonly EXPLOADER_TRANSITION_DURATION =
    this.EXPLOADER_RANGE * 30;
  public static NAV_BUTTON_SIZE = this.WIDTH / 7.5;
}
