import request from "@/utils/request.ts";
/**
 * 投资列表
 * /asset/get_invest_list
 */
export function postAssetGetInvestList() {
    return request.post(`/asset/get_invest_list`);
}
