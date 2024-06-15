import { type DealFriendRequestModel } from "../../interface";
/**
 * 拒绝好友请求
 * /social/deny_friend_request
 */
export declare function postSocialDenyFriendRequest(input: DealFriendRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
