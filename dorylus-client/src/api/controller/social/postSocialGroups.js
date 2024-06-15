import request from "@/utils/request.ts";
/**
 * 群列表
 * /social/groups
 */
export function postSocialGroups(input) {
    return request.post(`/social/groups`, input);
}
