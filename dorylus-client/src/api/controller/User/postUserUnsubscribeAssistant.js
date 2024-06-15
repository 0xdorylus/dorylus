import request from "@/utils/request.ts";
/**
 * 取消订阅AI角色
 * /user/unsubscribe_assistant
 */
export function postUserUnsubscribeAssistant(input) {
    return request.post(`/user/unsubscribe_assistant`, input);
}
