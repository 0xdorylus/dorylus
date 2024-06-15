import { type UserInfoModel } from "../../interface";
export interface ArticleResponseModel {
    id: string;
    title: string;
    content?: string;
    creator?: UserInfoModel;
    create_at?: string;
}
