import request from "@/utils/request.ts";
/**
 * 历史消息
 * /social/group_history_message
 */
export function postSocialGroupHistoryMessage(input) {
    return request.post(`/social/group_history_message`, input);
}
