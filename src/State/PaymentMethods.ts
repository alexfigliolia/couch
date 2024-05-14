import { connect, createUseState } from "@figliolia/react-galena";
import { PaymentMethodsModel } from "Models/PaymentMethods";

export const PaymentMethods = new PaymentMethodsModel();

export const usePaymentMethods = createUseState(PaymentMethods);
export const connectPaymentMethods = connect(PaymentMethods);
