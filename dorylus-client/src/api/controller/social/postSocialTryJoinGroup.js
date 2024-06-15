import request from "@/utils/request.ts";
/**
 * 尝试加入群聊
 * /social/try_join_group
 */
export function postSocialTryJoinGroup(input) {
    return request.post(`/social/try_join_group`, input);
}
