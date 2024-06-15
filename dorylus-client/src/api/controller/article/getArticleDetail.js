import request from "@/utils/request.ts";
/**
 * Detail
 * /article/detail
 */
export function getArticleDetail(params) {
    const paramsInput = {
        id: params.id,
    };
    return request.get(`/article/detail`, {
        params: paramsInput,
    });
}
