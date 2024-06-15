import request from "@/utils/request.ts";
/**
 * 添加好友请求
 * /social/add_friend_request
 */
export function postSocialAddFriendRequest(input) {
    return request.post(`/social/add_friend_request`, input);
}
