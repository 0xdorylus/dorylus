import { type GeneralRequestModel } from "../../interface";
/**
 * new_follower_list
 * /feed/new_follower_list
 */
export declare function postFeedNewFollowerList(input: GeneralRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
