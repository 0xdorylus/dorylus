import request from "@/utils/request.ts";
/**
 * 拒绝好友请求
 * /social/deny_friend_request
 */
export function postSocialDenyFriendRequest(input) {
    return request.post(`/social/deny_friend_request`, input);
}
