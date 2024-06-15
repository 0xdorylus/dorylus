import request from "@/utils/request.ts";
/**
 * 我订阅的AI列表
 * /user/my_subscribed_girls_list
 */
export function getUserMySubscribedGirlsList() {
    return request.get(`/user/my_subscribed_girls_list`);
}
