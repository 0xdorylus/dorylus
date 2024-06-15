import { type PromptListItemModel } from "../../interface";
export interface PromptListResponseModel {
    total?: number;
    total_page?: number;
    list?: PromptListItemModel[];
}
