import { type UserInfoModel } from "../../interface";
export interface GenericResponseModelListUserInfoModel {
    code?: number;
    message?: string;
    result?: UserInfoModel[];
}
