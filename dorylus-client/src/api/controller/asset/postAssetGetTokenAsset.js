import request from "@/utils/request.ts";
/**
 * 用户资产列表
 * /asset/get_token_asset
 */
export function postAssetGetTokenAsset() {
    return request.post(`/asset/get_token_asset`);
}
