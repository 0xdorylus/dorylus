import request from "@/utils/request.ts";
/**
 * 提交HASH
 * /asset/submit_hash
 */
export function postAssetSubmitHash(input) {
    return request.post(`/asset/submit_hash`, input);
}
