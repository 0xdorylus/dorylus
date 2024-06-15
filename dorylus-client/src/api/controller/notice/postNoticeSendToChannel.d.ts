import { type NoticeChannelModel } from "../../interface";
/**
 * Send To Channel
 * /notice/send_to_channel
 */
export declare function postNoticeSendToChannel(input: NoticeChannelModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: boolean;
}, any>>;
