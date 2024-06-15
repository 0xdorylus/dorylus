import { type GeneralRequestModel } from "../../interface";
/**
 * following_list
 * /feed/following_list
 */
export declare function postFeedFollowingList(input: GeneralRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
