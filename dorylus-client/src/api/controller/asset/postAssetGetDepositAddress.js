import request from "@/utils/request.ts";
/**
 * 用户充值地址
 * /asset/get_deposit_address
 */
export function postAssetGetDepositAddress() {
    return request.post(`/asset/get_deposit_address`);
}
