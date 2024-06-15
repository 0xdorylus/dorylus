import request from "@/utils/request.ts";
/**
 * 清除群聊历史消息
 * /social/clear_group_history
 */
export function postSocialClearGroupHistory(input) {
    return request.post(`/social/clear_group_history`, input);
}
