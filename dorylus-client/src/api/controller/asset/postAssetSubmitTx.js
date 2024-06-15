import request from "@/utils/request.ts";
/**
 * 提交交易hash
 * /asset/submit_tx
 */
export function postAssetSubmitTx(input) {
    return request.post(`/asset/submit_tx`, input);
}
