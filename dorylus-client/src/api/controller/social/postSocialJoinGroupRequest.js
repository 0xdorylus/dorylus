import request from "@/utils/request.ts";
/**
 * 加入群聊
 * /social/join_group_request
 */
export function postSocialJoinGroupRequest(input) {
    return request.post(`/social/join_group_request`, input);
}
