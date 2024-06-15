import request from "@/utils/request.ts";
/**
 * List Tool
 * /tool/list
 */
export function postToolList(params) {
    const paramsInput = {
        page: params.page,
    };
    return request.post(`/tool/list`, null, {
        params: paramsInput,
    });
}
