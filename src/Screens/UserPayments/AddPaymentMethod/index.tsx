import { memo } from "react";
import { FloatingGradientButton } from "Components/FloatingGradientButton";
import { Plus } from "Icons/Plus";
import { useLocation } from "Tools/Router";

export const AddPaymentMethod = memo(
  function AddPaymentMethod() {
    const location = useLocation();
    if (location.endsWith("/banks")) {
      return (
        <FloatingGradientButton onPress={() => {}}>
          <Plus stroke="#fff" />
        </FloatingGradientButton>
      );
    }
    return null;
  },
  () => true,
);
