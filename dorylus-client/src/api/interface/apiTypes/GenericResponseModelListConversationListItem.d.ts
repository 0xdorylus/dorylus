import { type ConversationListItem } from "../../interface";
export interface GenericResponseModelListConversationListItem {
    code?: number;
    message?: string;
    result?: ConversationListItem[];
}
