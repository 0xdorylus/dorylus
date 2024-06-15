import request from "@/utils/request.ts";
/**
 * 配置信息
 * /social/chat_configs
 */
export function postSocialChatConfigs(input) {
    return request.post(`/social/chat_configs`, input);
}
