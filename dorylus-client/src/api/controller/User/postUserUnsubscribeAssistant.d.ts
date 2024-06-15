import { type IdModel } from "../../interface";
/**
 * 取消订阅AI角色
 * /user/unsubscribe_assistant
 */
export declare function postUserUnsubscribeAssistant(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
