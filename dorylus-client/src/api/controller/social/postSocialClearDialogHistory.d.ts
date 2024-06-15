import { type IdModel } from "../../interface";
/**
 * 清除对话历史消息
 * /social/clear_dialog_history
 */
export declare function postSocialClearDialogHistory(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
