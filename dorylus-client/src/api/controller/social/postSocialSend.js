import request from "@/utils/request.ts";
/**
 * 发送消息
 * /social/send
 */
export function postSocialSend(input) {
    return request.post(`/social/send`, input);
}
