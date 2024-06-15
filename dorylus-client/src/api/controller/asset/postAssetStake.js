import request from "@/utils/request.ts";
/**
 * 质押积分
 * /asset/stake
 */
export function postAssetStake(input) {
    return request.post(`/asset/stake`, input);
}
