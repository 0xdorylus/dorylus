import { type LotteryItemModel } from "../../interface";
export interface LotteryListModel {
    page?: number;
    total_page?: number;
    list?: LotteryItemModel[];
}
