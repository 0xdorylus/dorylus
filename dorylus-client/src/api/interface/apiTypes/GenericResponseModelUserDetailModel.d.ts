import { type UserDetailModel } from "../../interface";
export interface GenericResponseModelUserDetailModel {
    code?: number;
    message?: string;
    result?: UserDetailModel;
}
