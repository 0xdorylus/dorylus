import { type IdModel } from "../../interface";
/**
 * 清除群聊历史消息
 * /social/clear_group_history
 */
export declare function postSocialClearGroupHistory(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
