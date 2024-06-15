import { type ArticleListItemModel } from "../../interface";
export interface ArticleListResponseModel {
    total?: number;
    total_page?: number;
    list?: ArticleListItemModel[];
}
