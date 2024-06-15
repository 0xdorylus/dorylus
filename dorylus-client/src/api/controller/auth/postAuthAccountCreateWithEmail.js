import request from "@/utils/request.ts";
/**
 * 使用过email创建账号
 * /auth/account/create_with_email
 */
export function postAuthAccountCreateWithEmail(input) {
    return request.post(`/auth/account/create_with_email`, input);
}
