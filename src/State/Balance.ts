import { createUseState } from "@figliolia/react-galena";
import { BalanceModel } from "Models/Balance";

export const Balance = new BalanceModel();
export const useBalance = createUseState(Balance);
