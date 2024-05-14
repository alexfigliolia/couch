import { memo, useCallback, useMemo } from "react";
import { Tabs } from "Components/Tabs";
import {
  USER_PAYMENT_HISTORY,
  USER_PAYMENT_METHODS,
  USER_PAYMENTS,
} from "Routing";
import { useLocation, useNavigate } from "Tools/Router";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const PaymentTabs = memo(
  function PaymentTabs(_: Propless) {
    const navigate = useNavigate();
    const location = useLocation();

    const onPress = useCallback(
      (index: number) => {
        switch (index) {
          case 0:
          default:
            return navigate(USER_PAYMENTS);
          case 1:
            return navigate(USER_PAYMENT_HISTORY);
          case 2:
            return navigate(USER_PAYMENT_METHODS);
        }
      },
      [navigate],
    );

    const tabs = useMemo(
      () => [
        { text: "Balance", onPress },
        { text: "History", onPress },
        { text: "Banks", onPress },
      ],
      [onPress],
    );

    const map = useMemo(() => {
      return {
        "/user-payments": 0,
        "/user-payments/history": 1,
        "/user-payments/banks": 2,
      } as Record<string, number>;
    }, []);

    return <Tabs tabs={tabs} active={map[location] ?? 0} style={Styles.tabs} />;
  },
  () => true,
);
