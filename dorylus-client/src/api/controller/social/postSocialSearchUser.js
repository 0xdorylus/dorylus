import request from "@/utils/request.ts";
/**
 * 搜索用户
 * /social/search_user
 */
export function postSocialSearchUser(input) {
    return request.post(`/social/search_user`, input);
}
