export interface IDocuments {
  documents: IDocument[];
  activeTheme: string[];
  activeType: IDocumentType;
  queuedTheme: string[] | null;
  queuedType: IDocumentType | null;
  documentsByType: Record<IDocumentType, IDocument[]>;
}

export interface IDocument {
  id: number;
  title: string;
  date: string;
  description: string;
  signed: boolean;
  type: IDocumentType;
}

export type IDocumentType =
  | "lease"
  | "HOA"
  | "insurance"
  | "deposit"
  | "rules"
  | "other";
