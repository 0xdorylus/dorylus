import request from "@/utils/request.ts";
/**
 * 更新资料，为空忽略
 * /user/set_parent
 */
export function postUserSetParent(input) {
    return request.post(`/user/set_parent`, input);
}
