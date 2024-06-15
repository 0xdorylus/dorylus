import { type UserPropertyValueModel } from "../../interface";
/**
 * 设置头像？
 * /user/set_avatar
 */
export declare function postUserSetAvatar(input: UserPropertyValueModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
