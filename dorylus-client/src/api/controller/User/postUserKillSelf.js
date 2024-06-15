import request from "@/utils/request.ts";
/**
 * 删除自己的资料，让账号无效
 * /user/kill_self
 */
export function postUserKillSelf(input) {
    return request.post(`/user/kill_self`, input);
}
