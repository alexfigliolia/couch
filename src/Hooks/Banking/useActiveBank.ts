import { useMemo } from "react";
import { usePaymentMethods } from "State/PaymentMethods";

export const useActiveBank = () => {
  const bank = usePaymentMethods(state => state.active);
  const banks = usePaymentMethods(state => state.banks);
  const activeBank = useMemo(
    () => (bank === -1 ? "*" : banks.get(bank)?.name ?? "*"),
    [bank, banks],
  );
  return activeBank;
};
