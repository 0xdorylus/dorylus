import { type ReceiverModel } from "../../interface";
/**
 * 发送消息
 * /inner_send
 */
export declare function postInnerSend(input: ReceiverModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
