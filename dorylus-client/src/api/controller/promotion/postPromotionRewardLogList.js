import request from "@/utils/request.ts";
/**
 * 推荐奖励列表
 * /promotion/reward_log_list
 */
export function postPromotionRewardLogList(input) {
    return request.post(`/promotion/reward_log_list`, input);
}
