import type { ComponentType } from "react";

export interface Stroke {
  stroke?: string;
}

export interface IconVariant {
  fill: ComponentType<Stroke>;
  stroke: ComponentType<Stroke>;
}
