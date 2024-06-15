import request from "@/utils/request.ts";
/**
 * 提交交易hash
 * /asset/submit_asset
 */
export function postAssetSubmitAsset(input) {
    return request.post(`/asset/submit_asset`, input);
}
