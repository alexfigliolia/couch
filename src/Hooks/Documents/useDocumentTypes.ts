import { useMemo } from "react";
import type { IDocumentType } from "Models/Documents";
import { useDocuments } from "State/Documents";

export const useDocumentTypes = () => {
  const docs = useDocuments(state => state.documentsByType);
  return useMemo(() => Object.keys(docs) as unknown as IDocumentType[], [docs]);
};
