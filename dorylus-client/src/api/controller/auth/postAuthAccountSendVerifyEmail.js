import request from "@/utils/request.ts";
/**
 * 发送email验证地址
 * /auth/account/send_verify_email
 */
export function postAuthAccountSendVerifyEmail() {
    return request.post(`/auth/account/send_verify_email`);
}
