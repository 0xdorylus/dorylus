import request from "@/utils/request.ts";
/**
 * Get Wish Withdraw Tokens
 * /asset/get_wish_withdraw_tokens
 */
export function getAssetGetWishWithdrawTokens() {
    return request.get(`/asset/get_wish_withdraw_tokens`);
}
