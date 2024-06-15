import request from "@/utils/request.ts";
/**
 * 提交交易hash
 * /asset/swap_token
 */
export function postAssetSwapToken(input) {
    return request.post(`/asset/swap_token`, input);
}
