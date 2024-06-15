import { type AgentItemModel } from "../../interface";
export interface AgentItemsResponseModel {
    total?: number;
    total_page?: number;
    list?: AgentItemModel[];
}
