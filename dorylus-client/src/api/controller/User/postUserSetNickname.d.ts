import { type UserPropertyValueModel } from "../../interface";
/**
 * 设置昵称？
 * /user/set_nickname
 */
export declare function postUserSetNickname(input: UserPropertyValueModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
