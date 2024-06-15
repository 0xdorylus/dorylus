import { type ReceiverModel } from "../../interface";
/**
 * 发送推文
 * /send
 */
export declare function postSend(input: ReceiverModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
