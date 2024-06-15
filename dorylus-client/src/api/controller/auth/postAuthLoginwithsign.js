import request from "@/utils/request.ts";
/**
 * 签名登录
 * /auth/loginwithsign
 */
export function postAuthLoginwithsign(input) {
    return request.post(`/auth/loginwithsign`, input);
}
