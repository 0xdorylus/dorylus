import { type GeneralRequestModel } from "../../interface";
/**
 * follower_list
 * /feed/follower_list
 */
export declare function postFeedFollowerList(input: GeneralRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
