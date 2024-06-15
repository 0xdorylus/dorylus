import { type HistoryPageRequestModel } from "../../interface";
/**
 * 历史消息
 * /social/group_history_message
 */
export declare function postSocialGroupHistoryMessage(input: HistoryPageRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: {
        id: string;
        sender: string;
        content: unknown;
        channel_id: string;
        kind: unknown;
        create_at: number;
    }[];
}, any>>;
