import request from "@/utils/request.ts";
/**
 * 退出IM登录
 * /app/logout_user
 */
export function postAppLogoutUser(input) {
    return request.post(`/app/logout_user`, input);
}
