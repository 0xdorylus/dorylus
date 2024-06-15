import { type ChatUserRegisterModel } from "../../interface";
/**
 * 给一个用户发送消息
 * /app/send
 */
export declare function postAppSend(input: ChatUserRegisterModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
