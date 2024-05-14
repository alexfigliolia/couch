import type { ImmutableDict } from "Generics/ImmutableDict";

export interface IPaymentMethods {
  banks: ImmutableDict<number, IBank>;
  active: number;
  showActions: boolean;
  activeTheme: string[];
  confirmDeletion: number;
}

export interface IBank {
  id: number;
  name: string;
  primary: boolean;
}
