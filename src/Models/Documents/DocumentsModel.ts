import { subYears } from "date-fns";
import { State } from "@figliolia/galena";
import { Modals } from "State/Modals";
import type { IDocument, IDocuments, IDocumentType } from "./types";

export class DocumentsModel extends State<IDocuments> {
  constructor() {
    super("Documents", {
      queuedType: null,
      queuedTheme: null,
      activeType: "lease",
      activeTheme: ["#fff", "#fff"],
      documents: DocumentsModel.documents,
      documentsByType: DocumentsModel.documentsByType(),
    });
  }

  public enqueueType(type: IDocumentType, theme: string[]) {
    if (!Modals.getState().docViewer) {
      Modals.openDocViewer();
      return this.update(state => {
        state.activeType = type;
        state.activeTheme = theme;
      });
    }
    const { activeType } = this.getState();
    if (activeType === type) {
      return;
    }
    this.update(state => {
      state.queuedType = type;
      state.queuedTheme = theme;
    });
  }

  public activateType() {
    const { queuedType, queuedTheme } = this.getState();
    if (!queuedType || !queuedTheme) {
      return;
    }
    this.update(state => {
      state.activeType = queuedType;
      state.activeTheme = queuedTheme;
      state.queuedType = null;
      state.queuedTheme = null;
    });
  }

  private static readonly documents: IDocument[] = [
    {
      title: "Lease for Unit 202",
      date: new Date().toISOString(),
      description: "Your lease for year beginning 2023",
      signed: false,
      type: "lease",
      id: 1,
    },
    {
      title: "Lease for Unit 202",
      date: subYears(new Date(), 1).toISOString(),
      description: "Your lease for year beginning 2022",
      signed: true,
      type: "lease",
      id: 2,
    },
    {
      title: "Lease for Unit 202 and some other text test height changes",
      date: subYears(new Date(), 2).toISOString(),
      description:
        "Your lease for year beginning 2021 and some other text to test height changes",
      signed: true,
      type: "lease",
      id: 3,
    },
    {
      title: "Lease for Unit 202",
      date: subYears(new Date(), 3).toISOString(),
      description: "Your lease for year beginning 2020",
      signed: true,
      type: "lease",
      id: 4,
    },
    {
      title: "Rules and Regulations",
      date: subYears(new Date(), 1).toISOString(),
      description: "Behavioral guidelines for living at 600 El Camino",
      signed: true,
      type: "rules",
      id: 5,
    },
    {
      title: "Deposit Agreement",
      date: subYears(new Date(), 2).toISOString(),
      description: "Deposit for Unit 202 - 2022",
      signed: true,
      type: "deposit",
      id: 6,
    },
    {
      title: "Home Owner's Insurance 2024",
      date: new Date().toISOString(),
      description: "Your 2024 insurance policy for Unit 202",
      signed: false,
      type: "insurance",
      id: 7,
    },
  ];

  private static documentsByType() {
    const map = {} as Record<IDocumentType, IDocument[]>;
    for (const doc of this.documents) {
      const list = map[doc.type] || [];
      list.push(doc);
      map[doc.type] = list;
    }
    return map;
  }
}
