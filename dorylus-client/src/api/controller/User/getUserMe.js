import request from "@/utils/request.ts";
/**
 * 获取个人基本数据
 * /user/me
 */
export function getUserMe() {
    return request.get(`/user/me`);
}
