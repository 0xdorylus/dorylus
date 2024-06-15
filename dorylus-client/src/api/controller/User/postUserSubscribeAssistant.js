import request from "@/utils/request.ts";
/**
 * 订阅AI角色
 * /user/subscribe_assistant
 */
export function postUserSubscribeAssistant(input) {
    return request.post(`/user/subscribe_assistant`, input);
}
