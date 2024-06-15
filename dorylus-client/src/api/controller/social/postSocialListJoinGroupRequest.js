import request from "@/utils/request.ts";
/**
 * 加入群聊
 * /social/list_join_group_request
 */
export function postSocialListJoinGroupRequest() {
    return request.post(`/social/list_join_group_request`);
}
