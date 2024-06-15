import request from "@/utils/request.ts";
/**
 * 清除对话历史消息
 * /social/clear_dialog_history
 */
export function postSocialClearDialogHistory(input) {
    return request.post(`/social/clear_dialog_history`, input);
}
