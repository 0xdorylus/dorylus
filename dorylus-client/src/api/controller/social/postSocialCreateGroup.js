import request from "@/utils/request.ts";
/**
 * 创建群
 * /social/create_group
 */
export function postSocialCreateGroup(input) {
    return request.post(`/social/create_group`, input);
}
