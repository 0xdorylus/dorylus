import request from "@/utils/request.ts";
/**
 * 拒绝加入群申请
 * /social/deny_join_group_request
 */
export function postSocialDenyJoinGroupRequest(input) {
    return request.post(`/social/deny_join_group_request`, input);
}
