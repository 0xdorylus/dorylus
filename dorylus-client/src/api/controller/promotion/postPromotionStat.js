import request from "@/utils/request.ts";
/**
 * 推广统计
 * /promotion/stat
 */
export function postPromotionStat() {
    return request.post(`/promotion/stat`);
}
