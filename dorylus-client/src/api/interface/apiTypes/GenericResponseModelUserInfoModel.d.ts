import { type UserInfoModel } from "../../interface";
export interface GenericResponseModelUserInfoModel {
    code?: number;
    message?: string;
    result?: UserInfoModel;
}
