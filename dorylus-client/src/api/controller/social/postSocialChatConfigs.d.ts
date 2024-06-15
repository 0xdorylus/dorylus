import { type IdModel } from "../../interface";
/**
 * 配置信息
 * /social/chat_configs
 */
export declare function postSocialChatConfigs(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
