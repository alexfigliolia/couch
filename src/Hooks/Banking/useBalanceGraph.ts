import { useRef, useState } from "react";
import { AutoIncrementingID } from "@figliolia/event-emitter";
import type { ChartDatum } from "@figliolia/rn-donut-chart";
import { UserBalance } from "Dimensions/UserBalance";
import { useUnmount } from "Hooks/Generics/useUnmount";
import type { IBalance } from "Models/Balance";
import { Balance } from "State/Balance";
import { Colors } from "Tools/Colors";
import type { Datum } from "Types/Graphs";

class Manager {
  public static color = "#000";
  private static prev: Datum[] = [];
  public static data: ChartDatum[] = [];
  private static IDs = new AutoIncrementingID();
  private static subscription: string | null = null;
  private static subscribers = new Map<string, () => void>();

  public static subscribe(rerender: () => void) {
    const ID = this.IDs.get();
    this.subscribers.set(ID, rerender);
    if (!this.subscription) {
      this.onData(Balance.getState());
      this.subscription = Balance.subscribe(this.onData);
    }
    return ID;
  }

  public static unsubscribe(ID: string) {
    this.subscribers.delete(ID);
    if (!this.subscribers.size && this.subscription) {
      Balance.unsubscribe(this.subscription);
      this.reset();
    }
  }

  public static reset() {
    this.prev = [];
    this.data = [];
    this.IDs.reset();
    this.color = "#000";
    this.subscription = null;
  }

  public static onData = ({ breakdown }: IBalance) => {
    if (this.prev === breakdown) {
      return;
    }
    let max = 0;
    this.data = breakdown.map(({ label, value }, i) => {
      const colors = Colors.getGradient(i);
      if (value > max) {
        max = value;
        this.color = colors[1];
      }
      return {
        label,
        value: Math.max(value, 100),
        stroke: colors,
        style: {
          shadowOpacity: 0.75,
          shadowRadius: UserBalance.SECTION_SHADOW,
          shadowColor: colors[1],
          shadowOffset: { height: UserBalance.SECTION_SHADOW / 2, width: 0 },
        },
      };
    });
    this.render();
  };

  private static render() {
    for (const [_, listener] of this.subscribers) {
      listener();
    }
  }
}

export const useBalanceGraph = (): [data: ChartDatum[], color: string] => {
  const [render, pleaseRender] = useState(false);
  const ID = useRef(Manager.subscribe(() => pleaseRender(!render)));
  useUnmount(() => {
    Manager.unsubscribe(ID.current);
  });
  return [Manager.data, Manager.color];
};
