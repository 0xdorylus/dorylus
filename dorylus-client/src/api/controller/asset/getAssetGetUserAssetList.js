import request from "@/utils/request.ts";
/**
 * 用户资产列表
 * /asset/get_user_asset_list
 */
export function getAssetGetUserAssetList() {
    return request.get(`/asset/get_user_asset_list`);
}
