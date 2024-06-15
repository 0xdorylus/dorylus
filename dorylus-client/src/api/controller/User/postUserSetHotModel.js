import request from "@/utils/request.ts";
/**
 * 切换HOT模式
 * /user/set_hot_model
 */
export function postUserSetHotModel(input) {
    return request.post(`/user/set_hot_model`, input);
}
