import request from "@/utils/request.ts";
/**
 * 登录用户
 * /app/login_user
 */
export function postAppLoginUser(input) {
    return request.post(`/app/login_user`, input);
}
