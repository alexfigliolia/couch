import type { IDocument, IDocumentType } from "Models/Documents";
import { useDocuments } from "State/Documents";
import { DocumentsTheme } from "Themes/Documents";

export const useActiveDocuments = (): [
  type: IDocumentType,
  type: null | string,
  docs: IDocument[],
  theme: string[],
  total: number,
] => {
  const type = useDocuments(state => state.activeType);
  const theme = useDocuments(state => state.activeTheme);
  const documents = useDocuments(state => state.documentsByType);
  return [
    type,
    DocumentsTheme.displayName(type),
    documents[type],
    theme,
    documents[type].length,
  ];
};
