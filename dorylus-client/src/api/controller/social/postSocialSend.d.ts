import { type MessageModel } from "../../interface";
/**
 * 发送消息
 * /social/send
 */
export declare function postSocialSend(input: MessageModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
