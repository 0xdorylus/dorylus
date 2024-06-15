import { type GroupDetailModel } from "../../interface";
export interface GroupListResponseModel {
    page?: number;
    total_page?: number;
    list?: GroupDetailModel[];
}
