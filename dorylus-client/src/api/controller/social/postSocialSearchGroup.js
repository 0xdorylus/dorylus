import request from "@/utils/request.ts";
/**
 * 搜索群
 * /social/search_group
 */
export function postSocialSearchGroup(input) {
    return request.post(`/social/search_group`, input);
}
