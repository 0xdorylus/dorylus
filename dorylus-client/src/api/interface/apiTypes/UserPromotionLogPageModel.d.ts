import { type UserPromotionLogItemModel } from "../../interface";
export interface UserPromotionLogPageModel {
    total?: number;
    page?: number;
    total_page?: number;
    list: UserPromotionLogItemModel[];
}
