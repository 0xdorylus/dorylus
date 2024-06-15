import { type UserIds } from "../../interface";
/**
 * 用户信息
 * /social/userinfo
 */
export declare function postSocialUserinfo(input: UserIds): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown[];
}, any>>;
