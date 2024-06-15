import request from "@/utils/request.ts";
/**
 * 成就勋章列表
 * /achieve/get_acheive_item_list
 */
export function getAchieveGetAcheiveItemList() {
    return request.get(`/achieve/get_acheive_item_list`);
}
