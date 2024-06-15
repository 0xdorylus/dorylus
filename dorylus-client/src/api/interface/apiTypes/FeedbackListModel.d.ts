import { type FeedbackItemModel } from "../../interface";
export interface FeedbackListModel {
    total?: number;
    total_page?: number;
    list?: FeedbackItemModel[];
}
