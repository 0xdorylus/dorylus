import request from "@/utils/request.ts";
/**
 * 频道信息
 * /social/channel_info
 */
export function postSocialChannelInfo(input) {
    return request.post(`/social/channel_info`, input);
}
