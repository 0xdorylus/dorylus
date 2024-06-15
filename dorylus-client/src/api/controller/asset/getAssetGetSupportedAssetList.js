import request from "@/utils/request.ts";
/**
 * 获取支持的Token
 * /asset/get_supported_asset_list
 */
export function getAssetGetSupportedAssetList() {
    return request.get(`/asset/get_supported_asset_list`);
}
