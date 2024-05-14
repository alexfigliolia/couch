import { createUseState } from "@figliolia/react-galena";
import { TransactionsModel } from "Models/Transactions";

export const Transactions = new TransactionsModel();
export const useTransactions = createUseState(Transactions);
