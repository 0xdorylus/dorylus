import { type ChatUserRegisterModel } from "../../interface";
/**
 * 退出IM登录
 * /app/logout_user
 */
export declare function postAppLogoutUser(input: ChatUserRegisterModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
