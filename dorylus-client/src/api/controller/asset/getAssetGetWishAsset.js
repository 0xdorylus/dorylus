import request from "@/utils/request.ts";
/**
 * Get Wish Asset
 * /asset/get_wish_asset
 */
export function getAssetGetWishAsset() {
    return request.get(`/asset/get_wish_asset`);
}
