import { type IdModel } from "../../interface";
/**
 * 频道信息
 * /social/channel_info
 */
export declare function postSocialChannelInfo(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
