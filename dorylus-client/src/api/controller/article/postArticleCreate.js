import request from "@/utils/request.ts";
/**
 * Create
 * /article/create
 */
export function postArticleCreate(input) {
    return request.post(`/article/create`, input);
}
