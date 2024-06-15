import request from "@/utils/request.ts";
/**
 * 别人请求我和我请求别人的列表
 * /social/friend_request_list
 */
export function postSocialFriendRequestList(input) {
    return request.post(`/social/friend_request_list`, input);
}
