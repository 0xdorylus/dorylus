import request from "@/utils/request.ts";
/**
 * 接受好友请求
 * /social/accept_friend_request
 */
export function postSocialAcceptFriendRequest(input) {
    return request.post(`/social/accept_friend_request`, input);
}
