import request from "@/utils/request.ts";
/**
 * AI角色详情
 * /role/detail
 */
export function getRoleDetail(params) {
    const paramsInput = {
        id: params.id,
    };
    return request.get(`/role/detail`, {
        params: paramsInput,
    });
}
