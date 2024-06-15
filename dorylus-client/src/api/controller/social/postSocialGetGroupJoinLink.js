import request from "@/utils/request.ts";
/**
 * 获得群邀请链接
 * /social/get_group_join_link
 */
export function postSocialGetGroupJoinLink(input) {
    return request.post(`/social/get_group_join_link`, input);
}
