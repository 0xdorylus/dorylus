import { type ChatUserRegisterModel } from "../../interface";
/**
 * 登录用户
 * /app/login_user
 */
export declare function postAppLoginUser(input: ChatUserRegisterModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
