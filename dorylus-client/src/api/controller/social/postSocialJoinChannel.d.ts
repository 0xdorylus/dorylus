import { type IdModel } from "../../interface";
/**
 * 用户进入一个频道
 * /social/join_channel
 */
export declare function postSocialJoinChannel(input: IdModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
