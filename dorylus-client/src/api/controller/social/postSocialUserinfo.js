import request from "@/utils/request.ts";
/**
 * 用户信息
 * /social/userinfo
 */
export function postSocialUserinfo(input) {
    return request.post(`/social/userinfo`, input);
}
