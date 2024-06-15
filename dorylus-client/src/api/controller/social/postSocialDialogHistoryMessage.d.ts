import { type HistoryPageRequestModel } from "../../interface";
/**
 * Dialogg历史消息
 * /social/dialog_history_message
 */
export declare function postSocialDialogHistoryMessage(input: HistoryPageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        sender: string;
        receiver: string;
        content: unknown;
        channel_id: string;
        ref_id: string;
        kind: string;
        is_user: boolean;
        create_at: number;
    }[];
}, any>>;
