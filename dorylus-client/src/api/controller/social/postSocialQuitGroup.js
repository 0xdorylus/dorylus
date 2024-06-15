import request from "@/utils/request.ts";
/**
 * 退出群聊
 * /social/quit_group
 */
export function postSocialQuitGroup(input) {
    return request.post(`/social/quit_group`, input);
}
