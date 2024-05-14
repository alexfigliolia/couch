import type { ComponentType } from "react";
import type { Stroke } from "Types/SVG";

export interface IRoute {
  name: string;
  route: string;
  theme: string[];
  icon: ComponentType<Stroke>;
  activeIcon: ComponentType<Stroke>;
}
