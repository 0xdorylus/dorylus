import { type AssistantListItemModel } from "../../interface";
export interface AssistantListResponseModel {
    total?: number;
    total_page?: number;
    list?: AssistantListItemModel[];
}
