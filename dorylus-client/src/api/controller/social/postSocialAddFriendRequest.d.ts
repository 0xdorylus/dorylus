import { type AddFriendRequestModel } from "../../interface";
/**
 * 添加好友请求
 * /social/add_friend_request
 */
export declare function postSocialAddFriendRequest(input: AddFriendRequestModel): Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
