import { type AuthResponseModel } from "../../interface";
export interface GenericResponseModelAuthResponseModel {
    code?: number;
    message?: string;
    result?: AuthResponseModel;
}
