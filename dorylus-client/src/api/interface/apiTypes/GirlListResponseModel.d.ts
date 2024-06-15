import { type GirlListItemItemModel } from "../../interface";
export interface GirlListResponseModel {
    total?: number;
    total_page?: number;
    list?: GirlListItemItemModel[];
}
