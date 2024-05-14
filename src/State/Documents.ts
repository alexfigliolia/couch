import { connect, createUseState } from "@figliolia/react-galena";
import { DocumentsModel } from "Models/Documents";

export const Documents = new DocumentsModel();
export const connectDocuments = connect(Documents);
export const useDocuments = createUseState(Documents);
