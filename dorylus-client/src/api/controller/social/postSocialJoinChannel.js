import request from "@/utils/request.ts";
/**
 * 用户进入一个频道
 * /social/join_channel
 */
export function postSocialJoinChannel(input) {
    return request.post(`/social/join_channel`, input);
}
