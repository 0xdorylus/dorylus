import { type FollowRequestModel } from "../../interface";
/**
 * 跟随某人
 * /feed/follow
 */
export declare function postFeedFollow(input: FollowRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
