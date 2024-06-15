import request from "@/utils/request.ts";
/**
 * 获得随机数
 * /auth/get_nonce
 */
export function postAuthGetNonce() {
    return request.post(`/auth/get_nonce`);
}
