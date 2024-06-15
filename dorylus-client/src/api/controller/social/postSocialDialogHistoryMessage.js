import request from "@/utils/request.ts";
/**
 * Dialogg历史消息
 * /social/dialog_history_message
 */
export function postSocialDialogHistoryMessage(input) {
    return request.post(`/social/dialog_history_message`, input);
}
