import request from "@/utils/request.ts";
/**
 * 使用email登录
 * /auth/login_with_email
 */
export function postAuthLoginWithEmail(input) {
    return request.post(`/auth/login_with_email`, input);
}
