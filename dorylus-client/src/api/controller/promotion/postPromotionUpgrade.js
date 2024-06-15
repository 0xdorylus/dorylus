import request from "@/utils/request.ts";
/**
 * 成为推广员
 * /promotion/upgrade
 */
export function postPromotionUpgrade() {
    return request.post(`/promotion/upgrade`);
}
