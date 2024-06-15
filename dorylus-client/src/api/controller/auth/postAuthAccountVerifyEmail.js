import request from "@/utils/request.ts";
/**
 * 验证emai地址(邀请登录)
 * /auth/account/verify_email
 */
export function postAuthAccountVerifyEmail(input) {
    return request.post(`/auth/account/verify_email`, input);
}
