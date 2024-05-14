import type { ComponentType } from "react";
import type { View } from "react-native";
import {
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import type { IIssue } from "Models/Issues";
import { Issues } from "State/Issues";
import { Modals } from "State/Modals";
import { IssueTheme } from "Themes/Issues";
import type { Stroke } from "Types/SVG";

export class Controller {
  private issue: IIssue;
  private hidden = false;
  public stroke: string;
  public gradientID: string;
  public gradient: string[];
  private pressable?: boolean;
  public view: View | null = null;
  public Icon: ComponentType<Stroke>;
  public opacity = new Animated.Value(0);
  public Wrapper: typeof TouchableOpacity | typeof TouchableWithoutFeedback;
  constructor(issue: IIssue, pressable?: boolean) {
    this.issue = issue;
    this.pressable = pressable;
    const { gradientID, stroke, Icon, gradient } = this.createTheme();
    this.Icon = Icon;
    this.stroke = stroke;
    this.gradient = gradient;
    this.gradientID = gradientID;
    this.Wrapper = this.getWrapper();
  }

  public register(issue: IIssue, pressable?: boolean) {
    if (this.pressable !== pressable) {
      this.pressable = pressable;
      this.Wrapper = this.getWrapper();
    }
    if (this.issue === issue) {
      return;
    }
    this.issue = issue;
    const { gradientID, stroke, Icon, gradient } = this.createTheme();
    this.Icon = Icon;
    this.stroke = stroke;
    this.gradient = gradient;
    this.gradientID = gradientID;
  }

  public cacheNode = (view: View) => {
    this.view = view;
  };

  public onPress = () => {
    if (!this.view || !this.pressable) {
      return;
    }
    this.view.measure((_1, _2, _3, _4, _5, pageY) => {
      Issues.activateIssue(this.issue, pageY);
      Modals.openIssueViewer();
      this.hide();
    });
  };

  public hide() {
    this.hidden = true;
    Animated.timing(this.opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  public show() {
    if (!this.hidden) {
      return;
    }
    this.hidden = false;
    this.opacity.setValue(0);
  }

  private createTheme() {
    const { type, id } = this.issue;
    const gradientID = `issue${id}`;
    return {
      gradientID,
      stroke: `url(#${gradientID})`,
      Icon: IssueTheme.icon(type),
      gradient: IssueTheme.typeGradient(type),
    };
  }

  private getWrapper() {
    return this.pressable ? TouchableOpacity : TouchableWithoutFeedback;
  }
}
