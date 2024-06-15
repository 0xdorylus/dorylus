import { type ContactListItemModel } from "../../interface";
export interface ContactListResponseModel {
    total?: number;
    total_page?: number;
    list?: ContactListItemModel[];
}
