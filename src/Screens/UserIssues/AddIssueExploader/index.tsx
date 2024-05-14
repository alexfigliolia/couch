import { memo } from "react";
import { Exploader } from "Components/Exploader";
import { useModals } from "State/Modals";
import type { Propless } from "Types/React";

export const AddIssueExploader = memo(
  function AddIssueExploader(_: Propless) {
    const visible = useModals(state => state.addIssue);
    return <Exploader visible={visible} />;
  },
  () => true,
);
