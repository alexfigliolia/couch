import type { ComponentType } from "react";
import { useMemo } from "react";
import type { IDocumentType } from "Models/Documents";
import { useDocuments } from "State/Documents";
import { DocumentsTheme } from "Themes/Documents";
import type { Stroke } from "Types/SVG";

export const useDocumentType = (
  type: IDocumentType,
): [Icon: ComponentType<Stroke>, unsigned: number, type: string] => {
  const Icon = useMemo(() => DocumentsTheme.icon(type), [type]);
  const display = useMemo(() => DocumentsTheme.displayName(type), [type]);
  const documents = useDocuments(state => state.documentsByType[type]);
  const unsigned = useMemo(
    () => documents.filter(d => !d.signed).length,
    [documents],
  );
  return [Icon, unsigned, display];
};
