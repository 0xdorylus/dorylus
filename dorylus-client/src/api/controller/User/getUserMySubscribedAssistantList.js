import request from "@/utils/request.ts";
/**
 * 我订阅的AI列表
 * /user/my_subscribed_assistant_list
 */
export function getUserMySubscribedAssistantList() {
    return request.get(`/user/my_subscribed_assistant_list`);
}
