import { memo } from "react";
import { useModals } from "State/Modals";
import type { Propless } from "Types/React";
import { ResponseModal } from "./ResponseModal";

export const IssueResponses = memo(
  function IssueResponses(_: Propless) {
    const visible = useModals(state => state.issueViewer);
    if (!visible) {
      return null;
    }
    return <ResponseModal />;
  },
  () => true,
);
