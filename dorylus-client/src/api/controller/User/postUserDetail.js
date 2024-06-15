import request from "@/utils/request.ts";
/**
 * 设置昵称？
 * /user/detail
 */
export function postUserDetail(params) {
    const paramsInput = {
        id: params.id,
    };
    return request.post(`/user/detail`, null, {
        params: paramsInput,
    });
}
