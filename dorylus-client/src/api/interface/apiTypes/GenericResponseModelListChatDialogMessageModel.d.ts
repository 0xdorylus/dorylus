import { type ChatDialogMessageModel } from "../../interface";
export interface GenericResponseModelListChatDialogMessageModel {
    code?: number;
    message?: string;
    result?: ChatDialogMessageModel[];
}
