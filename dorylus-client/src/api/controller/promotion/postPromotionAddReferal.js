import request from "@/utils/request.ts";
/**
 * 添加推荐人
 * /promotion/add_referal
 */
export function postPromotionAddReferal(input) {
    return request.post(`/promotion/add_referal`, input);
}
