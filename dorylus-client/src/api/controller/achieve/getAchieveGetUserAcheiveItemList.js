import request from "@/utils/request.ts";
/**
 * 用户的成就勋章列表
 * /achieve/get_user_acheive_item_list
 */
export function getAchieveGetUserAcheiveItemList() {
    return request.get(`/achieve/get_user_acheive_item_list`);
}
