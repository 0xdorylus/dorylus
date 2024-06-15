import request from "@/utils/request.ts";
/**
 * 退出登录
 * /auth/logout
 */
export function postAuthLogout() {
    return request.post(`/auth/logout`);
}
