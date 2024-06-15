import { type ChatUserRegisterModel } from "../../interface";
/**
 * 注册用户
 * /app/register_user
 */
export declare function postAppRegisterUser(input: ChatUserRegisterModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
