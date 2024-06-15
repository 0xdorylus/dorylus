import request from "@/utils/request.ts";
/**
 * 用户提现
 * /asset/withdraw
 */
export function postAssetWithdraw(input) {
    return request.post(`/asset/withdraw`, input);
}
