import request from "@/utils/request.ts";
/**
 * user detail
 * /social/user_detail
 */
export function postSocialUserDetail(input) {
    return request.post(`/social/user_detail`, input);
}
