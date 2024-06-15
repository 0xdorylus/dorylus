import { type ChatGroupMessageModel } from "../../interface";
export interface GenericResponseModelListChatGroupMessageModel {
    code?: number;
    message?: string;
    result?: ChatGroupMessageModel[];
}
