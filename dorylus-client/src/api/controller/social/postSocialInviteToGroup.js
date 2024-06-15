import request from "@/utils/request.ts";
/**
 * 加入群聊
 * /social/invite_to_group
 */
export function postSocialInviteToGroup(input) {
    return request.post(`/social/invite_to_group`, input);
}
