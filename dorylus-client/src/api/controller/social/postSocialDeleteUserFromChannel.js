import request from "@/utils/request.ts";
/**
 * 从频道删除用户
 * /social/delete_user_from_channel
 */
export function postSocialDeleteUserFromChannel(input) {
    return request.post(`/social/delete_user_from_channel`, input);
}
