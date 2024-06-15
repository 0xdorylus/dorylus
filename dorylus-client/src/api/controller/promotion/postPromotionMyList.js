import request from "@/utils/request.ts";
/**
 * 我的推荐列表
 * /promotion/my_list
 */
export function postPromotionMyList(input) {
    return request.post(`/promotion/my_list`, input);
}
