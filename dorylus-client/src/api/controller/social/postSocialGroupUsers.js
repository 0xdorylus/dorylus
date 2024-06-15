import request from "@/utils/request.ts";
/**
 * 群用户
 * /social/group_users
 */
export function postSocialGroupUsers(input) {
    return request.post(`/social/group_users`, input);
}
