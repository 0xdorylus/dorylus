import request from "@/utils/request.ts";
/**
 * 更新群
 * /social/update_group
 */
export function postSocialUpdateGroup(input) {
    return request.post(`/social/update_group`, input);
}
