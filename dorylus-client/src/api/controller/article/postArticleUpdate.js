import request from "@/utils/request.ts";
/**
 * Update
 * /article/update
 */
export function postArticleUpdate(input) {
    return request.post(`/article/update`, input);
}
