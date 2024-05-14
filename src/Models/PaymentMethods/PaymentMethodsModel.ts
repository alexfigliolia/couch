import { State } from "@figliolia/galena";
import { TaskQueue } from "@figliolia/task-queue";
import { ImmutableDict } from "Generics/ImmutableDict";
import { CoreTheme } from "Themes/Core";
import type { IBank, IPaymentMethods } from "./types";

export class PaymentMethodsModel extends State<IPaymentMethods> {
  public TaskQueue = new TaskQueue();
  constructor() {
    super("Payment Methods", {
      active: -1,
      showActions: false,
      confirmDeletion: -1,
      banks: PaymentMethodsModel.banks,
      activeTheme: CoreTheme.UI_GRADIENT_BRIGHT,
    });
  }

  public selectBank(id: number) {
    if (id === this.getState().active) {
      return this.deactivate();
    }
    this.update(state => {
      state.active = id;
    });
  }

  public setActiveTheme(colors: string[]) {
    this.update(state => {
      state.activeTheme = colors;
    });
  }

  public deleteBank = () => {
    const { active } = this.getState();
    if (active === -1) {
      return;
    }
    this.cancelDeletion();
    this.unfocusPaymentMethod();
    this.update(state => {
      state.banks = state.banks.delete(active);
    });
  };

  public setPrimary = () => {
    if (this.getState().active === -1) {
      return;
    }
    this.update(state => {
      state.banks.iterate((_, bank) => {
        if (bank.id === state.active) {
          bank.primary = true;
        } else {
          bank.primary = false;
        }
      });
      state.banks = state.banks.clone();
    });
  };

  public deactivate() {
    this.hideActions();
    this.TaskQueue.deferTask(() => {
      this.unfocusPaymentMethod();
    }, 300);
  }

  public unfocusPaymentMethod() {
    this.update(state => {
      state.active = -1;
      state.activeTheme = CoreTheme.UI_GRADIENT_BRIGHT;
    });
  }

  public showActions() {
    if (this.getState().active === -1) {
      return;
    }
    this.update(state => {
      state.showActions = true;
    });
  }

  public hideActions() {
    this.update(state => {
      state.showActions = false;
    });
  }

  public confirmDeletion = () => {
    if (this.getState().active === -1) {
      return;
    }
    this.update(state => {
      state.confirmDeletion = state.active;
    });
  };

  public cancelDeletion = () => {
    if (this.getState().active === -1) {
      return;
    }
    this.update(state => {
      state.confirmDeletion = -1;
    });
  };

  private static readonly banks: ImmutableDict<number, IBank> =
    new ImmutableDict({
      1: { name: "TD Bank", primary: true, id: 1 },
      2: { name: "Bank of America", primary: false, id: 2 },
      3: { name: "Chase", primary: false, id: 3 },
      4: { name: "Wells Fargo", primary: false, id: 4 },
      5: { name: "Navy Federal Credit Union", primary: false, id: 5 },
      6: { name: "Citi Bank", primary: false, id: 6 },
    });

  private static get transactions() {
    let id = -1;
    return PaymentMethodsModel.banks.values().flatMap(b =>
      Array.from({ length: 5 }, () => ({
        id: `${++id}`,
        bankId: b.id,
        description: "Rent",
        date: new Date().toISOString(),
        amount: parseFloat((Math.random() * 5000).toPrecision(2)),
      })),
    );
  }
}
