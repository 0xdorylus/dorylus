import request from "@/utils/request.ts";
/**
 * 初始化用户资产
 * /asset/init_user_asset
 */
export function getAssetInitUserAsset() {
    return request.get(`/asset/init_user_asset`);
}
