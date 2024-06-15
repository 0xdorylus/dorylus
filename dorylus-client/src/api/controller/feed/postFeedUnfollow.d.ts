import { type FollowRequestModel } from "../../interface";
/**
 * 跟随某人
 * /feed/unfollow
 */
export declare function postFeedUnfollow(input: FollowRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
