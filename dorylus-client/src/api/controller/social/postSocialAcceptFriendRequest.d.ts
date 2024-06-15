import { type DealFriendRequestModel } from "../../interface";
/**
 * 接受好友请求
 * /social/accept_friend_request
 */
export declare function postSocialAcceptFriendRequest(input: DealFriendRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
