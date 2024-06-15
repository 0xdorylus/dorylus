import request from "@/utils/request.ts";
/**
 * List Article
 * /article/list
 */
export function postArticleList(input) {
    return request.post(`/article/list`, input);
}
