import { type UserPromotionItemModel } from "../../interface";
export interface UserPromotionPageModel {
    total?: number;
    page?: number;
    total_page?: number;
    list: UserPromotionItemModel[];
}
