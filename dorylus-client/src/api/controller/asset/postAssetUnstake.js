import request from "@/utils/request.ts";
/**
 * 取消质押
 * /asset/unstake
 */
export function postAssetUnstake(input) {
    return request.post(`/asset/unstake`, input);
}
