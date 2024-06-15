import request from "@/utils/request.ts";
/**
 * 同意加入群申请
 * /social/accept_join_group_request
 */
export function postSocialAcceptJoinGroupRequest(input) {
    return request.post(`/social/accept_join_group_request`, input);
}
